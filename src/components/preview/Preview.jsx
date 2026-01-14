import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useContext } from "react";
import { BuilderContext } from "../../context/BuilderContext";
import { templates } from "../../engine/layoutEngine";

export default function Preview() {
    const { sections, reorderSections, theme } = useContext(BuilderContext);
    const style = templates[theme] || templates.modern;

    function handleDrag(result) {
        if (!result.destination) return;

        const items = [...sections];
        const [moved] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, moved);
        reorderSections(items);
    }

    return (
        <div className={`flex-1 p-10 overflow-y-auto ${style.bg} ${style.text}`}>
            <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId="list">
                    {(p) => (
                        <div ref={p.innerRef} {...p.droppableProps} className="max-w-4xl mx-auto">
                            {sections.map((sec, i) => (
                                <Draggable key={i} draggableId={String(i)} index={i}>
                                    {(p) => (
                                        <div
                                            ref={p.innerRef}
                                            {...p.draggableProps}
                                            {...p.dragHandleProps}
                                            className="
                        mb-10 p-8 rounded-2xl shadow-2xl
                        bg-white/90 backdrop-blur-lg
                        transition-all duration-300
                        hover:scale-[1.02] hover:shadow-indigo-500/30
                      "
                                        >
                                            <h2 className="text-3xl font-bold mb-3 text-gray-900 tracking-wide">
                                                {sec.type}
                                            </h2>

                                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                                {sec.content || "Start writing your content here..."}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {p.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
