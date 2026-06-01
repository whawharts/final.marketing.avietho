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

const initScrollReveal = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  addRevealClasses(".hero-copy, .page-hero-grid > *, .about-intro-copy, .contact-hero-inner");
  addRevealClasses(".hero-media, .impact-proof-image, .campaign-feature-media, .project-media", "reveal-scale");
  addRevealClasses(".trust-grid > *, .about-stats-grid > *, .contact-strip-grid > *", "reveal-up", true);
  addRevealClasses(".clients-section .section-header, .home-services-heading, .home-services-positioning, .impact-media-column, .featured-campaigns-header, .section-header, .contact-form-heading");
  addRevealClasses(".client-brief-label, .client-brief-headline, .client-brief-summary, .client-brief-closing", "reveal-up", true);
  addRevealClasses(".home-services-list > article, .impact-benefits-list > article, .selected-campaign, .service-detail-card, .package-card, .project-case, .project-portfolio-card, .masonry-card, .team-card, .process-list > li, .chronicle-item, .client-brief-item", "reveal-up", true);
  addRevealClasses(".home-services-pr, .campaign-feature, .identity-intro, .identity-portraits, .brand-foundation-heading, .brand-foundation-copy, .about-copy, .office-card, .direct-lines, .contact-form, .cta-panel");
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
initScrollReveal();
