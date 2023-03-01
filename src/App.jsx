import React from "react";
import {
    Container,
    Navbar,
    NavbarBrand,
} from "react-bootstrap";
import {NavLink, BrowserRouter} from "react-router-dom";
import logo from "./Contents/logo/me.jpg";
import classNames from 'classnames/bind';
import styles from './App.scss';


const cx = classNames.bind(styles);

class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {/* NavBar */}
                <div>
                    <Navbar id="navbar" fixed="top-left" bg="dark" variant="dark">
                        <Container>
                            <ul className="header">
                                {/*Brand works like your Logo, so when user press on it, it should return back to homepage*/}
                                <li>
                                    <NavbarBrand href="/">Home</NavbarBrand>
                                </li>
                                <li>
                                    <NavLink to="/Contents/AboutMe">About Me</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contents/Projects">Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contents/ContactMe">Contact Me</NavLink>
                                </li>
                            </ul>
                        </Container>
                    </Navbar>
                </div>

                <div className="content">
                    <h1>Darren Lin</h1>
                    <div className={cx("my-card__container")}>
                        <div className={cx("my-card")}>
                            <img className={cx("my-card__image")} alt="me" src={logo}/>
                            <p>
                                Seeking a promising position, in the information & technology industry, that offers good
                                opportunities for learning experiences, project developments, professional growth and
                                career
                                advancement.
                            </p>
                            <div className={cx("my-card__buttons")}>
                                <a href="https://drive.google.com/file/d/1WDGgl2OGQ_cDxmD6amX-IUUqJI9PTa4L/view?usp=share_link">Resume</a>
                                <a href="https://www.linkedin.com/in/darrenlinby/">LinkedIn</a>
                            </div>
                        </div>
                        <div className={cx("my-card1")}>
                            <img className="my-card__image" alt="me" src={logo}/>
                            <p>
                                Seeking a promising position, in the information & technology industry, that offers good
                                opportunities for learning experiences, project developments, professional growth and
                                career
                                advancement.
                            </p>
                            <div className={cx("my-card__buttons")}>
                                <a href="https://drive.google.com/file/d/1WDGgl2OGQ_cDxmD6amX-IUUqJI9PTa4L/view?usp=share_link">Resume</a>
                                <a href="https://www.linkedin.com/in/darrenlinby/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
            </BrowserRouter>
        );
    }
}

export default Main;
