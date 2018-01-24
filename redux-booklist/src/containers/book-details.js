import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        console.log(this.props);
        if (!this.props.activeBook) {
            return(
                <div>Select a book to see the details.... </div>
            )
        }
        return (
            <div>
                <h3>Book Details</h3>
                <div>Title: {this.props.activeBook.title}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        activeBook: state.ActiveBook
    })
}

export default connect(mapStateToProps)(BookDetails);