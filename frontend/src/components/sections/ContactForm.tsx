const serviceOptions = [
  ['digital-pr', 'Digital PR'],
  ['social', 'Social Media Marketing'],
  ['content', 'Content Production'],
  ['performance', 'Performance Media'],
  ['strategy', 'Strategy Consulting'],
  ['video', 'Video Production'],
  ['broadcast', 'Live Broadcasts'],
]

const timelineOptions = [
  ['asap', 'ASAP'],
  ['month', 'This Month'],
  ['quarter', '1-3 Months'],
  ['planning', 'Still Planning'],
]

export function ContactForm() {
  return (
    <form className="contact-form" action="mailto:aviethodigital@gmail.com?subject=Campaign%20Inquiry" method="post" encType="text/plain" aria-label="Campaign inquiry form">
      <fieldset className="contact-pill-group">
        <legend>01 &mdash; Services</legend>
        {serviceOptions.map(([value, label]) => (
          <label key={value}><input type="checkbox" name="service" value={value} /> {label}</label>
        ))}
      </fieldset>
      <p className="contact-form-group-label">02 &mdash; Contact Details</p>
      <div className="contact-field-grid">
        <label><span>Your Name</span><input type="text" name="name" placeholder="Your Name" /></label>
        <label><span>Email Address</span><input type="email" name="email" placeholder="Email Address" /></label>
        <label><span>Company Name</span><input type="text" name="company" placeholder="Company Name" /></label>
        <label><span>Phone Number</span><input type="tel" name="phone" placeholder="Phone Number" /></label>
      </div>
      <fieldset className="contact-timeline">
        <legend>03 &mdash; Timeline</legend>
        {timelineOptions.map(([value, label]) => (
          <label key={value}><input type="radio" name="timeline" value={value} /> {label}</label>
        ))}
      </fieldset>
      <p className="contact-form-group-label">04 &mdash; Message</p>
      <label className="message-field">
        <span>Your Message</span>
        <textarea name="message" rows={6} placeholder="Your Message"></textarea>
      </label>
      <div className="contact-submit-row">
        <button className="button button-primary" type="submit">Send Inquiry</button>
      </div>
    </form>
  )
}
