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

export const addBuild = (build) => {
    return fetch(`${remoteURL}builds`, {
        method: "POST",
        headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(build)
    }).then(response => response.json())
}