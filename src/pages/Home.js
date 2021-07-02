import React from "react";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";

// Function for sending email
function sendEmail(e) {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_j0tobdh",
            "template_ggl8hxn",
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

const Home = () => {
    return (
        <>
            <div className="parallax">
                <div className="overlay">
                    <div class="flex-container">
                        <div class="flex-item-left">
                            <h1>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </h1>
                            <p className="box">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eaque quo quas quos suscipit
                                optio dolorum distinctio, a aliquid corrupti
                                aperiam incidunt cumque possimus sunt odio id
                                iure expedita facilis ducimus.
                            </p>
                        </div>
                        <div class="flex-item-right"></div>
                    </div>
                </div>
            </div>
            <div className="subscription">
                <div className="sub-header">
                    <h2 className="sub text">join the fight</h2>
                    <form action="" onSubmit={sendEmail}>
                        <div
                            className="form-row"
                            style={{ width: "100%", display: "flex" }}
                        >
                            <div className="input-data">
                                <input type="text" name="name" required />
                                <div className="underline"></div>
                                <label for="">Name</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="email" required />
                                <div className="underline"></div>
                                <label for="">Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            
                        </div>
                        <div className="form-row">
                            <button className=" read-more" type="submit">
                                join us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="reason">
                <div class="flex-container">
                    <div class="flex-item-left">
                        <h2 className="story">Lorem ipsum dolor's story</h2>
                        <div className="story-details">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Sed, dignissimos dicta
                                excepturi nemo earum ad odit. Possimus sint
                                neque id facilis! Asperiores esse tempore optio
                                consectetur a at temporibus autem sequi id
                                incidunt, corporis cum quidem maxime nostrum
                                veniam beatae.
                            </p>
                            <Link to="/story" className="read-more">
                                read more
                            </Link>
                        </div>
                    </div>
                    <div class="flex-item-right">
                        <img
                            src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                            alt="person"
                        />
                    </div>
                </div>
            </div>
            <div className="running">
                <div className="flex-container">
                    <div className="why-run">
                        <h2 className="story run-title">why am i running?</h2>
                    </div>
                    <p className="statement">
                        <i>
                            "Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptate facere maxime cum dolorum explicabo
                            ad dolorem quibusdam quae, sunt debitis atque harum
                            ipsum porro at quos, soluta excepturi doloribus
                            consectetur dicta nostrum. Aut asperiores harum
                            perspiciatis eligendi, temporibus quia saepe iste
                            laborum, enim eveniet ullam numquam cumque, pariatur
                            aperiam consectetur."
                        </i>
                    </p>
                    <div className="run-footer">
                        <h3 className="candidate-name">Lorem Ipsum.</h3>
                        <p>Position</p>
                    </div>
                </div>
            </div>
            <div className="vision">
                <div className="flex-container">
                    <div className="why-run">
                        <h2 className="story run-title">
                            a prescription for change
                        </h2>
                    </div>
                    <p className="statement">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rerum officia quis facilis neque a dolores rem
                        nam, quo vitae necessitatibus impedit recusandae iusto
                        perferendis fuga earum architecto dolore illum
                        repudiandae! Voluptates impedit quasi ea quod eveniet
                        laboriosam suscipit officia est?
                    </p>
                    <div className="run-footer">
                        <h3 className="vision-box">my manifesto</h3>
                    </div>
                    <div className="card-container">
                        <div className="card card-1 shadow-hover">
                            <h4 className="card-title">Lorem, ipsum dolor.</h4>
                            <img src="" alt="manifesto" />
                        </div>
                        <div className="card card-2 shadow-hover">
                            <h4 className="card-title">Lorem, ipsum dolor.</h4>
                            <img src="" alt="manifesto" />
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card card-1 shadow-hover">
                            <h4 className="card-title">Lorem, ipsum dolor.</h4>
                            <img src="" alt="manifesto" />
                        </div>
                        <div className="card card-2 shadow-hover">
                            <h4 className="card-title">Lorem, ipsum dolor.</h4>
                            <img src="" alt="manifesto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
