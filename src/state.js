export default class TodoItemState {
	state = {
		todoData: [],
		term: "",
		filter: "all",
	};

	getData() {
		return new Promise((resolve) => {
			return resolve(this.state);
		});
	}
}
