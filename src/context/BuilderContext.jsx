import { createContext, useState } from "react";
import { useEffect } from "react";


export const BuilderContext = createContext();

export function BuilderProvider({ children }) {
    const [sections, setSections] = useState([]);

    const [theme, setTheme] = useState("modern");

    function updateContent(index, newText) {
        const copy = [...sections];
        copy[index].content = newText;
        setSections(copy);
    }

    useEffect(() => {
        const saved = localStorage.getItem("portfolio");
        if (saved) setSections(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("portfolio", JSON.stringify(sections));
    }, [sections]);

    function reorderSections(list) {
        setSections(list);
    }

    return (
        <BuilderContext.Provider
            value={{ sections, setSections, theme, setTheme, updateContent, reorderSections }}
        >
            {children}
        </BuilderContext.Provider>
    );
}
