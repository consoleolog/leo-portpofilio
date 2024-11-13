import {useEffect, useState} from "react";


type Theme = 'dark' | 'light';

export const useChangeTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const currentTheme = window.localStorage.getItem('theme') as Theme | null

        if (currentTheme) {
            setTheme(currentTheme)
            document.body.dataset.theme = currentTheme;
        } else {
            setTheme('light');
            document.body.dataset.theme = 'light';
        }
    }, [])


    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.body.dataset.theme = newTheme;
    }

    return [theme, changeTheme];
};