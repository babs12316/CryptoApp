import useData from "./useData";

const useSort = (sortBy, sortType) => {
  const list = useData();
  switch (sortBy) {
    case "name": {
      if (sortType === "desc") {
        return list.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          // names must be equal
          return 0;
        });
      }
      if (sortType === "asc") {
        return list.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      }
    }

    // eslint-disable-next-line no-fallthrough
    case "price": {
      return list.sort(function (a, b) {
        if (sortType === "asc") {
          return a.current_price - b.current_price;
        }
        if (sortType === "desc") {
          return b.current_price - a.current_price;
        }
        // names must be equal
        return 0;
      });
    }

    // eslint-disable-next-line no-fallthrough
    case "marketCap": {
      return list.sort(function (a, b) {
        if (sortType === "asc") {
          return a.market_cap - b.market_cap;
        }
        if (sortType === "desc") {
          return b.market_cap - a.market_cap;
        }
        // names must be equal
        return 0;
      });
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return null;
  }
};

export default useSort;
