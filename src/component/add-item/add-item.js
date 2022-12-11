import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
	state = {
		label: "",
	};
	onChange = (e) => {
		this.setState(() => {
			return { label: e.target.value };
		});
	};
	addItem = () => {
		this.props.addNewItem(this.state.label);
		this.setState({ label: "" });
	};
	render() {
		return (
			<div className="add-item">
				<input onChange={this.onChange} type="text" value={this.state.label} />
				<button onClick={this.addItem}>Add</button>
			</div>
		);
	}
}
