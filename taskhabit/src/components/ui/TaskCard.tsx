import { Link } from "react-router-dom";
import type { Task } from "../../types";
import { formatDistance } from "date-fns";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <Link to={`/tasks/${task.id}`} className="block p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {task.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
              {task.description}
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-primary-light px-2.5 py-0.5 text-sm font-medium text-primary">
            {task.category}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">
              ${task.budget.min} - ${task.budget.max}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-500">
              {task.location.city}, {task.location.state}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {formatDistance(new Date(task.date.posted), new Date(), {
              addSuffix: true,
            })}
          </div>
        </div>

        <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0">
              <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                {/* Placeholder for user avatar */}
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {task.posterDetails.name}
              </p>
              <div className="flex items-center">
                {/* Star rating */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(task.posterDetails.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-gray-500">
                  ({task.posterDetails.rating.toFixed(1)})
                </span>
              </div>
            </div>
          </div>
          <div>
            {task.offers && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                {task.offers.length} offer{task.offers.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
