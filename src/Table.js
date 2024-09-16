import React from 'react';
//This is for testing 4
function Table({ holdings }) {
  return (
    <div className='dropdown-content'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>NAME OF THE HOLDING</th>
            <th scope='col'>TICKER</th>
            <th scope='col'>AVERAGE PRICE</th>
            <th scope='col'>MARKET PRICE</th>
            <th scope='col'>LATEST CHANGE PERCENTAGE</th>
            <th scope='col'>MARKET VALUE IN BASE CCY</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
            <tr key={index}>
              <td className={holding.name < 0 ? 'negative' : ''}>
                {holding.name}
              </td>
              <td className={holding.ticker < 0 ? 'negative' : ''}>
                {holding.ticker}
              </td>
              <td className={holding.avg_price < 0 ? 'negative' : ''}>
                {holding.avg_price}
              </td>
              <td className={holding.market_price < 0 ? 'negative' : ''}>
                {holding.market_price}
              </td>
              <td className={holding.latest_chg_pct < 0 ? 'negative' : ''}>
                {holding.latest_chg_pct}
              </td>
              <td className={holding.market_value_ccy < 0 ? 'negative' : ''}>
                {holding.market_value_ccy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//This is for testing 5
export default Table;
