import { BrowserRouter as Router } from "react-router-dom";
import ARoutes from "./ARoutes.tsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/css/custom.css'

function App() {
  return (
    <Router>
          <ARoutes />
        </Router>
  )
}

export default App
