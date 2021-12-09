class Counter extends React.Component {
  state = {
    count: 0,
    imageUrl: "",
  };

  styles = {
    fontSize = 10,
    fontWeight = 'bold',
  }

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
        <span style={{fontSize:30}} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;

    // const x = <h1>Zero</h1>;
    // return count === 0 ? x : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
