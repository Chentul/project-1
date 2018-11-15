import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';

class Contact extends React.Component {
	state = {
		family: [
			{
				name: 'Vicente Spencer Noriega Moreno',
				sex: 'male',
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
		const genderTag = document.getElementById("select-gender");

		const { state } = this;

		this.setState({
			...state,
			family: [
				...state.family, 
				{
					name: familyNameTag.value,
					sex: genderTag.value,
				},
			],
			gender: "default",
		});

		familyNameTag.value = '';
		genderTag.value = 'gender';
	}

	handleChipDelete = (deleteName) => {
		const { family } = this.state;
		const newFamily = family.filter(familyNames => familyNames.name !== deleteName);
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
		const { family, gender = "default" } = this.state;
		const genderMap = [
			{
				value: 'default',
				label: 'Select gender',
			},
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
				label: 'Pet',
			},
		];
		const getColorChip = (gender) => {
			switch(gender) {
				case 'male': 
					return 'primary';
				case 'female': 
					return 'secondary';
				default: 
					return 'default';
			};
		}
		return(
			<div className={classes.root}>
				<h1 className={classes.textCenter}>The names of the family will appear here ...</h1>
				{family.length > 0 && (
					<div className={classes.textCenter}>
						{family.map((familyMember) => {
							return (
								<Chip
									icon={<FaceIcon />}
									label={familyMember.name}
									onDelete={() => {
										this.handleChipDelete(familyMember.name);
									}}
									className={classes.chip}
									color={getColorChip(familyMember.sex)}
									key={familyMember.name}
								/>
							);
						})}
					</div>
				)}
				<Grid container spacing={24}>
					<Grid item xs={6} className={classNames(classes.inputs, classes.fixingInput)}>
						<InputLabel 
							shrink={true}
							htmlFor="input-with-name"
						>
							Name
						</InputLabel>
						<Input 
							fullWidth
							id="input-with-name"
							startAdornment={
								<InputAdornment postion="start">
									<AccountCircle />
								</InputAdornment>
							}
							placeholder="Juan Perez ..."
						/>
					</Grid>
					<Grid item xs={6} className={classes.inputs}>
						<TextField
							id="select-gender"
							select
							label="Gender"
							value={gender}
							onChange={this.handleChange('gender')}
							fullWidth
							SelectProps={{
								MenuProps: {
									className: classes.menu,
								}
							}}
							margin="normal"
						>
							{genderMap.map((option) => {
								return (
									<MenuItem value={option.value} key={option.value}>
										{option.label}
									</MenuItem>
								);
							})}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<Button onClick={this.handleOnSubmit} variant="contained" color="default">
							Send
						</Button>
					</Grid>
				</Grid>
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
	chip: {
    margin: theme.spacing.unit,
  },
  form: {
  	margin: '20px 0px',
  },
  textCenter: {
  	textAlign: 'center',
  },
  inputs: {
  	margin: '10px 0px',
  },
  menu: {
  	width: '200px',
  },
  fixingInput: {
  	marginTop: '23px',
  },
});

export default withStyles(styles)(Contact);