
import { Code, Database, Shield, Bot, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Plateforme collaborative sécurisée pour le partage de fichiers",
      institution: "INPT",
      category: "Développement",
      description: "Développement d'une plateforme de partage de fichiers permettant à plusieurs utilisateurs d'envoyer et de télécharger des fichiers via un espace collaboratif commun, avec un contrôle d'accès sécurisé assuré par un système d'authentification.",
      technologies: ["JavaScript", "HTML", "CSS", "UML", "MySQL", "Python"],
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Augmentation de données pour la détection de Ransomwares",
      institution: "INPT",
      category: "Data Science",
      description: "Génération des données synthétiques à partir d'un dataset Excel relatif à la détection de Ransomwares en utilisant les algorithmes CTGAN, TGAN et TVAE, puis évaluation et comparaison de la qualité des jeux de données augmentés par des entraînements et tests réalisés avec des modèles de Machine Learning et de Deep Learning.",
      technologies: ["Python"],
      icon: Bot,
      color: "text-purple-600"
    },
    {
      title: "Gestion d'irrigation automatisée avec ThingsBoard",
      institution: "INPT",
      category: "IoT",
      description: "Gestion de système d'irrigation via la plateforme ThingsBoard avec des données simulées des capteurs virtuels pour la surveillance de la température et l'humidité du sol, l'activation de la pompe d'irrigation en fonction de seuils définis et l'envoi des notifications par Gmail lorsque l'irrigation est nécessaire.",
      technologies: ["JSON"],
      icon: Database,
      color: "text-green-600"
    },
    {
      title: "La valeur de Shapley au service de l'intelligence artificielle",
      institution: "CPGE",
      category: "TIPE",
      description: "L'application informatique de la valeur mathématique de Shapley pour expliquer les décisions prises par les modèles d'apprentissage automatique et évaluation de la contribution de chaque caractéristique dans les prédictions générées.",
      technologies: ["Python"],
      icon: Lightbulb,
      color: "text-orange-600"
    }
  ];

  const categoryColors = {
    "Développement": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    "Data Science": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    "IoT": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    "TIPE": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes projets en cybersécurité, développement et intelligence artificielle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {project.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
