// App.js
import './App.css'
import React from "react";
import { connect } from "react-redux";

const App = ({ data }) => (
  <ul>
    <table>
      <thead>
        <tr>
          <td>Scrip</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Avg. Cost</td>
          <td>Invested Amount</td>
          <td>% of Portfolio Value</td>
          <td>Unrealized P&L</td>
          <td>% Return</td>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item.Scrip}</td>
            <td>{item.Quantity}</td>
            <td>{item.Price}</td>
            <td>{item["Avg. Cost"]}</td>
            <td>{item["Invested Amount"]}</td>
            <td>{item["% of Portfolio Value"]}</td>
            <td>{item["Unrealized P&L"]}</td>
            <td>{item["% Return"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </ul>
);

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(App);

/* <li key={item.id}>{item.Scrip}  {item.Quantity}</li> */
