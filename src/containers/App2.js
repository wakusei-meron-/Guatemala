import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import { searchImage } from '../actions'
import { Minigrid } from 'minigrid'
import Picker from '../components/Picker'
import Images from '../components/Images'
// import Images from '../components/Images'

class App extends Component {
  static propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedReddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedReddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { dispatch, selectedReddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedReddit))
    }
  }

  handleChange = nextReddit => {
    this.props.dispatch(selectReddit(nextReddit))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedReddit } = this.props
    // dispatch(invalidateReddit(selectedReddit))
    dispatch(fetchPostsIfNeeded('apple'))
  }

  handleSearchClick = e => {
    const { dispatch } = this.props
    console.log('click');
    dispatch(searchImage('apple'))
  }

  render() {
    const { dispatch, selectedReddit, posts, isFetching, lastUpdated, keyword } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
          <input ref="searchWord" type="text" placeholder="検索ワード" />
          <button onClick={this.handleSearchClick}>検索</button>
          <p>{keyword}</p>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href="#"
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }

        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Images images={posts} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedReddit, postsByReddit, inputReducer } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
  // } = {
    isFetching: true,
    items: []
  }
  var keyword = inputReducer.keyword

  return {
    keyword,
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
