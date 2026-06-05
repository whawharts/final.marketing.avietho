import { Link } from 'react-router'
import { company, footerCompanyLinks, footerServiceLinks } from '../../data/company'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>{company.name}</h2>
            <p>{company.tagline}</p>
            <form className="footer-form" action="mailto:hello@aviethodigital.com?subject=Avietho%20Marketing%20List" method="post" encType="text/plain" aria-label="Avietho marketing list">
              <label htmlFor="footer-email">The Avietho Marketing List</label>
              <div>
                <input id="footer-email" type="email" placeholder="Email address" />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <nav className="footer-column" aria-label="Footer services">
            <h3>Services</h3>
            {footerServiceLinks.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
          </nav>
          <nav className="footer-column" aria-label="Footer company">
            <h3>Company</h3>
            {footerCompanyLinks.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
          </nav>
          <nav className="footer-column" aria-label="Footer legal">
            <h3>Legal</h3>
            <span>Privacy</span>
            <span>Terms</span>
          </nav>
        </div>
        <div className="footer-middle">
          <div>
            <h3>The Office</h3>
            <p>{company.office}</p>
          </div>
          <div>
            <h3>Direct Lines</h3>
            <p><a href="tel:+631234567890">{company.phone}</a><br /><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
          <div className="footer-partner">
            <h3>Partner With ADMS</h3>
            <p>Explore agency-level production and marketing strategy.</p>
            <a href={`mailto:${company.email}`}>Marketing.AviethoDigital.com</a>
            <div className="footer-icons" aria-label="Contact channels">
              <span>â—Ž</span><span>â–£</span><span>âœ‰</span><span>âŒ•</span>
            </div>
          </div>
        </div>
        <p className="footer-bottom">{company.copyright}</p>
      </div>
    </footer>
  )
}
