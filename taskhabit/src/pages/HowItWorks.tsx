import { motion } from "framer-motion";

const steps = [
  {
    title: "Post Your Task",
    description:
      "Describe what you need help with, set your budget, and choose your preferred time.",
    icon: "📝",
    color: "bg-primary-light text-primary",
  },
  {
    title: "Receive Offers",
    description: "Get proposals from qualified TaskHabit members in your area.",
    icon: "💬",
    color: "bg-accent-light text-accent",
  },
  {
    title: "Choose & Chat",
    description:
      "Review offers, chat with potential helpers, and select the best match.",
    icon: "🤝",
    color: "bg-primary-light text-primary",
  },
  {
    title: "Task Completion",
    description:
      "Meet your helper, get your task done, and build your TaskHabit streak.",
    icon: "✅",
    color: "bg-accent-light text-accent",
  },
  {
    title: "Review & Rate",
    description: "Share your experience and help build our trusted community.",
    icon: "⭐",
    color: "bg-primary-light text-primary",
  },
];

const benefits = [
  {
    title: "For Task Posters",
    features: [
      "Get help from verified local experts",
      "Set your own budget and timeline",
      "Build consistent habits with regular help",
      "Safe and secure payment system",
      "Direct chat with helpers",
      "Satisfaction guarantee",
    ],
    icon: "🎯",
  },
  {
    title: "For Task Doers",
    features: [
      "Choose tasks that fit your schedule",
      "Set your own rates",
      "Build your reputation and earn more",
      "Get paid securely and quickly",
      "Meet new people in your community",
      "Grow your local business",
    ],
    icon: "💪",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How TaskHabit Works
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your go-to platform for getting things done and building productive
            habits
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 bg-white`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Using TaskHabit
            </h2>
            <p className="text-xl text-gray-600">
              Whether you need help or want to help others, TaskHabit has you
              covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-xl shadow-sm p-8"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <ul className="space-y-4">
                  {benefit.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-primary mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join our community and start building productive habits today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Post a Task
            </button>
            <button className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-hover transition-colors">
              Become a Helper
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
