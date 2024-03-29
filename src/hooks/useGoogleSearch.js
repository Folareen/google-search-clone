import { useState, useEffect } from "react";
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/";
const useGoogleSearch = (term, type) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    googleSearch();
    // eslint-disable-next-line
  }, [term]);

  const googleSearch = async () => {
    if (term.length > 1) {
      try {
        setLoading(true);
        const data = await fetch(`${baseUrl}${type}/q=${term}`, {
          method: "GET",
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Key":
              "a3f5923269mshb2b9a1649ef26b6p14ec30jsn84d8543adf73",
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
          },
        });
        const res = await data.json();
        setResult(res);
        setLoading(false);
        console.log("successful");
      } catch {
        setError(true);
        setLoading(false);
        console.log("unsuccessful");
      }
    }
  };

  return [loading, result, error];
};

export default useGoogleSearch;
