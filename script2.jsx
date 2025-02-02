class Form extends React.Component {
    render () {
        console.log(this)
        return (
            <form>
                <input onChange={this.props.changeHandler} value={this.props.task}/>
                <button onClick={this.props.addItem}>Add Task</button>
            </form>
        )
    }

}

class ItemList extends React.Component {
    render () {
        console.log('item list: '+this.props.list)
        const taskList = this.props.list.map((item, index) => {
            return (
                    <ToDoItem
                        key={index}
                        item={item}>
                    </ToDoItem>
            );
        });
        return (
            <div>
                <ul>{taskList}</ul>
            </div>
        )
    }
}


class ToDoItem extends React.Component {
    render() {
        //let index=this.props.index
        let item=this.props.item

        return (
            <div>
                <li>{item}</li>
            </div>
        )

    }
}


class ToDoApp extends React.Component {
    constructor(){
        super()

        this.state = {
            task : "",
            list : []
        }

        this.addItem = this.addItem.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    addItem(event){
        event.preventDefault();
        console.log('task input '+this.state.task);
        this.state.list.push(this.state.task);

        console.log(this.state.list);
        this.setState({list: this.state.list});
        this.setState({task: ""});
        console.log(this.state.list);
    }

    changeHandler(){
        this.setState({task: event.target.value});
        console.log('task entered '+this.state.task);
    }

    render() {
        console.log("todo app rendering");
        console.log(this.state.list)
        return (

            <div>

                <Form changeHandler={this.changeHandler} addItem={this.addItem} task={this.state.taskList}>
                </Form>

                <ItemList list={this.state.list}>
                </ItemList>
            </div>
        );
    }
}


ReactDOM.render(
    <ToDoApp/>,
    document.getElementById('root')
);