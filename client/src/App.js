import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import CommentContainer from "./containers/CommentContainer";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/comment/:id" component={CommentContainer} />

            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
