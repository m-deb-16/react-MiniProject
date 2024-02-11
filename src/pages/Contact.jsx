import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    msg: "",
  });
  console.log("value of data: " + JSON.stringify(data));
  return (
    <>
      <PageHeader />
      <section id="contact-us">
        <h1 className="heading">Contact Us</h1>
        <div className="form-container">
          <form>
            <label htmlFor="fname">First name: </label>
            <input
              type="text"
              value={data.fname}
              onChange={(e) => setData({ ...data, fname: e.target.value })}
            />
            <label htmlFor="lname">Last name: </label>
            <input
              type="text"
              value={data.lname}
              onChange={(e) => setData({ ...data, lname: e.target.value })}
            />
            <label htmlFor="about">Message:</label> <textarea></textarea>
            <div className="btns">
              <input type="submit" />
              <input type="reset" />
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

// import React, { useState } from "react";
// import PageHeader from "../components/PageHeader";
// import Footer from "../components/Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fname: "Mainak",
//     lname: "Deb",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/submit-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log("Form submitted successfully");
//         // Add any additional logic or state updates upon successful submission
//       } else {
//         console.error("Error submitting form");
//         // Handle the error, show a message, etc.
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle the error, show a message, etc.
//     }
//   };

//   return (
//     <>
//       <PageHeader />
//       <section id="contact-us">
//         <h1 className="heading">Contact Us</h1>
//         <div className="form-container">
//           <form onSubmit={handleSubmit}>
//             <label htmlhtmlFor="fname">First name:</label>
//             <input
//               type="text"
//               id="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               required
//             />

//             <label htmlhtmlFor="lname">Last name:</label>
//             <input
//               type="text"
//               id="lname"
//               value={formData.lname}
//               onChange={handleChange}
//               required
//             />

//             <label htmlhtmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <div className="btns">
//               <input type="submit" value="Submit" />
//               <input type="reset" />
//             </div>
//           </form>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Contact;
