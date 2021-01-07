import React, { Component } from 'react';
import { getUserData as UserData } from '../utils/getUserData.js';

export default class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: {},
    };
  }
  componentDidMount() {
    const username = 'bayan-404';
    UserData(username).then((data) => this.setState({ UserData: data }));
  }
  render() {
    const { login } = this.state.UserData;
    console.log(this.state.UserData);
    return !this.state.UserData ? <h1>loading ..</h1> : <p>{login}</p>;
  }
}
