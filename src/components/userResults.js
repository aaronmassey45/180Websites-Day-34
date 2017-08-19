import React, { Component } from 'react';
import User from './user';

export default class UserResults extends Component {
  render() {
    let data = this.props.data;
    let results;
    if (data) {
      results = data.map(user => {
        let url = `https://www.twitch.tv/${user.name}`
        return (
          <User key={user.name}
            stream={user.stream}
            name={user.name}
            logo={user.logo}
            url={url} />
        );
      })
    }
    return (
      <tbody className="UserResults">
        {results}
      </tbody>
    );
  }
}
