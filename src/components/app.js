import React, { Component } from 'react';
import BookListContainer from './book_list'
import BookDetailContainer from './book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
      	<BookListContainer />
		<BookDetailContainer />
      </div>
    );
  }
}
