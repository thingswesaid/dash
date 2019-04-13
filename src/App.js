import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'

import FeedPage from './pages/FeedPage'
import DraftsPage from './pages/DraftsPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import VideoPage from './pages/video'

import 'tachyons'
import './index.css'

// const client = new ApolloClient({ uri: 'https://dash-prisma-client.herokuapp.com/' }) //TODO url will have to be setup in process.env
// const client = new ApolloClient({ uri: 'http://localhost:4000' })

class App extends Component {
  render() {
    const App = () => (
			<div>
				<Switch>
					<Route exact path="/" component={FeedPage} />
					<Route path="/drafts" component={DraftsPage} />
					<Route path="/create" component={CreatePage} />
					<Route path="/post/:id" component={DetailPage} />
					<Route path="/video/:id" component={VideoPage} />
				</Switch>
			</div>
		)

		return (
			<Switch>
				<App/>
			</Switch>
		)
	}
}

export default App;


{/* <Fragment>
						<nav className="pa3 pa4-ns">
							<Link
								className="link dim black b f6 f5-ns dib mr3"
								to="/"
								title="Feed"
							>
								Blog
							</Link>
							<NavLink
								className="link dim f6 f5-ns dib mr3 black"
								activeClassName="gray"
								exact={true}
								to="/"
								title="Feed"
							>
								Feed
							</NavLink>
							<NavLink
								className="link dim f6 f5-ns dib mr3 black"
								activeClassName="gray"
								exact={true}
								to="/drafts"
								title="Drafts"
							>
								Drafts
							</NavLink>
							<Link
								to="/create"
								className="f6 link dim br1 ba ph3 pv2 fr mb2 dib black"
							>
								+ Create Draft
							</Link>
						</nav>
						<div className="fl w-100 pl4 pr4">
							{/* switch app */}
						// </div>
					// </Fragment>, 