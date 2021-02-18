import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addContact} from '../../actions/contactActions';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

const AddContact = () => {
    const history =useHistory();
    const dispatch = useDispatch();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

    const createContact = (e) =>{
        e.preventDefault();
        const new_contact = {
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email,
        }
        dispatch(addContact(new_contact))
        history.push('/')
        // console.log(name,phone,email)

    }
    return (
        <>
        <div className="container">

            <div className="card border-0 shadow">
                <div className="card-header text-center display-4 text-primary bg-light">
                    Create Contact
                </div>
                <div class="card-body">
                    <form onSubmit={(e) => createContact(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter your Name"
                                value={name}
                                onChange = {(e) =>setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter your Contact Number"
                                value={phone}
                                onChange = {(e) =>setPhone(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Email"
                                value={email}
                                onChange = {(e) =>setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Add Contact</button>
                    </form>
                </div>
            </div>   
        </div>
        </>
    )
}

export default AddContact;