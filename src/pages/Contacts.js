// const Contacts = () => {
//     return ( 
//         <main className="section">
//         <div className="container">
//                 <h1 className="title-1">Contacts</h1>

//                 <ul className="content-list">
//                     <li className="content-list__item">
//                         <h2 className="title-2">Location</h2>
//                         <p>Taraz, JIHC</p>
//                     </li>
//                     <li className="content-list__item">
//                         <h2 className="title-2">Telegram / WhatsApp</h2>
//                         <p><a href="tel:+77711593709">+7 771 159 37 09</a></p>
//                     </li>
//                     <li className="content-list__item">
//                         <h2 className="title-2">Email</h2>
//                         <p><a href="mailto:gamecsgo013@gmail.com">gamecsgo013@gmail.com</a></p>
//                     </li>
//                 </ul>

//         </div>
//     </main>
//     );
// }

// export default Contacts;



import React, { useState } from "react";
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "f415e8e0-065e-44cd-b809-4161dadb0287",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <>
    <br/><br/><br/><br/><br/>
        <h1 className="title-1">Contact me</h1>
    <div className="contact" style={styles.container}>
      <div style={styles.info}>
        <ul className="aboutme">
          <li><strong>Gmail:</strong> kumisbek.zhomart@jihc.edu.kz</li>
          <li><strong>Phone number:</strong> 8 771 159 37 09</li>
          <li><strong>Location:</strong> Zhusip Balasagun 31</li>
        </ul>
      </div>
      <form className="form" style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address..."
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Write a message here..."
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div> <br/><br/>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "20px",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    width: "80%",
    height:"320px",
    margin: "0 auto",
    borderRadius: "8px",
  },
  info: {
    width: "40%",
    display:"flex",
    flexDirection:"column",
    height:"100%"
  },
  form: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "14px",
    marginBottom: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "4px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#333",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "4px",
    height: "100px",
  },
  button: {
    padding: "14px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom:"0"
  },
  status: {
    marginTop: "10px",
    color: "#fff",
  },
};

export default Contact;
