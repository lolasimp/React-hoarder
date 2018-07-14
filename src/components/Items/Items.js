
import React from 'react';
import './Items.css';

class Items extends React.Component {
  render () {
    const { details } = this.props;
    const addStuffClick = () => {
      this.props.addToMyStuff(this.props.details);
    };
    return (
      <li className="Items">
        <img className="item-img" src={details.itemImage} alt={details.itemName}/>
        <h4 className="item-name">
          {details.itemName}
        </h4>
        <button
          className="btn btn-success"
          onClick={addStuffClick}
        >
          Add to My Stuff
        </button>
      </li>
    );
  }
}

export default Items;
