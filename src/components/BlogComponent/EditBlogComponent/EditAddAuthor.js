import React from "react";
import "../../input.css";
import { db } from "../../../firebase";

class EditAddAuthor extends React.Component {
  state = {
    fullname: "",
  };

  componentDidMount() {
      db.collection("members")
      .get()
      .then((snapshot) => {
        const fullname = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fullname.push(data);
        });
        this.setState({ fullname: fullname});
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <select
        id="blogauthor"
        name="blogauthor"
        onChange={this.props.onChange}
        value={this.props.value}
        required
      >
        {this.state.fullname &&
          this.state.fullname.map((Blogcategorytype) => {
            return (
              <option value={Blogcategorytype.fullname}>
                {Blogcategorytype.fullname}
              </option>
            );
          })}
      </select>
    );
  }
}

export default EditAddAuthor;
