import React, { Component } from 'react';
import UserHeader from './UserHeader';
import { getUserData as UserData } from '../utils/getUserData';
class RepoList extends Component {
  state = {
    repositories: [],
  };
  componentDidMount() {
    const userName = 'bayan-404';
    UserData(`https://api.github.com/users/${userName}/repos`).then((repos) =>
      this.setState({ repositories: repos })
    );
  }
  render() {
    const repos = this.state.repositories;
    return !this.state.repositories ? (
      <h1>Loading ...</h1>
    ) : (
      repos.map((repo) => (
        <li key={repo.id} className='repoBox'>
          <a src={repo.clone_url}>
            <h3>{repo.full_name}</h3>
          </a>
          <p>{repo.description ? repo.description : 'no description'}</p>
          <p>{repo.language ? repo.language : 'Javascript'}</p>
        </li>
      ))
    );
  }
}
export default RepoList;
