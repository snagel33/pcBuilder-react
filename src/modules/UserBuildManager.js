const remoteURL = "http://localhost:8088/"

export const addUserBuild = (newUserBuild) => {
    return fetch(`${remoteURL}userBuilds`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserBuild)
    }).then(response => response.json())
}