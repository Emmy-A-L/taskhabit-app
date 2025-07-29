import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Tasks Completed", value: "100K+" },
  { label: "Cities", value: "100+" },
  { label: "Success Rate", value: "98%" },
];

const values = [
  {
    title: "Community First",
    description:
      "We believe in the power of community to help each other grow and succeed.",
    icon: "🤝",
  },
  {
    title: "Trust & Safety",
    description: "Every helper is verified and every transaction is secure.",
    icon: "🛡️",
  },
  {
    title: "Habit Building",
    description:
      "We help you turn one-time tasks into consistent, productive habits.",
    icon: "📈",
  },
  {
    title: "Local Impact",
    description:
      "Supporting local communities by connecting neighbors who can help each other.",
    icon: "🏠",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/team/sarah.jpg", // Add actual image paths
    bio: "Former Product Lead at TaskRabbit, passionate about community building.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    image: "/team/marcus.jpg",
    bio: "Tech veteran with 15 years experience in marketplace platforms.",
  },
  {
    name: "Aisha Patel",
    role: "Head of Community",
    image: "/team/aisha.jpg",
    bio: "Community engagement expert with a background in social work.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            To empower communities by connecting people who need help with those
            who can help, fostering productivity and building lasting habits
            through mutual support.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">The people behind TaskHabit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <span className="inline-block h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                    {/* Add actual images later */}
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Be part of something bigger. Help others, earn money, and build
            habits together.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
