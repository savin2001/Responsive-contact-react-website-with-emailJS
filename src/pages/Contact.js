import React from "react";
import emailjs from "emailjs-com";

// Function for sending email
function sendEmail(e) {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_j0tobdh",
            "template_af5sjmm",
            e.target,
            "user_BXgg8UrvnAzhzFk91J2Rr"
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    e.target.reset();
}

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="container">
                    <div className="text">Contact us</div>
                    <form action="" onSubmit={sendEmail}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="name" required />
                                <div className="underline"></div>
                                <label htmlFor="">Name</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="email" required />
                                <div className="underline"></div>
                                <label for="">Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="subject" required />
                                <div className="underline"></div>
                                <label for="">Subject</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea
                                    name="message"
                                    id=""
                                    rows="8"
                                    cols="80"
                                    required
                                ></textarea>
                                <br />
                                <div className="underline"></div>
                                <label for="">Write your message</label>
                                <br />
                            </div>
                        </div>
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
