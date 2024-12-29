'use client'
import NumberFlow from '@number-flow/react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  originalMonthlyPrice: number
  originalYearlyPrice: number
  features: string[]
  buttonText: string
  popular?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Get started with your first SaaS startup.',
    monthlyPrice: 99,
    yearlyPrice: 990,
    originalMonthlyPrice: 199,
    originalYearlyPrice: 1990,
    buttonText: 'Get Started',
    features: [
      'NextJS boilerplate',
      'SEO-friendly structure',
      'Payment with Stripe',
      'Data storage with Supabase',
      'Google Oauth & One-Tap Login',
      'i18n support'
    ]
  },
  {
    name: 'Standard',
    description: 'Ship Fast with your SaaS Startups.',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    originalMonthlyPrice: 299,
    originalYearlyPrice: 2990,
    buttonText: 'Ship Fast',
    popular: true,
    features: [
      'Deploy with Vercel or Cloudflare',
      'Generation of Privacy & Terms',
      'Google Analytics Integration',
      'Google Search Console Integration',
      'Discord community',
      'Technical support for your first ship',
      'Lifetime updates'
    ]
  },
  {
    name: 'Premium',
    description: 'PageSpark AI SaaS Startups.',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    originalMonthlyPrice: 399,
    originalYearlyPrice: 3990,
    buttonText: 'Ship Any',
    features: [
      'Business Functions with AI',
      'User Center',
      'Credits System',
      'API Sales for your SaaS',
      'Admin System',
      'Priority Technical Support'
    ]
  }
]

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[length:50px_50px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Ship your AI SaaS startup with PageSpark.
          </motion.p>

          <div className="inline-flex items-center justify-center gap-3 bg-gray-100/80 dark:bg-zinc-900/50 p-1 rounded-lg backdrop-blur-xl border border-gray-200 dark:border-zinc-800">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-8 py-2 rounded-md text-sm font-medium transition-all duration-200",
                !isYearly 
                  ? "bg-yellow-500 text-black"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              Monthly
            </button>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: isYearly ? 1 : 0,
                  scale: isYearly ? 1 : 0.9,
                  y: isYearly ? 0 : 5
                }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-[13px] px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-500/20 shadow-lg shadow-green-500/10">
                  Save 20%
                </span>
              </motion.div>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-8 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  isYearly 
                    ? "bg-yellow-500 text-black"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border",
                plan.popular 
                  ? "border-yellow-500" 
                  : "border-gray-200 dark:border-zinc-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-gray-400 dark:text-gray-500 line-through text-2xl">
                    <NumberFlow value={isYearly ? plan.originalYearlyPrice : plan.originalMonthlyPrice} prefix="$" />
                  </span>
                  <span className="ml-2 text-5xl font-bold text-gray-900 dark:text-white">
                    <NumberFlow value={isYearly ? plan.yearlyPrice : plan.monthlyPrice} prefix="$" />
                  </span>
                  <motion.span 
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="ml-2 text-gray-500 dark:text-gray-400"
                  >
                    {isYearly ? '/year' : '/month'}
                  </motion.span>
                </div>
              </div>

              <button className={cn(
                "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200",
                plan.popular 
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700"
              )}>
                {plan.buttonText}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 mb-8">
                Pay once. Build unlimited projects!
              </p>

              <div className="space-y-4">
                <p className="text-gray-900 dark:text-white font-medium">
                  {index === 0 ? 'Includes' : `Everything in ${index === 1 ? 'Starter' : 'Standard'}, plus`}
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center group">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
