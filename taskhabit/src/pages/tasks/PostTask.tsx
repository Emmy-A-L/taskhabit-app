import { useState } from "react";
import type { TaskCategory } from "../../types";
import Button from "../../components/ui/Button";

const categories: TaskCategory[] = [
  "Cleaning",
  "Errands",
  "Tech Setup",
  "Home Maintenance",
  "Moving Help",
  "Personal Assistant",
  "Other",
];

export default function PostTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "" as TaskCategory,
    budgetMin: "",
    budgetMax: "",
    location: "",
    deadline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement task posting logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Post a Task</h1>
          <p className="text-gray-600 mb-8">
            Describe your task to receive offers from qualified helpers in your
            area.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Task Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Help with home office setup"
                className="input-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="input-primary"
                placeholder="Provide details about what needs to be done..."
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-primary"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budgetMin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Minimum Budget ($)
                </label>
                <input
                  type="number"
                  id="budgetMin"
                  name="budgetMin"
                  value={formData.budgetMin}
                  onChange={handleChange}
                  min="0"
                  className="input-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="budgetMax"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Maximum Budget ($)
                </label>
                <input
                  type="number"
                  id="budgetMax"
                  name="budgetMax"
                  value={formData.budgetMax}
                  onChange={handleChange}
                  min="0"
                  className="input-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                className="input-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deadline (Optional)
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="block w-full rounded-[8px] border-[#d1d5dc] focus:border-[#3dbe9e] focus:ring-[#3dbe9e] 
        font-[14px] leading-[1.4286]"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full px-4 py-1 bg-[#3dbe9e] text-white hover:bg-[#37ab8f] focus:ring-2 focus:ring-[#3dbe9e]/20 transition-all">
                Post Task
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
