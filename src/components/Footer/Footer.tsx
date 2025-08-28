import './Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <p>&copy; {currentYear} Jéssica Motta. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;