import { useState, useEffect } from 'react';

export const ResponsiveText = ({ fullText, shortText }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [text, setText] = useState(fullText);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 768) {
            setText(shortText);
        } else {
            setText(fullText);
        }
    }, [windowWidth, fullText, shortText]);

    return (
        <p className="text-white">{text}</p>
    );
}