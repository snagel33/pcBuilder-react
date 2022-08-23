const remoteURL = "http://localhost:8088/"

export const getBuildById = (buildId) => {
    return fetch(`${remoteURL}builds/${buildId}`)
    .then(result => result.json())
}

export const getAllBuilds = () => {
    return fetch(`${remoteURL}builds`)
    .then(result => result.json())
}