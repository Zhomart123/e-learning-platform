import "./style.css"

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/zhomart_k_/"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://app.netlify.com/teams/gamecsgo013/"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/"><img src={gitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 zhomart@jihc.edu.kz</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;