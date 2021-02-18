import React from 'react'
import Avatar from 'react-avatar';
import {Link } from 'react-router-dom';
import {deleteContact} from '../../actions/contactActions';
import {useDispatch} from 'react-redux';

const Contact = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                    <input checked = {props.selectAll} type="checkbox" className="custom-control-input"/>
                    <label className= "custom-control-label"></label>
                    </div>
                </td>
                <td><Avatar className="mr-2" name={props.contact.name} size="45" round = {true}/>{props.contact.name}</td>
                <td>{props.contact.phone}</td>
                <td>{props.contact.email}</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${props.contact.id}`}>
                        <span className="material-icons mr-2">edit</span>
                    </Link>
                    <Link to="#">
                        <span className="material-icons" onClick={() => dispatch(deleteContact(props.contact.id))}>remove_circle</span>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default Contact
