export type ServiceRow = {
  id: string
  number: string
  label: string
  title: string
  body: string
}

export type ServicePanel = {
  number: string
  title: string
  subtitle: string
  body: string
}

export const digitalPrRows: ServiceRow[] = [
  { id: 'online-media-relations', number: '01', label: 'Online Media Relations', title: 'Online Media Relations and Link Building', body: 'This service focuses on securing mentions and coverage in online publications, news sites, and industry blogs. It also helps acquire high-quality backlinks that support search engine optimization.' },
  { id: 'influencer-marketing', number: '02', label: 'Influencer Marketing', title: 'Influencer Marketing and Outreach', body: 'We help brands and personalities connect with relevant online influencers to reach target audiences through trusted sources.' },
  { id: 'reputation-management', number: '03', label: 'Reputation Management', title: 'Online Reputation Management', body: "We focus on monitoring, managing, and improving a brand's public perception across digital platforms." },
  { id: 'content-creation-pr', number: '04', label: 'Content Creation & PR', title: 'Digital Content Creation and Distribution', body: 'Creating content specifically designed to be shared online, attract media attention, and engage target audiences.' },
  { id: 'social-media-pr', number: '05', label: 'Social Media PR', title: 'Social Media PR and Community Management', body: 'PR support for using social platforms to strengthen brand reputation, communication, and community response.' },
]

export const postProductionRows: ServiceRow[] = [
  { id: 'video-editing', number: '01', label: 'Video Editing', title: 'Video Editing', body: 'Assembling and organizing footage, cutting, and sequencing to create a polished final product.' },
  { id: 'color-grading', number: '02', label: 'Color Grading', title: 'Color Grading', body: 'Adjusting the color and tone of the video to create a specific mood or aesthetic.' },
  { id: 'sound-design', number: '03', label: 'Sound Design', title: 'Sound Design and Mixing', body: 'Enhancing audio quality, adding sound effects, and mixing music and dialogue for professional results.' },
  { id: 'motion-graphics', number: '04', label: 'Motion Graphics', title: 'Motion Graphics and Animation', body: 'Creating animated graphics, explainer videos, animated logos, and typography for dynamic visual communication.' },
]

export const liveStreamingRows: ServiceRow[] = [
  { id: 'social-media-streaming', number: '01', label: 'Social Media Streaming', title: 'Social Media and General Purpose Live Streaming', body: 'Live broadcasting services across major social media platforms to reach and engage your audience in real time.' },
  { id: 'gaming-streaming', number: '02', label: 'Gaming Streaming', title: 'Gaming and Interactive Streaming', body: 'Specialized streaming services for gaming content and interactive experiences with professional quality and audience engagement.' },
  { id: 'business-streaming', number: '03', label: 'Business Streaming', title: 'Professional and Business Streaming', body: 'Webinars, virtual meetings, and corporate events streamed with high production value and technical reliability.' },
  { id: 'enterprise-events', number: '04', label: 'Enterprise Events', title: 'Enterprise and High-Scale Event Streaming', body: 'Large-scale streaming solutions for major corporate events, conferences, and product launches with global reach.' },
]

export const socialMediaPanels: ServicePanel[] = [
  { number: '01', title: 'Strategy & Planning', subtitle: 'Social Media Strategy and Planning', body: 'Before any content is published, strategic services define the overall approach and goals for social media presence.' },
  { number: '02', title: 'Content Creation', subtitle: 'Content Creation and Curation', body: 'Development and sourcing of visual and written content published across social media channels.' },
  { number: '03', title: 'Community Management', subtitle: 'Community Management and Engagement', body: "Focused on interacting with the audience and managing the brand's online reputation in real time." },
  { number: '04', title: 'Analytics & Reporting', subtitle: 'Analytics and Reporting', body: 'Insights into social media performance that guide future strategy.' },
]

export const productionPanels: ServicePanel[] = [
  { number: '01', title: 'Corporate Video', subtitle: 'Corporate Video Production', body: 'Professional video production services for corporate messaging, branding, training, and promotional content.' },
  { number: '02', title: 'Event Videography', subtitle: 'Event Videography', body: 'Capturing live events such as conferences, weddings, concerts, and public speeches, including highlight reels and same-day edits.' },
  { number: '03', title: 'Commercials', subtitle: 'Commercials and Advertising', body: 'Production of television commercials, digital video ads, and social media campaigns.' },
  { number: '04', title: 'Documentary', subtitle: 'Documentary Production', body: 'Creating compelling documentary content that tells important stories with depth and authenticity.' },
]

export const specializedPanels: ServicePanel[] = [
  { number: '01', title: 'Drone Videography', subtitle: 'Drone Videography', body: 'Capturing stunning aerial footage for unique perspectives and breathtaking views using state-of-the-art drone technology.' },
  { number: '02', title: 'Accessibility Services', subtitle: 'Accessibility Services', body: 'Providing closed captioning, subtitles, and audio descriptions for videos to meet accessibility standards.' },
  { number: '03', title: 'Video Marketing & SEO', subtitle: 'Video Marketing and SEO', body: 'Optimizing videos for search engines, analyzing video performance, and managing video advertising campaigns.' },
  { number: '04', title: 'Strategic Infographics', subtitle: 'Infographics and Infonarrative Videos', body: 'Creating visual information pieces and infonarrative videos that explain complex ideas clearly and make content easier to understand, share, and remember.' },
]
