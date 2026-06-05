import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="page-hero section-black">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for is not available.</p>
        <div className="button-row">
          <Link className="button button-primary" to="/">Return Home</Link>
          <Link className="button button-secondary" to="/contact">Start a Campaign</Link>
        </div>
      </div>
    </section>
  )
}
