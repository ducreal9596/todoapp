import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import SearchForm from '../../components/search/SearchForm';

function Header(props) {
    return (
        <div className="header">
            <Link to={'/AddTask'}><Button className="btn__search" btnTask="Create New Task"/></Link>
            <SearchForm />
        </div>
    );
}

export default Header;