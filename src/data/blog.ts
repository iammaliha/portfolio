import type { BlogPost } from '../types'

const now = new Date()
const y = now.getFullYear()
const m = String(now.getMonth() + 1).padStart(2, '0')

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-portfolio-react-tailwind',
    title: 'Building a Modern Portfolio with React and Tailwind',
    excerpt:
      'A step-by-step guide to creating a stunning personal portfolio using React 19, Tailwind CSS v4, and Framer Motion animations.',
    category: 'Frontend Development',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'from-pink-200 via-rose-100 to-purple-200',
    date: `${y}-${m}-15`,
    readTime: '8 min read',
    author: 'Maliha Tasnim',
    featured: true,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Your portfolio is often the first impression potential clients and employers have of your work. It needs to showcase your skills while reflecting your personal brand. In this article, I will walk through how I built my own portfolio using the latest tools in the React ecosystem.',
      },
      {
        type: 'heading',
        content: 'Choosing the Stack',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'For my portfolio, I chose React 19 for its component model, Tailwind CSS v4 for rapid styling, and Framer Motion for animations. Vite handles the build tooling with lightning-fast HMR, and TypeScript keeps the codebase reliable.',
      },
      {
        type: 'code',
        language: 'json',
        content: `{
  "dependencies": {
    "react": "^19.2.6",
    "tailwindcss": "^4.3.0",
    "framer-motion": "^12.40.0",
    "react-router-dom": "^7.15.1"
  }
}`,
      },
      {
        type: 'heading',
        content: 'Theming with Tailwind CSS v4',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'Tailwind CSS v4 introduces a CSS-first configuration approach. Instead of a JavaScript config file, you define your theme directly in your CSS file using the @theme directive. This makes it incredibly easy to maintain a consistent design system.',
      },
      {
        type: 'code',
        language: 'css',
        content: `@import "tailwindcss";

@theme {
  --color-blush: #fff5f7;
  --color-blush-dark: #fce7f3;
  --font-display: "Playfair Display", serif;
  --font-body: Inter, sans-serif;
  --animate-fade-in: fade-in 0.6s ease-out;
}`,
      },
      {
        type: 'paragraph',
        content:
          'The key advantage of this approach is that your design tokens live alongside your styles, making it easier to reason about the visual system as a whole. I defined a custom blush palette that anchors the feminine aesthetic throughout the site.',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
        level: 2,
      },
      {
        type: 'list',
        items: [
          'Use React Router for multi-page navigation with smooth transitions',
          'Leverage Framer Motion variants for consistent animation patterns',
          'Design with a cohesive color palette and stick to it across all pages',
          'Make components reusable with TypeScript interfaces and CVA variants',
        ],
      },
      {
        type: 'quote',
        content:
          'A portfolio should feel like a conversation, not a resume. Every interaction should reflect your design philosophy.',
      },
      {
        type: 'paragraph',
        content:
          'By focusing on a cohesive visual language and smooth interactions, your portfolio can leave a lasting impression that goes beyond just showing your work.',
      },
    ],
  },
  {
    slug: 'art-of-feminine-ui-design',
    title: 'The Art of Feminine UI Design',
    excerpt:
      'Exploring how soft color palettes, rounded typography, and gentle interactions create interfaces that feel warm and inviting.',
    category: 'UI/UX Design',
    tags: ['Design', 'UI/UX', 'Color Theory'],
    image: 'from-rose-200 via-pink-100 to-orange-100',
    date: `${y}-${m}-10`,
    readTime: '6 min read',
    author: 'Maliha Tasnim',
    featured: true,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Feminine UI design is about more than just using pink. It is a design philosophy that prioritizes warmth, approachability, and emotional connection. In this article, I break down the principles that guide my design process.',
      },
      {
        type: 'heading',
        content: 'The Psychology of Soft Colors',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'Soft pinks, warm creams, and gentle rose tones evoke feelings of comfort and nurturing. Unlike aggressive, high-contrast designs, a feminine palette invites users to stay and explore. The key is balance — too much pink can feel overwhelming, while strategic accents create moments of delight.',
      },
      {
        type: 'code',
        language: 'css',
        content: `/* A balanced feminine palette */
--color-primary: #ec4899;    /* pink-500 */
--color-secondary: #f43f5e;  /* rose-500 */
--color-surface: #fff5f7;    /* blush */
--color-text: #422438;       /* warm dark */
--color-border: #fce7f3;     /* blush-dark */`,
      },
      {
        type: 'heading',
        content: 'Typography with Personality',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'Pairing a serif display font like Playfair Display with a clean sans-serif like Inter creates a contrast that feels both elegant and modern. The serif brings a sense of tradition and luxury, while the sans-serif keeps content readable and fresh.',
      },
      {
        type: 'list',
        items: [
          'Use serif fonts for headings and display text to add elegance',
          'Keep body text in a highly readable sans-serif at 16px minimum',
          'Set generous line height (1.6-1.8) for a relaxed reading experience',
          'Add letter-spacing to uppercase text for a premium feel',
        ],
      },
      {
        type: 'quote',
        content:
          'The best interfaces are the ones you want to keep touching. Softness in design creates a sense of safety and trust.',
      },
      {
        type: 'paragraph',
        content:
          'Ultimately, feminine UI design is about creating digital spaces that feel human. When done well, users may not consciously notice the design choices, but they will feel the difference in how the interface makes them feel.',
      },
    ],
  },
  {
    slug: 'getting-started-with-framer-motion',
    title: 'Getting Started with Framer Motion',
    excerpt:
      'Learn the fundamentals of Framer Motion for React — from simple fade-ins to complex staggered animations that bring your UI to life.',
    category: 'Frontend Development',
    tags: ['React', 'Framer Motion', 'Animation'],
    image: 'from-purple-200 via-pink-100 to-rose-200',
    date: `${y}-05-28`,
    readTime: '10 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Framer Motion is the most powerful animation library for React. It provides a declarative API for creating smooth, performant animations that integrate seamlessly with React component architecture.',
      },
      {
        type: 'heading',
        content: 'The Basics: motion Components',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'Any HTML element can be animated by prefixing it with motion. A regular div becomes motion.div, gaining access to animate, initial, and transition props.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `import { motion } from 'framer-motion'

function FadeIn() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1>Hello, World!</h1>
    </motion.div>
  )
}`,
      },
      {
        type: 'heading',
        content: 'Scroll-Triggered Animations',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'Using the whileInView prop, you can trigger animations when elements enter the viewport. This is perfect for scroll-reveal effects that add polish to long pages.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `function RevealCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <Card>Content revealed on scroll</Card>
    </motion.div>
  )
}`,
      },
      {
        type: 'heading',
        content: 'Staggered Children',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'One of the most elegant patterns is staggering the animation of child elements. This creates a cascading effect that feels polished and deliberate.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div variants={container} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>`,
      },
      {
        type: 'quote',
        content:
          'Animations in UI should feel like they belong — never gratuitous, always intentional. Each motion should serve a purpose.',
      },
    ],
  },
  {
    slug: 'designing-with-soft-gradients',
    title: 'Designing with Soft Gradients',
    excerpt:
      'How to use gradient backgrounds effectively in web design to create depth, mood, and visual interest without overwhelming the content.',
    category: 'Design Tips',
    tags: ['Design', 'CSS', 'Gradients'],
    image: 'from-pink-100 via-rose-50 to-purple-100',
    date: `${y}-05-20`,
    readTime: '5 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Gradients are one of the most versatile tools in a designer palette. When used with restraint, they add depth and atmosphere to flat designs. When overused, they can quickly become distracting.',
      },
      {
        type: 'heading',
        content: 'Choosing Gradient Directions',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'The direction of a gradient dramatically affects its feel. Diagonal gradients (to-bottom-right) feel dynamic and modern. Vertical gradients feel stable and grounded. Radial gradients create a spotlight effect that draws the eye inward.',
      },
      {
        type: 'code',
        language: 'css',
        content: `/* Diagonal — dynamic and modern */
background: linear-gradient(135deg, #fce7f3, #ec4899);

/* Vertical — calm and grounded */
background: linear-gradient(to bottom, #fff5f7, #fce7f3);

/* Radial — spotlight effect */
background: radial-gradient(circle at center, #fdf2f8, #fce7f3);`,
      },
      {
        type: 'heading',
        content: 'The Blur Technique',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'For a truly ethereal effect, combine gradients with CSS blur filters. Large, blurred gradient circles placed behind content create a glowing, atmospheric backdrop that feels luxurious without competing with the foreground.',
      },
      {
        type: 'quote',
        content:
          'A gradient should whisper, not shout. The best gradient work is felt rather than noticed.',
      },
      {
        type: 'list',
        items: [
          'Limit gradients to 2-3 color stops for a clean transition',
          'Use similar hues (analogous colors) for subtle, elegant blends',
          'Apply gradients to backgrounds and decorative elements, not text',
          'Pair gradients with plenty of white space to let them breathe',
        ],
      },
    ],
  },
  {
    slug: 'building-responsive-layouts-tailwind',
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt:
      'Master responsive design in Tailwind CSS with utility-first breakpoints, container queries, and modern CSS Grid techniques.',
    category: 'Frontend Development',
    tags: ['Tailwind CSS', 'Responsive', 'CSS Grid'],
    image: 'from-blue-100 via-pink-50 to-rose-100',
    date: `${y}-05-12`,
    readTime: '7 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Tailwind CSS makes responsive design intuitive by embedding breakpoints directly into your utility classes. Instead of writing separate media queries, you prefix utilities with the breakpoint name.',
      },
      {
        type: 'heading',
        content: 'Mobile-First Approach',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'Tailwind uses a mobile-first breakpoint system. Unprefixed utilities apply to all screen sizes, while prefixed versions override them at larger breakpoints. This aligns perfectly with modern responsive design methodology.',
      },
      {
        type: 'code',
        language: 'html',
        content: `<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-2xl border p-6">Card 1</div>
  <div class="rounded-2xl border p-6">Card 2</div>
  <div class="rounded-2xl border p-6">Card 3</div>
</div>`,
      },
      {
        type: 'heading',
        content: 'Responsive Typography',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'Typography should adapt to screen size. Tailwind makes this trivial with responsive font-size utilities. Headings can be larger on desktop while remaining readable on mobile.',
      },
      {
        type: 'code',
        language: 'html',
        content: `<h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

<p class="text-sm sm:text-base lg:text-lg leading-relaxed">
  Body text that scales gracefully across devices.
</p>`,
      },
      {
        type: 'list',
        items: [
          'Always start with the mobile layout and add complexity at larger breakpoints',
          'Use sm:, md:, lg:, and xl: prefixes for progressive enhancement',
          'Keep touch targets at least 44px on mobile for accessibility',
          'Test layouts at every breakpoint — not just the extremes',
        ],
      },
      {
        type: 'paragraph',
        content:
          'By following a mobile-first approach with Tailwind built-in breakpoints, you can create layouts that look intentional at every screen size without writing a single media query.',
      },
    ],
  },
  {
    slug: 'power-of-micro-interactions',
    title: 'The Power of Micro-Interactions',
    excerpt:
      'How small animations and feedback cues can transform the user experience from functional to delightful.',
    category: 'UI/UX Design',
    tags: ['UX', 'Micro-Interactions', 'Animation'],
    image: 'from-amber-100 via-pink-50 to-rose-100',
    date: `${y}-05-05`,
    readTime: '6 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Micro-interactions are the small moments in a user interface that provide feedback, guide actions, or simply bring a smile. A button that depresses when clicked, a heart icon that animates when liked, a form field that shakes on error — these details define a polished experience.',
      },
      {
        type: 'heading',
        content: 'The Four Parts of a Micro-Interaction',
        level: 2,
      },
      {
        type: 'list',
        items: [
          'Trigger — the action that starts the interaction (click, hover, swipe)',
          'Rules — what happens during the interaction (the logic)',
          'Feedback — what the user sees, hears, or feels (the animation)',
          'Loops and Modes — meta-rules that determine repetition or special states',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Every micro-interaction should serve a purpose. Does it help the user understand what happened? Does it make the interface feel more alive? If the answer to both is no, consider whether the animation is necessary.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `function LikeButton() {
  const [liked, setLiked] = useState(false)

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={() => setLiked(!liked)}
      className="flex items-center gap-2 rounded-full px-4 py-2"
    >
      <motion.span
        animate={liked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {liked ? '❤️' : '🤍'}
      </motion.span>
      <span>{liked ? 'Liked' : 'Like'}</span>
    </motion.button>
  )
}`,
      },
      {
        type: 'quote',
        content:
          'Micro-interactions are the difference between a product that works and a product that delights. They show that someone cared about the details.',
      },
    ],
  },
  {
    slug: 'optimizing-react-performance',
    title: 'Optimizing React Performance',
    excerpt:
      'Practical techniques for improving React application performance, from code splitting to memoization and bundle analysis.',
    category: 'Frontend Development',
    tags: ['React', 'Performance', 'Optimization'],
    image: 'from-emerald-100 via-pink-50 to-teal-100',
    date: `${y}-04-22`,
    readTime: '9 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'Performance optimization in React is about preventing unnecessary work. React is already efficient at updating the DOM, but as your application grows, you need strategies to keep interactions snappy and bundle sizes manageable.',
      },
      {
        type: 'heading',
        content: 'Code Splitting with React.lazy',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'Code splitting allows you to split your bundle into smaller chunks that load on demand. React.lazy and Suspense make this trivially easy, especially with Vite automatic code splitting.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Analytics = lazy(() => import('./pages/Analytics'))

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Suspense>
  )
}`,
      },
      {
        type: 'heading',
        content: 'Memoization Strategies',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'React.memo, useMemo, and useCallback prevent re-renders when props or values have not changed. However, they come with their own overhead. Only use them when you have measured a performance problem.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `// Memoize expensive computations
