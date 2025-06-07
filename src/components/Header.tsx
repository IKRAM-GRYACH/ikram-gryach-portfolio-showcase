
import { useState } from 'react';
import { Menu, X, Shield, Home, User, BookOpen, Code, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/521b1566-f597-42cf-8ed2-348bdc9da8a7.png" 
              alt="Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ikram GRYACH
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Home size={16} />
              <span>Accueil</span>
            </button>
            <button onClick={() => scrollToSection('about')} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <User size={16} />
              <span>À propos</span>
            </button>
            <button onClick={() => scrollToSection('education')} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <BookOpen size={16} />
              <span>Éducation</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Code size={16} />
              <span>Projets</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Home size={16} />
                <span>Accueil</span>
              </button>
              <button onClick={() => scrollToSection('about')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <User size={16} />
                <span>À propos</span>
              </button>
              <button onClick={() => scrollToSection('education')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <BookOpen size={16} />
                <span>Éducation</span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Code size={16} />
                <span>Projets</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
