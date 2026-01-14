import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";

export default function Editor() {
    const { sections, setSections, updateContent } = useContext(BuilderContext);

    function addSection(type) {
        setSections([...sections, {
            type,
            content: "",
            title: type,
            items: []
        }]);
    }


    return (
        <div className="w-[280px] border-r border-slate-700 p-4">
            <h2 className="font-bold mb-4">Sections</h2>

            {["Hero", "About", "Education", "Projects", "Skills", "Contact"].map(s => (

                <button
                    key={s}
                    onClick={() => addSection(s)}
                    className="block w-full mb-2 p-2 bg-slate-800 rounded hover:bg-slate-700"
                >
                    + {s}
                </button>
            ))}

            <div className="mt-6 space-y-3">
                {sections.map((sec, i) => (
                    <input
                        key={i}
                        value={sec.content}
                        onChange={e => updateContent(i, e.target.value)}
                        className="w-full p-2 bg-slate-800 rounded"
                    />
                ))}
            </div>
        </div>
    );
}
