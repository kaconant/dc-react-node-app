import React, { Component } from 'react';
import Carousel from './Carousels'

class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.updateBlends()
  }

  relocate() {
    this.props.history.replace('/')
  }


  render() {

    return (
      <div>
        <div className="user" id="user" >
          <div className="banner">
            <h4 className="title-text">Blendologist {this.props.firstname} {this.props.lastname}</h4>
            <img src="../img/default-user.png" className="userPhoto"/>
            <p className="joined">Member Since {this.props.joined}</p>
            <a className="transparent_btn add" onClick={this.relocate.bind(this)}>+ blend</a>
          </div>
          <Carousel updateBlends={this.props.updateBlends} isLoggedIn={this.props.isLoggedIn} history={this.props.history} currentLevel={this.props.currentLevel} />
        </div>
      </div>
    )
  }
}

export default User;
