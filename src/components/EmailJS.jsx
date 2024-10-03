import emailjs from "emailjs-com";
 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                 toast.success(
                     `Congratulation! You Subscribe as a ${email}`,
                     {
                         position: "top-right", // Updated to string format
                     }
                 );
              
            })
            .catch((error) => {
                  toast.error("Failed to send email.", {
                      position: "top-right", // Updated to string format
                  });
               
            });
    } 
      else {
        toast.error("Please enter a valid email.", {
            position: "top-right", // Updated to string format
        });
  }
};


export default sendEmail