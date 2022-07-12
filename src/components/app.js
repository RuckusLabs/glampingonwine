import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Contact from '../routes/contact';
import TheStory from '../routes/theStory';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Contact path="/contact/" />
			<TheStory path="/the-story/" />
		</Router>
		<Footer />
	</div>
)

export default App;
