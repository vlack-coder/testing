import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    <>
      {alerts?.map((alert) => (
        <div key={alert.id} className={`alat alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </>
  );
};
// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   alerts: state.alert,
// });

export default Alert;
