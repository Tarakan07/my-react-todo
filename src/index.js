import React from "react";
import ReactDOM from "react-dom";

import App from "./component/app";
import TodoItemState from "./state";
const itemServices = new TodoItemState();
ReactDOM.render(
	<App itemServices={itemServices} />,
	document.getElementById("root")
);
