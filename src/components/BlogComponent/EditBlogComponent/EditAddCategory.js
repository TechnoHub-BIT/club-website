import React from "react";
import "../../input.css";
import { db } from "../../../firebase";

class EditAddComponent extends React.Component {
  state = {
    Blogcategorytype: "",
  };

  componentDidMount() {
    db.collection("Blogcategory")
      .get()
      .then((snapshot) => {
        const Blogcategorytype = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          Blogcategorytype.push(data);
        });
        this.setState({ Blogcategorytype: Blogcategorytype });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <select
        id="category"
        name="blogcategory"
        onChange={this.props.onChange}
        value={this.props.value}
        required
      >
        {this.state.Blogcategorytype &&
          this.state.Blogcategorytype.map((Blogcategorytype) => {
            return (
              <option value={Blogcategorytype.blogcategorytype}>
                {Blogcategorytype.blogcategorytype}
              </option>
            );
          })}
      </select>
    );
  }
}

export default EditAddComponent;
