import React, { Component } from "react";
// import React, { useState, useCallback } from "react";

class Compteur extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 0 };
	}
	handlePlus = () => {
		this.setState({ value: this.state.value + 1 }, () => {
			this.props.handleChange(this.state.value);
		});
	};
	handleMoins = async () => {
		await this.setState({ value: this.state.value - 1 });
		this.props.handleChange(this.state.value);
	};
	handleReset = async () => {
		await this.setState({ value: 0 });
		this.props.handleChange(this.state.value);
	};

	render() {
		return (
			<div>
				<span>{this.state.value}</span>
				<button onClick={this.handlePlus}>+</button>
				<button onClick={this.handleMoins}>-</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
}

export default Compteur;
