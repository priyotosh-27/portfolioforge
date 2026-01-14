import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { generateHTML } from "../../engine/exportEngine";


export default function ExportPanel() {
    const { sections } = useContext(BuilderContext);

    function exportHTML() {
        const html = generateHTML(sections);
        const blob = new Blob([html], { type: "text/html" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "portfolio.html";
        a.click();
    }


    return (
        <div className="p-4 mt-auto">
            <button
                onClick={exportHTML}
                className="w-full bg-green-600 p-3 rounded-xl hover:bg-green-700"
            >
                Export Portfolio
            </button>
        </div>
    );
}
