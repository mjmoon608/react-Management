import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 0,
    image: "https://placeimg.com/64/64/1",
    name: "문민종",
    birthday: 950608,
    gender: "남자",
    job: "대학생",
  },
  {
    id: 1,
    image: "https://placeimg.com/64/64/2",
    name: "원재문",
    birthday: 951212,
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/3",
    name: "한희정",
    birthday: 960912,
    gender: "여자",
    job: "직장인",
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="gray-background">
        {customers.map((current) => {
          return (
            <Customer
              key={current.id}
              id={current.id}
              image={current.image}
              name={current.name}
              birthday={current.birthday}
              gender={current.gender}
              job={current.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
