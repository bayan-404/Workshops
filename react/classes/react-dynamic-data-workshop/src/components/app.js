import React from 'react';
import UserHeader from './UserHeader';
import './style.css';
import RepoList from './RepoList';
export default class App extends React.Component {
  render() {
    return (
      <div className='bigcard'>
        <UserHeader />
        <RepoList />
      </div>
    );
  }
}
