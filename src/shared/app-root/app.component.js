import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header/header.component';
import Home from '../components/home/home.component';
import Service from '../components/service/service.component';
import About from '../components/about/about.component';
import Contact from '../components/contact/contact.component';
import Footer from '../components/footer/footer.component';


class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route exact={true} path={'/'} component={Home} />
					<Route exact={true} path={'/Services'} component={Service} />
					<Route exact={true} path={'/About'} component={About} />
					<Route exact={true} path={'/Contact'} component={Contact} />
					<Footer />
				</Router>
			</div>
		);
	}
};

export default App;