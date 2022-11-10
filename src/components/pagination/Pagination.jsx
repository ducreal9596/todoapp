import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Todolist from '../todo/Todolist';

function PaginatedItems({ data }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className='pagin'>
                {currentItems.map((item, index) => (
                    <div key={index}>
                        <Todolist
                            item={item}
                            index={index}
                            id={item.id}
                        />
                    </div>
                ))}
            </div>
            <ReactPaginate className="paginPage"
                breakLabel="..."
                nextLabel={<i className="fa-sharp fa-solid fa-chevron-right next__page"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<i className="fa-sharp fa-solid fa-chevron-left prev__page"></i>}
                renderOnZeroPageCount={null}
                pageClassName='item'
            />
        </>
    );
}
export default PaginatedItems;