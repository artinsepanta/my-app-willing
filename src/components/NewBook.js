import React, { Component } from "react";
import axios from "axios";

export default class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "",
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
            /**
             * axios.post('http://localhost:3000', employee)
      .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
             */
            
            axios
              .post("/api/books", {
                name: this.state.name,
                image: this.state.image
              })
              .then(response => {
                console.log(response)
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
          name="name"
          placeholder="Book"
          onChange={this.handleChange}
          value={this.state.name}
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





   