import PrivateRoute from "components/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Employee = () => {

    return (
        <Switch>
            <Route path="/admin/employees" exact>
                <List />
            </Route>
            <PrivateRoute path="/admin/employees/:employeeId" roles={['ROLE_ADMIN']}>
                <Form />
            </PrivateRoute>
        </Switch>
    )
}

export default Employee;
