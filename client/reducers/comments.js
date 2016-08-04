//see ./posts.js...

function postComments(state=[], action) { //reducer composition, not exported helper function
  //console.log(state, action)
  switch(action.type) {
    case 'ADD_COMMENT' :      ///return new state, with new comment
      const newstate = [...state, {user: action.author, text: action.comment}];      // console.log(newstate)
      return newstate;
    case 'REMOVE_COMMENT' :   ///return new state, without deleted comment
      console.log('removing a comment...');
      const thestate = [...state.slice(0,action.i), ...state.slice(action.i+1)];      // console.log(thestate)
      return thestate;
    default : return state;
  }
  return state;
}
function comments(state=[], action) {
  // console.log(state, action)
  if (typeof action.postId !== undefined) { //take current state, and then overwrite particular comments of given post(Id)
    const newstate = {
      ...state, [action.postId]: postComments(state[action.postId], action)
    };
    //console.log('FINAL:', newstate)
    return newstate
  }
  return state;
}

export default comments;