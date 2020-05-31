import React from 'react';


const Footer = () => {

return(

    <footer className="footer">
    <div className="container-fluid">
        <nav className="pull-left">
            <ul>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Company
                    </a>
                </li>
                <li>
                    <a href="#">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                       Blog
                    </a>
                </li>
            </ul>
        </nav>
        <p className="copyright pull-right">
            &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
        </p>
    </div>
</footer>

);

}

export default Footer;