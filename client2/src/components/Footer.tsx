import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

function FooterHomepage() {
  return (
    <Footer className="text-center p-8 mt-auto bg-gray-400"> 
        
        {/* Logo con fondo transparente */}
        <img src="/images/logoADP.png" alt="Logo" className="w-20 h-10 mx-auto" />

        {/* texto del footer */}
        <FooterCopyright href="#" by=" ADP Vicente Noble | Todos los derechos reservados" year={2023} />
    </Footer>
  );
}

export default FooterHomepage;



/*<Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>*/