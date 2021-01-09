export const getUserData = (url) => {
  return fetch(url)
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
