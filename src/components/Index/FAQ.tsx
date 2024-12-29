"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What exactly is PageSpark and how does it work?",
    answer: "PageSpark is a comprehensive AI SaaS platform that helps you build and deploy AI applications quickly. It provides pre-built templates and infrastructure to streamline the development process."
  },
  {
    question: "Do I need advanced technical skills to use PageSpark?",
    answer: "No, PageSpark is designed to be user-friendly for developers of all skill levels. While basic programming knowledge is helpful, our platform handles the complex technical aspects for you."
  },
  {
    question: "What types of AI SaaS can I build with PageSpark?",
    answer: "You can build a wide range of AI applications including chatbots, content generators, image processing tools, and more. Our platform supports various AI models and use cases."
  },
  {
    question: "How long does it typically take to launch with PageSpark?",
    answer: "Most projects can be launched within days to weeks, depending on complexity. Our templates and tools significantly reduce development time compared to building from scratch."
  },
  {
    question: "What's included in the PageSpark infrastructure?",
    answer: "PageSpark provides hosting, scaling, monitoring, API management, user authentication, and database solutions. Everything you need to run your AI application is included."
  },
  {
    question: "Can I customize the templates to match my brand?",
    answer: "Yes, all templates are fully customizable. You can modify the design, functionality, and branding to match your specific requirements while maintaining the robust underlying infrastructure."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          FAQ
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Frequently Asked Questions About PageSpark
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                bg-white dark:bg-zinc-900/50 
                hover:border-gray-300 dark:hover:border-gray-700 
                hover:shadow-lg dark:hover:bg-zinc-900/80 
                transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
