import React from 'react';
import {v1} from "uuid";

export type BooksPropsType = {
    books: Array<string>
    booksArray: Array<string>
    addBook: () => void
}

export const Books = React.memo((props: BooksPropsType) => {

    console.log('books');

    return (
        <>
            <div>
                <button onClick={() => props.addBook()}>Add book</button>
                {
                    props.books.map(el => {
                        return (
                            <div key={v1()}>{el}</div>
                        )
                    })
                }
            </div>

            <hr/>

            <div>
                {
                    props.booksArray.map(el => {
                        return (
                            <div key={v1()}>{el}</div>
                        )
                    })
                }
            </div>
        </>
    );
})