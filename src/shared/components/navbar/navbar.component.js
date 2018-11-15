import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const menu = ['Home', 'Services', 'About', 'Contact'];

const Navbar = (props) => {
	const { classes } = props;
	return (
		<ul className={classes.nav}>
			{menu && menu.map((link) => {
				return link === menu[0] ? 
						<li className={classes.li} key={link}>
							<Link className={classes.link} to={'/'}>{link}</Link>
						</li>
					: <li className={classes.li} key={link}>
						<Link className={classes.link} to={`/${link}`}>{link}</Link>
					</li>
			})}
		</ul>
	);
};

const styles = (theme) => ({
	nav: {
		padding: '0px',
		textAlign: 'center',
	},
	li: {
		display: 'inline-block',
		padding: '10px',
		margin: '5px',
	},
	link: {
		textDecoration: 'none',
	},
});

export default withStyles(styles)(Navbar);