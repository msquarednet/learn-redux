//creates action. dispatched action

//inc like
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment) {  //console.log('dispatching addComment...')
  return {
    type: 'ADD_COMMENT',
    postId, 
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}