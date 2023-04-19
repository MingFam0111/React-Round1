import { limit } from "../constants"

export function getPaginateAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/name?activePage=${data.activePage}&limit=${limit}`
        console.log(data, " API ")
        fetch(url, { method: "GET" })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}

export function searchPaginateAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/nameSearch?activePage=${data.activePage}&limit=${limit}&textSearch=${data.textSearch}`
        console.log(data, " API ")
        fetch(url, { method: "GET" })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}

export function addUserAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/name`
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}

export function updateUserAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/name/${data.id}`
        console.log(data,"UPDATE")
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}

export function DeleteUserAPI(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/name/${data}`
        fetch(url, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((error) => reject(error))
    })
}