import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const LoadSubreddit = ({dispatch, subreddit}) => {
  console.log()
  return (<button
    onClick={() => dispatch(fetchPosts(subreddit))}
    >Fetch Posts</button>
  )
}
function mapStateToProps (state) {
  return {
    subreddit: state.subreddit
  }
}
export default connect(mapStateToProps)(LoadSubreddit)
