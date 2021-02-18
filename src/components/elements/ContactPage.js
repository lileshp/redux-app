import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Contact from './Contact';
import {selectAllContact,clearAllContact,deleteAllContact} from '../../actions/contactActions';

const ContactPage = () => {
    const dispatch = useDispatch()
    const [selectAll, setSelectAll] = useState()
    const contacts = useSelector((state) => state.contact.contacts);
    const selectedContacts = useSelector((state) => state.contact.selectedContacts)
    // console.log(contacts)

    useEffect(() =>{
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }else{
            dispatch(clearAllContact() )
        }
    },[selectAll])
    return (
        <>
            <div className="container">
                <div className="py-3">
                {
                    selectedContacts.length > 0 ?(
                        <button class="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete All</button>
                    ):null
                }
                <table class="table shadow">
  <thead className="table-info">
    <tr>
      <th>
          <div className="custom-control custom-checkbox">
              <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} onClick={() => setSelectAll(!selectAll)}/>
              <label for="selectAll" className="custom-control-label"></label>
          </div>
      </th>
      <th>Name</th>
      <th>Mobile</th>
      <th>E-Mail</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {
      contacts.map(contact => <Contact contact = {contact} key={contact.id} selectAll={selectAll}/>)
  }
    
    
  </tbody>
</table>
                </div>
            </div>
        </>
    )
}

export default ContactPage
