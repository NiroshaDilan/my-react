import React, {Component} from "react";
import Input from "../common/input";


class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        errors: {}
    }

    validateProperty = ({name, value}) => {
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required';
        }

        if (name === 'password') {
            if (value.trim() === '') return 'Password is required';
        }
    }

    handleChange = ({currentTarget: input}) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }

    validate = () => {
        const errors = {};
        const {account} = this.state;

        if (this.state.account.username.trim() === '')
            errors.username = 'Username is required';
        if (account.password.trim() === '')
            errors.password = 'Password is required';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
    }

    render() {
        const {account, errors} = this.state;
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username"
                           label="Username"
                           error={errors.username}
                           value={this.state.account.username}
                           onChange={this.handleChange}
                    />
                    <Input name="password"
                           label="Password"
                           error={errors.password}
                           value={this.state.account.password}
                           onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </>
        );
    }
}

export default LoginForm;