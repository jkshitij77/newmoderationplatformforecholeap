import React, { Component } from "react";
import * as db from "./datastore.js";
import { Link } from "react-router-dom";

export default class ModeratorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOutAndPush(){
	  db.signOut();
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={this.signOutAndPush}>SIGN OUT</button>
        </Link>
        HELLO FROM THE ModeratorPage
      </div>
    );
  }
}
