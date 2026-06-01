const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 10);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  });
}

const addRevealClasses = (selector, variant = "reveal-up", stagger = false) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add("reveal", variant);

    if (stagger) {
      element.classList.add(`delay-${(index % 5) + 1}`);
    }
  });
};

const initIdentitySection = () => {
  const section = document.querySelector("[data-identity-section]");

  if (!section) {
    return;
  }

  const portraits = section.querySelector("[data-identity-portraits]");
  const cards = [...section.querySelectorAll("[data-identity-segment]")];

  if (!portraits || !cards.length) {
    return;
  }

  let pinnedSegment = null;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const setActiveSegment = (segment = null) => {
    cards.forEach((card) => {
      const isActive = card.dataset.identitySegment === segment;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
    portraits.classList.toggle("identity-portrait-group-active", Boolean(segment));
  };

  cards.forEach((card) => {
    const segment = card.dataset.identitySegment;

    card.addEventListener("mouseenter", () => {
      if (canHover) {
        setActiveSegment(segment);
      }
    });
    card.addEventListener("focus", () => setActiveSegment(segment));
    card.addEventListener("click", () => {
      if (canHover) {
        setActiveSegment(segment);
        return;
      }

      pinnedSegment = pinnedSegment === segment ? null : segment;
      setActiveSegment(pinnedSegment);
    });
  });

  portraits.addEventListener("mouseleave", () => {
    if (canHover) {
      setActiveSegment();
    }
  });
  portraits.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!portraits.contains(document.activeElement)) {
        setActiveSegment(canHover ? null : pinnedSegment);
      }
    }, 0);
  });
};

const initProjectFilters = () => {
  const buttons = [...document.querySelectorAll("[data-project-filter]")];
  const projects = [...document.querySelectorAll("[data-project-category]")];

  if (!buttons.length || !projects.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter;

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      projects.forEach((project) => {
        project.hidden = filter !== "all" && project.dataset.projectCategory !== filter;
      });
    });
  });
};

