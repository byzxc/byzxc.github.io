import React from "react";
import {Container, Navbar, NavbarBrand,} from "react-bootstrap";
import {BrowserRouter, NavLink} from "react-router-dom";
import logo from "./Contents/logo/me.jpg";
import react from "./Contents/logo/react.png";
import html from "./Contents/logo/html.png";
import javascript from "./Contents/logo/javascript.png";
import css from "./Contents/logo/css.png";
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
                    <div className={cx("my-card__container")}>
                        <div className={cx("my-card0")}>
                            <h1>Darren Lin</h1>
                            <img className={cx("my-card__image")} alt="me" src={logo}/>
                            <p>
                                <br></br>
                                As a Software Engineer, I possess a strong interest in discovering novel technologies
                                and possess a keen sense for automating processes. In addition, I take pleasure in
                                listening to music and engaging in gaming activities. I'm consistently seeking out
                                calming and comforting tunes.
                            </p>
                            <div className={cx("my-card__buttons")}>
                                <a href="https://drive.google.com/file/d/1WDGgl2OGQ_cDxmD6amX-IUUqJI9PTa4L/view?usp=share_link">Resume</a>
                                <a href="https://www.linkedin.com/in/darrenlinby/">LinkedIn</a>
                            </div>
                        </div>
                        <div className={cx("my-card1")}>
                            <div className={cx("my-card1__description")}>
                                <h1>Frontend<br/>Development</h1>
                                <p>
                                    <br></br>
                                    I'm a beginner in React, using JavaScript, HTML, and CSS to construct a website.
                                    Alongside this, I'm also studying JSX, SCSS, and BEM methodology to develop more
                                    organized and maintainable CSS. I'm committed to practicing and improving my skills
                                    to create websites that are both functional and visually pleasing.
                                </p>
                            </div>

                            <div className={cx("my-card1__images")}>
                                <div className={cx("image")}>
                                    <img alt="react" src={react}/>
                                </div>
                                <div className={cx("image")}>
                                    <img alt="html" src={html}/>
                                </div>
                                <div className={cx("image")}>
                                    <img alt="javascript" src={javascript}/>
                                </div>
                                <div className={cx("image")}>
                                    <img alt="css" src={css}/>
                                </div>
                            </div>
                        </div>

                        <div className={cx("my-card2")}>
                            <div className={cx("my-card2__description")}>
                                <h1>Game<br/>Development</h1>
                                <p>
                                    <br></br>
                                    As a Software Engineer, I possess a strong interest in discovering novel technologies
                                    and possess a keen sense for automating processes. In addition, I take pleasure in
                                    listening to music and engaging in gaming activities. I'm consistently seeking out
                                    calming and comforting tunes.
                                </p>
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
