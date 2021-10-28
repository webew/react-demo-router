import React, { Component } from 'react';
import Compteur from "../components/Compteur";
import Header from "../components/Header";

class Compteurs extends Component {
    constructor(props) {
		super(props);
		this.state = { counters: [0, 0, 0], total: 0 };
	}

	updateCounters = (value, i) => {
		console.log("Counter " + i, " Valeur : " + value);
		let counters = this.state.counters;
		counters[i] = value;
		console.log(counters);
		this.setState({ counters });
		// console.log(value);
		let total = counters.reduce(
			(accumulateur, valeurCourante) => accumulateur + valeurCourante,
			0
		);
		this.setState({ total: total });
	};

	render() {
		return (
			<main>
				<Header count={this.state.total} />
				{this.state.counters.map((counter, i) => {
					return (
						<Compteur
							key={i}
							handleChange={(value) => {
								this.updateCounters(value, i);
							}}
						/>
					);
				})}
			</main>
		);
	}
}
 
export default Compteurs;