export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location?: string;
  governmentId?: {
    type: string;
    verified: boolean;
    uploadDate: Date;
  };
  rating?: number;
  tasksCompleted?: number;
  memberSince: Date;
  role: "poster" | "doer";
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  date: {
    posted: Date;
    deadline?: Date;
  };
  status: TaskStatus;
  posterDetails: {
    id: string;
    name: string;
    rating: number;
  };
  offers?: Offer[];
}

export type TaskCategory =
  | "Cleaning"
  | "Errands"
  | "Tech Setup"
  | "Home Maintenance"
  | "Moving Help"
  | "Personal Assistant"
  | "Other";

export type TaskStatus = "open" | "in-progress" | "completed" | "cancelled";

export interface Offer {
  id: string;
  taskId: string;
  doerId: string;
  doerName: string;
  doerRating: number;
  amount: number;
  currency: string;
  message: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}
