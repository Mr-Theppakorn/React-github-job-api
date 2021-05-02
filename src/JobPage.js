import React from 'react';
import { Pagination } from 'react-bootstrap';

function JobPage({ page, setPage, hasNextPage }) {

    function onPage(pages) {
        setPage(prePage => prePage + pages)

    }


    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => onPage(-1)} />}
            {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</ Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            {page > 2 && <Pagination.Item onClick={() => onPage(-1)}>{page - 1}</ Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => onPage(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={() => onPage(1)} />}
        </Pagination>
    )
}

export default JobPage;
