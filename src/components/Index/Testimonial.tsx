"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    content: "The templates are production-ready and highly customizable. We built our AI music platform in hours instead of months. Incredible time-to-market!",
    author: "Sofia Garcia",
    role: "CEO of Melodisco",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/89768406"
  },
  {
    content: "ShipAny's infrastructure is rock-solid. We scaled from 0 to 10k users without touching the backend. Best investment for our AI startup.",
    author: "James Wilson",
    role: "Tech Lead at GPTs.works",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/59442788"
  },
  {
    content: "From idea to launch in 3 days! ShipAny's templates and deployment tools made it possible to test our AI business concept incredibly fast.",
    author: "Anna Zhang",
    role: "Startup Founder",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/59228569"
  },
  {
    content: "The AI integration was seamless. We deployed our LLM-powered app with zero hassle. The documentation is top-notch!",
    author: "David Kim",
    role: "CTO at AIStack",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/106103625"
  },
  {
    content: "Game-changing platform for AI startups. The built-in analytics and monitoring tools saved us months of development time.",
    author: "Emily Chen",
    role: "Lead Developer",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/20110627"
  },
  {
    content: "Outstanding support team! They helped us optimize our AI model deployment and cut our costs by 40%.",
    author: "Michael Torres",
    role: "AI Engineer",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/16860528"
  },
  {
    content: "The scalability is impressive. Our chatbot handles 100k+ daily users without breaking a sweat. Couldn't be happier!",
    author: "Sarah Johnson",
    role: "Product Manager",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/59442788"
  },
  {
    content: "Security features are top-tier. Got our SOC 2 compliance thanks to ShipAny's built-in security controls.",
    author: "Alex Thompson",
    role: "Security Lead",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/89768406"
  },
  {
    content: "The vector database integration is fantastic. We migrated our entire semantic search system in just days.",
    author: "Lisa Wang",
    role: "ML Engineer",
    rating: 5,
    avatar: "https://avatars.githubusercontent.com/u/59228569"
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 dark:from-zinc-900/50 dark:to-zinc-900/30 p-6 hover:from-white/20 hover:to-white/10 dark:hover:from-zinc-900/70 dark:hover:to-zinc-900/50 w-[350px] flex-shrink-0 mx-3 border border-white/20 dark:border-zinc-800/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-zinc-900/20" />
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="flex items-center mb-4 space-x-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-5 h-5 text-amber-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">{testimonial.content}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4 ring-2 ring-white dark:ring-zinc-700/50 group-hover:ring-blue-100 dark:group-hover:ring-zinc-500 transition-all shadow-md">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold">{testimonial.author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const Testimonial = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-500 font-semibold mb-2 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-zinc-500 mb-4">
            What Users Say About ShipAny
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from developers and founders who launched their AI startups with ShipAny.
          </p>
        </motion.div>

        <div className="relative -mx-24">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
          
          <motion.div 
            className="flex py-4 px-24"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