const initProjectDetails = () => {
  const dialog = document.querySelector("[data-project-dialog]");
  const openButtons = [...document.querySelectorAll("[data-project-open]")];

  if (!(dialog instanceof HTMLDialogElement) || !openButtons.length) {
    return;
  }

  const projects = {
    "digital-pr-campaign": {
      category: "Latest Project · Digital Marketing & Public Relations",
      title: "Digital PR Campaign",
      description: "A strategic online visibility campaign built around media relations, influencer coordination, reputation support, and audience engagement.",
      services: "Digital PR · Digital & Social Media Marketing",
      outcome: "Built to strengthen public visibility, trust, and sustained audience reach.",
    },
    "online-media-relations": {
      category: "Digital PR",
      title: "Online Media Relations",
      description: "Coordinated media outreach, public visibility, and influencer-aligned communication.",
      services: "Digital PR · Multimedia & Branding",
      outcome: "Designed to establish credible coverage and clearer public positioning.",
    },
    "social-media-management": {
      category: "Social Media",
      title: "Social Media Management",
      description: "Content planning, community engagement, and campaign-ready platform execution.",
      services: "Digital & Social Media Marketing",
      outcome: "Designed to maintain an active, aligned, and measurable social presence.",
    },
    "corporate-video-production": {
      category: "Video Production",
      title: "Corporate Video Production",
      description: "Professional business, marketing, and institutional video content.",
      services: "Video & Live Streaming · Multimedia & Branding",
      outcome: "Designed to turn business messages into polished, reusable visual assets.",
    },
    "live-streaming-services": {
      category: "Live Streaming",
      title: "Live Streaming Services",
      description: "Multi-platform event coverage, broadcast support, and live audience delivery.",
      services: "Video & Live Streaming",
      outcome: "Designed to carry live moments to wider audiences with reliable production support.",
    },
    "event-videography": {
      category: "Video Production",
      title: "Event Videography",
      description: "Coverage for conferences, public events, weddings, concerts, and launches.",
      services: "Video & Live Streaming · Multimedia & Branding",
      outcome: "Designed to capture important moments and extend their value beyond the event.",
    },
    "video-post-production": {
      category: "Post-Production",
      title: "Video Post-Production",
      description: "Editing, color grading, motion graphics, and final campaign-ready delivery.",
      services: "Multimedia & Branding · Video & Live Streaming",
      outcome: "Designed to turn raw footage into finished content ready for publishing.",
    },
    "online-reputation-management": {
      category: "Digital PR",
      title: "Online Reputation Management",
      description: "Brand monitoring, visibility support, and digital reputation strategy.",
      services: "Digital PR",
      outcome: "Designed to support narrative clarity, trust, and more informed public response.",
    },
    "drone-videography": {
      category: "Video Production",
      title: "Drone Videography",
      description: "Aerial video and photography for campaigns, events, and branded content.",
      services: "Video & Live Streaming · Multimedia & Branding",
      outcome: "Designed to add scale, context, and cinematic perspective to visual campaigns.",
    },
    "video-marketing-seo": {
      category: "Video Marketing",
      title: "Video Marketing & SEO",
      description: "Optimized video content, platform publishing, and analytics-informed improvement.",
      services: "Digital & Social Media Marketing · Video & Live Streaming",
      outcome: "Designed to improve discoverability and extend the useful life of video content.",
    },
  };

  const image = dialog.querySelector("[data-project-dialog-image]");
  const category = dialog.querySelector("[data-project-dialog-category]");
  const title = dialog.querySelector("[data-project-dialog-title]");
  const description = dialog.querySelector("[data-project-dialog-description]");
  const services = dialog.querySelector("[data-project-dialog-services]");
  const outcome = dialog.querySelector("[data-project-dialog-outcome]");
  const closeButton = dialog.querySelector("[data-project-close]");

  const closeDialog = () => {
    dialog.close();
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects[button.dataset.projectOpen];
      const sourceImage = button.closest("article")?.querySelector("img");

      if (!project || !sourceImage) {
        return;
      }

      image.src = sourceImage.src;
      image.alt = sourceImage.alt;
      category.textContent = project.category;
      title.textContent = project.title;
      description.textContent = project.description;
      services.textContent = project.services;
      outcome.textContent = project.outcome;
      dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
};

const initTeamCards = () => {
  const cards = [...document.querySelectorAll("[data-team-card]")];

  if (!cards.length) {
    return;
  }

  const grid = cards[0].closest(".team-grid");

  const toggleCard = (card) => {
    const willActivate = !card.classList.contains("is-active");

    cards.forEach((item) => {
      const isActive = item === card && willActivate;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    grid?.classList.toggle("has-active-card", willActivate);
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => toggleCard(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard(card);
      }
    });
  });
};

const initScrollReveal = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  addRevealClasses(".hero-copy, .page-hero-grid > *, .about-intro-copy, .contact-hero-inner");
  addRevealClasses(".hero-media, .impact-proof-image, .campaign-feature-media, .project-media", "reveal-scale");
  addRevealClasses(".trust-grid > *, .about-stats-grid > *, .contact-strip-grid > *", "reveal-up", true);
  addRevealClasses(".clients-section .section-header, .home-services-heading, .home-services-positioning, .impact-media-column, .featured-campaigns-header, .section-header, .contact-form-heading");
  addRevealClasses(".client-brief-label, .client-brief-headline, .client-brief-summary, .client-brief-closing", "reveal-up", true);
  addRevealClasses(".home-services-list > article, .impact-benefits-list > article, .selected-campaign, .service-detail-card, .package-card, .project-case, .project-portfolio-card, .masonry-card, .team-card, .chronicle-item, .client-brief-item, .about-value-item, .about-capabilities-list > article, .about-clients-grid > article", "reveal-up", true);
  addRevealClasses(".home-services-pr, .campaign-feature, .identity-intro, .identity-portraits, .brand-foundation-heading, .brand-foundation-copy, .about-editorial-header, .about-capabilities-heading, .about-copy, .office-card, .direct-lines, .contact-form, .cta-panel");
  addRevealClasses(".home-services-divider, .client-brief-divider", "reveal-line");
  addRevealClasses(".contact-form > fieldset, .contact-field-grid, .message-field, .contact-submit-row", "reveal-up", true);
  addRevealClasses(".footer-top > *, .footer-middle > *, .footer-bottom", "reveal-up", true);

  const revealElements = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    document.documentElement.classList.add("reveal-ready");
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
  });
};

initIdentitySection();
initProjectFilters();
initProjectDetails();
initTeamCards();
initScrollReveal();
