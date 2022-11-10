import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PaginatedItems from '../../components/pagination/Pagination';
const getData = 'http://localhost:8000/item'
function Search() {
  const [data, setData] = useState([])
  const [todo, setTodo] = useState([])
  useEffect(() => {
    async function findItem() {
      const res = await axios.get(getData);
      setData(res.data)
    }
    findItem()
  }, [])
  const fil = data.filter(item=>item.title.includes('task'))
  console.log(fil);
  setTodo(fil)
  return (
    <div className="todo">
      <PaginatedItems data={todo} />
    </div>
  );
}

export default Search;