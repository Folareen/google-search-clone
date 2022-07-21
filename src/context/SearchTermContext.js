import { createContext, useState } from "react";

export const SearchTermContext = createContext();

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchTermContext.Provider
      value={{ searchTerm, setSearchTerm, inputValue, setInputValue }}
    >
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
