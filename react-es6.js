'use strict';
var BootstrapBtn = React.createClass({
	render: function() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

var BootstrapModal = React.createClass({
	compentDidMount: function() {
		$(this.getDOMNode()).modal(
			{backdrop: 'static', 
			keyboard: false,
			show: false});
	},
	componentWillUnmount: function() {
		$(this.getDOMNode()).off('hidden', this.handleHidden);
	},
	close: function() {
		$(this.getDOMNode()).modal('hide');
	},
	open: function() {
		$(this.getDOMNode()).modal('show');
	},
	render: function() {
		var confirmBtn = null;
		var cancelBtn = null;

		if(this.props.confirm) {
			confirmBtn = (
				<BootstrapBtn
					onClick={this.handleConfirm}
					className="btn-primary">
					{this.props.confirm}
				</BootstrapBtn>
			);
		}

		if(this.props.cancel) {
			cancelBtn = (
				<BootstrapBtn
					onClick={this.handleCanel}
					className="btn-default">
					{this.props.cancel}
				</BootstrapBtn>
			);
		}

		return (
			<div className="modal fade">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" 
									className="close"
									onClick={this.handleCanel}>
								&times;
							</button>
							<h3>{this.props.title}</h3>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							{cancelBtn}
							{confirmBtn}
						</div>
					</div>
				</div>
			</div>
		);
	},
	handleCanel: function() {
		if(this.props.onCancel) {
			this.props.onCancel();
		}
	},
	handleConfirm: function() {
		if(this.props.onConfirm) {
			this.props.onConfirm();
		}
	}
});

var FirstReact = React.createClass({
	handleCanel: function() {
		if(confirm('Are you sure you want to cancel?')) {
			this.refs.modal.close();
		}
	},
	render: function() {
		var modal = (
			<BootstrapModal
				ref="modal"
				confirm="OK"
				cancel="Cancel"
				onCancel={this.handleCanel}
				onConfirm={this.closeModal}
				title="Hello, Bootstrap!">
				This is a React  Component powered by jQuery and Bootstrap!
			</BootstrapModal>
		);

		return (
			<div className="first">
				{modal}
				<BootstrapBtn onClick={this.openModal} className="btn-default">
					Open modal
				</BootstrapBtn>
			</div>
		);
	},
	openModal: function() {
		this.refs.modal.open();
	},
	closeModal: function() {
		this.refs.modal.close();
	}
});

React.render(<FirstReact />, document.getElementById('container'));

/*class EA extends React.Component {
	render() {
		var elapsed = Math.round(this.props.elapsed / 100);
		var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
		var message = `React has been successfully running for ${seconds} seconds`;
		
		return <p>{message}</p>;
	}
}

var start = new Date().getTime();
setInterval(() => {
	React.render(
		<EA elapsed={new Date().getTime() - start} />, document.getElementById('container')
	);
}, 50);*/

/*var EA = React.createClass({
	render: function() {
		var elapsed = Math.round(this.props.elapsed / 100);
		var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
		var message = `React has been successfully running for ${seconds} seconds`;
		
		return <p>{message}</p>;
	}
})

var start = new Date().getTime();
setInterval(() => {
	React.render(
		<EA elapsed={new Date().getTime() - start} />, document.getElementById('container')
	);
}, 50);*/

