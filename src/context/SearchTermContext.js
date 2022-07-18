import { createContext, useState } from "react";

export const SearchTermContext = createContext();

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
