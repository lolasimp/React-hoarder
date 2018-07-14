import React from 'react';
import Items from '../Items/Items';
import auth from '../../firebaseRequests/auth';
import itemRequests from '../../firebaseRequests/stuff';
import myItems from '../../firebaseRequests/myStuff';
import './AllStuff.css';

class AllStuff extends React.Component {
  state = {
    items: [],
    stuff: {},
  }

  addToMyStuff = (itemDetails) => {
    const newItem = {...this.state.stuff};
    newItem.itemName = itemDetails.itemName;
    newItem.itemImage = itemDetails.itemImage;
    newItem.itemDescription = itemDetails.itemDescription;
    newItem.uid = auth.getUid();
    myItems
      .postRequest(newItem)
      .then(() => {

      })
      .catch((err) => {
        console.error('error in order post', err);
      });
  }

  componentDidMount () {
    itemRequests
      .getAllStuff()
      .then((items) => {
        this.setState({items});
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      });
  }

  render () {
    const itemComponents = this.state.items.map((item) => {
      return (
        <Items
          key={item.id}
          details={item}
          addToMyStuff={this.addToMyStuff}
        />
      );
    });

    return (
      <div className="AllStuff col-xs-12">
        <h1>All Stuff</h1>
        <ul className="item-list">
          {itemComponents}
        </ul>
      </div>
    );
  }
}

export default AllStuff;
