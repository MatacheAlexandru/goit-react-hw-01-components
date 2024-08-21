import {} from "react";

import "./App.css";

function App() {
  return (
    <>
      {/* Exemplu 1: Culoare de fundal și text */}
      <div className="bg-blue-500 text-white p-4 rounded">
        Acest text are fundal albastru și text alb.
      </div>

      {/* Exemplu 2: Margin și Padding */}
      <div className="m-4 p-6 bg-green-500 text-white rounded">
        Acest element are margin de 4 și padding de 6.
      </div>

      {/* Exemplu 3: Flexbox */}
      <div className="flex justify-center items-center h-32 bg-red-500 rounded">
        <div className="bg-white text-black p-4 rounded">
          Element Flexbox centrat
        </div>
      </div>

      {/* Exemplu 4: Grid */}
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="bg-yellow-500 p-4 rounded">Element Grid 1</div>
        <div className="bg-purple-500 p-4 rounded">Element Grid 2</div>
        <div className="bg-teal-500 p-4 rounded">Element Grid 3</div>
      </div>

      {/* Exemplu 5: Dimensiuni și text */}
      <div className="w-64 h-32 bg-gray-500 text-center text-white flex justify-center items-center rounded">
        Element cu lățime 64 și înălțime 32
      </div>
    </>
  );
}

export default App;
