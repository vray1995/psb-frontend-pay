import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
import Screen from './Screen';
import { Link } from 'react-router-dom';


class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  onChangeLogin(e){
    this.setState({login: e.target.value});
  }
  onChangePassword(e){
    this.setState({password: e.target.value});
  }
  onLogin(e){
    e.preventDefault();
    console.log(e);
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-login">
        <Form onSubmit={this.onLogin.bind(this)}>
          <Segment stacked>
            <Form.Field>
              <label>Логин</label>
              <input placeholder='Andrew'
                     value={this.state.login}
                     name="login"
                     onChange={this.onChangeLogin.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <label>Пароль</label>
              <input placeholder='********'
                     type="password"
                     value={this.state.password}
                     name="password"
                     onChange={this.onChangePassword.bind(this)}
              />
            </Form.Field>

            <Link to={`/main`}>
              <Button type="button" fluid color={'orange'}>Вход</Button>
            </Link>
            {/*<Button type="submit" fluid color={'orange'}>Вход</Button>*/}
          </Segment>
        </Form>
      </div>}
      footer={false}
    />;
  }
}

export default SignIn;
