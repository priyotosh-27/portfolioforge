import { useState, useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { generatePortfolio } from "../../engine/aiEngine";

export default function AIHelper() {
    const { sections, setSections } = useContext(BuilderContext);
    const [profile, setProfile] = useState({
        name: "",
        role: "",
        skills: "",
        projects: ""
    });

    function generate() {
        const updated = generatePortfolio([...sections], profile);
        setSections(updated);
    }

    return (
        <div className="p-4 space-y-3 border-b border-slate-700">
            <h3 className="font-bold">AI Assistant</h3>

            <input
                placeholder="Your Name"
                className="w-full p-2 bg-slate-800 rounded"
                onChange={e => setProfile({ ...profile, name: e.target.value })}
            />

            <input
                placeholder="Your Role"
                className="w-full p-2 bg-slate-800 rounded"
                onChange={e => setProfile({ ...profile, role: e.target.value })}
            />

            <input
                placeholder="Skills (comma separated)"
                className="w-full p-2 bg-slate-800 rounded"
                onChange={e => setProfile({ ...profile, skills: e.target.value })}
            />

            <input
                placeholder="Top Projects"
                className="w-full p-2 bg-slate-800 rounded"
                onChange={e => setProfile({ ...profile, projects: e.target.value })}
            />

            <button
                onClick={generate}
                className="w-full bg-indigo-600 p-2 rounded font-semibold"
            >
                Generate Portfolio
            </button>
        </div>
    );
}
