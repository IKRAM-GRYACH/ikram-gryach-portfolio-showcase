
import { Shield, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Shield size={60} className="text-blue-600" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ikram GRYACH
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Étudiante Ingénieur en Cybersécurité et Confiance Numérique
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionnée par la cybersécurité, le développement logiciel et l'intelligence artificielle. 
            Actuellement en formation à l'INPT Rabat, je développe des solutions innovantes pour 
            sécuriser le monde numérique de demain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2" size={20} />
              Me contacter
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="mr-2" size={20} />
              Voir mes projets
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-muted-foreground">Technologies maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-muted-foreground">Langues parlées</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
