import React from 'react';
import MainSlider from "./MainSlider";

const Main = () => {
    return (
        <main>
            <section id="home">
                <MainSlider />

                {/* 카드 형식으로 보여줄 제품들 */}
                <section className="products">
                    <div className="grid-container">
                        <div className="card">
                            <img src="/images/img1.jpg" alt="Product1" />
                            <div className="card-details">
                                <h3>Product 1</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/img2.jpg" alt="Product2" />
                            <div className="card-details">
                                <h3>Product 2</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/img3.jpg" alt="Product3" />
                            <div className="card-details">
                                <h3>Product 3</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/img2.jpg" alt="Product2" />
                            <div className="card-details">
                                <h3>Product 2</h3>
                                <p>Description</p>
                            </div>
                        </div>
                        {/* 추가 제품 카드들 */}
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Main;
