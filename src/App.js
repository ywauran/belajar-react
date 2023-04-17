import DetailPage from "./pages/DetailPage";
import ExplorePage from "./pages/ExplorePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
