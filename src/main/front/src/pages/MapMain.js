import React from "react";
import "../styles/MapMain.css";
import MapDetail from "../pages/MapDetail";

const dummyPlaces = [
    {
        id: 1,
        category: "카테고리명",
        name: "업체명",
        rating: 4.5,
        address: "경기도 용인시 기흥구 구갈동 72번지",
        hours: "운영시간 : 17:00 ~ 22:00",
    },
    {
        id: 2,
        category: "카테고리명",
        name: "업체명",
        rating: 4.5,
        address: "경기도 용인시 기흥구 구갈동 72번지",
        hours: "운영시간 : 17:00 ~ 22:00",
    },
];

export default function MapMain() {
    return (
        <div className="main-page">
            {/* 왼쪽 리스트 영역 */}
            <div className="main-left">
                <div className="main-search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        className="search-input"
                        placeholder="검색어를 입력해주세요."
                    />
                </div>

                <div className="main-filter-row">
                    <div className="main-category-buttons">
                        <button className="category-btn active">카테고리명1</button>
                        <button className="category-btn">카테고리명2</button>
                    </div>

                    <div className="main-sort-row">
                        <select className="sort-select">
                            <option>별점 순</option>
                            <option>리뷰 많은 순</option>
                            <option>거리 순</option>
                        </select>
                        <button className="search-btn">조회</button>
                    </div>
                </div>

                <div className="main-list">
                    {dummyPlaces.map((p) => (
                        <div key={p.id} className="place-card">
                            <div className="place-thumbnail" />
                            <div className="place-info">
                                <div className="place-category">{p.category}</div>
                                <div className="place-title-row">
                                    <span className="place-name">{p.name}</span>
                                    <span className="place-rating">★ {p.rating}</span>
                                </div>
                                <div className="place-address">{p.address}</div>
                                <div className="place-hours">{p.hours}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 오른쪽 지도 + 디테일 영역 */}
            <div className="main-map">
                <div className="map-body">
                    <div className="map-placeholder">
                        <div className="map-detail-wrapper">
                            <MapDetail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}