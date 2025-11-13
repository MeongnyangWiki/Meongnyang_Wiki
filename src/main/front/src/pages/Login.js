// src/pages/Login.js
import React from "react";
import "../styles/Login.css";

export default function Login() {
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    const handleNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver";
    };

    const handleKakaoLogin = () => {
        // 카카오는 나중에 붙일 거면 일단 alert만
        // 실제로 쓸 때는 백엔드 주소로 바꿔주면 됨
        // window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
        alert("카카오 로그인은 아직 준비 중이에요 😅");
    };

    return (
        <div className="login-page">
            <div className="login-modal">
                {/* X 버튼 (필요 없으면 지워도 됨) */}
                <button className="login-close-btn" onClick={() => (window.location.href = "/")}>
                    ✕
                </button>

                {/* 타이틀 */}
                <h1 className="login-title">LOGIN</h1>
                <p className="login-subtitle">
                    소셜 계정으로 간편하게 로그인할 수 있어요.
                    <br />
                    첫 로그인 시 자동으로 회원가입됩니다.
                </p>

                {/* 소셜 로그인 버튼들 */}
                <div className="login-social-column">
                    <button className="social-full naver" onClick={handleNaverLogin}>
                        <span className="social-full-label">네이버로 로그인</span>
                    </button>

                    <button className="social-full google" onClick={handleGoogleLogin}>
                        <span className="social-full-label">Google 계정으로 로그인</span>
                    </button>

                    <button className="social-full kakao" onClick={handleKakaoLogin}>
                        <span className="social-full-label">카카오로 로그인</span>
                    </button>
                </div>

                {/* 아래 작은 텍스트들 */}
                <div className="login-bottom-text">
                    <span>로그인함으로써 이용약관 및 개인정보 처리방침에 동의하게 됩니다.</span>
                </div>
            </div>
        </div>
    );
}