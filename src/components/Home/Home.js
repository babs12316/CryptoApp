import React from "react";
import CoinList from "../CoinList/CoinList";
import Grid from "@material-ui/core/Grid";
const Home = () => {
  return (
    <Grid container spacing={3}  justify="center">
      <Grid item xs={6}>
        <CoinList></CoinList>
      </Grid>
    </Grid>
  );
};

export default Home;
