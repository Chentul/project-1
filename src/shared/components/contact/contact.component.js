import React from 'react';
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
import TextField from '@material-ui/core/TextField';

class Contact extends React.Component {
	state = {
		family: [
			{
				name: 'Vicente Spencer Noriega Moreno',
				sex: 'man',
			},
			{
				name: 'Diana Carolina Hernandez Ocampo',
				sex: 'female',
			},
			{
				name: 'Tachito Noriega Hernandez',
				sex: 'dog',
			},
		],
	};

	handleOnSubmit = () => {
		const familyNameTag = document.getElementById("input-with-name");
		const { state } = this;

		this.setState({
			...state,
			family: [...state.family, familyNameTag.value],
		});

		familyNameTag.value = '';
	}

	handleChipDelete = (deleteName) => {
		const { family } = this.state;
		const newFamily = family.filter(familyNames => familyNames !== deleteName);
		this.setState({
			...this.state,
			family: newFamily,
		});
	}

	handleChange = (name) => (event) => {
		this.setState({
			...this.state,
			[name]: event.target.value,
		});
	}

	render() {
		const { classes } = this.props;
		const { family, gender } = this.state;
		const genderMap = [
			{
				value: 'male',
				label: 'Male',
			},
			{
				value: 'female',
				label: 'Female',
			},
			{
				value: 'pet',
				value: 'Pet',
			},
		];
		return(
			<div className={classes.root}>
				<h1>The names of the family will appear here ...</h1>
				{family.length > 0 && (
					family.map((familyName) => {
						return (
							<Chip
								icon={<FaceIcon />}
								label={familyName.name}
								onDelete={() => {
									this.handleChipDelete(familyName.name);
								}}
								className={classes.chip}
								color="primary"
								key={familyName.name}
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
							id="input-with-name"
							startAdornment={
								<InputAdornment postion="start">
									<AccountCircle />
								</InputAdornment>
							}
						/>
						<TextField
							id="select-gender"
							select
							label="Select gender"
							value={gender}
							onChange={this.handleChange('gender')}
						>
							{genderMap.map((option) => {
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							})}
						</TextField>
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