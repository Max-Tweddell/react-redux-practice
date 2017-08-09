import {SET_SUBREDDIT} from '../actions'

function subreddit (state = '', action) {
  switch (action.type) {
    case SET_SUBREDDIT:
      return action.subreddit

    default:
      return state
  }
}

export default subreddit
