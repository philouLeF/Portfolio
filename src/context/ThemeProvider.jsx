import { createContext, useContext, useEffect, useState } from "react";

// Dark mode exercise
const ThemeContext = createContext({ theme: "light" });

const LOCAL_STORAGE_THEME_KEY = "colorScheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const isDark = theme === "dark";
  const isLight = theme === "light";

  useEffect(() => {
    const savedColorScheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (savedColorScheme) {
      setTheme(savedColorScheme);
      return;
    }

    const mediaQuery = window.matchMedia;
    ("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    handleChange();

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "dark" ? "light" : "dark";
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  };

  const values = {
    theme,
    isDark,
    isLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
