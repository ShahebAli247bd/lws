import React, { useState } from "react";
import axios from "axios";

const Toast = ({ message, type }) => {
    return (
        <div
            style={{
                padding: "10px",
                backgroundColor: type === "success" ? "green" : "red",
                color: "white",
                position: "absolute",
                top: "10px",
                right: "10px",
                borderRadius: "5px",
            }}
        >
            {message}
        </div>
    );
};

const PaymentForm = ({ onComplete, stpFormData }) => {
    const [transactionNumber, setTransactionNumber] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [showToast, setShowToast] = useState({
        visible: false,
        message: "",
        type: "",
    });

    const handlePayment = async () => {
        try {
            const response = await axios.post(
                "https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create",
                {
                    amount: 1000,
                }
            );

            if (response.data.success) {
                setTransactionNumber(response.data.transactionNumber);
                setShowToast({
                    visible: true,
                    message: "Payment successful!",
                    type: "success",
                });
                onComplete(response.data.transactionNumber); // Notify parent of payment completion
            } else {
                throw new Error("Payment failed");
            }
        } catch (error) {
            setShowToast({
                visible: true,
                message: "Payment failed!",
                type: "error",
            });
        }

        setTimeout(() => {
            setShowToast({ visible: false, message: "", type: "" });
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", inputValue, transactionNumber);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Enter Details:</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(stpFormData.courseFee)}
                        required
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Transaction Number:</label>
                    <input
                        type="text"
                        value={transactionNumber}
                        readOnly
                        style={{
                            width: "100%",
                            padding: "8px",
                            marginTop: "5px",
                            backgroundColor: "#f0f0f0",
                        }}
                    />
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <button
                        type="button"
                        onClick={handlePayment}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Make Payment
                    </button>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#28a745",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>

            {showToast.visible && (
                <Toast message={showToast.message} type={showToast.type} />
            )}
        </div>
    );
};

export default PaymentForm;
