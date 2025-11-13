import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapMain from "./pages/MapMain";
import MapDetail from "./pages/MapDetail";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                {/* map main 페이지 */}
                <Route path="/" element={<MapMain />} />
                {/* map detail 페이지 */}
                <Route path="/" element={<MapDetail />} />
                {/* login 페이지 */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;