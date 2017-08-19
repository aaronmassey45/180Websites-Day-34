import React, { Component } from 'react';

export default class User extends Component {
  render() {
    let props = this.props;
    let message;
    let logo;
    let style;
    if (props.stream !== null) {
      style = {
        backgroundColor: 'lightgreen'
      }
      message = `${props.name} is currently online and streaming ${props.stream.game}`;
    } else {
      message = `${props.name} is currently offline`;
    }
    if (props.logo === null) {
      logo = 'https://dummyimage.com/200x200/000/fff.png&text=:(';
    } else {
      logo = props.logo;
    }
    return (
      <tr className="User" id={props.name} style={style}>
        <td><img src={logo} alt={props.name} className='img-responsive img-circle'/></td>
        <td><b><a href={props.url} target='_blank'>{props.name}</a></b></td>
        <td>{message}</td>
      </tr>
    );
  }
}
