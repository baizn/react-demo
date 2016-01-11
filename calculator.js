var Calculator = React.createClass({
	getInitialState: function() {
		debugger
		return {
			a: 1,
			b: 3,
			c: -4
		};
	},
	handleInputChange: function(key, event) {
		debugger;
		var partialState = {};
		partialState[key] = parseFloat(event.target.value);
		this.setState(partialState);
	},
	render: function() {
		debugger;
		var a = this.state.a;
		var b = this.state.b;
		var c = this.state.c;
		var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
		var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
		return (
			<div>
				<strong>
					<em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
				</strong>
				<h4>Solve for <em>X</em>: </h4>
				<p>
					<label>
						a: <input type="number" value={a} onChange={this.handleInputChange.bind(null, 'a')} />
					</label>
					<br/>
					<label>
						b: <input type="number" value={b} onChange={this.handleInputChange.bind(null, 'b')} />
					</label>
					<br/>
					<label>
						c: <input type="number" value={c} onChange={this.handleInputChange.bind(null, 'c')} />
					</label>
					<br/>
					X:<strong>{x1}, {x2}</strong>
				</p>
			</div>
		);
	}
});

React.render(<Calculator />, document.getElementById('container'));