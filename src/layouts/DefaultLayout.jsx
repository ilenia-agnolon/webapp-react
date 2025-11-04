// importo Outlet per gestione comp su rotte
import { Outlet } from "react-router-dom";

// importo comp Header
import Header from "../components/Header";

// creazione componente Layout DefaultLayout
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
