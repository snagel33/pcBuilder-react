const remoteURL = "http://localhost:8000/"

export const getBuilderById = (builderId) => {
    return fetch(`${remoteURL}builders/${builderId}`)
    .then(result => result.json())
}

export const getAllBuilders = () => {
    return fetch(`${remoteURL}builders`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteBuilder = (id) => {
    return fetch(`${remoteURL}builders/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}