import React, { useEffect, useRef, useState } from 'react';

const signsData = [
    { name: 'ARIES', date: 'Mar 21 - Abr 19', angle: -90, icon: 'whh:zodiacaries', rawName: 'Aries' },
    { name: 'TAURO', date: 'Abr 20 - May 20', angle: -60, icon: 'whh:zodiactaurus', rawName: 'Tauro' },
    { name: 'GÉMINIS', date: 'May 21 - Jun 20', angle: -30, icon: 'whh:zodiacgemini', rawName: 'Géminis' },
    { name: 'CÁNCER', date: 'Jun 21 - Jul 22', angle: 0, icon: 'whh:zodiaccancer', rawName: 'Cáncer' },
    { name: 'LEO', date: 'Jul 23 - Ago 22', angle: 30, icon: 'whh:zodiacleo', rawName: 'Leo' },
    { name: 'VIRGO', date: 'Ago 23 - Sep 22', angle: 60, icon: 'whh:zodiacvirgo', rawName: 'Virgo' },
    { name: 'LIBRA', date: 'Sep 23 - Oct 22', angle: 90, icon: 'whh:zodiaclibra', rawName: 'Libra' },
    { name: 'ESCORPIO', date: 'Oct 23 - Nov 21', angle: 120, icon: 'whh:zodiacscorpio', rawName: 'Escorpio' },
    { name: 'SAGITARIO', date: 'Nov 22 - Dic 21', angle: 150, icon: 'whh:zodiacsagittarius', rawName: 'Sagitario' },
    { name: 'CAPRICORNIO', date: 'Dic 22 - Ene 19', angle: 180, icon: 'whh:zodiaccapricorn', rawName: 'Capricornio' },
    { name: 'ACUARIO', date: 'Ene 20 - Feb 18', angle: 210, icon: 'whh:zodiacaquarius', rawName: 'Acuario' },
    { name: 'PISCIS', date: 'Feb 19 - Mar 20', angle: 240, icon: 'whh:zodiacpisces', rawName: 'Piscis' }
];

export default function ZodiacWheel({ onSignClick }) {
    const wheelRef = useRef(null);
    const [tooltipContent, setTooltipContent] = useState(signsData[0]);

    useEffect(() => {
        let animationFrameId;
        let lastSign = '';

        const updateTooltip = () => {
            if (!wheelRef.current) return;
            const style = getComputedStyle(wheelRef.current);
            const matrix = new DOMMatrix(style.transform);
            const wheelRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
            const markerAngle = 90;

            let closest = signsData[0];
            let minDiff = 360;

            signsData.forEach(sign => {
                let currentPos = ((sign.angle + wheelRotation - markerAngle) % 360 + 360) % 360;
                let diff = Math.min(currentPos, 360 - currentPos);
                if (diff < minDiff) {
                    minDiff = diff;
                    closest = sign;
                }
            });

            if (closest.name !== lastSign) {
                setTooltipContent(closest);
                lastSign = closest.name;
            }
            animationFrameId = requestAnimationFrame(updateTooltip);
        };

        updateTooltip();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="py-12 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface mb-4">Los Doce Signos</h2>
                    <p className="text-on-surface-variant font-body-md text-sm sm:text-base">Selecciona tu signo para revelar tu camino</p>
                </div>

                <div className="zodiac-wheel-container flex justify-center items-center relative" style={{ minHeight: '340px' }}>
                    <div className="zodiac-wheel" ref={wheelRef}>
                        <div className="wheel-ring wheel-ring-outer"></div>
                        <div className="wheel-ring wheel-ring-middle"></div>
                        <div className="wheel-ring wheel-ring-inner"></div>
                        <div className="wheel-center">
                            <span className="iconify text-4xl sm:text-5xl md:text-6xl text-secondary-container" data-icon="whh:zodiacleo"></span>
                        </div>

                        {signsData.map((sign) => (
                            <div key={sign.name} className="wheel-sign" style={{ '--angle': `${sign.angle}deg` }} onClick={() => onSignClick(sign.rawName)}>
                                <div style={{ transform: `rotate(${-sign.angle}deg)`, width: '100%', height: '100%' }}>
                                    <div className="sign-content">
                                        <span className="iconify sign-icon" data-icon={sign.icon}></span>
                                        <span className="sign-name">{sign.name}</span>
                                        <span className="sign-tooltip">{sign.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <svg className="wheel-lines" viewBox="0 0 600 600">
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(rot => (
                                <line key={rot} x1="300" y1="300" x2="300" y2="50" stroke="rgba(212,187,255,0.3)" strokeWidth="1" transform={`rotate(${rot}, 300, 300)`} />
                            ))}
                        </svg>
                    </div>

                    <div className="wheel-marker">
                        <div className="marker-arrow"></div>
                    </div>
                    <div className="wheel-tooltip">
                        <span className="tooltip-sign">{tooltipContent.name}</span>
                        <span className="tooltip-date">{tooltipContent.date}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
