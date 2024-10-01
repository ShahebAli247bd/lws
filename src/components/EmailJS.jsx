import emailjs from "emailjs-com";
import { useState } from "react";

const sendEmail = (email) => {
    // e.preventDefault();
  
    if (email) {
        emailjs
            .send(
                "service_l0gmcbs",
                "template_2xznh07",
            // { user_email: email },
                {
                    from_name: "Shaheb Ali",  // Extract the name before the "@" symbol
                    to_name: email.split("@")[0],           // Replace with your own name or get from form
                    to_email: email                  // Pass the email directly to "to_email" field
                 },
                "9RfB8L3zVRRfMB18w"
            )
            .then((result) => {
                alert(`Congratulation! Subscription done, We received your subscription as a ${email}`);
             
               
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                alert("Failed to send email.");
            });
    } 
      else {
      alert("Please enter a valid email.");
  }
};


export default sendEmail