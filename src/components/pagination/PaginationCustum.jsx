import React, { useState } from 'react';
import Todolist from '../todo/Todolist';

function PaginationCustum(props) {
    const [data, setData] = useState(() => {
        const save = JSON.parse(localStorage.getItem('tasks')) ?? []
        return save
    })
    const perPage = 5;
    const [pagin, setPain] = useState({
        startPage: 0,
        endPage: perPage,
        currPage:1,
        totalPage: Math.ceil(data.length / perPage)
    })
    const getPage = () =>{
        pagin.startPage = (pagin.currPage-1)*perPage
        pagin.endPage = (pagin.currPage*perPage)
    }
    const handleNext = () => {
        setPain({
            ...pagin,currPage:pagin.currPage+1
        })
        getPage()
        console.log('haha');
    }
    return (
        <div className='pagin'>
            {data.map((item, index) => {
                if (index > pagin.startPage && index <= pagin.endPage) {
                    return <div key={index}>
                        <Todolist
                            item={item}
                            index={index}
                            id={item.id}
                        />
                    </div>
                }
            })}
            <div className="paginPage">
                <ul>
                    <li onClick={handleNext}>Next</li>
                    <li onClick={getPage}>{1}</li>
                </ul>
                
            </div>
        </div>
    );

}

export default PaginationCustum;