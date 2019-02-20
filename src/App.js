import React, { Component } from 'react';
import Users from './components/user'
import setUserData from './actions';
import {connect} from 'react-redux';
import JsonHolder from './api/jsonplaceholder'


class App extends Component {
  componentDidMount() {
    JsonHolder("/users")
      .then((response) => {
        const users = response.data;
        return users;
      })
  }
  
  render() {

    return (
      <div>
          <Users user = {this.props}/>
  
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    user:state.userInfo.user
  }
}
function mapDispatchToProps(dispatch){
  debugger
  return{
    setUser:users=>
    dispatch(setUserData(users))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
