import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import queryString from 'query-string';
import * as Sentry from '@sentry/browser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { COOKIE_RECENT_ORDER, COOKIE_PAYPAYL_EMAIL, COOKIE_USER_ID } from './constants';
import { withAppData, AppContext } from './shared-components/with-app-data';
import { browserCheck } from './utils';
import { removeCookie, getCookie } from './cookieUtils';
import AppFrame from './shared-components/app-frame';
import ErrorBoundary from './shared-components/error-boundary'
import HomePage from './pages/homepage';
import PickACard from './pages/pick-a-card';
import UserPage from './pages/user-page';
import VideoPage from './pages/video';
import TermsPage from './pages/terms';
import HelpDeskPage from './pages/help-desk';
import UnsubscribePage from './pages/unsubscribe';
import MemberServicePage from './pages/member-service';
import StudioPage from './pages/studio';

import './index.css';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DNS });
}

const uri = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_APOLLO_URI : 'http://localhost:4000';

const uriWs = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_APOLLO_URI_WS : 'ws://localhost:4000';

const wsLink = new WebSocketLink({ uri: uriWs, options: { reconnect: true } });
const httpLink = new HttpLink({ uri, fetch });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  }, wsLink, httpLink,
)

const client = new ApolloClient({
  ssrMode: true,
  link,
  cache: new InMemoryCache(),
})

const AppFrameWithData = withAppData(AppFrame);
removeCookie(COOKIE_RECENT_ORDER);
removeCookie(COOKIE_PAYPAYL_EMAIL);
browserCheck();

render((
  <ApolloProvider client={client}>
    <Router>
      <AppFrameWithData>
        <ErrorBoundary>
          <AppContext.Consumer>
            {({ userId, userIp, location }) => (
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (<HomePage />)}
                />
                <Route
                  path="/video/:id"
                  render={
                    ({ match, location: { search } }) => {
                      const { showall } = queryString.parse(search);
                      const { params: { id } } = match;
                      return (
                        <VideoPage
                          videoId={id}
                          userId={userId}
                          userIp={userIp}
                          location={location}
                          showAll={!!showall}
                        />
                      );
                    }
                  }
                />
                <Route
                  path="/pick-a-card"
                  render={() => (<PickACard />)}
                />
                <Route
                  path="/user"
                  render={() => (<UserPage />)}
                />
                <Route
                  path="/terms"
                  render={() => (<TermsPage />)}
                />
                <Route
                  path="/help"
                  render={() => (<HelpDeskPage />)}
                />
                <Route
                  path="/studio"
                  render={() => {
                    const userId = getCookie(COOKIE_USER_ID);
                    return <StudioPage userId={userId} />;
                }}
                />
                <Route
                  path="/members"
                  render={() => {
                    const userId = getCookie(COOKIE_USER_ID);
                    return userId ? <MemberServicePage userId={userId} /> : <HomePage />; 
                }}
                />
                <Route
                  path="/unsubscribe/:type/:email"
                  render={({ match: { params: { type, email } } }) => 
                    <UnsubscribePage type={type} email={email} />
                  }
                />
              </Switch>
            )}
          </AppContext.Consumer>
        </ErrorBoundary>
      </AppFrameWithData>
    </Router>
  </ApolloProvider>
), document.getElementById('root'));
