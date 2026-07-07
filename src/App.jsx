import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import ZodiacWheel from './components/ZodiacWheel';
import TarotCard from './components/TarotCard';
import { fetchHoroscope } from './utils/api';

export default function App() {
    const [activeSign, setActiveSign] = useState(null);
    const [horoscopeText, setHoroscopeText] = useState('');

    const handleSignClick = async (sign) => {
        setActiveSign(sign);
        setHoroscopeText('Interpretando alineaciones celestiales y consultando al cosmos...');
        
        try {
            const result = await fetchHoroscope(sign);
            setHoroscopeText(result);
        } catch (err) {
            setHoroscopeText(`<span class="text-red-500 font-bold block mb-2">Error celestial</span> ${err.message}`);
        }
    };

    const handleCloseModal = () => {
        setActiveSign(null);
        setHoroscopeText('');
    };

    useEffect(() => {
        if (activeSign) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeSign]);

    return (
        <div className="font-body-md text-body-md">
            <main>
                {/* Hero Section */}
                <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="https://img.magnific.com/foto-gratis/concepto-collage-numerologia_23-2150061748.jpg"
                            alt="Signos del zodiaco" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
                    </div>
                    <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
                        <h1 className="uncial-antiqua-regular text-3xl sm:text-display-lg md:text-[64px] text-white mb-4 sm:mb-8 leading-tight">
                            Tu horóscopo del día
                        </h1>
                        <p className="font-body-lg text-base sm:text-[18px] text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
                            Bienvenido a nuestro sitio, puedes consultar tu horóscopo del día. GRATIS
                        </p>
                    </div>
                </section>

                <div className="relative">
                    <Starfield />
                    <ZodiacWheel onSignClick={handleSignClick} />
                </div>
            </main>

            {activeSign && (
                <TarotCard 
                    sign={activeSign} 
                    horoscopeText={horoscopeText} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
}
