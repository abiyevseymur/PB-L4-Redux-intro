import React, { Component } from 'react';
import Users from './components/user'
import { connect } from 'react-redux';
import jsonplaceholder from './api/jsonplaceholder'
import { setUser, setPosts, removeRow } from './actions';
import Posts from './components/posts';

class App extends Component {


  componentDidMount() {
    jsonplaceholder("/posts")
      .then((response) => {
        const payload = response.data;
        this.props.setPostAction(payload)
      })
    jsonplaceholder("/users")
      .then((response) => {
        const payload = response.data;
        this.props.setUserAction(payload)
      })

  }
   
  render() {
    if (this.props.users.isLoaded && this.props.posts.isLoaded === true) {
      return (
        <div>
          <Users user={this.props.users} remove = {this.props.removeUserData}/>
          <Posts post={this.props.posts} />
        </div>
      );
    }
    else {
      return (<div className="ui active dimmer">
      <div className="ui indeterminate text loader">Loading..Wait!</div></div>)
    }
  }
}
function mapStateToProps(store) {
  console.log(store.users)
  return {
    users: store.users,
    posts: store.posts
  }
}
function mapDispatchToProps(dispatch) {

  return {
    setUserAction: users => dispatch(setUser(users)),
    setPostAction: posts => dispatch(setPosts(posts)),
    removeUserData:id =>dispatch(removeRow(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
