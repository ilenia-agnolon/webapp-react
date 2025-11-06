import { createContext, useContext, useState } from "react";

// creazione del context
const GlobalContext = createContext();

// funzione di creazione del provider
function GlobalProvider({ children }) {
  // var di stato per gestione loader
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

//hook per consumare il contesto
function useGlobal() {
  const context = useContext(GlobalContext);
  return context;
}

//esporto il procider e l'hook
export { GlobalProvider, useGlobal };
