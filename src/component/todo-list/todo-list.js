import React, { Component } from "react";

import "./todo-list.css";
import TodoItem from "../todo-item";
export default class TodoList extends Component {
	render() {
		const { todoData } = this.props;
		return (
			<ul>
				{todoData.map((item) => {
					return (
						<li className="todo-item" key={item.id}>
							<TodoItem
								item={item}
								onToggleImportant={this.props.onToggleImportant}
								onToggleDone={this.props.onToggleDone}
								onDelete={this.props.onDelete}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
