import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>This page doesn't seem to exist</p>
      <Link to="/">
        <p>Back to homepage</p>
      </Link>
    </div>
  );
}

export default NotFoundPage;
