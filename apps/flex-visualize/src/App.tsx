import FlexSection from "./components/flex-section";
import { ModeToggle } from "./components/mode-toggle";
import PropertySelector from "./components/property-selector";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="max-h-screen min-h-screen overflow-hidden bg-background flex flex-col text-primary">
      <nav className="text-3xl text-primary font-semibold bg-secondary py-6">
        <div className="flex justify-between items-center  w-11/12 mx-auto">
          <div className=""></div>
          Flexbox Visualizer
          <ModeToggle />
        </div>
      </nav>
      <div className="p-6 flex flex-1 overflow-hidden gap-6">
        <Sidebar />
        <section className=" w-full bg-secondary flex-1 rounded-2xl overflow-hidden p-6">
          <FlexSection />
        </section>
      </div>
    </main>
  );
}

export default App;
