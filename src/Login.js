import React, { Component } from "react";
import SignIn from "./SignInComponent";
import firebase from "firebase";
import { getWritersDocument, getModeratorsDocument } from "./datastore";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      userEmail: "",
      uid: "",
      writersDocument: null,
      moderatorsDocument: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var writersDocValue = await getWritersDocument();
        var moderatorsDocValue = await getModeratorsDocument();
        this.setState({
          ...this.state,
          authenticated: true,
          userEmail: user.email,
          uid: user.uid,
          writersDocument: writersDocValue,
          moderatorsDocument: moderatorsDocValue,
        });
      } else {
        this.setState({
          ...this.state,
          authenticated: false,
          userEmail: "",
          uid: "",
        });
      }
    });
  }

  render() {
    var renderMe = null;
    if (this.state.authenticated) {
      if (this.state.writersDocument.includes(this.state.uid)) {
        this.props.history.push("/writerpage");
      }
      if (this.state.moderatorsDocument.includes(this.state.uid)) {
        this.props.history.push("/moderatorpage");
      } else {
        renderMe = (
          <div>
            <h1>YOU ARE NOT A VALID USER</h1>
          </div>
        );
      }
    }

    return (
      <div>
        {renderMe}
        <SignIn />
      </div>
    );
  }
}
