import {CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SELECT_CONTACT,CLEAR_CONTACT,DELETE_SELECTED_CONTACT} from '../constant/types'
//Actions
export const addContact = (contact) =>{
    return {
        type:CREATE_CONTACT,
        payload:contact,
    }
}

//Get a Contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})


//Update Contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})


//Delete Contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})


//Select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})


//Clear selected Contacts
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})


//Delete Selected Contact
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
})