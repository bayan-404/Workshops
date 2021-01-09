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
    // const {
    //   description,
    //   full_name,
    //   language,
    //   clone_url,
    // } = this.state.repositories;

    return !this.state.repositories ? (
      <h1>Loading ..</h1>
    ) : (
      <ul>
        {this.state.repositories.map((repo) => {
          {
            console.log(
              'reposList',
              repo.full_name,
              repo.clone_url,
              repo.description ? repo.description : 'no description',
              repo.language
            );
          }

          <li className='repoBox' key={repo.id}>
            <a src={repo.clone_url}>
              <h1>{repo.full_name}</h1>
            </a>
            <p>{repo.description ? repo.description : 'no description'}</p>
            <h3>{repo.language}</h3>
          </li>;
        })}
      </ul>
    );
  }
}
export default RepoList;
