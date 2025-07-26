// script.js - Razorpay Payment Integration

function payNow() {
  const options = {
    key: "rzp_test_YourKeyHere", // Replace with your Razorpay key
    amount: 20000, // Amount in paise (e.g., ₹200)
    currency: "INR",
    name: "Paritex Informatics",
    description: "Service Payment",
    handler: function (response) {
      alert("Payment successful. ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Customer",
      email: "example@gmail.com",
      contact: "8630207823"
    },
    theme: {
      color: "#2575fc"
    }
  };
  const rzp = new Razorpay(options);
  rzp.open();
}
