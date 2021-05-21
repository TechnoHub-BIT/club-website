import React from "react";
import "../../input.css";
import { db } from "../../../firebase";

class EditAddComponent extends React.Component {
    state = {
        Blogcategory: null
    }
    componentDidMount() {
    
        db.collection("NewBlogcategory")
            .get()
            .then(snapshot => {

                const Blogcategorytype = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Blogcategorytype.push(data)
                })
                this.setState({ Blogcategorytype: Blogcategorytype })
            })
            .catch(error => console.log(error))
    }

    render() {
       
        return (
            <select name="category" id="category" name="blogcategory"  onChange={this.props.onChange}  value={this.props.blogcategory} required>
                <option value="">--Select Category--</option>
                {
                    this.state.Blogcategorytype && this.state.Blogcategorytype.map(Blogcategorytype => {
                        return( 
                            <option value={Blogcategorytype.blogcategorytype}>{ Blogcategorytype.blogcategorytype }</option>
                        );
                    })
                }
            </select> 
        );            
    }
    
}

export default EditAddComponent;