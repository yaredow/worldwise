import AppNav from "../components/AppNav.jsx";
import PageNav from "../components/PageNav.jsx";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  );
}
