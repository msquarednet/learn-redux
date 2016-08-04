import React from 'react'
import Photo from './Photo'
import Comments from './Comments'


export default React.createClass({
  render() {
    const postId = this.props.params.postId;//
    const i = this.props.posts.findIndex( post => post.code === postId);  //index
    const post = this.props.posts[i]; //post
    const postComments = this.props.comments[postId] || []; //comment for post
    //console.log(i,post)
    return (
      <div className="single-photo">
        {/*Single...*/}
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}></Comments>
      </div>
    )
  }
});


;