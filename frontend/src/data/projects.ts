export type ProjectCategory = 'all' | 'digital-pr' | 'social-media' | 'video-production' | 'live-streaming' | 'branding' | 'web-development' | 'post-production' | 'video-marketing'

export type Project = {
  id: string
  category: ProjectCategory
  categoryLabel: string
  title: string
  description: string
  image: string
  imageAlt: string
  services: string
  outcome: string
}

export const projectFilters: Array<{ label: string; value: ProjectCategory }> = [
  { label: 'All', value: 'all' },
  { label: 'Digital PR', value: 'digital-pr' },
  { label: 'Social Media', value: 'social-media' },
  { label: 'Video Production', value: 'video-production' },
  { label: 'Live Streaming', value: 'live-streaming' },
  { label: 'Branding', value: 'branding' },
  { label: 'Web Development', value: 'web-development' },
]

export const featuredProject: Project = {
  id: 'digital-pr-campaign',
  category: 'digital-pr',
  categoryLabel: 'Latest Project · Digital Marketing & Public Relations',
  title: 'Digital PR Campaign',
  description: 'A strategic online visibility campaign built around media relations, influencer coordination, reputation support, and audience engagement.',
  image: '/assets/avietho-facebook-proof.png',
  imageAlt: 'Avietho Digital Marketing digital PR campaign visual',
  services: 'Digital PR · Digital & Social Media Marketing',
  outcome: 'Built to strengthen public visibility, trust, and sustained audience reach.',
}

export const projects: Project[] = [
  { id: 'online-media-relations', category: 'digital-pr', categoryLabel: 'Digital PR', title: 'Online Media Relations', description: 'Coordinated media outreach, public visibility, and influencer-aligned communication.', image: '/assets/proof-sample-1.png', imageAlt: 'Online media relations campaign visual', services: 'Digital PR · Multimedia & Branding', outcome: 'Designed to establish credible coverage and clearer public positioning.' },
  { id: 'social-media-management', category: 'social-media', categoryLabel: 'Social Media', title: 'Social Media Management', description: 'Content planning, community engagement, and campaign-ready platform execution.', image: '/assets/avietho-facebook-proof.png', imageAlt: 'Social media management campaign visual', services: 'Digital & Social Media Marketing', outcome: 'Designed to maintain an active, aligned, and measurable social presence.' },
  { id: 'corporate-video-production', category: 'video-production', categoryLabel: 'Video Production', title: 'Corporate Video Production', description: 'Professional business, marketing, and institutional video content.', image: '/assets/sample 1.png', imageAlt: 'Corporate video production visual', services: 'Video & Live Streaming · Multimedia & Branding', outcome: 'Designed to turn business messages into polished, reusable visual assets.' },
  { id: 'live-streaming-services', category: 'live-streaming', categoryLabel: 'Live Streaming', title: 'Live Streaming Services', description: 'Multi-platform event coverage, broadcast support, and live audience delivery.', image: '/assets/proof-sample-2.png', imageAlt: 'Live streaming services visual', services: 'Video & Live Streaming', outcome: 'Designed to carry live moments to wider audiences with reliable production support.' },
  { id: 'event-videography', category: 'video-production', categoryLabel: 'Video Production', title: 'Event Videography', description: 'Coverage for conferences, public events, weddings, concerts, and launches.', image: '/assets/sample 2.png', imageAlt: 'Event videography visual', services: 'Video & Live Streaming · Multimedia & Branding', outcome: 'Designed to capture important moments and extend their value beyond the event.' },
  { id: 'video-post-production', category: 'post-production', categoryLabel: 'Post-Production', title: 'Video Post-Production', description: 'Editing, color grading, motion graphics, and final campaign-ready delivery.', image: '/assets/proof-sample-3.png', imageAlt: 'Video post-production visual', services: 'Multimedia & Branding · Video & Live Streaming', outcome: 'Designed to turn raw footage into finished content ready for publishing.' },
  { id: 'online-reputation-management', category: 'digital-pr', categoryLabel: 'Digital PR', title: 'Online Reputation Management', description: 'Brand monitoring, visibility support, and digital reputation strategy.', image: '/assets/proof-sample-4.png', imageAlt: 'Online reputation management visual', services: 'Digital PR', outcome: 'Designed to support narrative clarity, trust, and more informed public response.' },
  { id: 'drone-videography', category: 'video-production', categoryLabel: 'Video Production', title: 'Drone Videography', description: 'Aerial video and photography for campaigns, events, and branded content.', image: '/assets/sample 3.png', imageAlt: 'Drone videography visual', services: 'Video & Live Streaming · Multimedia & Branding', outcome: 'Designed to add scale, context, and cinematic perspective to visual campaigns.' },
  { id: 'video-marketing-seo', category: 'video-marketing', categoryLabel: 'Video Marketing', title: 'Video Marketing & SEO', description: 'Optimized video content, platform publishing, and analytics-informed improvement.', image: '/assets/avietho-concept-screen.png', imageAlt: 'Video marketing and SEO visual', services: 'Digital & Social Media Marketing · Video & Live Streaming', outcome: 'Designed to improve discoverability and extend the useful life of video content.' },
]
