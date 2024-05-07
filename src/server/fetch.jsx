import React from 'react';
import axios from 'axios';

const url = "https://mariancure-backend.vercel.app/api/"

export const authUser = async (username, pwd) => {

    let response;
    try {
        response = await axios(`${url}login?username=${username}&password=${pwd}`)

    } catch (error) {
        return false
    }
    return response
}

export const registerUser = async(user) => {
    let response;
    try{
        response = await axios.post(`${url}add_user`, user )
    }catch (error) {
        return false
    }
    return response
}

export const updatePass = async(email, pwd) => {
    let response;
    try {
        response = await axios.put(`${url}update_password?email_address=${email}&password=${pwd}`)
    }catch(error){
        return false
    }
    return response
}

export const getEmailAddress = async(email) =>{
    let response;

    try{
        response = await axios(`${url}get_email_address?email_address=${email}`)
    }catch (error){
        return false
    }

    return response
}

export const getConcern = async (user_id) => {
    let response;
    try {
        response = await axios(`${url}concern?user_id=${user_id}`)
    } catch (error) {
        return false
    }
    return response
}

export const getConcernByID = async (concern_id) => {
    const response = await axios(`${url}concerns/${concern_id}`)
    return response
}

export const submitConcern = async (concern) => {
    let response;
    try {
        response = await axios.post(`${url}add_concern`, concern )
    } catch (error) {
        return false
    }
    return response
}

export const getAllConcerns = async () => {
    const response = await axios(`${url}concerns/`)
    return response
}

export const submitFeedback = async (feedback) => {
    let response;
    console.log(feedback)
    try {
        response = await axios.post(`${url}add_feedback`, feedback )
        console.log(response.data)
    } catch (error) {
        return false
    }
    return response
}