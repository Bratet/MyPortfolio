// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { googleAnlyticId } from "./config";

// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------

function App() {
  ReactGA.initialize(googleAnlyticId);
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
