import React, { useState, useEffect } from "react";
import "../../input.css";
import { db } from "../../../firebase";

class AddCategoryComponent extends React.Component {
    state = {
        Blogcategory: null
    }

    componentDidMount() {
        // console.log('mounted')
        db.collection('Blogcategory')
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
            <select name="category" id="category" onChange={this.props.change} value={this.props.value} required>
                <option value="">--Select Category--</option>
                {
                    this.state.Blogcategorytype && this.state.Blogcategorytype.map(Blogcategorytype => {
                        return( 
                             <option>{ Blogcategorytype.blogcategorytype }</option>
                        );
                    })
                }
            </select> 
        );            
    }
    
}

export default AddCategoryComponent;