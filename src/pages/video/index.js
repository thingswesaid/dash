import React, { Fragment } from 'react';
import { Adopt } from 'react-adopt';

import MainVideo from './components/main-video';
import Promo from './components/promo-video';
import SuggestedVideos from './components/suggested-videos';
import Loader from '../../shared-components/loader';
import Error from '../../shared-components/error';
import VideoNotFound from './components/video-not-found';
import Educational from './components/educational';
// import Merch from './components/merch';
import './index.css';

import { videoPageQuery } from '../../operations/queries';
import {
  addUserIpMutation,
  createAnonymousIpMutation,
  addUserToVideoMutation,
} from '../../operations/mutations';

const mapper = {
  videoPageQuery,
  // productsQuery,
  addUserIpMutation,
  createAnonymousIpMutation,
  addUserToVideoMutation,
};

// >>> buy video - then click to preview - then back to extended doesn't work
// can't select videos from dropdown on mobile
// check user status and ip blocked before showing the page
// transfer assets to wasabi and setup cloudflare
// CHECK AGAIN DOUBLE QUERY ISSUE


export default (props) => {
  const { videoId, userIp, showAll } = props;
  return (
    <Fragment>
      <Adopt mapper={mapper} id={videoId} ip={userIp} showAll={showAll}>
        {({
          videoPageQuery: videoPageData,
          addUserIpMutation: addUserIp,
          createAnonymousIpMutation: createAnonymousIp,
          addUserToVideoMutation: addUserToVideo,
        }) => {
          try {
            const { data, loading, error } = videoPageData;

            if (loading) { return <Loader />; }
            if (error) { return <Error error={error} />; } /* TODO log to sumo or similar */
            const { videoPage: { video, latestVideos, promoVideo } } = data;
            // const { data: { products: { items: products, types: productTypes } } } = productsData;
            const showMerch = false;

            return (
              <Fragment>
                <div className="page">
                  <div className="videoWrapper">
                    <MainVideo
                      video={video}
                      userIp={userIp}
                      addUserIp={addUserIp}
                      addUserToVideo={addUserToVideo}
                      createAnonymousIp={createAnonymousIp}
                    />
                    <div className="separator" />
                    <Promo video={promoVideo} orientation="portrait" />
                  </div>
                  <div className="mobileWrapper" />
                  <SuggestedVideos videos={latestVideos} />
                  <Promo video={promoVideo} orientation="landscape" />
                </div>
                {showMerch ? (
                  <div className="bottomPage">
                    <Educational />
                    {/* <Merch products={products || []} types={productTypes} /> */}
                  </div>
                ) : ''}
              </Fragment>
            );
          } catch (e) {
            return (<VideoNotFound />);
          }
        }}
      </Adopt>
    </Fragment>
  );
};
