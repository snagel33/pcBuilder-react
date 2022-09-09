const remoteURL = "http://localhost:8000/"

export const getAllPartTypes = () => {
    return fetch(`${remoteURL}partTypes`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(result => result.json())
}

export const getPartTypeById = (partTypeId) => {
    return fetch(`${remoteURL}partTypes/${partTypeId}`)
    .then(result => result.json())
}