import axios from "axios"

const Server ="http://localhost:9000"

export const getallcontacts=()=>{
    const url =`${Server}/contacts`
   return axios.get(url)
}


export const getcontact=(contactId)=>{
    const url =`${Server}/contacts/${contactId}`
   return axios.get(url)
}

export const getallgroups=()=>{
    const url =`${Server}/groups`
   return axios.get(url)
}

export const getgroup=(groupId)=>{
    const url =`${Server}/groups/${groupId}`
   return axios.get(url)
}

export const create=(contact)=>{
    const url =`${Server}/contacts`
   return axios.post(url,contact)
}

export const update=(contact ,contactId)=>{
    const url =`${Server}/contacts/${contactId}`
   return axios.put(url , contact)
}

export const deletecontct=(contactId)=>{
    const url =`${Server}/contacts/${contactId}`
   return axios.delete(url)
}
