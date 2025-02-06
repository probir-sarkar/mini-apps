import FlexSection from "./components/flex-section";
import PropertySelector from "./components/property-selector";

function App() {
  return (
    <main className="max-h-screen overflow-hidden bg-neutral-900 flex flex-col text-primary">
      <nav className="flex justify-center items-center text-3xl text-primary font-semibold bg-secondary py-6">
        Flexbox Visualizer
      </nav>
      <div className="p-6 flex flex-1 overflow-hidden gap-6">
        <aside className="max-w-1/5 w-full bg-secondary flex-1 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-4   text-primary font-semibold text-xl bg-secondary shadow-2xs border-b border-primary">
            {" "}
            Flex Properties
          </div>
          <div className="flex-1 overflow-y-scroll my-2">
            <PropertySelector />
          </div>
        </aside>
        <section className=" w-full bg-secondary flex-1 rounded-2xl overflow-hidden p-6">
          <FlexSection />
        </section>
      </div>
    </main>
  );
}

export default App;
