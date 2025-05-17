
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-light">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-portfolio-blue mb-6">404</h1>
        <p className="text-2xl text-portfolio-dark mb-8">Oops! Page not found</p>
        <p className="text-lg text-portfolio-gray mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <HomeIcon size={18} /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
