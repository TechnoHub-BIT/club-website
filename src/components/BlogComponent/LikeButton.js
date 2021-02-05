import React, { Component } from 'react'
import { db } from "../../firebase";
import { Button } from 'reactstrap';

class LikeButton extends Component {

    state = {
        clapCount:''
    }

    incrementLike = () => {
        const blogRef = db.collection('Blogs').doc(this.props.like.id);
 
        blogRef.get().then(doc => {
                let updatedLike = this.state;
                updatedLike.clapCount = updatedLike.clapCount + 1;
                blogRef.update(updatedLike);
            });
    }

    render() {
        return (

            <div class="counter">
                <Button type="submit" color="primary" onClick={this.incrementLike}>{this.props.like.clapCount} 👏</Button>
            </div>

        )
    }

}

export default LikeButton