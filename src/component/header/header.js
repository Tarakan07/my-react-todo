import React, { Component } from "react";

import "./header.css";
export default class Header extends Component {
	render() {
		const { toDo, done } = this.props;
		return (
			<div className="header">
				<h2>Приложуха с использование Class Components</h2>
				<div className="header-info">
					Осталось {toDo}, готово {done}
				</div>
			</div>
		);
	}
}
