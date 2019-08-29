class List extends React.Component {
  constructor(){
    super()

    this.state = {
      task : "",
      list : []
    }

    //this.changeHandler = this.changeHandler.bind(this);
    //this.addItem = this.addItem.bind(this);
  }

  addItem(){
    console.log('task input '+this.state.task);
    this.state.list.push(this.state.task);
    console.log('list: '+this.state.list);
    this.setState({list: this.state.list});
    this.setState({task: ""});
  }

  changeHandler(){
   this.setState({task: event.target.value});
   console.log('adding task');
  }

  render() {
      // render the list with a map() here
       console.log(this.state.list);
       const taskList = this.state.list.map((item) => {
                return (
                    <ul>
                        <li>
                            {item}
                        </li>
                    </ul>);
        });
        console.log(taskList);

        console.log("rendering");
        return (
            <div className="list">
                <input onChange={()=>{this.changeHandler()}} value={this.state.task}/>
                <button onClick={()=>{this.addItem()}}>add item</button>
                <p>To do List</p>
                <ul>
                    {taskList}
                </ul>
            </div>
        );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);