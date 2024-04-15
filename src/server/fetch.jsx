import React from 'react';
import axios from 'axios';

const url = "http://127.0.0.1:8000/api/"

export const authUser = async (username, pwd) => {

    let response;
    try {
        response = await axios(`${url}login?username=${username}&password=${pwd}`)

    } catch (error) {
        console.clear()
        return false
    }
    return response
}

export const getConcern = async (user_id) => {
    let response;
    try {
        response = await axios(`${url}concern?user_id=${user_id}`)

    } catch (error) {
        console.clear()
        return false
    }
    return response
}

export const getConcernByID = async (concern_id) => {
    const response = await axios(`${url}concern/${concern_id}`)
    return response
}

export const submitConcern = async () => {

}

export const getAllConcerns = async () => {
    const response = await axios(`${url}concerns/`)
    return response
}

export const submitFeedback = async () => {

}