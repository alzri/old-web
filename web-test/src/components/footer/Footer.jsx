import Logo from '../../assets/img/adp-logo.svg?react';

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="Aras digital product" />
            
            <div className="footer--links">
                <a href="https://clutch.co/profile/aras-digital-products" target="_blank" rel="noreferrer">Clutch</a>
                <a href="https://www.linkedin.com/company/aras-digital-products" target="_blank" rel="noreferrer">Linkedin</a>
                <a href="https://twitter.com/_arasdigital" target="_blank" rel="noreferrer">X</a>
                <a href="https://www.instagram.com/_arasdigital/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://medium.com/arasdigitalproducts" target="_blank" rel="noreferrer">Medium</a>
                <a href="/contact" target="_blank" rel="noreferrer">Contact</a>
                <a href="https://dribbble.com/_arasdigital" target="_blank" rel="noreferrer">Dribbble</a>
            </div>
        </footer>
    )
}

export default Footer;