import React from 'react';
import Table from './components/table'; 
import './App.css'
import HamburgerMenu from './components/HamburgerMenu';
function App() {
  // Define the columns for the table
  const columns = ['Year', 'Temperature'];

  // Define the data for the table
  const data = [
    { Year: 1990, Temperature: 0.44,},
    { Year: 1991, Temperature: 0.40},
    { Year: 1992, Temperature: 0.23},
    { Year: 1993, Temperature: 0.24},
    { Year: 1994, Temperature: 0.32},
    { Year: 1995, Temperature: 0.44},
    { Year: 1996, Temperature: 0.34},
    { Year: 1997, Temperature: 0.47},
    { Year: 1998, Temperature: 0.63},
    { Year: 1999, Temperature: 0.42},
    { Year: 2000, Temperature: 0.42},
    { Year: 2001, Temperature: 0.54},
    { Year: 2002, Temperature: 0.60},
    { Year: 2003, Temperature: 0.56},

    

  ];

  return (
    
    <div className="App">
      <HamburgerMenu></HamburgerMenu>
      <h1>Weather Data</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

