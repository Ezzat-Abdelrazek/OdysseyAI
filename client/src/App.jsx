import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, CreatePost } from "./pages/index";
import { odysseyAI, plus } from "./assets";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center gap-7 p-3 pb-8">
        <header className="w-full max-w-6xl">
          <nav className="backdrop-blur-2 flex items-center justify-between rounded-lg bg-white/25 px-3 py-4  drop-shadow-xl">
            <Link to="/">
              <img src={odysseyAI} alt="OdysseyAI Logo" className="w-36" />
            </Link>
            <Link
              to="/post"
              className="font p flex items-center gap-1 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 pl-2 pr-4 font-bold text-white drop-shadow-lg"
            >
              <img
                src={plus}
                alt="Add Sign in a circle"
                className="w-6 fill-white"
              />
              <span>Create</span>
            </Link>
          </nav>
        </header>
        <main className=" w-full max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/post" element={<CreatePost />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
