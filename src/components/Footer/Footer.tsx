const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <p>&copy; {currentYear} Jéssica Motta. Todos os direitos reservados.</p>
        </>
    )
}

export default Footer;