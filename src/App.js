import React from 'react';
import './App.css';
import DropdownTable from './DropdownTable';
import useHoldingsApi from './HoldingsApi';

function App() {
  const allHoldings = useHoldingsApi();

  // Filter holdings based on asset_class
  //sourceTree 1 for testing
  const realEstateHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Real Estate'
  );
  const bondHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Bond'
  );
  const loanHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Loan'
  );
  const cashHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Cash'
  );
  const fundHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Fund'
  );
  const equityHoldings = allHoldings.filter(
    (holding) => holding.asset_class === 'Equity'
  );
  //Source tree1   for testing2
  return (
    <div className='page-container'>
      <DropdownTable title='REAL ESTATE' holdings={realEstateHoldings} />
      <DropdownTable title='BOND' holdings={bondHoldings} />
      <DropdownTable title='LOAN' holdings={loanHoldings} />
      <DropdownTable title='CASH' holdings={cashHoldings} />
      <DropdownTable title='FUND' holdings={fundHoldings} />
      <DropdownTable title='EQUITY' holdings={equityHoldings} />
    </div>
  );
}

export default App;
