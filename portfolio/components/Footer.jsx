import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="mailto:taylorcs827@gmail.com">
                        <i className="far fa-envelope"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="http://linkedin.com/in/taylorcs827">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/taylorcs827">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}