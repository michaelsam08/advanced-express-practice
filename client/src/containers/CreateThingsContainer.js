import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import { createComment } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createComment: function(c) {
      dispatch(createComment(c));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateThings);
