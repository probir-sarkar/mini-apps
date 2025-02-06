import { useFlexContext } from "../context-provider";
import { easingMethods, sections } from "../data";
const PropertySelector = () => {
  const { flexStyles, handleStyleChange, easing, setEasing } = useFlexContext();
  return (
    <div className="space-y-8 p-4">
      {sections.map((section) => {
        return (
          <div key={section.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">{section.title}</h2>
            <div className="flex flex-col gap-4">
              {section.options.map((option) => {
                return (
                  <div key={option} className="flex items-center gap-x-1">
                    <input
                      name={section.property}
                      type="radio"
                      id={option}
                      className="w-4 h-4"
                      value={option}
                      checked={flexStyles[section.property] === option || false}
                      onChange={(e) => handleStyleChange(section.property, e.target.value)}
                    />
                    <label htmlFor="push-everything" className="block text-xs">
                      {option}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Animation Easing</h2>
        <div className="flex flex-col gap-4">
          {easingMethods.map((option) => {
            return (
              <div key={option} className="flex items-center gap-x-1">
                <input
                  name={option}
                  type="radio"
                  id={option}
                  className="w-4 h-4"
                  value={option}
                  checked={easing === option || false}
                  onChange={(e) => setEasing(e.target.value)}
                />
                <label htmlFor="push-everything" className="block text-xs">
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertySelector;
