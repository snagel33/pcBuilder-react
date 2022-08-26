const remoteURL = "http://localhost:8088/"

export const getPartById = (partId) => {
    return fetch(`${remoteURL}parts/${partId}`)
    .then(result => result.json())
}

export const getAllParts = () => {
    return fetch(`${remoteURL}parts`)
    .then(result => result.json())
}

export const deletePart = (id) => {
    return fetch(`${remoteURL}parts/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}