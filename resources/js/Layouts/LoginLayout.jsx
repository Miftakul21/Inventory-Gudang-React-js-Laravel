import React from "react";

const LoginLayout = ({ children }) => {
    return (
        // <div id="app">
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="login-brand">
                            {/* <img
                                    src="assets/img/stisla-fill.svg"
                                    alt="logo"
                                    width="100"
                                    className="shadow-light rounded-circle"
                                /> */}

                            <h2 className="text-center">
                                Inventory <br /> App
                            </h2>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </section>
        // </div>
    );
};

export default LoginLayout;
