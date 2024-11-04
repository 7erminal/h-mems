import { BrowserRouter as Router } from "react-router-dom";
import ARoutes from "./ARoutes.tsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/css/custom.css'
import { ApplicationProvider } from './resources/providers/ApplicationProvider.tsx'

function App() {
  return (
    <ApplicationProvider>
      <Router>
        <ARoutes />
      </Router>
    </ApplicationProvider>
  )
}

export default App
