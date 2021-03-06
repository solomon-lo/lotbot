import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from 'react-router-dom';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            global_license_plate: "",
            global_phone_number: "",
        }
    }






    /*adding reservation: parses the input data so it can be entered into the function later*/
    BookReservation = e => {
        e.preventDefault();
        let phone_number = document.querySelector("#phone_number_input").value;
        let license_plate = document.querySelector("#license_plate_input").value;
        this.setState({
            global_license_plate: license_plate,
            global_phone_number: phone_number,
        })
        console.log(phone_number);
        console.log(license_plate);
        if (phone_number == "" || license_plate == "") {
            console.log("no input");
        } else {
            console.log("new user added");
        }
        /*post command*/
        axios
            .post("https://parking.wtf/api/add-reservation", {
                phoneNumber: phone_number,
                plateNumber: license_plate
            })
            .then(function (response) {
                console.log(response);
            });

    };
    // (license_plate == ''))
    /*clearing reservation: parses the input data so it can be entered into the function later*/

    Clear = e => {
        e.preventDefault();
        let phone_number = this.state.global_phone_number
        let license_plate = this.state.global_license_plate
        if (phone_number == "" && license_plate != "") {
            console.log("no input");
            /*POST command*/
            axios
                .post("https://parking.wtf/api/delete-reservation", {
                    phoneNumber: "",
                    plateNumber: license_plate
                })
                .then(function (response) {
                    console.log(response);
                });
        } else if (phone_number != "" && license_plate == "") {
            console.log("no input");
            /*POST command*/
            const axios = require("axios");
            axios
                .post("https://parking.wtf/api/delete-reservation", {
                    phoneNumber: phone_number,
                    plateNumber: ""
                })
                .then(function (response) {
                    console.log(response);
                });
        }
        console.log("successfully deleted");
    };

    componentWillMount() { }
    render() {
        return (

            <div className="App">
                <div className="standardWidth">
                    <div className=" marginBottomMedium alignLeft">
                        <h1 className="grove">Park at Grove Mall</h1>
                        <p className="grove_address">
                            189 The Grove Dr, Los Angeles, CA 90036
          </p>
                    </div>
                    <div className="marginBottomSmall">
                        <form>
                            <label>
                                <input
                                    type="text"
                                    id="full_name_input"
                                    placeholder="Full name"
                                />
                                <input
                                    type="text"
                                    id="phone_number_input"
                                    placeholder="Phone number"
                                />
                                <input
                                    type="text"
                                    id="license_plate_input"
                                    placeholder="License plate"
                                />
                            </label>
                        </form>
                        <p className="alignLeft">
                            Our gate will scan your license plate to let you in automatically.
          </p>
                    </div>
                    <div className="standardWidth marginBottomXLarge alignLeft">
                        <form>
                            <label>
                                <input className="agree" type="checkbox" />
                            </label>
                        </form>
                        <p className="agreeText">I agree with the terms and conditions</p>
                    </div>

                    <div className="marginBottomXLarge">
                        <Link to="/waitlist" onClick={(e) => this.BookReservation(e)}>
                            <button>Reserve</button>
                        </Link>
                        {/*<button onClick={this.BookReservation}>Reserve</button>*/}
                    </div>

                    <div className="marginBottomXLarge">
                        <Link to="/waitlist">
                            <button>View Position</button>
                        </Link>
                        {/*<button onClick={this.BookReservation}>Reserve</button>*/}
                    </div>

                    </div>
                    <div className="standardWidth">
                        <div className="marginBottomMedium alignLeft">
                            <h1 className="about_us">About us</h1>
                        </div>
                        <div className="marginBottomMedium">
                            <div>
                                <img alt="" className="" src="/blue_orange_car.png" />
                            </div>
                            <h4 className="info_card_title">
                                Unlock a new generation of in-person shopping 🔓
          </h4>
                            <p>
                                Guarantee yourself a spot in the parking lot by booking in
                                advance. This way, you will no longer have to circle the parking
                                lot, waiting for a spot to free up.
          </p>
                        </div>
                        <div className="marginBottomMedium">
                            <div>
                                <img alt="" className="" src="/orange_gate.png" />
                            </div>
                            <h4 className="info_card_title">
                                Automatic licence plate recognition ✅
          </h4>
                            <p>
                                Uses computer vision to automatically recognize license plates
                                that have been registered, cutting down on time wasted from
                                manually checking license plates.
          </p>
                        </div>
                        <div className="marginBottomMedium">
                            <div>
                                <img alt="" className="" src="/phone_illustration.png" />
                            </div>
                            <h4 className="info_card_title">Easy to use from anywhere 🗺️ </h4>
                            <p>
                                Both computers and mobile devices are easily supported. Reserve a
                                spot easily and from anywhere!
          </p>
                        </div>
                    </div>
                    <footer>
                        <p>
                            <div className="footerText"> © 2020</div>
                        </p>
                    </footer>
                </div>
        );
    }
}
export default Home;