import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    showBooks() {
        console.log(this.props);
        return this.props.books.map((book, i) => {
            return(<li 
            onClick={() => this.props.selectBook(book)}
            className="list-group-item" key = {book.title}>{book.title}</li>)
        });
    }
    render() {
        return (
            <div>
                <h3>List of Books</h3>
                <ul className="list-group col-md-4">
                    {this.showBooks()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);