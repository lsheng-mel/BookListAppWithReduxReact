import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
	render() {
		if(!this.props.book)
			return <div>Please select a book to get started.</div>;

		return (
			<div>
				Book Detail:
				<h3>{this.props.book.title}</h3>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		book: state.book
	}
}

export default connect(mapStateToProps)(BookDetail)