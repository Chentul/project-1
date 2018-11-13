import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class Contact extends Component {
	state = {
		names: ['Vicente Spencer Noriega Moreno'],
	};

	handleOnSubmit = ( event ) => {
		event.preventDefault();

		const { value } = event.target.name;
		const { state } = this;

		this.setState({
			...state,
			names: [...state.names, value],
		});

		value = '';
	}

	render() {
		const { classes } = this.props;
		const { names, value } = this.state;
		return(
			<div className={classes.root}>
				<h1>The names will be displayed here ...</h1>
				{names.length > 0 && (
					<ul>
						{names.map(name => <li key={name}>{name}</li>)}
					</ul>
				)}
				<form onSubmit={this.handleOnSubmit} className={classes.form}>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<label >Name: </label>
							<input className={classes.input} type="text" name="name" value={value} />
							<input className={classes.submit} type="submit" />
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	input: {
		display: 'block',
		width: '99.5%',
	},
	submit: {
		display: 'block',
		width: '100%',
		margin: '15px 0px',
		'&:hover': {
			cursor: 'pointer',
		},
	},
});

export default withStyles(styles)(Contact);