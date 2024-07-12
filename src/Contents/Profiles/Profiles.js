import { users } from '../../assets/users';
import { useState } from 'react';

import ProfileCard from '../ProfileCard/ProfileCard';
import Search from '../SearchBar/Search';




function Profiles() {

    const allUsers = users;

    //Functions Block
    const [usersArr, setUsersArr] = useState(users);

    function findUser(userEmail){
        const user = usersArr.filter(user => user.email === userEmail)
        setUsersArr(user)
    }

    function getAllUsers(){
        setUsersArr(allUsers)
    }

    return (

        <div class ="row row-cols-1 row-cols-md-4 g-3">
            <Search searchUser={findUser} resetUsers={getAllUsers} />

            {usersArr.map(user => {
                return (

                    <div class="col">
                        <ProfileCard userData={user} />
                    </div>

                )
            })}

        </div>
    )
}

export default Profiles;
