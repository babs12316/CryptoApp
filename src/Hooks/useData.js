import  { useState, useEffect } from "react";
const useData = () => {
  const [item, setItem] = useState([]);
  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
 
  useEffect(() => {
    const getData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setItem(data));
    };
    getData();
  }, [url]);

  return item;
};

export default useData;
