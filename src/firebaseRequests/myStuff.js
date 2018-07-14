import axios from 'axios';
import constants from '../constants';

const getMyStuff = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff.json?orderBy="uid"&equalTo="${uid}"`)
      .then((res) => {
        const myStuff = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            myStuff.push(res.data[fbKey]);
          });
        }
        resolve(myStuff);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postMyStuff = (newItem) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myStuff.json`, newItem)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMyOneItem = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff/${id}.json`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteRequest = (myStuffId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/myStuff/${myStuffId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getMyStuff, postMyStuff, getMyOneItem, deleteRequest };
