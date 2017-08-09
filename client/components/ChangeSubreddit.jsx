import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, setSubreddit } from '../actions'

const ChangeSubreddit = ({ dispatch, subreddit }) => {
  return (
    <div>
      <input id= "subreddit-input" type="text" />
      <button
        onClick={() => {
          return (
          dispatch(setSubreddit(document.getElementById('subreddit-input').value))
          )
        }}
      >Select Subredditr</button>
      <h3>Selected Subreddit: /r/{subreddit}</h3>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    subreddit: state.subreddit
  }
}
export default connect(mapStateToProps)(ChangeSubreddit)
