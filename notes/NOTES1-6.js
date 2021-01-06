/*yo
UX/UI is a thing
Wireframing is also a thing -> keep it drafty, flow/layout
FIGMA/googleslides/pen+paper
------------------------------------
REACT, JS library for building UI
-- Modular, Fast, Readable
"boxes" are React COMPONENTs [the <3 of react]

PROPS (properties?) input information from parent component to child component
    immutable (read-only) at child level

STATE --> Private information maintained by a component
    not accessable by parents, can handle input changes of a component
    functions can update state of componend, initial state exists

JSX is a JS syntax entention allowing HTML
*/
import React, {Component} from 'react';
class Comment extends Component{
    constructor(props){
        this.state = {
            isLiked: false,
        };
    }
    likeComment = () =>{
        this.setState({
            isLiked: true,
        });
    }
    render(){
        return(
            <div id="coolcomment" className="comment-text" onClick={this.likeComment}>
                {this.props.content}
                {this.state.isLiked ? (<likeButton />):(null)}
            </div>
        );
        //className is used in ReactJS to access CSS classes
        //parenthesis after return allows HTML, {} allows JS in html
    }
}
//constructor and render are Lifecycle Methods
//constructor()>> access props, init content
//this.state and this.props are accessable objects
//conditional rendering, rendering components based on state
//Render() runs when state is updated
//TO UPDATE STATE, use this.setState() [asynchronous]

export default Comment;
let c1 = <Comment />

