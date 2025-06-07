
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      institution: "INPT (RABAT, MAROC)",
      degree: "Diplôme d'ingénieur",
      period: "2024 – 2027",
      description: "Étudiante en 1ère année du cycle d'ingénieur en cybersécurité et confiance numérique",
      courses: [
        "Mathématiques pour l'ingénieur",
        "Administration système",
        "Réseaux informatiques",
        "Réseaux IP et sécurité",
        "Développement logiciel",
        "Développement web",
        "Ingénierie des systèmes d'exploitation",
        "Programmation et bases de données",
        "Architecture et microprocesseurs"
      ],
      current: true
    },
    {
      institution: "Lycée MOULAY IDRISS (FÈS, MAROC)",
      degree: "Classes préparatoires",
      period: "2022 – 2024",
      description: "Deux années de classes préparatoires intensives en mathématiques et physique (MPSI, MP*)",
      courses: [],
      current: false
    },
    {
      institution: "Lycée AL Jabr FÈS (FÈS, MAROC)",
      degree: "Baccalauréat",
      period: "2021 – 2022",
      description: "Baccalauréat sciences mathématiques B - Mention très bien",
      courses: [],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Éducation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique en mathématiques, physique et cybersécurité
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${edu.current ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${edu.current ? 'bg-blue-100 dark:bg-blue-900/20' : 'bg-muted'}`}>
                      <GraduationCap className={`w-6 h-6 ${edu.current ? 'text-blue-600' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {edu.institution}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    {edu.current && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                        En cours
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Programme de cours :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
