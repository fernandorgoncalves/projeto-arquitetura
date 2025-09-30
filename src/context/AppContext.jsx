import { createContext, useState, useEffect } from "react";
import { getApiData } from "../services/apiServices";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const savedlanguage = localStorage.getItem("lang");
  const [language, setLanguage] = useState(savedlanguage ?? "br");
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcLanguages = async () => {
      try {
        const getText = await getApiData("webText");
        setLanguages(getText);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetcLanguages();
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
      {children}
    </AppContext.Provider>
  );
};
