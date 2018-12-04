import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const produce = [
  {name: "X1", model: "SAVs", range: "Under $40000", price: 18888, src: "./images/x1.jpg"},
  {name: "X2", model: "SAVs", range: "Under $40000", price: 28888, src: "./images/x2.jpg"},
  {name: "X3", model: "SAVs", range: "Under $40000", price: 38888, src: "./images/x3.jpg"},
  {name: "X4", model: "SAVs", range: "$40000-$69999", price: 48888, src: "./images/x4.jpg"},
  {name: "X5", model: "SAVs", range: "$40000-$69999", price: 58888, src: "./images/x5.jpg"},
  {name: "X6", model: "SAVs", range: "$70000-$99999", price: 88888, src: "./images/x6.jpg"},
  {name: "X7", model: "SAVs", range: "$70000-$99999", price: 98888, src: "./images/x7.jpg"},
  {name: "Series 2", model: "Coupes", range: "Under $40000", price: 26666, src: "./images/2.jpg"},
  {name: "Series 3", model: "Sedans", range: "Under $40000", price: 36666, src: "./images/3.jpg"},
  {name: "Series 4", model: "Coupes", range: "$40000-$69999", price: 56666, src: "./images/4.jpg"},
  {name: "Series 5", model: "Sedans", range: "$40000-$69999", price: 66666, src: "./images/5.jpg"},
  {name: "Series 6", model: "Coupes", range: "$70000-$99999", price: 86666, src: "./images/6.jpg"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={"Feifan Shi"}/>
        <FilteredList items={produce}/>
      </div>
    );
  }
}
export default App;