import React, { Component } from "react";
import "./filter-item.css";

export default class FilterItem extends Component {
	buttons = [
		{ name: "all", label: "All" },
		{ name: "active", label: "Active" },
		{ name: "done", label: "Done" },
	];
	render() {
		return this.buttons.map((button, idx) => {
			return (
				<button
					key={idx}
					onClick={() => this.props.filter(button.name)}
					className="filter-button"
				>
					{button.label}
				</button>
			);
		});
	}
}
