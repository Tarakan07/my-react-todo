import React, { Component } from "react";
import "./search-panel.css";
export default class SearchPanel extends Component {
	state = {
		term: "",
	};
	onChange = (e) => {
		this.setState({ term: e.target.value });
		this.props.search(e.target.value);
	};
	render() {
		return (
			<input
				onChange={this.onChange}
				className="search-panel"
				value={this.state.term}
			/>
		);
	}
}