const total = useMemo(
  () => items.reduce((sum, item) => sum + item.price, 0),
  [items]
)

// Memoize callbacks passed to child components
const handleClick = useCallback(
  (id: string) => setSelected(id),
  []
)

// Prevent re-renders for pure components
const ExpensiveChart = React.memo(
  ({ data }: { data: DataPoint[] }) => <Chart data={data} />
)`,
      },
      {
        type: 'list',
        items: [
          'Use React DevTools Profiler to identify re-render bottlenecks',
          'Lazy load routes that are not immediately visible to the user',
          'Optimize images with modern formats (WebP, AVIF) and responsive srcset',
          'Avoid inline object and function declarations in render methods',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Performance is a feature. Users may not always notice when an app is fast, but they will definitely notice when it is slow. Make performance part of your development workflow from the start.',
      },
    ],
  },
  {
    slug: 'creating-design-system-from-scratch',
    title: 'Creating a Design System from Scratch',
    excerpt:
      'A practical guide to building a design system with design tokens, reusable components, and documentation that scales across projects.',
    category: 'Design Tips',
    tags: ['Design Systems', 'React', 'TypeScript'],
    image: 'from-violet-100 via-pink-50 to-fuchsia-100',
    date: `${y}-04-10`,
    readTime: '11 min read',
    author: 'Maliha Tasnim',
    featured: false,
    published: true,
    content: [
      {
        type: 'paragraph',
        content:
          'A design system is more than a component library. It is a shared language between designers and developers that ensures consistency across every product touchpoint. Building one from scratch requires thoughtful planning.',
      },
      {
        type: 'heading',
        content: 'Starting with Design Tokens',
        level: 2,
      },
      {
        type: 'paragraph',
        content:
          'Design tokens are the atomic values of your visual system — colors, typography, spacing, shadows, and animation durations. They form the foundation upon which all components are built.',
      },
      {
        type: 'code',
        language: 'css',
        content: `/* Design tokens in CSS */
