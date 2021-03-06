import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import subreddit from './subreddit'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  subreddit
})

