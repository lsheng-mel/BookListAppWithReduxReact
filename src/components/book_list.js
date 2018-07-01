import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectBook from '../actions/index'
import {bindActionCreators} from 'redux'

class BookList extends Component{
	// return a list li items
	buildBooksList(){
		return this.props.books.map(book => {
			return (
				<li 
					key={book.title} 
					onClick={() => {
						this.props.selectBook(book);
					}}
					className='list-group-item'>{book.title}
				</li>
			)
		})
	}

	render()
	{
		return (
			<ul className='list-group col-sm-4'>
				{this.buildBooksList()}
			</ul>
		)
	}
}

// the function that is mapping the application level state managed by redux to the property 'props' from
// within the class BookList
const mapStateToProps = state =>
{
	return {
		books: state.books
	}
}

//this function maps the creation creator for book selection into the BookList's props so that it can be invoded whenever a book item is selected
// it also registers the action creator in the Redux dispatch center so that when it's called the result gets dispatched to all reducers
const mapDispatchToProps = dispatch =>
{
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// convert the react component to redux container
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
export default BookListContainer;

