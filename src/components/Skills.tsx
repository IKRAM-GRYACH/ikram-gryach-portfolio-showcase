
import { Code, Globe, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages de Programmation",
      icon: Code,
      skills: ["C", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "R", "Assembleur"],
      color: "text-blue-600"
    },
    {
      title: "Langues",
      icon: Globe,
      skills: [
        { name: "Français", level: "C1" },
        { name: "Anglais", level: "C1" },
        { name: "Arabe", level: "Native" }
      ],
      color: "text-green-600"
    }
  ];

  const experience = {
    title: "Expériences académiques",
    icon: Award,
    description: "MENTOR, Programme DIGIGIRLZ par L'association ANOUAL",
    details: "Monitrice dans le programme DIGIGIRLZ, 8ème édition, visant à encourager l'intégration des filles âgées de 15 à 18 ans dans les domaines STEM, avec pour thème \"Safe and Secure\", centré sur la cybersécurité.",
    color: "text-purple-600"
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Compétences & Expériences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mes compétences techniques et linguistiques, ainsi que mon engagement dans la communauté STEM
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <skillCategories[0].icon className={`w-6 h-6 ${skillCategories[0].color}`} />
                </div>
                <CardTitle className="text-xl">{skillCategories[0].title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategories[0].skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                  <skillCategories[1].icon className={`w-6 h-6 ${skillCategories[1].color}`} />
                </div>
                <CardTitle className="text-xl">{skillCategories[1].title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skillCategories[1].skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{typeof skill === 'string' ? skill : skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {typeof skill === 'string' ? skill : skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <experience.icon className={`w-6 h-6 ${experience.color}`} />
                </div>
                <CardTitle className="text-xl">{experience.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2 text-sm">{experience.description}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {experience.details}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
