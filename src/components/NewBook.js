import React, { Component } from "react";
import axios from "axios";

export default class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.image) {
            this.setState({ error: "Please insert an image" });
          } else {
            axios
              .post("/api/books", {
                name: this.state.name,
                image: this.state.image
              })
              .then(response => {
                this.props.changeView("books");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "An error occurred, please try again."
                });
              });
          }
        }}
      >
        <input
          name="book"
          placeholder="book"
          onChange={this.handleChange}
          value={this.state.book}
        />
        <input
          name="image"
          placeholder="Image"
          onChange={this.handleChange}
          value={this.state.image}
        />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}





   