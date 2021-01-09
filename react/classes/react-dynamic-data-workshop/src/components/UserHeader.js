import React, { Component } from 'react';
import { getUserData as UserData } from '../utils/getUserData.js';
import { token } from '../../token';

export default class UserHeader extends Component {
  state = {
    UserData: {},
  };
  componentDidMount() {
    const username = 'bayan-404';
    UserData(
      `https://api.github.com/users/${username}?access_token=${token}`
    ).then((data) => this.setState({ UserData: data }));
  }
  render() {
    const { login, avatar_url, followers } = this.state.UserData;
    return !this.state.UserData ? (
      <h1>loading ..</h1>
    ) : (
      <section className='header'>
        <img src={avatar_url} />
        <span className='info'>
          <p>{login}</p>
          <p>followers : {followers}</p>
        </span>
      </section>
    );
  }
}
