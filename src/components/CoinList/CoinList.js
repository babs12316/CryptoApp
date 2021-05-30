import React from "react";
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

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
  },
});

const CoinList = () => {
  const list = useData('all');
  const classes = useStyles();
  const coinList = list.map((coin) => (
    <Coin
      name={coin.name}
      image={coin.image}
      currentPrice={coin.current_price}
      marketCap={coin.market_cap}
      key={coin.id}
      id={coin.id}
    ></Coin>
    ));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Coins table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Name</TableCell>
            <TableCell className={classes.title}>Current Price</TableCell>
            <TableCell className={classes.title}>MarketCap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{coinList}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinList;
