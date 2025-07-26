// script.js – Razorpay Payment Integration + Contact Form Placeholder

// Razorpay Payment
document.getElementById("pay-now-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const options = {
    key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
    amount: 10000, // amount in paise (10000 = ₹100)
    currency: "INR",
    name: "Paritex Informatics",
    description: "Advance Payment for Service",
    image: "https://yourdomain.com/logo.png", // optional
    handler: function (response) {
      alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    notes: {
      service: "Website Development"
    },
    theme: {
      color: "#3f51b5"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
});

// Contact Form Submission (placeholder)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});
