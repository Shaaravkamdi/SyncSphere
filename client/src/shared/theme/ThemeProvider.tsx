import { ReactNode, useState } from "react";
import type { Theme } from "./theme.types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({
    children,
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>("system")

    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    );
}