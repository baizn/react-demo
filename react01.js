var HelloMessage = React.createClass({
	render: function() {
		return <div>Hello, {this.props.name}</div>
	}
});

React.render(<HelloMessage name="baizn" />, mountNode);

var Timer = React.createClass({
	getInitialState() {
		return {secondElapsed: 0};
	},
	tick() {
		this.setState({secondElapsed: this.state.secondElapsed});
	},
	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount() {
		clearInterval(this.interval);
	},
	render() {
		return (<div>Second Elapsed: {this.state.secondElapsed}</div>);
	}
});

React.render(<Timer />, mountNode);

var TabSelector = React.createClass({
	getInitialState() {
		return {selected: this.props.selected};
	},
	handleOnClick() {
		this.setState({'selected': evt.target.getAttribute('data-value')});
	},
	render() {
		var tabs = this.props.data.map(function(item) {
			var selected = item.value == this.state.selected ? 'selected' : '';
			return <li data-value={item.value} 
				className={selected} 
				onClick={this.handleOnClick}
				>{item.name}</li>;
		}, this);

		return <div className="tab-selector">
				<label>{this.props.label}</label>
				<ul>
					{tabs}
				</ul>
				</div>;
	}
})