import React from 'react';
import MyButton from './UI/button/MyButton';
import './../styles/PostItem.css'

const PostItem = function(props){

    function removePost(){
        props.remove(props.post);
    }

    return(
        <div className="post">
            <div className="post__contenet">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={removePost}> Delete </MyButton>
            </div>
        </div>
    )
}

export default PostItem;
