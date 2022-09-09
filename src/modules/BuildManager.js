const remoteURL = "http://localhost:8000/"

export const getBuildById = (buildId) => {
    return fetch(`${remoteURL}builds/${buildId}`)
    .then(result => result.json())
}

export const getAllBuilds = () => {
    return fetch(`${remoteURL}builds`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteBuild = (id) => {
    return fetch(`${remoteURL}builds/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
}