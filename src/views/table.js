import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "../styles/table";
import * as userActions from "../action-creators/users";

function Table(props) {
  console.log("props in table", props);
  const { users } = props;
  let usersContent = "";

  const mapFn = val => {
    const actions =
      val.state === "active" ? (
        <button onClick={userActions.revokeAccessAPI}>REVOKE ACCESS</button>
      ) : val.state === "invited" ? (
        <div>
          <button onClick={userActions.revokeInviteAPI}>REVOKE INVITE</button>
          <button onClick={userActions.resendInviteAPI}>RESEND INVITE</button>
        </div>
      ) : (
        ""
      );
    return (
      <div>
        <div className={styles.userAlign}>
          <span>{val.state}</span>
          <span>{val.email}</span>
        </div>
        <div className={styles.accessAlign}>{val.accessLevel}</div>
        <div className={styles.actionsAlign}>{actions}</div>
      </div>
    );
  };

  usersContent = users && users.users ? users.users.map(mapFn) : "";
  return (
    <div className={styles.tableContainer}>
      <div className={styles.title}>My Team</div>
      <div className={styles.heading}>
        <div className={styles.userAlign}>USER</div>
        <div className={styles.accessAlign}>ACCESS</div>
        <div className={styles.actionsAlign}>ACTIONS</div>
      </div>
      {usersContent}
    </div>
  );
}

Table.propTypes = {
  users: PropTypes.object
};

const mapStateToProps = ({ routing, users }) => ({ routing, users });
const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
