import React from "react";

const News = () => {
    return (
        <>
            <div>
                <div className="reason">
                    <div class="flex-container">
                        <div class="flex-item-right">
                            <img
                                src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="person"
                            />
                        </div>
                        <div class="flex-item-left">
                            <h2 className="story">Updates on the campaign</h2>
                            <div className="story-details">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Sed, dignissimos dicta
                                    excepturi nemo earum ad odit. Possimus sint
                                    neque id facilis! Asperiores esse tempore
                                    optio consectetur a at temporibus autem
                                    sequi id incidunt, corporis cum quidem
                                    maxime nostrum veniam beatae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="issues news">
                <h2 className="news-title">Lorem, ipsum.</h2>
                <div className="news-card shadow-hover">
                    <div className="story-line">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>
                            <small>date</small>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis debitis, amet officiis commodi
                            numquam libero tenetur quia aperiam. Totam ipsum
                            iste nobis, ut at, obcaecati id hic quo deleniti
                            velit deserunt perspiciatis amet ratione sint ullam
                            nisi nam debitis eaque dolore numquam praesentium.
                            Cumque quo sapiente nobis officia.
                        </p>
                    </div>
                    <div className="story-line">
                        <div className="form-row">
                            <button className=" read-more" type="submit">
                                Check it out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="news-card shadow-hover">
                    <div className="story-line">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>
                            <small>date</small>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis debitis, amet officiis commodi
                            numquam libero tenetur quia aperiam. Totam ipsum
                            iste nobis, ut at, obcaecati id hic quo deleniti
                            velit deserunt perspiciatis amet ratione sint ullam
                            nisi nam debitis eaque dolore numquam praesentium.
                            Cumque quo sapiente nobis officia.
                        </p>
                    </div>
                    <div className="story-line">
                        <div className="form-row">
                            <button className=" read-more" type="submit">
                                Check it out
                            </button>
                        </div>
                    </div>
                </div>
                <div className="news-card shadow-hover">
                    <div className="story-line">
                        <h3>Lorem ipsum dolor sit</h3>
                        <p>
                            <small>date</small>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis debitis, amet officiis commodi
                            numquam libero tenetur quia aperiam. Totam ipsum
                            iste nobis, ut at, obcaecati id hic quo deleniti
                            velit deserunt perspiciatis amet ratione sint ullam
                            nisi nam debitis eaque dolore numquam praesentium.
                            Cumque quo sapiente nobis officia.
                        </p>
                    </div>
                    <div className="story-line">
                        <div className="form-row">
                            <button className=" read-more" type="submit">
                                Check it out
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-container">
                    <div class="flex-item-left">
                        <video src=""></video>
                    </div>
                    <div class="flex-item-right">
                        <div className="sub-header">
                            <h2 className="sub text">join the fight</h2>
                            <form action="">
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">First Name</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Last Name</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required />
                                        <div className="underline"></div>
                                        <label for="">Email Address</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <button
                                        className=" read-more"
                                        type="submit"
                                    >
                                        join us
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
