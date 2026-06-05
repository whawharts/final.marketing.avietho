import { useIdentityCards, useTeamCards } from '../hooks/useAboutInteractions'

export function AboutPage() {
  useIdentityCards()
  useTeamCards()

  return (
    <>
      <section className="about-intro section-black">
              <div className="container about-intro-copy">
                <p className="eyebrow">Established 2025</p>
                <h1>Empowering brands through <em>strategic</em> digital marketing.</h1>
                <p>
                  Born from the intersection of cinematic artistry and analytical rigor, Avietho is a boutique production and strategy house dedicated to the art of the campaign. We don't just broadcast; we resonate.
                </p>
              </div>
            </section>
      
            <section className="about-stats section-black" aria-label="Avietho proof points">
              <div className="container about-stats-grid">
                <div className="reveal-card">
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="reveal-card">
                  <strong>100+</strong>
                  <span>Projects Completed</span>
                </div>
                <div className="reveal-card">
                  <strong>50+</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
            </section>
      
            <section className="section section-black about-chronicle">
              <div className="container">
                <h2>A Chronicle of Growth</h2>
                <div className="chronicle-timeline">
                  <article className="chronicle-item chronicle-left reveal-card">
                    <div className="chronicle-year">2018</div>
                    <div className="chronicle-dot" aria-hidden="true"></div>
                    <div className="chronicle-copy">
                      <h3>The Seed</h3>
                      <p>Founded as a small creative studio in a garage, focusing on high-quality visual storytelling for local startups.</p>
                    </div>
                  </article>
                  <article className="chronicle-item chronicle-right reveal-card">
                    <div className="chronicle-year">2020</div>
                    <div className="chronicle-dot" aria-hidden="true"></div>
                    <div className="chronicle-copy">
                      <h3>The Pivot</h3>
                      <p>Transitioned into full-scale digital strategy during the global shift to online-first commerce.</p>
                    </div>
                  </article>
                  <article className="chronicle-item chronicle-left reveal-card">
                    <div className="chronicle-year">2023</div>
                    <div className="chronicle-dot" aria-hidden="true"></div>
                    <div className="chronicle-copy">
                      <h3>Expansion</h3>
                      <p>Opened our flagship production studio and expanded the team to include lead data analysts.</p>
                    </div>
                  </article>
                  <article className="chronicle-item chronicle-right chronicle-current reveal-card">
                    <div className="chronicle-year">2025</div>
                    <div className="chronicle-dot" aria-hidden="true"></div>
                    <div className="chronicle-copy">
                      <h3>Avietho Digital</h3>
                      <p>Rebranding as the premiere choice for cinematic-driven strategic digital campaigns.</p>
                    </div>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="section section-charcoal identity-section">
              <div className="container identity-editorial" data-identity-section>
                <div className="identity-main">
                  <header className="identity-intro">
                    <h2>The Name Avietho</h2>
                    <p>
                      The name holds a special significance, derived from the first two letters of the names of its four founders &mdash; AV &middot; IE &middot; TH &middot; O &mdash; siblings of Milarosa and George.
                    </p>
                  </header>
      
                  <div className="identity-portraits" data-identity-portraits>
                    <button className="identity-portrait identity-portrait-av" type="button" data-identity-segment="av" aria-pressed="false">
                      <img className="identity-portrait-image" src="/assets/about/a-sample.png" alt="" />
                      <span className="identity-segment-label">AV</span>
                      <span className="identity-card-detail">
                        <small>The First Mark of the Name</small>
                        <strong>AV</strong>
                        <em>The opening part of Avietho, representing the first founder segment that begins the shared family identity behind the brand.</em>
                      </span>
                    </button>
                    <button className="identity-portrait identity-portrait-ie" type="button" data-identity-segment="ie" aria-pressed="false">
                      <img className="identity-portrait-image" src="/assets/about/b-sample.png" alt="" />
                      <span className="identity-segment-label">IE</span>
                      <span className="identity-card-detail">
                        <small>The Second Mark of the Name</small>
                        <strong>IE</strong>
                        <em>The second founder segment, continuing the name&rsquo;s connection to the siblings whose initials formed Avietho.</em>
                      </span>
                    </button>
                    <button className="identity-portrait identity-portrait-th" type="button" data-identity-segment="th" aria-pressed="false">
                      <img className="identity-portrait-image" src="/assets/about/c-sample.png" alt="" />
                      <span className="identity-segment-label">TH</span>
                      <span className="identity-card-detail">
                        <small>The Third Mark of the Name</small>
                        <strong>TH</strong>
                        <em>The third founder segment, adding another part of the family origin that shaped the identity of Avietho.</em>
                      </span>
                    </button>
                    <button className="identity-portrait identity-portrait-o" type="button" data-identity-segment="o" aria-pressed="false">
                      <img className="identity-portrait-image" src="/assets/about/d-sample.png" alt="" />
                      <span className="identity-segment-label">O</span>
                      <span className="identity-card-detail">
                        <small>The Closing Mark of the Name</small>
                        <strong>O</strong>
                        <em>The final founder segment, completing AV &middot; IE &middot; TH &middot; O and forming the name Avietho.</em>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section section-charcoal brand-foundation-section">
              <div className="container brand-foundation-grid">
                <div className="brand-foundation-heading">
                  <p className="eyebrow">Brand Foundation</p>
                  <h2>Attention, understanding, trust, proof, inquiry.</h2>
                </div>
                <div className="brand-foundation-copy">
                  <p>
                    We do not believe in fragmented tactics. A successful digital presence is a cohesive ecosystem where every touchpoint serves a specific, measurable purpose. We guide your audience through a deliberate sequence of psychological shifts.
                  </p>
                  <p>
                    One understood, we build trust through consistent value delivery and authoritative design. This trust is cemented by proof &mdash; case studies, data, and social validation seamlessly integrated into the narrative.
                  </p>
                  <p>
                    It begins with capturing attention through striking, cinematic visuals that cut through the noise. This buys us the moment needed to foster understanding through clear, strategic messaging.
                  </p>
                  <p>
                    Only then do we prompt inquiry. By the time a user reaches a conversion point, they are not just a lead; they are an educated, trusting prospect primed for engagement.
                  </p>
                </div>
              </div>
            </section>
      
            <section className="section section-black about-values-section">
              <div className="container">
                <div className="section-header about-editorial-header">
                  <p className="eyebrow">Core Principles</p>
                  <h2>Our Values</h2>
                  <p>The principles behind every campaign, partnership, and digital execution.</p>
                </div>
                <div className="about-values-grid">
                  <article className="about-value-item reveal-card" tabIndex={0}>
                    <span>01</span>
                    <h3>Strategic Excellence</h3>
                    <p>We craft data-driven strategies that deliver measurable results for our clients.</p>
                    <small>Analytics &middot; ROI Focus &middot; Performance</small>
                  </article>
                  <article className="about-value-item reveal-card" tabIndex={0}>
                    <span>02</span>
                    <h3>Innovation</h3>
                    <p>Constantly evolving with the latest digital trends and technologies.</p>
                    <small>Latest Tech &middot; Creative Solutions &middot; Future-Ready</small>
                  </article>
                  <article className="about-value-item reveal-card" tabIndex={0}>
                    <span>03</span>
                    <h3>Partnership</h3>
                    <p>Building long-term relationships based on trust and mutual success.</p>
                    <small>Trust &middot; Collaboration &middot; Support</small>
                  </article>
                  <article className="about-value-item reveal-card" tabIndex={0}>
                    <span>04</span>
                    <h3>Local Expertise</h3>
                    <p>Deep understanding of the Philippine market and cultural nuances.</p>
                    <small>Local Market &middot; Cultural Insight &middot; Philippine Focus</small>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="section section-charcoal about-capabilities-section">
              <div className="container about-capabilities-grid">
                <div className="about-capabilities-heading">
                  <p className="eyebrow">Capabilities</p>
                  <h2>What We Do</h2>
                  <p>Avietho brings strategy, media, production, and digital execution into one campaign-ready system.</p>
                </div>
                <div className="about-capabilities-list">
                  <article className="reveal-card" tabIndex={0}>
                    <span>01</span>
                    <div><h3>Digital PR</h3><p>Strategic reputation management, online crisis communication, and narrative shaping to build public trust and stakeholder confidence.</p></div>
                  </article>
                  <article className="reveal-card" tabIndex={0}>
                    <span>02</span>
                    <div><h3>Digital &amp; Social Media Marketing</h3><p>Data-driven campaigns designed to engage audiences, grow communities, and amplify your message across major platforms.</p></div>
                  </article>
                  <article className="reveal-card" tabIndex={0}>
                    <span>03</span>
                    <div><h3>Website Development</h3><p>Secure, user-friendly digital hubs that serve as the foundation of your online identity and operational presence.</p></div>
                  </article>
                  <article className="reveal-card" tabIndex={0}>
                    <span>04</span>
                    <div><h3>Multimedia &amp; Branding</h3><p>Brand identity, graphics, and visual assets crafted to make campaigns stand out across digital channels.</p></div>
                  </article>
                  <article className="reveal-card" tabIndex={0}>
                    <span>05</span>
                    <div><h3>Video &amp; Live Streaming</h3><p>Professional video production and real-time broadcasting built to connect with audiences directly and powerfully.</p></div>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="section section-black about-clients-section">
              <div className="container">
                <div className="section-header about-editorial-header">
                  <p className="eyebrow">Who We Serve</p>
                  <h2>Our Clients</h2>
                  <p>ADMS works with public figures, government agencies, and businesses that need stronger visibility, clearer communication, and campaign-ready digital presence.</p>
                </div>
                <div className="about-clients-grid">
                  <article className="reveal-card" tabIndex={0}><span>01</span><h3>Political Figures</h3><p>Strategic digital campaigns for political leaders and candidates.</p></article>
                  <article className="reveal-card" tabIndex={0}><span>02</span><h3>Government Agencies</h3><p>Digital transformation and public communication services.</p></article>
                  <article className="reveal-card" tabIndex={0}><span>03</span><h3>Businesses</h3><p>Comprehensive digital marketing solutions for all business sizes.</p></article>
                </div>
              </div>
            </section>
      
            <section className="section section-charcoal about-team-section">
              <div className="container">
                <div className="section-header">
                  <p className="eyebrow">Team</p>
                  <h2>People behind the strategy, content, and execution.</h2>
                  <p>Compact team roles keep the focus on how Avietho helps clients move from idea to visible campaign.</p>
                </div>
                <div className="team-grid">
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/a-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 01</h3><span>Strategy Lead</span><p>Guides brand positioning, campaign direction, and growth planning.</p></div>
                  </article>
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/b-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 02</h3><span>Content Producer</span><p>Leads video, social assets, production planning, and visual storytelling.</p></div>
                  </article>
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/c-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 03</h3><span>Digital Builder</span><p>Shapes website structure, conversion flow, and digital experience design.</p></div>
                  </article>
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/d-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 04</h3><span>Media Relations Lead</span><p>Coordinates press visibility, public communication, and reputation support.</p></div>
                  </article>
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/a-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 05</h3><span>Social Media Lead</span><p>Manages content rollout, audience engagement, and platform consistency.</p></div>
                  </article>
                  <article className="team-card reveal-card" tabIndex={0} role="button" aria-pressed="false" data-team-card>
                    <div className="team-portrait"><img src="/assets/about/b-sample.png" alt="" /></div>
                    <div className="team-card-copy"><h3>Team Member 06</h3><span>Campaign Operations</span><p>Supports asset coordination, publishing flow, launch tracking, and execution.</p></div>
                  </article>
                </div>
              </div>
            </section>
      
            <section className="section final-cta section-black">
              <div className="container cta-panel">
                <p className="eyebrow">Work With Avietho</p>
                <h2>Bring the right attention to your brand.</h2>
                <p>Start with the campaign goal, then shape the strategy, content, proof, and digital path around it.</p>
                <div className="button-row">
                  <a className="button button-primary" href="/contact">Send Inquiry</a>
                  <a className="button button-secondary" href="/services">Explore Services</a>
                </div>
              </div>
            </section>
    </>
  )
}

