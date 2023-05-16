import React, { useState, useEffect, useRef, useCallback } from 'react';

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
    ];

    const slideIntervalRef = useRef(null);

    const startSlider = useCallback(() => {
        slideIntervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);
    }, [slides.length]);

    useEffect(() => {
        // 슬라이더 자동 이동 설정
        startSlider();

        // 컴포넌트 언마운트 시 interval 정리
        return () => {
            clearInterval(slideIntervalRef.current);
        };
    }, [startSlider]);

    const goToSlide = (index) => {
        clearInterval(slideIntervalRef.current);
        setCurrentIndex(index);

        setTimeout(()=>{
            startSlider();
        },2000)
    };

    const renderSlide = (slide, index) => {
        return (
            <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
                <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
        );
    };

    return (
        <div className="slider">
            {slides.map(renderSlide)}
            <div className="slider-dots">
                {slides.map((slide, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainSlider;
