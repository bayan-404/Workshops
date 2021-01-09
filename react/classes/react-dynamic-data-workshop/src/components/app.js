import React from 'react';
import UserHeader from './UserHeader';
import './style.css';
import RepoList from './RepoList';
export default class App extends React.Component {
  state = {
    hello:
      "Let's get started! You can delete this state as you won't need it going forward.",
  };

  render() {
    return (
      <div className='bigcard'>
        {/* <UserHeader /> */}
        <RepoList />
      </div>
    );
  }
}
