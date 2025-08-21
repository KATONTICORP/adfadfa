import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OasisSite from "./OasisSite";
// Import the dynamic project page component.  This page will read the slug from
// the URL and fetch the corresponding project data from the data module.
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OasisSite />} />
        {/* When the path matches /projects/:slug load the ProjectPage component. */}
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}