:root {
  --color-primary: #ec4899;
  --color-primary-light: #fdf2f8;
  --color-primary-dark: #be185d;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --shadow-soft: 0 2px 10px rgba(236, 72, 153, 0.1);
  --radius-card: 1rem;
}`,
      },
      {
        type: 'heading',
        content: 'Component Architecture with CVA',
        level: 3,
      },
      {
        type: 'paragraph',
        content:
          'Class Variance Authority (CVA) is a perfect fit for design system components. It allows you to define variants for different states and sizes while keeping the API clean and type-safe.',
      },
      {
        type: 'code',
        language: 'tsx',
        content: `import { cva } from 'class-variance-authority'

const button = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-all',
  {
    variants: {
      variant: {
        primary: 'bg-pink-500 text-white shadow-lg',
        secondary: 'border border-pink-200 bg-white',
        ghost: 'text-slate-600 hover:bg-pink-50',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
  }
)`,
      },
      {
        type: 'list',
        items: [
          'Start with tokens, then build primitives (Button, Input, Badge)',
          'Compose complex components from primitives for consistency',
          'Document every component with usage examples and prop types',
          'Version your design system independently from consuming projects',
        ],
      },
      {
        type: 'quote',
        content:
          'A design system is the single source of truth for your product visual language. It is an investment that pays for itself many times over.',
      },
    ],
  },
]

export const blogCategories: string[] = [
  'All',
  'Frontend Development',
  'UI/UX Design',
  'Design Tips',
]
