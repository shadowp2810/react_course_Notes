/*
The component that owns a piece of the state 
should be the one modifying it.
Counter Component will raise the event,
`onDelete`,
and its parent,
Counters Component wil handle the event,
`handleDelete()`.
*/

class Counter extends React.Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
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
