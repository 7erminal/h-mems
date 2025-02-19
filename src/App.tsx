import { BrowserRouter as Router } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/css/custom.css'
import { ApplicationProvider } from './resources/providers/ApplicationProvider.tsx'
import { AuthProvider } from "./resources/providers/AuthProvider.tsx";
import KRoutes from "./KRoutes.tsx";

function App() {
  return (
    <ApplicationProvider>
      <AuthProvider>
        <Router>
          <KRoutes />
        </Router>
      </AuthProvider>
    </ApplicationProvider>
  )
}

export default App
