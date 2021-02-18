import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getContact,updateContact} from '../../actions/contactActions';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const EditContact = () => {
    let {id} = useParams();
    const history =useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact)
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();


    useEffect(() =>{
        if(contact != null){
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id))
    },[contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign(contact,{
            name:name,
            phone:phone,
            email:email,
        });

        dispatch(updateContact(update_contact))
        history.push('/')
    }

    return (
        <>
        <div className="container">

            <div className="card border-0 shadow">
                <div className="card-header text-center display-4 text-primary bg-light">
                    Create Contact
                </div>
                <div class="card-body">
                    <form onSubmit = {(e) => onUpdateContact(e)}>
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
                        <button className="btn btn-primary btn-block" type="submit">Update Contact</button>
                    </form>
                </div>
            </div>   
        </div>
        </>
    )
}

export default EditContact; 