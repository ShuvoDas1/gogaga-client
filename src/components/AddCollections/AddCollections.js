import React from 'react';
import { useForm } from "react-hook-form";


const AddCollections = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data,e) => {
        fetch('https://intense-tor-86145.herokuapp.com/addCollection', {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            alert('Collection added successfully');
        })
        
        
    };

    console.log(watch("example"));

    return (
        <section className='container mt-5'>
            <h4 className='mb-4'>Add Collection</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='col'>
                        <input name="name" className='form-control' placeholder='Enter Name' ref={register} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='col'>
                        <input name="location" className='form-control' placeholder='Enter Location' ref={register} />
                        {errors.location && <span>This field is required</span>}
                    </div>    
                </div>

                <input type="submit" className='btn btn-success mt-3'/>
            </form>
        </section>
    );
};

export default AddCollections;