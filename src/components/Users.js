import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          <ul>
          {this.props.users.map(user => <li>{user.username}, {user.hometown}</li>)}
          </ul>
          {/* In addition, display the total number of users curently in the store */}
          Users in the store: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProp = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProp)(Users)
