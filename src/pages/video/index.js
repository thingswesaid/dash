import React, { Component, Fragment } from 'react' 
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import YouTube from 'react-youtube'
import './index.css'

export default class Video extends Component {
  render() {
    // console.log("PROPS > ", this.props.match.params.id)
    return (
      <Query query={FEED_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }

          return (
            <Fragment>
              <div className="videoPlayer">
                <img src="https://res.cloudinary.com/dw4v960db/image/upload/v1555027202/Aries_Secret_April.jpg" /> /* has to come from API */                <YouTube  videoId={"ZIchuVxBVng"} />
              </div>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      content
      title
      published
    }
  }
`
