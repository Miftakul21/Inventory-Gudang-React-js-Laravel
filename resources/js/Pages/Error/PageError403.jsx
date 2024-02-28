import React from "react";
import { Head } from "@inertiajs/react";

const PageError403 = () => {
    return (
        <div id="app">
            <section class="section">
                <div class="container mt-5">
                    <div class="page-error">
                        <div class="page-inner">
                            <h1>403</h1>
                            <div class="page-description">
                                You do not have access to this page.
                            </div>
                        </div>
                    </div>
                    <div class="simple-footer mt-5">
                        Copyright &copy; Stisla 2018
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PageError403;
