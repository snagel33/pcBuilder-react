const remoteURL = "http://localhost:8000/"

export const getAllParts = () => {
    return fetch(`${remoteURL}parts`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getPartById = (partId) => {
    return fetch(`${remoteURL}parts/${partId}`)
    .then(result => result.json())
}

// export const deletePart = (id) => {
//     return fetch(`${remoteURL}parts/${id}`, {
//         method: "DELETE"
//     })
//     .then(result => result.json())
// }

// export const addBuild = (newBuild) => {
//     return fetch(`${remoteURL}parts`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newBuild)
//     })
//     .then(response => response.json())
// }

export const getPartByPartTypeId = (partType_id) => {
    return fetch(`${remoteURL}parts?partType_id=${partType_id}`)
    .then(result => result.json())
}

// export const addPart = (newPart) => {
//     return fetch(`${remoteURL}parts`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newPart)
//     })
//     .then(response => response.json())
// }

export const createPart = (part) => {
    return fetch(`${remoteURL}parts`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(part)
    }).then(res => res.json())
}

export const getPartTypes = () => {
    return fetch(`${remoteURL}partTypes`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}