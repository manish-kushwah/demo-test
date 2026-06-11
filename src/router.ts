import {createBrowserRouter} from 'react-router-dom';
import usersTable from './components/usersTable';
import userForm from './components/userForm';


export default function Routes () {

    const routes = createBrowserRouter([
        {
            path:'user-list',
            element:<usersTable/> 
        }
        {
            path: 'add-new-user',
            element:<userForm/>
        }
    ]);

    return (
        routes
    );
}