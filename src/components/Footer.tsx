
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/521b1566-f597-42cf-8ed2-348bdc9da8a7.png" 
                alt="Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ikram GRYACH
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Étudiante ingénieur passionnée par la cybersécurité et l'innovation technologique, 
              développant des solutions pour sécuriser le monde numérique.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation rapide</h3>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                Accueil
              </button>
              <button 
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                Éducation
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                Projets
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Restons connectés</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:ikramgryachlinkedin@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                title="Email"
              >
                <Mail size={20} className="text-muted-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/IKRAM%20GRYACH"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-muted-foreground" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              <strong>Email:</strong> ikramgryachlinkedin@gmail.com<br />
              <strong>Téléphone:</strong> 06 00 00 00 00<br />
              <strong>Localisation:</strong> Fès, Maroc
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ikram GRYACH. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm">
              Fait avec ❤️ pour un avenir numérique sécurisé
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
