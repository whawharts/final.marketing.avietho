import { ContactForm } from '../components/sections/ContactForm'

export function ContactPage() {
  return (
    <>
      <section className="contact-hero section-black">
              <div className="container contact-hero-inner">
                <p className="eyebrow">Get in touch / Partnership / Inquiry</p>
                <h1>Advertise, collaborate, or <em>partner with us.</em></h1>
                <p>Tell us what you&rsquo;re building &mdash; campaigns, websites, content, social media, video production, live broadcasts, or full digital growth support.</p>
              </div>
            </section>
      
            <section className="contact-strip section-black" aria-label="Contact details">
              <div className="container contact-strip-grid">
                <div>
                  <span>Landline</span>
                  <strong><a href="tel:+63270001366">+63 2 7000 1366</a></strong>
                </div>
                <div>
                  <span>Cellphone</span>
                  <strong><a href="tel:+6397831987">+63 9783 1987</a></strong>
                </div>
                <div>
                  <span>General Inquiries</span>
                  <strong><a href="mailto:aviethodigital@gmail.com">aviethodigital@gmail.com</a></strong>
                </div>
                <div>
                  <span>Marketing & Partnerships</span>
                  <strong><a href="mailto:marketing.avietho@gmail.com">marketing.avietho@gmail.com</a></strong>
                </div>
              </div>
            </section>
      
            <section className="section section-black contact-office-section">
              <div className="container contact-office-grid">
                <article className="office-card">
                  <h2>Our Office</h2>
                  <p>Madrigal Business Park, Ayala Alabang, Muntinlupa City, Philippines 1780 Metro Manila</p>
                  <div className="office-visual" role="img" aria-label="Abstract location grid for Madrigal Business Park">
                    <span className="office-coordinate">14.4213 N &middot; 121.0394 E</span>
                    <span className="office-location">Madrigal Business Park</span>
                  </div>
                </article>
                <article className="direct-lines">
                  <h2>Direct Lines</h2>
                  <dl>
                    <div>
                      <dt>Cellphone</dt>
                      <dd><a href="tel:+6397831987">+63 9783 1987</a></dd>
                    </div>
                    <div>
                      <dt>General Email</dt>
                      <dd><a href="mailto:aviethodigital@gmail.com">aviethodigital@gmail.com</a></dd>
                    </div>
                    <div>
                      <dt>Marketing & Partnerships</dt>
                      <dd><a href="mailto:marketing.avietho@gmail.com">marketing.avietho@gmail.com</a></dd>
                    </div>
                    <div>
                      <dt>Facebook</dt>
                      <dd><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">@avietho.digital</a></dd>
                    </div>
                  </dl>
                </article>
              </div>
            </section>
      
            <section className="section section-black contact-form-section">
              <div className="container">
                <div className="contact-form-heading">
                  <p className="eyebrow">Campaign Brief</p>
                  <h2>Tell us what you&rsquo;re building.</h2>
                  <p>Select the services you need and share the essentials. The ADMS team will review your brief and reach out with a focused next step.</p>
                </div>
                <ContactForm />
              </div>
            </section>
      
            <section className="section final-cta section-black">
              <div className="container cta-panel contact-cta-panel">
                <p className="eyebrow">Powered by ADMS</p>
                <h2>Need digital marketing?</h2>
                <p>Let Avietho Digital Management Services help your brand's journey with smart precision and creative strategy.</p>
                <div className="button-row">
                  <a className="button button-primary" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Follow ADMS Page</a>
                  <a className="button button-secondary" href="mailto:aviethodigital@gmail.com?subject=Digital%20Marketing%20Brief">Send a Brief</a>
                </div>
                <a className="contact-cta-link" href="mailto:marketing.avietho@gmail.com">Marketing.AviethoDigital.com</a>
              </div>
            </section>
    </>
  )
}
