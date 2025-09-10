import React from "react";
import "../../assets/styles/ConfirmBox.css";

const ConfirmBox = ({ orderDetails, onConfirm, onCancel, showC }) => {
  return (
    <div className="confirm-overlay" style={{
      display: showC
    }}>
      <div className="confirm-box">
        <h2>Order Confirmation</h2>

        <div className="order-details">
          <p><strong>Vehicle:</strong> {orderDetails.vehicle}</p>
          <p><strong>Pickup:</strong> {orderDetails.pickup}</p>
          <p><strong>Drop:</strong> {orderDetails.drop}</p>
          <p><strong>Date:</strong> {orderDetails.date}</p>
          <p><strong>Price:</strong> ${orderDetails.price}</p>
        </div>

        <div className="confirm-actions">
          <button className="btn-confirm" onClick={onConfirm}>Confirm</button>
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBox;
