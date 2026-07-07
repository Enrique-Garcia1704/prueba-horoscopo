import React, { useMemo } from 'react';

export default function Starfield() {
    const stars = useMemo(() => {
        const starElements = [];
        for (let i = 0; i < 150; i++) {
            const left = Math.random() * 100 + '%';
            const top = Math.random() * 100 + '%';
            const duration = (2 + Math.random() * 4) + 's';
            const delay = (Math.random() * 5) + 's';
            const isTwinkle = Math.random() > 0.7;

            starElements.push(
                <div
                    key={i}
                    className={`star ${isTwinkle ? 'star-twinkle' : ''}`}
                    style={{
                        left,
                        top,
                        '--duration': duration,
                        '--delay': delay
                    }}
                />
            );
        }
        
        for (let i = 0; i < 6; i++) {
            const left = (20 + Math.random() * 80) + '%';
            const top = (Math.random() * 40) + '%';
            const duration = (8 + Math.random() * 10) + 's';
            const delay = (Math.random() * 15) + 's';

            starElements.push(
                <div
                    key={`shoot-${i}`}
                    className="shooting-star"
                    style={{
                        left,
                        top,
                        '--duration': duration,
                        '--delay': delay
                    }}
                />
            );
        }
        
        return starElements;
    }, []);

    return (
        <div id="starsContainer" className="absolute inset-0 pointer-events-none opacity-50 z-0 overflow-hidden">
            {stars}
        </div>
    );
}
