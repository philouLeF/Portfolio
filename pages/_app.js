import clsx from "clsx";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const AppWithTheme = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      id="app"
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <AppWithTheme>
      <div className="m-auto h-full max-w-7xl px-4">
        <Component {...pageProps} />
      </div>
    </AppWithTheme>
  </ThemeProvider>
);

export default MyApp;
