import React from 'react';
import myItems from '../../firebaseRequests/myStuff';
import './OneItem.css';

class OneItem extends React.Component {
  state = {
    item: {
      itemDescription: '',
      itemImage: '',
      itemName: '',
      uid: '',
    },
  }
  componentDidMount () {
    const firebaseId = this.props.match.params.id;
    myItems
      .getMyOneItem(firebaseId)
      .then((oneItemz) => {
        this.setState({item: oneItemz});
      })
      .catch(((err) => {
        console.error('error with get single item', err);
      }));
  }

  deleteItemClick = () => {
    const firebaseId = this.props.match.params.id;
    myItems
      .deleteRequest(firebaseId)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => {
        console.error('error with delete request', err);
      });
  }

  xClickFunction = () => {
    this.props.history.push('/mystuff');
  }

  render () {
    const {item} = this.state;
    return (
      <div className="SingleItem col-xs-12">
        <button onClick={this.xClickFunction} className="btn btn-default x-button">&times;</button>
        <h1>{item.itemName}</h1>
        <img src={item.itemImage} alt={item.itemName}/>
        <p>{item.itemDescription}</p>
        <button className="btn btn-danger" onClick={this.deleteItemClick}>Delete</button>
      </div>
    );
  }
}

export default OneItem;
