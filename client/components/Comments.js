import React from 'react'


const Comments = React.createClass({  //not bother making seperate component, just do inline, here
  renderComment(comment, i) {
    //console.log('COMMENT:', comment, i)
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong> : {comment.text}
          <button className="remove-comment" 
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    //console.log('handleSubmit...', e, this.refs);
    e.preventDefault();
    const {postId} = this.props.params;    //const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment); //from actionCreators
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="comments">
        {/*comments...*/}
        {this.props.postComments.map( this.renderComment )}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;