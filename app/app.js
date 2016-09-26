import React, { Component } from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, useRouterHistory, Link } from 'react-router';

// components
import NavBar from './page/components/NavBar';
import IndexBanner from './page/components/IndexBanner';
import HomeContent1 from './page/components/HomeContent1';
import HomeParallax1 from './page/components/HomeParallax1';
import HomeParallax2 from './page/components/HomeParallax2';
import Contact from './page/components/Contact';
import Footer from './page/components/Footer';


class App extends Component {
	componentWillMount() {
	}

	componentDidMount() {
	}

	render(){
		return(
			<div>
				<NavBar />
				<IndexBanner />
				<HomeContent1 />
				<HomeParallax1 />
				<Contact />
				<HomeParallax2 />
				<Footer />
			</div>
		)
	}
}

export default App
