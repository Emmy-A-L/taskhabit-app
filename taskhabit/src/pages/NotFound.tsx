import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-bold text-primary sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-1 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button onClick={() => navigate(-1)}>Go back</button>
              <Link to="/">
                <Button variant="outline">Go home</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
