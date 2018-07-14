import React from 'react';
import auth from '../../firebaseRequests/auth';
import myItems from '../../firebaseRequests/myStuff';
import './AllMyStuff.css';

class MyStuff extends React.Component {
  state = {
    stuffs: [],
  }

  componentDidMount () {
    myItems
      .getMyStuff(auth.getUid())
      .then((stuffs) => {
        this.setState({stuffs});
      })
      .catch((err) => {
        console.error('error with getting my stuff', err);
      });
  }

  render () {
    const myStuffComponents = this.state.stuffs.map(stuff => {
      const singleItemClick = () => {
        this.props.history.push(`/singleitem/${stuff.id}`);
      };
      return (
        <button
          key={stuff.id}
          className="col-xs-8 col-xs-offset-2 btn btn-success my-item"
          onClick={singleItemClick}
        >
          {stuff.itemName}
        </button>
      );
    });

    return (
      <div className="MyStuff col-xs-12">
        <h1>My Stuff</h1>
        <ul>
          {myStuffComponents}
        </ul>
      </div>
    );
  }
}

export default MyStuff;
