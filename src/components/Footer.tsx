const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-bold mb-2">
          <span className="text-foreground">mob</span>
          <span className="text-primary">CONTENT</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} mobCONTENT. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
