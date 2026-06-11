import { useEffect, useState } from 'react';


async function fetchUserApi() {
    const api_url = 'https://jsonplaceholder.typicode.com/users';

    try {
        let res = await fetch(api_url);

        if (!res.ok) throw new Error('Failed to fetch users.');

        let response = await res.json();
        return response;
    } catch (e) {
        console.log("Data could not be fetched: ", e);
        return [];
    }
}

function UsersTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getLatestData() {
            let res = await fetchUserApi();

            setUsers(res);
            console.log(res);
        }

        getLatestData();

    }, [])

    return (
        <main>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Company
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}

export default UsersTable;
