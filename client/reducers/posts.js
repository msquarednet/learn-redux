// a reducer ('event-listener-ish') takes in 2 things //actually does the editing of state
// 1. the action (info about what happended ('event-ish'))
// 2. copy of the current state

// EVERY reducer runs, EVERY time there is ANY action dispatched
// $r.store.dispatch({type:'INC_LIKES', index:0})

function posts(state=[], action) {
  // console.log('the post is about to change...');  
  // console.log(state, action);
  //state[action.index].likes++;  //no, lets go pure functional, instead of mutating state.
  switch(action.type) {
    case 'INCREMENT_LIKES' : 
      console.log('Incrementing Likes...')
      const i = action.index;
      //1
      let newstate = [ //nifty use of spread, but yuck :P
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes+1}, //{a:1, b:2, b:222} === {a:1, b:222} //another 'likes' is NOT added to obj
        ...state.slice(i+1) //after the one we are updating
      ];
      //2
      // let newstate = [...state]  //seeeeems like its working (deceiving?) //are chrome devtools deceived???
      // newstate[i].likes+=1;
      console.log('NEWSTATE:', newstate)
      return newstate;
    default : 
      return state;
  }
  //return state;
}


export default posts;
