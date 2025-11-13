import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={<Main />} />

                {/* 로그인 페이지 */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;