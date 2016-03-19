var styleObj = {
	color: '#9f0',
	fontSize: '24px',
	textAlign: 'center'
};
var HelloWorld = React.createClass({
	render: function () {
		return (
			<div>
				<h1 style={styleObj}>Hello, World!</h1>
				<h1 style={styleObj}>Hello, {this.props.name}</h1>
			</div>
		);
	}
});

ReactDOM.render(<HelloWorld name="React" />, document.getElementById('box'));