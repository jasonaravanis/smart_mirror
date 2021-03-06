import Quote from "./Quote";
import TimeDate from "./TimeDate";
import Weather from "./Weather";

function App() {
  return (
    <main className="font-raleway h-screen bg-black w-full text-white flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="flex flex-col p-10">
          <TimeDate />
        </div>
        <div className="flex flex-col p-10">
          <Weather />
        </div>
      </div>
      <Quote />
    </main>
  );
}

export default App;
