// src/api.js
export const fetchQuote = async () => {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=fr";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ced0cb30a7msh2ebae4a4f6c49fdp1251a1jsnb8f20eb7c998",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
