import React, { Component } from "react";
import * as db from "./datastore.js";
import { signOut } from "./datastore";
import { Link } from "react-router-dom";

export default class WriterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      image: "",
      link1: "",
      alias1: "",
      link2: "",
      alias2: "",
      link3: "",
      alias3: "",
      link4: "",
      alias4: "",
      link5: "",
      alias5: "",
      link6: "",
      alias6:"",
      link7: "",
      alias7:"",
      link8: "",
      alias8:"",
      link9: "",
      alias9:"",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  signOutAndPush() {
    signOut();
  }

  buttonClick = (event) => {
    var linkMap = {};
    if (this.state.link1 !== "" && this.state.alias1 !== "") {
      linkMap[this.state.alias1] = this.state.link1;
    }
    if (this.state.link2 !== "" && this.state.alias2 !== "") {
      linkMap[this.state.alias2] = this.state.link2;
    }
    if (this.state.link3 !== "" && this.state.alias3 !== "") {
      linkMap[this.state.alias3] = this.state.link3;
    }
    if (this.state.link4 !== "" && this.state.alias4 !== "") {
      linkMap[this.state.alias4] = this.state.link4;
    }
    if (this.state.link5 !== "" && this.state.alias5 !== "") {
      linkMap[this.state.alias5] = this.state.link5;
    }
    if (this.state.link6 !== "" && this.state.alias6 !== "") {
      linkMap[this.state.alias6] = this.state.link6;
    }
    if (this.state.link7 !== "" && this.state.alias7 !== "") {
      linkMap[this.state.alias7] = this.state.link7;
    }
    if (this.state.link8 !== "" && this.state.alias8 !== "") {
      linkMap[this.state.alias8] = this.state.link8;
    }
    if (this.state.link9 !== "" && this.state.alias9 !== "") {
      linkMap[this.state.alias9] = this.state.link9;
    }
    var createdOn = new Date();
    db.addNewPost(
      this.state.title,
      this.state.body,
      createdOn,
      linkMap,
      this.state.image
    );
    this.setState({
      title: "",
      body: "",
      image: "",
      link1: "",
      alias1: "",
      link2: "",
      alias2: "",
      link3: "",
      alias3: "",
      link4: "",
      alias4: "",
      link5: "",
      alias5: "",
      link6: "",
      alias6:"",
      link7: "",
      alias7:"",
      link8: "",
      alias8:"",
      link9: "",
      alias9:"",
    });
  };

  changeImage = async (event) => {
    var image = document.getElementById("img");
    var file = event.target.files[0]; //This is my file
    image.src = URL.createObjectURL(file);
    var metadata = {
      contentType: file.type,
    };
    let url = await db.uploadImage(file, metadata);
    this.setState({ ...this.state, image: url });
  };

  render() {
    return (
      <div className="body">
        <Link to="/">
          <button variant="danger" onClick={this.signOutAndPush}>SIGN OUT</button>
        </Link>
        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="title"
          />
          <br />
          <label>Body Text</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Body"
          />
          <br />
          <label>Choose the display image</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={this.changeImage}
          />
          <br />
          <table>
            <tbody>
              <tr>
                <td>Link</td>
                <td>Alias</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link1"
                    value={this.state.link1}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias1"
                    value={this.state.alias1}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link2"
                    value={this.state.link2}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias2"
                    value={this.state.alias2}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link3"
                    value={this.state.link3}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias3"
                    value={this.state.alias3}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link4"
                    value={this.state.link4}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias4"
                    value={this.state.alias4}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link5"
                    value={this.state.link5}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias5"
                    value={this.state.alias5}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link6"
                    value={this.state.link6}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias6"
                    value={this.state.alias6}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link7"
                    value={this.state.link7}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias7"
                    value={this.state.alias7}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link8"
                    value={this.state.link8}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias8"
                    value={this.state.alias8}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Link"
                    name="link9"
                    value={this.state.link9}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Alias"
                    name="alias9"
                    value={this.state.alias9}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <button variant="success" onClick={this.buttonClick}>Submit button</button>
      </div>
    );
  }
}
