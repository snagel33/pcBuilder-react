const remoteURL = "http://localhost:8088/"

export const getBuilderById = (builderId) => {
    return fetch(`${remoteURL}builders/${builderId}`)
    .then(result => result.json())
}

export const getAllBuilders = () => {
    return fetch(`${remoteURL}builders`)
    .then(result => result.json())
}

export const deleteBuilder = (id) => {
    return fetch(`${remoteURL}builders/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}