const Footer = () => {
    return (
        <footer className="bg-cream-200 text-center py-6">
            <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Relatos de papel - Todos los derechos reservados
            </p>
      </footer>
    );
};

export default Footer;