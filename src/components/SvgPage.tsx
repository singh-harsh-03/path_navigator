import floorPlan from "../assets/img/mall-floor-plan.svg";
import { useState } from "react";   

const SvgPage = () => {
  const [shapes, setShapes] = useState<any[]>([]);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [drawing, setDrawing] = useState<any | null>(null);
  const [freehandPoints, setFreehandPoints] = useState<{ x: number; y: number }[]>([]);

  // Start drawing on mouse down
  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!selectedTool || selectedTool === "eraser") return;

    const { clientX, clientY } = event;
    const svg = event.currentTarget.getBoundingClientRect();
    const x = clientX - svg.left;
    const y = clientY - svg.top;

    if (selectedTool === "freehand") {
      setFreehandPoints([{ x, y }]);
    } else {
      setDrawing({ type: selectedTool, x, y, width: 0, height: 0 });
    }
  };

  // Resize or update the shape while dragging
  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!drawing && selectedTool !== "freehand") return;

    const { clientX, clientY } = event;
    const svg = event.currentTarget.getBoundingClientRect();
    const x = clientX - svg.left;
    const y = clientY - svg.top;

    if (selectedTool === "freehand" && freehandPoints.length > 0) {
      setFreehandPoints((prev) => [...prev, { x, y }]);
    } else {
      setDrawing((prev: any) => ({ ...prev, width: x - prev.x, height: y - prev.y }));
    }
  };

  // Finish drawing on mouse up
  const handleMouseUp = () => {
    if (selectedTool === "freehand" && freehandPoints.length > 1) {
      setShapes([...shapes, { type: "freehand", points: freehandPoints }]);
      setFreehandPoints([]);
    } else if (drawing) {
      setShapes([...shapes, drawing]);
      setDrawing(null);
    }
  };

  const handleSvgClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (selectedTool !== "dot") return; // Only allow placing dots
  
    const { clientX, clientY } = event;
    const svg = event.currentTarget.getBoundingClientRect();
    const x = clientX - svg.left;
    const y = clientY - svg.top;
  
    setShapes((prevShapes) => [
      ...prevShapes,
      { type: "dot", x, y },
    ]);
  };
  
  // Eraser Functionality: Click on a shape to remove it
  const handleShapeClick = (index: number) => {
    if (selectedTool === "eraser") {
      setShapes(shapes.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full p-4 bg-white shadow-md flex items-center justify-between fixed top-0">
        <h2 className="text-lg font-semibold">SVG Viewer</h2>

        {/* Tool Icons */}
        <div className="flex gap-2">
          {[
            { name: "square", icon: "⬛" },
            { name: "line", icon: "〰️" },
            { name: "dot", icon: "•" },
            { name: "dotted-line", icon: "╌╌╌" },
            { name: "freehand", icon: "✏️" },
            { name: "eraser", icon: "🧽" },
          ].map(({ name, icon }) => (
            <button
              key={name}
              title={name.charAt(0).toUpperCase() + name.slice(1)}
              onClick={() => setSelectedTool(name)}
              className={`p-2 border rounded text-2xl ${
                selectedTool === name ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Display with Drawing Functionality */}
      <div className="flex justify-center items-center w-full h-full p-4">
        <svg
          className="w-full h-[90vh] max-w-6xl border bg-white"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid meet"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleSvgClick}
        >
          {/* Background Floor Plan */}
          <image href={floorPlan} width="100%" height="100%" />

          {/* Render Shapes */}
          {shapes.map((shape, index) => {
            if (shape.type === "square") {
              return (
                <rect
                  key={index}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  fill="none"
                  stroke="gray"
                  opacity="1"
                  strokeWidth="4"
                  onClick={() => handleShapeClick(index)}
                />
              );
            } else if (shape.type === "line") {
              return (
                <line
                  key={index}
                  x1={shape.x}
                  y1={shape.y}
                  x2={shape.x + shape.width}
                  y2={shape.y + shape.height}
                  stroke="black"
                  strokeWidth="2"
                  onClick={() => handleShapeClick(index)}
                />
              );
            } else if (shape.type === "dotted-line") {
              return (
                <line
                  key={index}
                  x1={shape.x}
                  y1={shape.y}
                  x2={shape.x + shape.width}
                  y2={shape.y + shape.height}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5,5" // Makes the line dashed
                  onClick={() => handleShapeClick(index)}
                />
              );
            } else if (shape.type === "dot") {
                return (
                  <circle
                    key={index}
                    cx={shape.x}
                    cy={shape.y}
                    r="5" // Size of the dot
                    fill="gray" // Grey color for the dot
                  />
                );
            }
            
            else if (shape.type === "freehand") {
              return (
                <polyline
                    key={index}
                    points={shape.points
                    .map((p: { x: number; y: number }) => `${p.x},${p.y}`) // Explicitly type 'p'
                    .join(" ")}
                    fill="none"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleShapeClick(index)}
                />
              );
            }
            return null;
          })}

          {/* Drawing Preview (While Dragging) */}
          {drawing && selectedTool === "square" && (
            <rect
                x={drawing.x}
                y={drawing.y}
                width={drawing.width}
                height={drawing.height}
                fill="none"
                stroke="grey"
                strokeWidth="4"
            />
          )}
          {drawing && selectedTool === "line" && (
            <line
              x1={drawing.x}
              y1={drawing.y}
              x2={drawing.x + drawing.width}
              y2={drawing.y + drawing.height}
              stroke="black"
              strokeWidth="2"
            />
          )}
          {drawing && selectedTool === "dotted-line" && (
            <line
              x1={drawing.x}
              y1={drawing.y}
              x2={drawing.x + drawing.width}
              y2={drawing.y + drawing.height}
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          )}

          {/* Freehand Drawing Preview */}
          {selectedTool === "freehand" && freehandPoints.length > 1 && (
            <polyline
              points={freehandPoints.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default SvgPage;
