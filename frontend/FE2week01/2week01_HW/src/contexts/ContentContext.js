import { createContext, useContext, useState } from "react";

const ContentContext = createContext({
  part: "",
  setPart: () => {},
});

export const ContentProvider = ({ children }) => {
  const [part, setPart] = useState("");

  return (
    <ContentContext.Provider value={{ part, setPart }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
