class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    // const x = <h1>Zero</h1>;
    // return count === 0 ? x : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
