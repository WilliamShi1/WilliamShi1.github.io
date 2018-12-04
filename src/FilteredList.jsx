import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      copyItems: this.props.items.slice(),
      search: "",
      model: [],
      btnTitle1: "Model",
      range: [],
      btnTitle2: "Price Range",
      sortBy: 0,
      btnTitle3: "Sort by Price"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {

  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    if(this.state.model.length == 0 && this.state.range.length == 0){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    }else if(this.state.model.length == 0){
      return item.name.toLowerCase().search(this.state.search) !== -1 && this.state.range == item.range;
    }else if(this.state.range.length == 0){
      return item.name.toLowerCase().search(this.state.search) !== -1 && this.state.model == item.model;
    }else{
      return item.name.toLowerCase().search(this.state.search) !== -1 && this.state.range == item.range && this.state.model == item.model;
    }
  }
   
  dropdownSelect1 = (eventKey) => {
    if(eventKey != 'All'){
      this.setState({
        model: [eventKey],
        btnTitle1: eventKey 
      });
    }else{
      this.setState({
        model: [],
        btnTitle1: eventKey 
      });
    }
  }

  dropdownSelect2 = (eventKey) => {
    if(eventKey != 'All'){
      this.setState({
        range: [eventKey],
        btnTitle2: eventKey 
      });
    }else{
      this.setState({
        range: [],
        btnTitle2: eventKey 
      });
    }
  }

  dropdownSelect3 = (eventKey) => {
    if(eventKey === "Ascending in Price"){
      this.setState({
        sortBy: 1,
        btnTitle3: eventKey 
      });
      this.state.copyItems.sort((a,b)=>(a.price - b.price));
    }else if(eventKey === "Decending in Price"){
      this.setState({
        sortBy: -1,
        btnTitle3: eventKey 
      });
      this.state.copyItems.sort((a,b)=>(b.price - a.price));
    }
  }

  // reset to default
  onClear = (event) => {
    this.setState({
        copyItems: this.props.items.slice(),
        search: "",
        model: [],
        btnTitle1: "Model",
        range: [],
        btnTitle2: "Price range",
        sortBy: 0,
        btnTitle3: "Sort by Price"
      });
      document.getElementById('search').value = "";
  }
  
  render(){
    return (
        <div className = "filter-list">
          <h1 className="title">BMW Product Search</h1>

          <DropdownButton id="modelDropdown" title={this.state.btnTitle1}>
            <MenuItem eventKey="All" onSelect={this.dropdownSelect1}>All</MenuItem>
            <MenuItem eventKey="SAVs" onSelect={this.dropdownSelect1}>SAVs</MenuItem>
            <MenuItem eventKey="Sedans" onSelect={this.dropdownSelect1}>Sedans</MenuItem>
            <MenuItem eventKey="Coupes" onSelect={this.dropdownSelect1}>Coupes</MenuItem>
          </DropdownButton>

          <DropdownButton id="rangeDropdown" title={this.state.btnTitle2}>
            <MenuItem eventKey="All" onSelect={this.dropdownSelect2}>All</MenuItem>
            <MenuItem eventKey="Under $40000" onSelect={this.dropdownSelect2}>Under $40000</MenuItem>
            <MenuItem eventKey="$40000-$69999" onSelect={this.dropdownSelect2}>$40000-$69999</MenuItem>
            <MenuItem eventKey="$70000-$99999" onSelect={this.dropdownSelect2}>$70000-$99999</MenuItem>
          </DropdownButton>

          <DropdownButton id="sortDropdown" title={this.state.btnTitle3}>
            <MenuItem eventKey="Ascending in Price" onSelect={this.dropdownSelect3}>Ascending in Price</MenuItem>
            <MenuItem eventKey="Decending in Price" onSelect={this.dropdownSelect3}>Decending in Price</MenuItem>
          </DropdownButton>

          <input id = 'search' type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <button onClick={this.onClear}>Clear All Filters</button>

          <table id='products'>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Model</th>
              <th>Price (USD)</th>
            </tr>
            <List className='mylist' items={this.state.copyItems.filter(this.filterItem)} />
          </table>
        </div>
    );
  }
}

export default FilteredList;