// import "./App.css";

//import delle pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

// import layout
import DefaultLayout from "./layouts/DefaultLayout";

// import router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del provider context globale
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
