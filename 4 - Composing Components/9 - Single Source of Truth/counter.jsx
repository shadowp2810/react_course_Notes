class Counter extends React.Component {
  /*
  Here we are initializing the value property 
  of our state object based on what we get from props.
  This piece of code is executed only once, 
  when an instance of a counter component is created.
  So that is why when page loads we get initial value
  and we can increment it,
  because it is a local state counter component,
  but when we hit reset button,
  the local state counter component is not updated.
  To fix this problem we need to 
  remove the local state in counter component,
  and have a single source of truth.
  */
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;

    // const x = <h1>Zero</h1>;
    // return count === 0 ? x : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
