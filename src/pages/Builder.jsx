import { useContext } from "react";
import { BuilderContext } from "../context/BuilderContext";
import Editor from "../components/editor/Editor";
import Preview from "../components/preview/Preview";
import AIHelper from "../components/ai/AIHelper";
import ExportPanel from "../components/export/ExportPanel";

export default function Builder() {
    const { theme, setTheme } = useContext(BuilderContext);

    return (
        <div className={`h-screen flex ${theme === "dark" ? "bg-black" : "bg-slate-900"} text-white`}>
            <Editor />
            <Preview />
            <div className="w-[320px] border-l border-slate-700 flex flex-col">
                <AIHelper />
                <div className="p-4">
                    <select
                        onChange={e => setTheme(e.target.value)}
                        className="w-full p-2 bg-slate-800 rounded"
                    >
                        <option value="modern">Modern</option>
                        <option value="minimal">Minimal</option>
                        <option value="elegant">Elegant</option>

                    </select>
                </div>
                <ExportPanel />
            </div>
        </div>
    );
}
