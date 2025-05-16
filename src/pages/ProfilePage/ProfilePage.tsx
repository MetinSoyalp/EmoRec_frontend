import { useEffect, useState } from "react";
import { User } from "../../types/User";

type ProfileProps = {
    user: User;
};

function ProfilePage({ user }: ProfileProps) {
    //Get all genres for genre vector info section as variable
    //Add basic user info
    //Add collapsable: for emotion and genre vector
    //Add user-movie recommendation

    useEffect( () => {
        document.title = `EmoRec - Profile`
    } );

    return <>
        {user.Name}
    </>

}

export default ProfilePage;