class Channel extends React.Component{
	onClick() {
			console.log('I was clicked', this.props.namePassed);
	}
	render(){
		return (
			<li onClick={this.onClick.bind(this)}>{this.props.namePassed}</li>
			)
	}
}

ReactDOM.render(<Channel namePassed='Test support1'/>, document.getElementById('app'));