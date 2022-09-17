import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBuilderById, updateBuilder } from "../../modules/BuilderManager";
import { NavBar } from "../nav/NavBar"; 


export const BuilderEditForm = () => {
    const history = useNavigate();
    const { builderId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const [builder, setBuilder] = useState({
        id: 0,
        userId: 0,
        bio: "",
        img: "",
        userName: "",
    });

    const handleFieldChange = (event) => {
        const stateToChange = { ...builder };
        stateToChange[event.target.id] = event.target.value;
        setBuilder(stateToChange);
    }

    const updateExistingBuilder = (event) => {
        event.preventDefault()
        setIsLoading(true);

        const editedBuilder = {
            id: parseInt(builderId),
            userId: parseInt(builder.userId),
            bio: builder.bio,
            img: builder.img,
        };

    updateBuilder(editedBuilder)
        .then(() => history("/builders"))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBuilderById(builderId)
            .then(builder => {
                setBuilder(builder);
                setIsLoading(false);
            }
        );
    }, []);

    // useEffect(() => {
    //     getUsers()
    //         .then(users => setUsers(users))
    // }, []);

    return (
        <>
            <NavBar />
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required autoFocus className="form-control"
                            onChange={handleFieldChange}
                            id="bio"
                            value={builder.bio}
                        />
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="img"
                            value={builder.img}
                        />
                        <label htmlFor="img">Image</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="userName"
                            value={builder.userName}
                        />
                        <label htmlFor="userName">User Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingBuilder}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}