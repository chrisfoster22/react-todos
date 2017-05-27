class ToDos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: props.list
		}

		this.addToDo = this.addToDo.bind(this);
	}

	render() {
		return(
			<div>
				<ToDoList toDos={this.state.list} />
				<NewToDo addToDo={this.addToDo} />
			</div>
		)
	}

	addToDo(todo) {
		myToDos.push(todo);
		this.setState({todos: myToDos})
	}

}

function ToDoList(props) {

	let highPriorities = props.toDos.filter(function(todo) {
		return todo.priority === "high";
	});

	let medPriorities = props.toDos.filter(function(todo) {
		return todo.priority === "medium";
	});

	let lowPriorities = props.toDos.filter(function(todo) {
		return todo.priority === "low";
	});

	todos = highPriorities.concat(medPriorities, lowPriorities);

	todos = todos.map(function(todo) {
		return <div className={todo.priority}>{todo.name}</div>
	})

	return(
		<div>
			{todos}
		</div>
	)

}

class NewToDo extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			newName: "",
			newPriority: ""
		}

		this.updateName = this.updateName.bind(this);
		this.updatePriority = this.updatePriority.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	render() {
		return(
			<div>
				<input value={this.state.newName} onChange={this.updateName} />
				<input value={this.state.newPriority} onChange={this.updatePriority} />
				<button onClick={this.handleAddTodo}>New ToDo</button>
			</div>
		)
	}

	 updateName(event) {
		this.setState({newName:event.target.value});
	}

	updatePriority(event) {
		this.setState({newPriority:event.target.value});
	}

	handleAddTodo() {
		this.props.addToDo({name: this.state.newName, priority: this.state.newPriority})
	}
}



let myToDos = [
	{
		name: "Get food",
		priority: "high"
	},
	{
		name: "Go to work",
		priority: "low"
	},
	{
		name: "Get Christmas gifts",
		priority: "medium"
	}
]



ReactDOM.render(
	<ToDos list={myToDos} />,
	document.getElementById("react")
)
