import type { ProjectDetailData } from '../types'

export const projectDetails: Record<string, ProjectDetailData> = {
  'portfolio-website': {
    client: 'Personal Project',
    role: 'Designer & Developer',
    duration: '2 weeks',
    overview:
      'A personal portfolio website designed to showcase frontend development and UI/UX design work. The site features a soft, feminine aesthetic with pink gradients, glassmorphism, and smooth Framer Motion animations across all sections. Every component was hand-crafted to demonstrate attention to detail and design sensibility.',
    problem:
      'As a frontend developer, I needed a personal website that not only displayed my technical skills but also communicated my design aesthetic. Most developer portfolios felt either too technical without personality or too design-focused without substance.',
    solution:
      'I built a React-based portfolio that balances technical sophistication with a warm, inviting visual identity. The design uses a cohesive pink-rose palette, custom animations, and responsive layouts to create a premium yet approachable experience.',
    designProcess: [
      'Defined brand identity with a soft pink-rose palette, Playfair Display for headings, and Inter for body text to create an elegant, readable hierarchy.',
      'Created wireframes in Figma mapping out the home page section flow and dedicated route pages for About, Services, and Projects.',
      'Designed glassmorphism UI components with consistent border radius, shadow depth, and hover states for a cohesive premium feel.',
      'Prototyped key animations including scroll reveal, stagger children, and hover transitions to ensure smooth interactions.',
    ],
    developmentProcess: [
      'Initialized the project with Vite 8 and React 19, configured TypeScript strict mode, and set up Tailwind CSS v4 with custom theme values.',
      'Built shadcn-style UI primitives (Button, Card, Badge) using class-variance-authority for consistent, reusable component variants.',
      'Implemented dynamic routing with React Router 7, creating dedicated pages for About, Services, and Projects with smooth transitions.',
      'Added Framer Motion animations throughout, including scroll-triggered reveals, staggered list animations, and the active navbar pill indicator.',
    ],
    features: [
      'Sticky glassmorphism navbar with animated active pill indicator and mobile right-drawer menu with spring animation.',
      'Four-column footer with brand identity, quick links, services overview, and newsletter subscription with back-to-top button.',
      'Scroll-reveal animations on all sections with staggered children for a polished, sequential entry effect.',
      'Interactive project cards with gradient thumbnails, hover overlays, category filtering, search, and pagination.',
      'Animated counter statistics, rotating role text in hero, and floating blur orbs for visual depth.',
    ],
    images: [
      'from-pink-200 via-rose-100 to-pink-100',
      'from-rose-100 via-pink-50 to-white',
      'from-pink-100 via-rose-50 to-purple-100',
    ],
    challenges: [
      'Balancing the React Compiler with custom Framer Motion variants required careful testing to ensure animations were not optimized away.',
      'Achieving consistent glassmorphism effects across browsers while maintaining performance with the backdrop-filter CSS property.',
    ],
    results: [
      'A fully responsive, production-ready portfolio that loads in under 1.5 seconds and scores 95+ on Lighthouse performance.',
      'Clean separation of concerns with reusable UI primitives, typed data files, and modular section components.',
    ],
  },

  'webnest-dashboard': {
    client: 'WebNest Inc.',
    role: 'Frontend Developer',
    duration: '4 weeks',
    overview:
      'WebNest Dashboard is a warm, intuitive admin interface designed for content managers who need a calm, organized workspace. The interface uses gentle colors, clear information hierarchy, and reduces cognitive load through thoughtful information architecture.',
    problem:
      'The existing admin panel felt cluttered and overwhelming. Content managers reported difficulty finding key features, and the aggressive color scheme caused eye strain during extended use.',
    solution:
      'I redesigned the dashboard with a soft, approachable color palette and reorganized the navigation around user workflows rather than system architecture. Every screen was simplified to show only what matters most.',
    designProcess: [
      'Conducted user interviews with content managers to identify pain points and most-used features.',
      'Created user journey maps to reorganize navigation around content workflows instead of system modules.',
      'Designed wireframes with focus on reducing visual noise while maintaining access to all functionality.',
    ],
    developmentProcess: [
      'Built the dashboard shell with React and TypeScript, implementing role-based access control for different user types.',
      'Created a shared component library for data tables, forms, and notification panels to ensure visual consistency.',
      'Implemented real-time data updates using WebSocket connections for the live content feed.',
    ],
    features: [
      'Collapsible sidebar navigation organized by content workflow categories.',
      'Drag-and-drop content editor with live preview and version history.',
      'Data-rich analytics dashboard with interactive charts and exportable reports.',
      'Dark mode toggle with a warm, reduced-contrast dark palette for nighttime use.',
    ],
    images: [
      'from-rose-200 via-pink-100 to-purple-100',
      'from-purple-100 via-pink-50 to-rose-100',
      'from-pink-200 via-purple-100 to-rose-50',
    ],
    challenges: [
      'Reducing the initial JavaScript bundle size by 40% through code splitting and lazy loading of route components.',
      'Balancing feature richness with performance on lower-end devices used by some remote team members.',
    ],
    results: [
      '65% reduction in user-reported frustration with navigation, measured by support tickets.',
      'Average task completion time decreased by 30% across content management workflows.',
    ],
  },

  'bloom-saas': {
    client: 'Bloom Wellness',
    role: 'Full-Stack Developer',
    duration: '8 weeks',
    overview:
      'Bloom is a subscription-based wellness platform offering guided meditation, mood tracking, and personalized self-care routines. The platform is designed to feel like a gentle companion rather than a clinical tool.',
    problem:
      'The wellness market is saturated with cold, clinical apps that focus on data over experience. Bloom needed to differentiate with an interface that felt warm, encouraging, and human.',
    solution:
      'I designed and built Bloom with a soft, organic visual language. Rounded corners, warm gradients, and playful micro-interactions create a digital space that feels safe and nurturing.',
    designProcess: [
      'Researched color psychology in wellness apps and selected a warm pink-coral palette that evokes comfort and positivity.',
      'Designed the onboarding flow to be gradual and encouraging, with optional steps to reduce friction.',
      'Created custom illustration components for meditation states and mood check-ins.',
    ],
    developmentProcess: [
      'Architected the Next.js application with API routes handling subscriptions, user profiles, and content delivery.',
      'Integrated Stripe for recurring payments with a custom pricing page and promotional coupon system.',
      'Built a recommendation engine that suggests self-care routines based on user mood patterns.',
    ],
    features: [
      'Guided meditation player with ambient sound layers, adjustable duration, and session history.',
      'Mood tracking with customizable tags and visual trend analysis over time.',
      'Personalized self-care routine builder that adapts based on user feedback.',
      'Community challenges with shared goals, progress tracking, and encouragement notifications.',
    ],
    images: [
      'from-pink-100 via-rose-50 to-orange-100',
      'from-orange-100 via-pink-50 to-rose-100',
      'from-rose-100 via-orange-50 to-pink-100',
    ],
    challenges: [
      'Building a recommendation engine that felt genuinely helpful without being overwhelming or prescriptive.',
      'Designing the meditation timer and audio player for consistent performance across mobile networks.',
    ],
    results: [
      'Launched with 500+ beta users in the first month, with a 4.7-star average rating in early reviews.',
      '92% of users reported improved consistency in their self-care routine after using Bloom for 2 weeks.',
    ],
  },

  'petal-business': {
    client: 'Petal Florist Studio',
    role: 'Designer & Developer',
    duration: '3 weeks',
    overview:
      'A premium brand website for a high-end florist studio. The site captures the studio aesthetic through soft imagery, elegant typography, and a warm color story that mirrors their arrangements.',
    problem:
      'Petal had an outdated website that did not reflect the premium quality of their arrangements. Potential clients could not get a sense of the studio visual language before visiting in person.',
    solution:
      'I created a brand-centric website that leads with rich visuals and uses generous white space to let the floral photography breathe. The layout is spacious, deliberate, and thoroughly feminine.',
    designProcess: [
      'Visited the studio to photograph arrangements and understand their design philosophy and color preferences.',
      'Designed a visual hierarchy that prioritizes their portfolio photography above all other content.',
      'Chose Playfair Display pairing with a light script font for accent headings to match their brand stationery.',
    ],
    developmentProcess: [
      'Built with React and Tailwind CSS, optimizing image loading with lazy loading and responsive srcset.',
      'Created a dynamic gallery page with filterable categories and a lightbox modal for full-screen viewing.',
      'Implemented a contact form with custom fields for event inquiries to pre-qualify leads.',
    ],
    features: [
      'Full-screen hero with auto-rotating background imagery and soft overlay gradients.',
      'Filterable portfolio gallery with category tags (Weddings, Events, Daily Arrangements).',
      'Lightbox viewer with swipe support for mobile and keyboard navigation on desktop.',
      'Inquiry form with bouquet customization options and seasonal availability indicators.',
    ],
    images: [
      'from-rose-100 via-pink-50 to-green-100',
      'from-green-100 via-pink-50 to-rose-100',
      'from-pink-100 via-green-50 to-rose-100',
    ],
    challenges: [
      'Balancing high-resolution floral photography with page load performance required a multi-tier image optimization strategy.',
      'Capturing the tactile, in-person experience of the studio through a digital medium was the core design challenge.',
    ],
    results: [
      'Online inquiry submissions increased by 150% within the first month of launch.',
      'Studio reported that clients frequently mentioned the website as a deciding factor in choosing Petal for events.',
    ],
  },

  'lumina-landing': {
    client: 'Lumina Beauty',
    role: 'UI Designer & Developer',
    duration: '2 weeks',
    overview:
      'A high-converting landing page for a luxury beauty brand product launch. The page uses scroll-triggered narrative animations and a soft gradient aesthetic to guide visitors through the product story.',
    problem:
      'Lumina needed a launch page that conveyed the premium quality of their new skincare line while capturing email leads before the product release date.',
    solution:
      'I designed a scroll-driven narrative that reveals product benefits progressively as the user scrolls. Each section builds on the last, creating an emotional journey that culminates in a call to action.',
    designProcess: [
      'Storyboarded the scroll narrative, mapping product benefits to visual reveals and progressive disclosure.',
      'Designed each section as a distinct visual chapter with its own layout rhythm and accent color.',
      'Created a mobile-first layout that preserves the narrative flow on smaller screens without losing visual impact.',
    ],
    developmentProcess: [
      'Built with Next.js for optimal SEO and used GSAP for scroll-triggered animations with precise timeline control.',
      'Implemented a countdown timer component for the product launch date with email capture integration.',
      'Added smooth section transitions using scroll-linked animations that respond to scroll velocity.',
    ],
    features: [
      'Scroll-driven narrative with parallax imagery and progressive product reveal animations.',
      'Email capture form with incentive messaging and social proof counter.',
      'Product ingredient breakdown with hover-activated information cards.',
      'Countdown timer to launch date with automated timezone detection.',
    ],
    images: [
      'from-pink-200 via-purple-100 to-rose-100',
      'from-purple-100 via-pink-50 to-rose-100',
      'from-rose-100 via-purple-50 to-pink-100',
    ],
    challenges: [
      'Coordinating multiple scroll-triggered animations without causing jank or visual conflicts required careful timeline management.',
      'Ensuring the narrative flow worked equally well at different scroll speeds and on various devices.',
    ],
    results: [
      'Achieved a 12% email conversion rate, exceeding the 8% target by 50%.',
      'The page maintained a 1.8-second load time despite heavy imagery and animations.',
    ],
  },

  'hues-design-system': {
    client: 'Hues Creative Agency',
    role: 'Design Systems Engineer',
    duration: '6 weeks',
    overview:
      'A comprehensive design system and component library built to standardize visual language across multiple client projects. The system includes a token-based design foundation, reusable React components, and interactive documentation.',
    problem:
      'The agency was rebuilding similar components for every client project, leading to inconsistent visual output and inefficient development cycles. Designers and developers lacked a shared vocabulary.',
    solution:
      'I created a token-driven design system with Storybook documentation that serves as the single source of truth for all client work. The system balances flexibility for brand customization with consistent structural patterns.',
    designProcess: [
      'Audited all existing client projects to identify common UI patterns, inconsistencies, and reusable elements.',
      'Established a design token taxonomy covering colors, typography, spacing, shadows, and animation durations.',
      'Created component hierarchy from atomic primitives to complex organisms, each with documented variants and states.',
    ],
    developmentProcess: [
      'Built the component library with React and TypeScript, using class-variance-authority for variant management.',
      'Set up Storybook with auto-generated documentation, interactive controls, and accessibility audits.',
      'Published the library as a private npm package with semantic versioning and automated changelog generation.',
    ],
    features: [
      'Comprehensive design token system with light and dark mode support for all core values.',
      '40+ reusable components with documented variants, states, and usage guidelines.',
      'Interactive Storybook documentation with live controls, accessibility reports, and responsive previews.',
      'Theme customization layer allowing per-client brand overrides without modifying core components.',
    ],
    images: [
      'from-blue-100 via-pink-50 to-purple-100',
      'from-purple-100 via-blue-50 to-pink-100',
      'from-pink-100 via-purple-50 to-blue-100',
    ],
    challenges: [
      'Balancing component flexibility with opinionated defaults required extensive variant prop design and testing.',
      'Ensuring accessibility compliance across all component states while maintaining the desired aesthetic.',
    ],
    results: [
      'Reduced new project setup time by 60% through reusable component templates and design tokens.',
      'Visual consistency across client projects improved measurably, with 95% reduction in style-related QA issues.',
    ],
  },

  'flora-ecommerce': {
    client: 'Flora & Co.',
    role: 'Full-Stack Developer',
    duration: '5 weeks',
    overview:
      'A minimal e-commerce interface for a botanical lifestyle brand. The shopping experience is designed to feel calm and deliberate, with soft product cards, smooth browsing, and a checkout process that reduces cart abandonment.',
    problem:
      'The existing e-commerce platform had a high bounce rate on product pages and a cumbersome checkout flow. Customers reported feeling overwhelmed by the cluttered layout.',
    solution:
      'I redesigned the shopping experience with generous white space, gentle product card interactions, and a streamlined checkout that reduces friction at every step.',
    designProcess: [
      'Analyzed analytics data to identify drop-off points in the current shopping funnel.',
      'Designed simplified product pages that prioritize product imagery and essential information.',
      'Created a single-page checkout flow with progress indicators and saved address autofill.',
    ],
    developmentProcess: [
      'Built the frontend with Next.js and integrated with Shopify headless commerce API for product management.',
      'Implemented a custom cart system with optimistic UI updates and persistent state across sessions.',
      'Added real-time shipping calculations and multi-currency support for international customers.',
    ],
    features: [
      'Visual product browsing with quick-add hover state and size/color variant previews.',
      'Persistent mini-cart with quantity controls, shipping progress bar, and related product suggestions.',
      'Streamlined checkout with guest purchase option, saved addresses, and multiple payment gateways.',
      'Order tracking page with live shipping updates and purchase history with easy reorder functionality.',
    ],
    images: [
      'from-green-100 via-pink-50 to-rose-100',
      'from-rose-100 via-green-50 to-pink-100',
      'from-pink-100 via-rose-50 to-green-100',
    ],
    challenges: [
      'Optimizing the Shopify API integration for fast page loads while maintaining real-time inventory accuracy.',
      'Designing a mobile checkout flow that does not require zooming or horizontal scrolling at any step.',
    ],
    results: [
      'Cart abandonment rate decreased by 25% following the checkout redesign and streamlined flow.',
      'Average time on product pages increased by 40%, indicating more engaged browsing behavior.',
    ],
  },

  'iris-admin': {
    client: 'Iris Data Systems',
    role: 'Frontend Developer',
    duration: '5 weeks',
    overview:
      'Iris Admin Panel is a data-rich dashboard built for monitoring and managing distributed systems. The interface prioritizes clarity and quick access to critical metrics without overwhelming the operator.',
    problem:
      'System operators were drowning in data without meaningful context. The legacy interface displayed every metric simultaneously, making it difficult to identify anomalies or prioritize issues.',
    solution:
      'I reorganized the dashboard around operator workflows, grouping related metrics and using visual hierarchy to draw attention to anomalies. Interactive charts allow drilling into data without navigating away.',
    designProcess: [
      'Shadowed system operators to understand their decision-making process and information priorities.',
      'Designed a card-based dashboard layout with movable widgets that operators can customize per session.',
      'Created a consistent chart visual language using D3 with a restrained color palette for accessibility.',
    ],
    developmentProcess: [
      'Built the dashboard with React and TypeScript, using D3 for custom interactive charts and data visualizations.',
      'Implemented WebSocket connections for real-time metric updates with smooth animated transitions.',
      'Created a widget system that users can drag, resize, and configure without page reloads.',
    ],
    features: [
      'Customizable dashboard with drag-and-drop widget positioning and per-widget configuration panels.',
      'Interactive time-series charts with zoom, pan, and data point inspection capabilities.',
      'Alert management system with severity levels, acknowledgment workflow, and notification routing.',
      'Dark mode optimized for extended monitoring sessions with reduced blue light emission.',
    ],
    images: [
      'from-purple-100 via-pink-50 to-indigo-100',
      'from-indigo-100 via-purple-50 to-pink-100',
      'from-pink-100 via-indigo-50 to-purple-100',
    ],
    challenges: [
      'Rendering thousands of real-time data points without performance degradation required canvas-based chart rendering.',
      'Designing a drag-and-drop widget system that feels native on both desktop and touch interfaces.',
    ],
    results: [
      'Mean time to identify system anomalies decreased by 45% through improved data visualization.',
      'Operator satisfaction scores increased by 70% in post-deployment surveys.',
    ],
  },

  'rose-consulting': {
    client: 'Rose Consulting Group',
    role: 'Designer & Developer',
    duration: '3 weeks',
    overview:
      'A professional consulting website that communicates expertise and trustworthiness through clean typography, structured layouts, and a restrained visual hierarchy.',
    problem:
      'Rose Consulting had a dated website that did not reflect their position as a premium advisory firm. Potential clients found it difficult to understand their service offerings and expertise areas.',
    solution:
      'I created a clean, content-focused website that leads with expertise and case studies. The design uses generous typography and structured content blocks to make complex information scannable.',
    designProcess: [
      'Conducted stakeholder interviews to identify key messaging priorities and target audience demographics.',
      'Designed a content-first layout that prioritizes readability and structured information presentation.',
      'Created a consistent card-based pattern for service offerings with clear hierarchy and call-to-action placement.',
    ],
    developmentProcess: [
      'Built with React and Tailwind, focusing on fast initial load times and SEO optimization.',
      'Implemented a blog with categorized content, author profiles, and related reading suggestions.',
      'Added a team directory with expandable profiles, areas of expertise tags, and direct contact options.',
    ],
    features: [
      'Clean, professional typography system with optimal reading line lengths and generous vertical rhythm.',
      'Service offering cards with expandable detail sections and clear qualification pathways.',
      'Team directory with expertise filtering, individual profile pages, and scheduling integration.',
      'Resource library with whitepapers, case studies, and industry reports organized by topic.',
    ],
    images: [
      'from-pink-100 via-rose-50 to-slate-100',
      'from-slate-100 via-pink-50 to-rose-100',
      'from-rose-100 via-slate-50 to-pink-100',
    ],
    challenges: [
      'Balancing the need for professional authority with approachability in the visual design language.',
      'Designing content management workflows that non-technical team members could maintain independently.',
    ],
    results: [
      'Organic search traffic increased by 80% within three months of launch through improved SEO structure.',
      'Inbound consulting inquiries doubled, with several new clients specifically mentioning the website quality.',
    ],
  },

  'velvet-campaign': {
    client: 'Velvet Cosmetics',
    role: 'Creative Developer',
    duration: '2 weeks',
    overview:
      'A bold, visually-driven campaign landing page for a limited edition product launch. The design uses rich textures, parallax effects, and a compelling narrative flow to create an immersive brand experience.',
    problem:
      'Velvet needed a campaign microsite that would generate buzz around their limited edition collection. The page had to feel exclusive and editorial rather than transactional.',
    solution:
      'I created a visually immersive digital editorial experience that leads with striking imagery and uses scroll-driven storytelling to unveil the collection narrative piece by piece.',
    designProcess: [
      'Developed a visual mood board inspired by luxury editorial design and the product packaging aesthetic.',
      'Storyboarded the scroll experience with distinct visual chapters for each product story angle.',
      'Designed custom typography treatments and texture overlays to match the brand campaign identity.',
    ],
    developmentProcess: [
      'Built the page with HTML, CSS, and vanilla JavaScript, prioritizing animation performance and compatibility.',
      'Implemented parallax scrolling effects with smooth performance using requestAnimationFrame optimization.',
      'Added a pre-order integration with countdown timer and stock indicator for the limited edition launch.',
    ],
    features: [
      'Full-screen video hero with scroll-triggered transition to the editorial content section.',
      'Parallax product showcase with interactive hotspots revealing ingredient and inspiration details.',
      'Pre-order flow with size selection, personalized engraving option, and launch countdown.',
      'Social media integration with user-generated content gallery and shareable campaign assets.',
    ],
    images: [
      'from-red-100 via-pink-50 to-rose-100',
      'from-rose-100 via-red-50 to-pink-100',
      'from-pink-100 via-rose-50 to-red-100',
    ],
    challenges: [
      'Achieving buttery-smooth parallax effects across devices with varying screen sizes and performance capabilities.',
      'Balancing the editorial visual ambition with the technical constraints of a campaign landing page.',
    ],
    results: [
      'The limited edition collection sold out within 48 hours of the campaign launch.',
      'Campaign page shared on social media over 5,000 times in the first week.',
    ],
  },

  'serene-portfolio': {
    client: 'Serene Photography',
    role: 'Designer & Developer',
    duration: '3 weeks',
    overview:
      'A minimalist photography portfolio designed to let the imagery speak for itself. The site uses generous white space, subtle transitions, and a focus on visual storytelling.',
    problem:
      'Serene needed a portfolio that could showcase their photography in the best possible light without distracting UI elements competing for attention.',
    solution:
      'I designed an intentionally minimal interface that recedes into the background. Navigation is subtle, transitions are gentle, and the imagery is always the primary focus.',
    designProcess: [
      'Reviewed the full photography portfolio to understand the visual language and mood of the work.',
      'Designed a full-screen gallery experience with keyboard navigation and smooth crossfade transitions.',
      'Selected a neutral, warm-toned palette that complements rather than competes with photographic content.',
    ],
    developmentProcess: [
      'Built with React and Framer Motion for smooth gallery transitions and loading states.',
      'Implemented responsive image loading with blur-up placeholders and priority loading for above-fold images.',
      'Created a custom lightbox with touch gesture support for mobile gallery browsing.',
    ],
    features: [
      'Full-screen image viewer with keyboard navigation, pinch-to-zoom, and swipe gesture support.',
      'Collection-based gallery organization with cover images and automatic slide-show preview.',
      'Client proofing gallery with password protection, download options, and favorites marking.',
      'Contact and booking page with availability calendar and quick-quote form.',
    ],
    images: [
      'from-sky-100 via-pink-50 to-rose-100',
      'from-rose-100 via-sky-50 to-pink-100',
      'from-pink-100 via-rose-50 to-sky-100',
    ],
    challenges: [
      'Optimizing full-resolution image loading for gallery browsing without compromising visual quality.',
      'Designing navigation that is intuitive without being visually present during the gallery viewing experience.',
    ],
    results: [
      'Client reported a significant increase in booking inquiries through the integrated contact system.',
      'Gallery pages maintain a 98% engagement rate with users viewing an average of 15+ images per session.',
    ],
  },

  'cloud-dashboard': {
    client: 'CloudMetrix',
    role: 'Frontend Engineer',
    duration: '4 weeks',
    overview:
      'A real-time cloud infrastructure monitoring dashboard with interactive charts, resource metrics, and a clean data visualization layer designed for DevOps teams.',
    problem:
      'The existing monitoring tools required switching between multiple interfaces to understand system health. DevOps teams needed a unified view with the ability to drill into specifics.',
    solution:
      'I built a consolidated dashboard that aggregates metrics from multiple cloud providers into a single interface. Interactive visualizations allow teams to monitor at a glance and investigate on demand.',
    designProcess: [
      'Conducted research with DevOps teams to identify the most critical metrics and alerting workflows.',
      'Designed a hierarchical data visualization system with overview charts that expand into detailed views.',
      'Created a consistent color coding system for severity levels and resource health status.',
    ],
    developmentProcess: [
      'Built the React application with D3 for custom chart components and data-driven SVG visualizations.',
      'Implemented real-time data streaming via WebSocket with automatic reconnection and backfill handling.',
      'Created a comprehensive filtering system for time ranges, resource types, and custom metric groups.',
    ],
    features: [
      'Real-time resource monitoring with live-updating charts and configurable refresh intervals.',
      'Multi-cloud aggregation supporting AWS, Azure, and GCP metrics in a unified dashboard view.',
      'Custom alert rules with multi-channel notifications and escalation workflows.',
      'Historical data analysis with time-range comparison and exportable report generation.',
    ],
    images: [
      'from-cyan-100 via-pink-50 to-blue-100',
      'from-blue-100 via-cyan-50 to-pink-100',
      'from-pink-100 via-blue-50 to-cyan-100',
    ],
    challenges: [
      'Normalizing metrics from different cloud providers into a consistent data model for visualization.',
      'Maintaining smooth 60fps rendering while displaying thousands of real-time data points simultaneously.',
    ],
    results: [
      'Reduced mean time to detection for infrastructure issues by 60% through consolidated monitoring.',
      'Adopted by all three engineering teams within the first month of deployment.',
    ],
  },

  'mila-saas': {
    client: 'Mila Productivity',
    role: 'UI/UX Designer & Developer',
    duration: '4 weeks',
    overview:
      'A modern SaaS landing page for a productivity tool that helps remote teams manage asynchronous communication. The design emphasizes feature benefits, social proof, and a clear conversion path.',
    problem:
      'Mila had an underperforming landing page that was not effectively communicating their value proposition. Visitors were not converting, and the bounce rate was critically high.',
    solution:
      'I redesigned the landing page with a clear problem-solution narrative, distinct feature sections with visual demonstrations, and strategically placed social proof elements.',
    designProcess: [
      'Analyzed user session recordings to identify where visitors dropped off and what content they engaged with.',
      'Designed a clear information hierarchy that leads with the core value proposition and supports with features.',
      'Created customized illustration components for each major feature to improve comprehension and recall.',
    ],
    developmentProcess: [
      'Built with Next.js for server-side rendering and optimal Core Web Vitals performance.',
      'Implemented A/B testing infrastructure for continuous conversion rate optimization.',
      'Added scroll-triggered feature reveals and interactive product demonstration sections.',
    ],
    features: [
      'Above-fold hero with clear value proposition, animated product mockup, and primary CTA.',
      'Feature sections with interactive demonstrations and benefit-focused copywriting.',
      'Social proof carousel with customer logos, testimonials, and aggregate satisfaction metrics.',
      'Pricing section with tiered comparison and feature highlights for each subscription level.',
    ],
    images: [
      'from-amber-100 via-pink-50 to-rose-100',
      'from-rose-100 via-amber-50 to-pink-100',
      'from-pink-100 via-rose-50 to-amber-100',
    ],
    challenges: [
      'Condensing a complex product story into a scrollable landing page without losing the key messaging.',
      'Designing interactive demonstrations that work reliably across all devices and connection speeds.',
    ],
    results: [
      'Conversion rate increased by 35% following the landing page redesign and A/B testing iterations.',
      'Bounce rate decreased from 68% to 42%, with visitors spending an average of 3 minutes on the page.',
    ],
  },

  'willow-business': {
    client: 'Willow Creative Co.',
    role: 'Designer & Developer',
    duration: '3 weeks',
    overview:
      'A warm, approachable business website for a creative studio that specializes in brand strategy and visual identity. The site uses custom illustrations, soft cards, and a friendly brand voice.',
    problem:
      'Willow Creative had a formal, corporate-style website that did not match their actual studio culture. They needed a site that felt personal and reflected their creative, collaborative approach.',
    solution:
      'I designed a website that feels like a conversation with the studio team. Custom illustrations add personality, warm colors create approachability, and the content is written in the studio authentic voice.',
    designProcess: [
      'Spent a day at the studio to understand their culture, work style, and team personality.',
      'Designed custom spot illustrations for each service offering and major page section.',
      'Created a color palette based on the studio physical space warm woods, soft greens, and rose accents.',
    ],
    developmentProcess: [
      'Built with React and Framer Motion, adding subtle micro-interactions throughout for delight.',
      'Created a case study template with before-after comparisons and process documentation.',
      'Implemented the client portal with project updates, file sharing, and milestone tracking.',
    ],
    features: [
      'Studio story section with team member profiles, personal quotes, and candid workspace photography.',
      'Service pages with illustrated process overviews, pricing guides, and project timeline estimators.',
      'Case study gallery with filterable industries and detailed project breakdowns.',
      'Client portal with real-time project status, file sharing, and direct messaging with the studio team.',
    ],
    images: [
      'from-emerald-100 via-pink-50 to-teal-100',
      'from-teal-100 via-emerald-50 to-pink-100',
      'from-pink-100 via-teal-50 to-emerald-100',
    ],
    challenges: [
      'Translating the studio physical workspace atmosphere into a digital experience.',
      'Creating a client portal that feels personal rather than transactional.',
    ],
    results: [
      'Inbound leads increased by 90% with several prospects mentioning the authentic studio feel.',
      'The client portal improved project communication satisfaction scores by 55%.',
    ],
  },

  'opal-agency': {
    client: 'Opal Creative Agency',
    role: 'Creative Developer',
    duration: '3 weeks',
    overview:
      'A creative agency landing page with bold sections, animated stats, and a distinctive visual identity that showcases the agency innovative work and attracts forward-thinking clients.',
    problem:
      'Opal was struggling to differentiate themselves in a crowded agency market. Their existing website felt generic and did not convey the bold, experimental nature of their work.',
    solution:
      'I created a visually daring landing page that breaks conventional layout patterns. Bold typography, unusual section transitions, and animated statistics create a memorable first impression.',
    designProcess: [
      'Audited competitor agency sites to identify opportunities for visual differentiation.',
      'Experimented with asymmetric layouts and unconventional grid structures in the design phase.',
      'Designed animated typography treatments and custom motion graphics for key statistics.',
    ],
    developmentProcess: [
      'Built with Next.js and GSAP for high-performance scroll-triggered animations.',
      'Created a WebGL-powered hero section with interactive particle effects and dynamic color shifts.',
      'Implemented a horizontal scrolling portfolio section for an unconventional browsing experience.',
    ],
    features: [
      'WebGL interactive hero with mouse-reactive particle system and color transitions.',
      'Horizontal-scrolling portfolio showcase with project preview cards and quick-view modals.',
      'Animated statistics counter with iconography and context-rich descriptions.',
      'Services section with expandable detail panels and integrated case study examples.',
    ],
    images: [
      'from-violet-100 via-pink-50 to-fuchsia-100',
      'from-fuchsia-100 via-violet-50 to-pink-100',
      'from-pink-100 via-fuchsia-50 to-violet-100',
    ],
    challenges: [
      'Balancing the bold visual ambition with usability and accessibility requirements.',
      'Ensuring the WebGL hero section gracefully degrades on devices without WebGL support.',
    ],
    results: [
      'The site won a local design award for innovation in brand presentation.',
      'Agency reported a 200% increase in portfolio page engagement and more qualified inbound leads.',
    ],
  },
}
