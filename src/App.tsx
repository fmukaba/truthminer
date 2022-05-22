import "./App.css";
import { AppRoutes } from "./routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
