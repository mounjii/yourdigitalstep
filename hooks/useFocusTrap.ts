import React, { useRef, useEffect, useCallback } from 'react';

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const useFocusTrap = (containerRef: React.RefObject<HTMLElement>, isOpen: boolean) => {
    const firstFocusableRef = useRef<HTMLElement | null>(null);
    const lastFocusableRef = useRef<HTMLElement | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key !== 'Tab' || !containerRef.current) return;

        const focusableElements = Array.from(
            containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        );

        if (focusableElements.length === 0) return;
        
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableRef.current) {
                e.preventDefault();
                lastFocusableRef.current?.focus();
            }
        } else { // Tab
            if (document.activeElement === lastFocusableRef.current) {
                e.preventDefault();
                firstFocusableRef.current?.focus();
            }
        }
    }, [containerRef]);
    
    useEffect(() => {
        if (isOpen && containerRef.current) {
            const focusableElements = Array.from(
                containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
            );
            
            if (focusableElements.length > 0) {
                firstFocusableRef.current = focusableElements[0];
                lastFocusableRef.current = focusableElements[focusableElements.length - 1];
                
                // Defer focus until after the modal has had time to render and transition.
                const timeoutId = setTimeout(() => {
                    firstFocusableRef.current?.focus();
                }, 100);

                document.addEventListener('keydown', handleKeyDown);

                return () => {
                    clearTimeout(timeoutId);
                    document.removeEventListener('keydown', handleKeyDown);
                }
            }
        }

    }, [isOpen, containerRef, handleKeyDown]);
};
