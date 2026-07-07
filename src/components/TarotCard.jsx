import React from 'react';

const signImages = {
    'aries': '/aries.png',
    'tauro': '/taurus.png',
    'geminis': '/gemini_alchemical.png',
    'cancer': '/artistic_alchemical_illustration_for_a_cancer_horoscope._symbolic.png',
    'leo': '/artistic_alchemical_illustration_for_a_leo_horoscope._symbolic_representation.png',
    'virgo': '/artistic_alchemical_illustration_for_a_virgo_horoscope._symbolic_representation.png',
    'libra': '/artistic_alchemical_illustration_for_a_libra_horoscope._symbolic_representation.png',
    'escorpio': '/artistic_alchemical_illustration_for_a_scorpio_horoscope._symbolic.png',
    'sagitario': '/artistic_alchemical_illustration_for_a_sagittarius_horoscope._symbolic.png',
    'capricornio': '/artistic_alchemical_illustration_for_a_capricorn_horoscope._symbolic.png',
    'acuario': '/artistic_alchemical_illustration_for_an_aquarius_horoscope._symbolic.png',
    'piscis': '/artistic_alchemical_illustration_for_a_pisces_horoscope._symbolic.png'
};

export default function TarotCard({ sign, horoscopeText, onClose }) {
    if (!sign) return null;
    
    const normalizedSign = sign.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const imgSrc = signImages[normalizedSign] || '/gemini_alchemical.png';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div className="relative tarot-card font-lora">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-[#8a5a19] hover:text-[#2c2820] bg-transparent w-8 h-8 flex items-center justify-center transition-colors z-30 drop-shadow-md rounded-full hover:bg-black/5"
                    onClick={onClose}>
                    <span className="material-symbols-outlined text-[28px]">close</span>
                </button>
                <div className="tarot-content-scroll">
                    {/* 1. Imagen centrada */}
                    <div className="tarot-image-container">
                        <img alt="Zodiac Tarot Illustration" className="tarot-image animate-fade-in" src={imgSrc} />
                    </div>
                    
                    {/* 2. Título del signo */}
                    <h1 className="tarot-title">{sign.toUpperCase()}</h1>
                    
                    {/* Subtítulo */}
                    <p className="tarot-subtitle">Tu Lectura Diaria</p>
                    
                    {/* 3. Texto descriptivo */}
                    <p className="tarot-text transition-all duration-300" dangerouslySetInnerHTML={{ __html: horoscopeText }} />
                </div>
            </div>
        </div>
    );
}
