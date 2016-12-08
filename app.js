let channels = [
	{name : 'Test Support'},
	{name : 'Hardware Support'},
	{name : 'Software Support'}
]

class Channel extends React.Component{
	onClick() {
			console.log('I was clicked', this.props.name);
	}
	render(){
		return (
			<li onClick={this.onClick.bind(this)}>{this.props.name}</li>
			   )
	}
}

class ChannelList extends React.Component{
		render() {
			return(
				<ul>
					<Channel name='Hadrdware support' />
				</ul>
			)
		}
}

ReactDOM.render(<ChannelList />, document.getElementById('app'));