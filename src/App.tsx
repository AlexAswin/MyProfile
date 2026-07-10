import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";

export default function App () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}