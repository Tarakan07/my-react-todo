import React, { Component } from "react";

import "./app.css";

import Header from "../header";
import TodoList from "../todo-list";
import AddItem from "../add-item";
import SearchPanel from "../search-panel";
import FilterItem from "../filter-item";

export default class App extends Component {
	state = {
		todoData: [],
		term: "",
		filter: "all",
	};
	itemId = 1;
	componentDidMount() {
		this.props.itemServices.getData().then((data) => {
			this.setState((state) => {
				return data.state;
			});
		});
	}

	createNewItem = (label) => {
		return {
			id: this.itemId++,
			label: label,
			important: false,
			done: false,
		};
	};

	addNewItem = (label) => {
		fetch("https://dummyjson.com/products/")
			.then((res) => res.json())
			.then((json) => console.log(json));
		this.setState(({ todoData }) => {
			return {
				todoData: [
					...todoData,
					{
						id: this.itemId++,
						label: label,
						important: false,
						done: false,
					},
				],
			};
		});
	};

	onToggle = (id, todoData, propName) => {
		const idx = todoData.findIndex((el) => el.id == id);
		const newItem = {
			...todoData[idx],
			[propName]: !todoData[idx][propName],
		};
		return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
	};
	onDelete = (id) => {
		const idx = this.state.todoData.findIndex((el) => el.id == id);
		this.setState(({ todoData }) => {
			return {
				todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)],
			};
		});
	};
	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return { todoData: this.onToggle(id, todoData, "important") };
		});
	};
	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return { todoData: this.onToggle(id, todoData, "done") };
		});
	};

	filter = (name) => {
		this.setState({ filter: name });
	};
	search(val) {
		this.setState({ term: val });
	}
	getSearchItems = (data, term) => {
		if (term == "") {
			return data;
		}
		const items = data.filter((el) => el.label.indexOf(term) > -1);
		return items;
	};
	getFilterItems = (data, valueFilter) => {
		switch (valueFilter) {
			case "all":
				return data;
			case "active":
				return data.filter((el) => !el.done);
			case "done":
				return data.filter((el) => el.done);
			default:
				return data;
		}
	};
	render() {
		const { todoData, term, filter } = this.state;
		const visibleItems = this.getFilterItems(
			this.getSearchItems(todoData, term),
			filter
		);
		const countItems = todoData.filter((el) => !el.done);
		const countDone = todoData.length - countItems.length;
		return (
			<div className="todo-box">
				<Header toDo={countItems.length} done={countDone} />
				<div className="todo-form">
					<div className="filter-form">
						<SearchPanel search={(val) => this.search(val)} />
						<FilterItem filter={(name) => this.filter(name)} />
					</div>
					<TodoList
						todoData={visibleItems}
						onToggleImportant={(id) => this.onToggleImportant(id)}
						onToggleDone={(id) => this.onToggleDone(id)}
						onDelete={(id) => this.onDelete(id)}
					/>
					<AddItem addNewItem={(label) => this.addNewItem(label)} />
				</div>
			</div>
		);
	}
}
