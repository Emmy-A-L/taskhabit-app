import { useState } from "react";
import TaskCard from "../../components/ui/TaskCard";
import type { Task, TaskCategory } from "../../types";
import { motion } from "framer-motion";

const categories: TaskCategory[] = [
  "Cleaning",
  "Errands",
  "Tech Setup",
  "Home Maintenance",
  "Moving Help",
  "Personal Assistant",
  "Other",
];

// Mock data - Replace with actual API call
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Help with Home Office Setup",
    description:
      "Need help setting up dual monitors, cable management, and organizing my home office space for optimal productivity.",
    category: "Tech Setup",
    budget: {
      min: 50,
      max: 100,
      currency: "USD",
    },
    location: {
      city: "Austin",
      state: "TX",
      country: "USA",
    },
    date: {
      posted: new Date(2025, 6, 28),
    },
    status: "open",
    posterDetails: {
      id: "user1",
      name: "Alex Johnson",
      rating: 4.8,
    },
    offers: [],
  },
  // Add more mock tasks as needed
];

export default function TaskFeed() {
  const [selectedCategory, setSelectedCategory] = useState<
    TaskCategory | "all"
  >("all");
  const [sortBy, setSortBy] = useState<"recent" | "budget">("recent");

  const filteredTasks = mockTasks.filter(
    (task) => selectedCategory === "all" || task.category === selectedCategory
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "recent") {
      return (
        new Date(b.date.posted).getTime() - new Date(a.date.posted).getTime()
      );
    }
    return b.budget.max - a.budget.max;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Available Tasks
            </h1>
            <p className="text-gray-600">
              Find opportunities to help others and earn
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "recent" | "budget")}
              className="input-primary"
            >
              <option value="recent">Most Recent</option>
              <option value="budget">Highest Budget</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === "all"
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  All Tasks
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Task list */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              {sortedTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TaskCard task={task} />
                </motion.div>
              ))}
              {sortedTasks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No tasks found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
