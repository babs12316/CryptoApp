import useData from "./useData";
const useFilter = (filterCoin) => {
  const list = useData();
  return list.filter((coin) =>
    filterCoin ? coin.name.toLowerCase().includes(filterCoin) : coin
  );
};

export default useFilter;
