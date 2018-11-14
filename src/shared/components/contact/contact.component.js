import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

class Contact extends Component {
	state = {
		family: [
			'Vicente Spencer Noriega Moreno',
			'Diana Carolina Hernandez Ocampo',
			'Tachito Noriega Hernandez',
		],
	};

	handleOnSubmit = () => {
		const element = document.getElementById("name");
		const { state } = this;

		this.setState({
			...state,
			family: [...state.family, element.value],
		});

		element.value = '';
	}

	handleChipDelete = (element) => {
		console.log('handleChipDelete', element);
	}

	render() {
		const { classes } = this.props;
		const { family, value } = this.state;
		return(
			<div className={classes.root}>
				<h1>The family names will appear here ...</h1>
				{family.length > 0 && (
					family.map((familyName) => {
						return (
							<Chip
								icon={<FaceIcon />}
								label={familyName}
								onDelete={this.handleChipDelete}
								className={classes.chip}
								color="primary"
								key={familyName}
							/>
						);
					})
				)}
				<div className={classes.container}>
					<FormControl 
							fullWidth 
							onSubmit={this.handleOnSubmit} >
						<InputLabel htmlFor="input-with-icon-adornment">
							Enter the full name of your family
						</InputLabel>
						<Input 
							id="name"
							startAdornment={
								<InputAdornment postion="start">
									<AccountCircle />
								</InputAdornment>
							}
						/>
						<Button 
							variant="fab" 
							arial-label="Add"
							className={classes.button}
							color="primary"
							onClick={this.handleOnSubmit}
							>
							<AddIcon />
						</Button>
					</FormControl>
				</div>
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
	container: {
		margin: '0px 50px',
	},
	button: {
		margin: theme.spacing.unit,
	},
	chip: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(Contact);