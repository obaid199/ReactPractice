
import './App.css';
import Pagination  from './components/pagination';
import Head from './components/Head';
import DropDown from './components/dropdown';
import Stopwatch from './components/StopWatch';
import { useState } from 'react';
import CountryDropdown from './components/SelectCountryCapital';
import SelectedCapital from './components/selectCapital';

function App() {
 return (
    <div className="App">
      {/* <DropDown/> */}
      {/* <Stopwatch/> */}
      {/* <CountryDropdown/> */}
      <SelectedCapital/>
    </div>
  );
}
export default App;
