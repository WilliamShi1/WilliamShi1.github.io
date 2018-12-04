import React, { Component } from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return (<tr>
                <td><img src={ require(item.src+'')} className={'image'} /></td>
                <td>{item.name}</td>
                <td>{item.model}</td>
                <td>{item.price}</td>
              </tr>)
    });
    return items;
  }
  render() {
    return (
      this.renderList()
    );
  }
}
export default List;
