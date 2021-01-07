import { token } from '../../token';

export const getUserData = (username) => {
  return fetch(`https://api.github.com/users/${username}?access_token=${token}`)
    .then((res) => checkResponse(res))
    .catch((err) => {
      throw new Error(`fetch getUser faild ${err}`);
    });
};
const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
