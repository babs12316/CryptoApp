import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const Coin = ({ name, image, currentPrice, marketCap }) => {
  return (
    <>
      <TableRow key={name}>
        <TableCell component="th" scope="row">
         <div className="imageDiv"><img src={image} alt={name} className="coinImage"></img> </div>
         <div className="coinNameDiv">{name}</div>
        </TableCell>
        <TableCell>{currentPrice}</TableCell>
        <TableCell>{marketCap}</TableCell>
      </TableRow>
    </>
  );
};

export default Coin;
