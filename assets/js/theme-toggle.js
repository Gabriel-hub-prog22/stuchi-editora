/**
 * Theme Toggle Logic
 * Handles Dark/Light mode switching with persistence
 */

(function () {
    const STORAGE_KEY = 'theme';
    const LIGHT_THEME = 'light';
    const DARK_THEME = 'dark';

    // Icons
    const ICON_MOON = '🌙'; // Dark mode active (shows moon) -> Click to switch to Light? 
    // Or 'Sun' to show "Switch to Light"?
    // User request: "Icon + text" or "Icon + tooltip"
    // Standard convention: Show the icon of the MODE YOU ARE IN or the MODE YOU WILL SWITCH TO?
    // Usually a toggle shows the current state (Moon = Night mode is On).
    // Let's stick to: Moon = Dark Mode, Sun = Light Mode.
    const ICON_SUN = '☀️';

    function getSavedTheme() {
        return localStorage.getItem(STORAGE_KEY);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateInterface(theme);
    }

    function updateInterface(theme) {
        const isLight = theme === LIGHT_THEME;
        const toggles = document.querySelectorAll('.theme-toggle');

        toggles.forEach(btn => {
            // Icon: if Light mode is active, show Sun (or Moon to go back?)
            // Let's show the CURRENT status icon to avoid confusion, or the action.
            // Most sites: Click Sun -> Becomes Light.
            // Let's do:
            // If Dark theme -> Show Sun (Action: Switch to Light)
            // If Light theme -> Show Moon (Action: Switch to Dark)
            const icon = isLight ? ICON_MOON : ICON_SUN;
            const tooltip = isLight ? "Ativar Modo Escuro" : "Ativar Modo Claro";

            // Update HTML content (Icon)
            // If there is a span.theme-icon, update it, otherwise update button content
            const iconSpan = btn.querySelector('.theme-icon');
            if (iconSpan) {
                iconSpan.textContent = icon;
            } else {
                btn.textContent = icon;
            }

            // Update attributes
            btn.setAttribute('aria-label', tooltip);
            btn.setAttribute('data-tooltip', tooltip);
        });
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || DARK_THEME;
        const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(next);
    }

    // Initialization
    function init() {
        const saved = getSavedTheme();
        // Default is Dark. Only set 'light' if explicitly saved.
        // If saved is 'dark' or null, we stay in dark (default CSS).
        if (saved === LIGHT_THEME) {
            setTheme(LIGHT_THEME);
        } else {
            // Ensure UI matches default dark
            updateInterface(DARK_THEME);
        }

        // Attach click listeners
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(btn => {
            btn.addEventListener('click', toggleTheme);
        });
    }

    // Run on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
