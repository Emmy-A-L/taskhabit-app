import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Turn tasks into habits.
                <br />
                <span className="text-primary">
                  Get things done — every day.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                TaskHabit connects you with trusted individuals nearby who can
                help with your daily tasks. Build productive habits while
                getting the support you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/tasks/post"
                  className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold transition-bounce hover:shadow-medium"
                >
                  Post a Task
                </Link>
                <Link
                  to="/tasks/browse"
                  className="btn-secondary px-8 py-3 rounded-lg text-lg font-semibold transition-bounce hover:shadow-medium"
                >
                  Find Tasks
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-120"
            >
              <img
                src="/hero-image-D7SPXK63.jpg"
                alt="People collaborating on tasks"
                className="rounded-2xl shadow-medium w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How TaskHabit Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and join our community of task-doers and
              seekers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary-light">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your productivity journey?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join TaskHabit today and connect with people who can help you
            achieve more.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold transition-bounce hover:shadow-medium">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

const steps = [
  {
    title: "Post a Task",
    description: "Describe what you need help with and set your budget",
    icon: "📝",
  },
  {
    title: "Receive Offers",
    description: "Get proposals from qualified task-doers in your area",
    icon: "💬",
  },
  {
    title: "Choose & Chat",
    description: "Select the best offer and coordinate details",
    icon: "🤝",
  },
  {
    title: "Build Habits",
    description: "Complete tasks and build productive routines",
    icon: "⭐",
  },
];

export default Homepage;
