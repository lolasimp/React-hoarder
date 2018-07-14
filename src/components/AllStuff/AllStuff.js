import React from 'react';
import stuffRequests from '../../firebaseReq/stuff';
import './AllStuff.css';

class AllStuff extends React.Component {
  state = {
    stuff: [],
  }

  componentDidMount () {
    stuffRequests
      .getRequest()
      .then((stuff) => {
        this.setState({stuff});
      })
      .catch((err) => {
        console.error('error with stuff get request', err);
      });
  }

  render () {
    const stuffComponents = this.state.stuff.map((item) => {
      return (
        <allStuff
          key={item.id}
          details={item}
        />
      );
    });

    return (
      <div className="AllStuff col-xs-12">
        <h1>All Stuff</h1>
        <ul className="item-list">
          {stuffComponents}
        </ul>
      </div>
    );
  }
}

export default AllStuff;
