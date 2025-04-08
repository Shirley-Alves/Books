import React from 'react';

const BookTable = ({ books }) => {

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Serial</th>
                    <th>Tags</th>
                    <th>Publishing Company</th>
                    <th>Inventory</th>
                    <th>Units Sold</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.serial}</td>
                        <td>{book.tags.join(', ')}</td>
                        <td>{book.publishingCompany}</td>
                        <td>{book.inventory}</td>
                        <td>{book.unitsSold}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookTable;