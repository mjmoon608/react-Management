import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
  name: "문민종",
  birthday: 950608,
  gender: "남자",
  job: "대학생"
}

function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
