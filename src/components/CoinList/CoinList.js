import React, { useEffect, useState } from "react";
import useData from "../../Hooks/getData";
import Coin from "../Coin/Coin";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
  },
});

const CoinList = () => {
  const list = useData();
  let [coinList, setCoinList] = useState([]);

  const [filterCoin, setFilterCoin] = useState(null);
  const classes = useStyles();
  const [sortBy, setSortBy] = useState("marketCap");
  const [sortType, setSortType] = useState("desc");

  useEffect(() => {
    setCoinList(list);
  }, [list]);

  const handleFilterChange = (filterCoin) => {
    setFilterCoin(filterCoin);
  };

  const changeSortTerm = (sortTerm, type) => {
    setSortBy(sortTerm);
    setSortType(type);
  };

  useEffect(() => {
    const handleAscSort = () => {
      const sorted = list.sort(function (a, b) {
        switch (sortBy) {
          case "name": {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (sortType === "desc") {
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            } else if (sortType === "asc") {
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              // names must be equal
              return 0;
            }
          }

          // eslint-disable-next-line no-fallthrough
          case "price":
            if (sortType === "asc") {
              return a.current_price - b.current_price;
            } else if (sortType === "desc") {
              return b.current_price - a.current_price;
            }
          // eslint-disable-next-line no-fallthrough
          case "marketCap":
            if (sortType === "asc") {
              return a.market_cap - b.market_cap;
            } else if (sortType === "desc") {
              return b.market_cap - a.market_cap;
            }
          // eslint-disable-next-line no-fallthrough
          default:
            return null;
        }
      });
      setCoinList(sorted);
     };
    handleAscSort(sortBy);
  }, [sortBy, list, sortType]);

  const coins = coinList
    .filter((coin) =>
      filterCoin ? coin.name.toLowerCase().includes(filterCoin) : coin
    )
    .map((coin) => (
      <Coin
        name={coin.name}
        image={coin.image}
        currentPrice={coin.current_price}
        marketCap={coin.market_cap}
        key={coin.id}
      ></Coin>
    ));

  return (
    <>
      <Filter onFilterChange={handleFilterChange}></Filter>
      <TableContainer component={Paper}>
        <Table aria-label="Coins table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>
                Name <Sort sortBy={"name"} onSort={changeSortTerm}></Sort>
              </TableCell>
              <TableCell className={classes.title}>
                Current Price{" "}
                <Sort sortBy={"price"} onSort={changeSortTerm}></Sort>
              </TableCell>
              <TableCell className={classes.title}>
                MarketCap{" "}
                <Sort sortBy={"marketCap"} onSort={changeSortTerm}></Sort>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{coins}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoinList;
