import{BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <main>
          <AppRoutes/>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
