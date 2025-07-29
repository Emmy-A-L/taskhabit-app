import { useState } from "react";
import type { User } from "../types";
import Button from "../components/ui/Button";

// Mock user data - Replace with actual user data from your authentication system
const mockUser: User = {
  id: "user1",
  name: "Alex Johnson",
  email: "alex@example.com",
  bio: "Experienced in home organization and tech setup. Always ready to help!",
  location: "Orile, Lagos",
  rating: 4.8,
  tasksCompleted: 24,
  memberSince: new Date(2025, 0, 15),
  role: "doer",
  governmentId: {
    type: "driver_license",
    verified: true,
    uploadDate: new Date(2024, 0, 15),
  },
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUser.name,
    bio: mockUser.bio || "",
    location: mockUser.location || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-primary h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <span className="inline-block h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white">
                {mockUser.avatar ? (
                  <img
                    src={mockUser.avatar}
                    alt={mockUser.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* Profile Content */}
          <div className="mt-20 px-8 pb-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {mockUser.name}
                </h1>
                <p className="text-gray-600">{mockUser.email}</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="input-primary mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    rows={4}
                    className="input-primary mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="input-primary mt-1"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            ) : (
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm text-gray-500">Rating</p>
                    <div className="flex items-center mt-1">
                      <span className="text-2xl font-bold text-gray-900">
                        {mockUser.rating}
                      </span>
                      <div className="ml-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`inline-block h-4 w-4 ${
                              i < Math.floor(mockUser.rating || 0)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm text-gray-500">Tasks Completed</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {mockUser.tasksCompleted}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {mockUser.memberSince.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    About
                  </h2>
                  <p className="text-gray-600">{mockUser.bio}</p>
                </div>

                {/* Verification Status */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Verification Status
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          Government ID
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {mockUser.governmentId?.type.replace("_", " ")}
                        </p>
                      </div>
                      {mockUser.governmentId?.verified ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Verified
                        </span>
                      ) : (
                        <Button variant="secondary" size="sm">
                          Verify Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;