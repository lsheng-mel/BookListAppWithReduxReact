// action creator for book selection
function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}

export default selectBook;