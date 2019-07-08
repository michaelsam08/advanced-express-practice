import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadComments } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadComments: function() {
      dispatch(loadComments());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
