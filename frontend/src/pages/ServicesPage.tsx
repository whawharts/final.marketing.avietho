import { ServiceAccordion, ServiceCard } from '../components/cards/ServiceCard'
import {
  digitalPrRows,
  liveStreamingRows,
  postProductionRows,
  productionPanels,
  socialMediaPanels,
  specializedPanels,
} from '../data/services'
import { useServiceCategoryNav } from '../hooks/useServiceCategoryNav'

export function ServicesPage() {
  useServiceCategoryNav()

  return (
    <>
      <section className="page-hero section-black services-hero">
              <div className="container">
                <p className="eyebrow">ADMS &middot; Services</p>
                <h1>Marketing services built for visibility, trust, and public influence.</h1>
                <p>Comprehensive digital marketing solutions tailored to elevate your brand presence and drive results.</p>
              </div>
            </section>
      
            <nav className="services-category-nav" aria-label="Service categories">
              <div className="container">
                <a className="is-active" href="#digital-pr">01. Digital PR</a>
                <a href="#social-media">02. Social Media</a>
                <a href="#video-production">03. Video Production</a>
                <a href="#post-production">04. Post-Production</a>
                <a href="#live-streaming">05. Live Streaming</a>
                <a href="#specialized">06. Specialized</a>
              </div>
            </nav>
      
            <section className="section service-catalog-section section-charcoal" id="digital-pr">
              <div className="container service-split">
                <div className="service-catalog-copy">
                  <p className="service-catalog-label">01 / Digital PR</p>
                  <h2>Online Media Relations</h2>
                  <p className="service-catalog-intro">Positioning your brand at the center of critical conversations through elite media networks.</p>
                  <ServiceAccordion rows={digitalPrRows} />
          </div>
          <figure className="service-catalog-media"><img src="/assets/proof-sample-1.png" alt="Online media relations campaign visual" /></figure>
              </div>
            </section>
      
            <section className="section service-catalog-section service-social-section section-black" id="social-media">
              <div className="container service-split service-split-reverse">
                <figure className="service-catalog-media service-social-project">
                  <img src="/assets/avietho-facebook-proof.png" alt="Social media management campaign visual" />
                  <figcaption>
                    <span>Social Media</span>
                    <h3>Social Media Management</h3>
                    <p>Content planning, community engagement, and campaign-ready platform execution.</p>
                    <a className="text-link" href="/projects">View Project <i aria-hidden="true">&rarr;</i></a>
                  </figcaption>
                </figure>
                <div className="service-catalog-copy">
                  <p className="service-catalog-label">02 / Social Media</p>
                  <h2>Strategy &amp; Growth</h2>
                  <p className="service-catalog-intro">Transforming social platforms into powerful engines of engagement and brand loyalty.</p>
                  <div className="service-panel-grid service-social-grid">
              {socialMediaPanels.map((item) => <ServiceCard key={item.number} item={item} />)}
            </div>
          </div>
        </div>
      </section>
      
            <section className="section service-catalog-section service-production-section section-charcoal" id="video-production">
              <div className="container">
                <header className="service-catalog-header">
                  <p className="service-catalog-label">03 / Production</p>
                  <h2>Cinematic Storytelling</h2>
                  <p>High-end video production that captures the essence of your brand with unmatched visual fidelity.</p>
                </header>
                <div className="service-production-feature">
                  <figure className="service-catalog-media service-production-media"><img src="/assets/sample 1.png" alt="Video production studio visual" /></figure>
                  <div className="service-production-proof">
                    <p className="service-catalog-label">Featured Project</p>
                    <h3>Corporate Video Production</h3>
                    <p>A campaign-ready production example showing how Avietho captures branded stories, live coverage, and polished visual content for institutions, businesses, and public-facing campaigns.</p>
                    <a className="text-link" href="/projects">View Project <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
                <div className="service-panel-grid service-panel-grid-four">
            {productionPanels.map((item) => <ServiceCard key={item.number} item={item} />)}
          </div>
        </div>
      </section>
      
            <section className="section service-catalog-section section-black" id="post-production">
              <div className="container service-split">
                <div className="service-catalog-copy">
                  <p className="service-catalog-label">04 / Post-Production</p>
                  <h2>Refining the Vision</h2>
                  <p className="service-catalog-intro">Where raw footage becomes a finished story through meticulous editing and technical excellence.</p>
                  <ServiceAccordion rows={postProductionRows} />
          </div>
          <figure className="service-catalog-media"><img src="/assets/proof-sample-3.png" alt="Post-production editing interface visual" /></figure>
              </div>
            </section>
      
            <section className="section service-catalog-section section-charcoal" id="live-streaming">
              <div className="container service-split service-split-reverse">
                <figure className="service-catalog-media"><img src="/assets/proof-sample-2.png" alt="Live streaming production visual" /></figure>
                <div className="service-catalog-copy">
                  <p className="service-catalog-label">05 / Live Streaming</p>
                  <h2>Real-Time Interaction</h2>
                  <p className="service-catalog-intro">Flawless, multi-cam broadcast solutions for a digital-first audience.</p>
                  <ServiceAccordion rows={liveStreamingRows} />
          </div>
        </div>
      </section>

      <section className="section service-catalog-section section-black" id="specialized">
              <div className="container">
                <header className="service-catalog-header">
                  <p className="service-catalog-label">06 / Specialized</p>
                  <h2>Niche Technical Solutions</h2>
                  <p>Focused technical and creative services for aerial footage, accessible content, video visibility, and information-led storytelling.</p>
                </header>
                <div className="service-specialized-grid">
            {specializedPanels.map((item) => <ServiceCard key={item.number} item={item} />)}
          </div>
        </div>
      </section>
      
            <section className="section final-cta section-black">
              <div className="container cta-panel">
                <p className="eyebrow">Start a Campaign</p>
                <h2>Ready to turn attention into action?</h2>
                <p>Start with the campaign goal. ADMS will help shape the strategy, content, production, and digital path around it.</p>
                <div className="button-row">
                  <a className="button button-primary" href="/contact">Start a Campaign</a>
                  <a className="button button-secondary" href="/projects">View Projects</a>
                </div>
              </div>
            </section>
    </>
  )
}


