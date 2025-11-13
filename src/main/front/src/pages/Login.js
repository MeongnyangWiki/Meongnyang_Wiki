// src/pages/Login.js
import React, { useState } from "react";
import "../style/Login.css"; // 아래 CSS 파일도 같이 만들어줘

export default function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("로그인 시도:", { id, pw });

    };

    return (
        <div className="login-page">
            <div className="login-modal">
                <button className="login-close-btn">✕</button>
                <h1 className="login-title">LOGIN</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-input-wrapper">
                        <input
                            type="text"
                            placeholder="아이디"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            className="login-input"
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                            className="login-input"
                        />
                    </div>

                    <button type="submit" className="login-button">
                        로그인
                    </button>
                </form>

                <div className="login-bottom">
                    <div className="login-socials">
                        <button className="social-btn naver">N</button>
                        <button className="social-btn google">G</button>
                        <button className="social-btn kakao">K</button>
                    </div>

                    <div className="login-links">
                        <button className="text-link">아이디/비밀번호 찾기</button>
                        <span className="divider">|</span>
                        <button className="text-link">회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}