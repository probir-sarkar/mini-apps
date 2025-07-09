import { ShapeNames, shapes, useFlexContext } from "@/context-provider";

const BoxProperties = () => {
  const { selectedshape, handleShapeChange } = useFlexContext();

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Shape</h2>
        <div className="flex flex-col gap-4">
          {shapes.map((shape) => {
            return (
              <div key={shape.name} className="flex items-center gap-x-1">
                <input
                  name={shape.name}
                  type="radio"
                  id={shape.name}
                  className="w-4 h-4"
                  value={shape.name}
                  checked={shape.name === selectedshape.name || false}
                  onChange={(e) =>
                    handleShapeChange(e.target.value as ShapeNames)
                  }
                />
                <label htmlFor="push-everything" className="block text-xs">
                  {shape.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxProperties;
