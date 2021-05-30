import React, { useEffect, useState } from "react";
import useData from "../../Hooks/useData";
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
import useFilter from "../../Hooks/useSort";

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

  const sortedList= useFilter(sortBy,sortType)

  useEffect(() => {
    setCoinList(list);
  }, [list]);

  const handleFilterChange = (filterCoin) => {
    setFilterCoin(filterCoin);
  };

  const changeSortTerm = (sortTerm, type) => {
    setSortBy(sortTerm);
    setSortType(type);
    setCoinList(sortedList)
  };

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
