import { bindActionCreators } from "redux";
import * as authAction from "../actions/auth.action";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      ...authAction,
  }, dispatch)
}


export default mapDispatchToProps
