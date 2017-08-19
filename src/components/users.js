import React, {Component} from 'react';
import axios from 'axios';
import UserResults from './userResults';

export default class UserDisplay extends Component {
  constructor() {
    super();

    this.state = {
      data: ''
    }
  }
  componentDidMount() {
    let streamers = [
      "freecodecamp",
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas"
    ];
    let stuff = [];
    streamers.map(user => {
      return this.getData(user, stuff);
    });
  }
  getData(user, stuff) {
    let url = "https://api.twitch.tv/kraken/streams/";
    axios({
      method: 'get',
      url: `${url}${user}`,
      headers: {
          "Client-ID": "96pja9qd2yrf50bstm3mvbwrpmnzlg"
      }
  })
    .then(res => {
      let data = res.data;
      axios({
        method: 'get',
        url: `${data._links.channel}`,
        headers: {
            "Client-ID": "96pja9qd2yrf50bstm3mvbwrpmnzlg"
        }
      })
      .then(res2 => {
        let data2 = res2.data;
        stuff.push({
          stream: data.stream,
          name: data2.display_name,
          logo: data2.logo,
          url: data._links.channel
        })
        this.setState({ data: stuff });
      }).catch(err2 => {
        console.log('Error fetching and parsing data', err2);
      })
    }).catch(err => {
      console.log('Error fetching and parsing data', err);
    });

  }
  render() {
    return (
      <div className="UserDisplay table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <UserResults data={this.state.data}/>
        </table>
      </div>
    );
  }
}
