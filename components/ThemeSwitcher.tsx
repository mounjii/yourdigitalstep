import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => setIsMounted(true), []);

    if (!isMounted) {
        // Render a placeholder to prevent layout shift on initial load
        return <div className="w-10 h-6" />;
    }

    return (
        <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            onClick={toggleTheme}
            className={`relative inline-flex items-center h-6 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary focus-visible:ring-brand-accent
                ${theme === 'dark' ? 'bg-brand-accent' : 'bg-gray-300 dark:bg-gray-600'}`
            }
            aria-label="Toggle theme"
        >
            <span
                aria-hidden="true"
                className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out
                    ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`
                }
            >
                {/* Light mode icon wrapper */}
                <span
                    className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ease-in
                        ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`
                    }
                >
                    <SunIcon className="h-3.5 w-3.5 text-yellow-500" />
                </span>

                {/* Dark mode icon wrapper */}
                <span
                    className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ease-out
                        ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`
                    }
                >
                    <MoonIcon className="h-3.5 w-3.5 text-brand-accent" />
                </span>
            </span>
        </button>
    );
};

export default ThemeSwitcher;