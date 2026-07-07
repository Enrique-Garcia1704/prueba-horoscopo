const spanishToEnglishSign = {
    'aries': 'aries',
    'tauro': 'taurus',
    'geminis': 'gemini',
    'cancer': 'cancer',
    'leo': 'leo',
    'virgo': 'virgo',
    'libra': 'libra',
    'escorpio': 'scorpio',
    'sagitario': 'sagittarius',
    'capricornio': 'capricorn',
    'acuario': 'aquarius',
    'piscis': 'pisces'
};

async function translateText(text) {
    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(text)}`);
        const json = await res.json();
        return json[0].map(item => item[0]).join('');
    } catch (e) {
        console.error(e);
        return text; // fallback
    }
}

export async function fetchHoroscope(sign) {
    const englishSign = spanishToEnglishSign[sign] || sign;
    const apiKey = import.meta.env.VITE_API_KEY || '';
    
    if (!apiKey) {
        throw new Error('No se encontró la API Key en el archivo .env. Asegúrate de configurar VITE_API_KEY.');
    }
    
    const response = await fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${englishSign}`, {
        headers: { 'X-Api-Key': apiKey }
    });
    
    if (!response.ok) {
        throw new Error(`Error en API: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Translate
    const translatedText = await translateText(data.horoscope);
    
    return translatedText;
}
