const remoteURL = "http://localhost:8000/"

// export const getAllParts = () => {
//     return fetch("http://localhost:8000/parts", {
//         headers: {
//             "Authorization": `Token ${localStorage.getItem("lu_token")}`
//         }
//     })
//     .then(response => response.json())
// }

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

export const deletePart = (id) => {
    return fetch(`${remoteURL}parts/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}

export const addBuild = (newBuild) => {
    return fetch(`${remoteURL}parts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBuild)
    })
    .then(response => response.json())
}

export const getPartByPartTypeId = (partTypeId) => {
    return fetch(`${remoteURL}parts?partTypeId=${partTypeId}`)
    .then(result => result.json())
}

export const addPart = (newPart) => {
    return fetch(`${remoteURL}parts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPart)
    })
    .then(response => response.json())
}

export const getAllPartTypes = () => {
    return fetch(`${remoteURL}partType`)
    .then(result => result.json())
}