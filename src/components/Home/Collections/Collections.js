import React, { useEffect, useState } from 'react';
import './Collections.css';

const Collections = () => {




    const [users, setUser] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://intense-tor-86145.herokuapp.com/allCollections?search=' + search)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [search])


    const handleChange = (event) => {
        setSearch(event.target.value)
        event.preventDefault();
      }


    return (
        <div className='container'>
            <form className="form-inline search my-2" >
                    <input class="form-control-lg mr-sm-2 " onBlur={handleChange}  type="search" placeholder="Search" aria-label="Search" />

                </form>

            {
                users.map(user =>
                    <div className='mt-3 text-center collection-list'>
                        <h3>{user.name}</h3>
                        <h5>{user.location}</h5>
                    </div>

                )
            }
        </div>
    );
};

export default Collections;