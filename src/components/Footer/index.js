import './footer.css';

function Footer() {
    return(
        <footer className='footer'>
            <span>DEV REELS 🔴</span>
            <p>&copy; 2025, ©DEV REELS, Todos os direitos reservados.</p>
            <div className='redes-sociais'>
                <a href='https://www.linkedin.com/in/ryanverissimo/' target="_blank"><i class="ph ph-linkedin-logo"></i></a>
                <a href='https://github.com/RyanVerissimo' target="_blank"><i class="ph ph-github-logo"></i></a>
                <a href='https://wa.me/5585997794006?text=Ol%C3%A1%2C%20Ryan!' target="_blank"><i class="ph ph-whatsapp-logo"></i></a>
            </div>
        </footer>
    )
}

export default Footer;