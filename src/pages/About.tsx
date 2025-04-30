
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Briefcase, Users } from "lucide-react";
import { motion } from "@/components/ui/motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-grid-pattern">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-nepal-red to-nepal-blue bg-clip-text text-transparent">
              About HackForNepal
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn more about Nepal's biggest hackathon and how we're working to drive innovation and positive change.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-nepal-red/10 flex items-center justify-center rounded-full mr-2">
                  <Users className="text-nepal-red w-4 h-4" />
                </span>
                Our Story
              </h2>
              <div className="border-l-4 border-nepal-red/20 pl-6">
                <p className="mb-4 text-muted-foreground">
                  HackForNepal was founded in 2023 with a simple mission: to harness the power of technology to address 
                  the unique challenges facing Nepal. Our founder, a tech enthusiast and social entrepreneur, 
                  recognized the immense untapped talent within Nepal's developer community.
                </p>
                <p className="text-muted-foreground">
                  What started as a small gathering of like-minded individuals has grown into Nepal's premier hackathon, 
                  bringing together hundreds of participants from across the country and beyond.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-card to-nepal-blue/5 p-6 rounded-lg shadow-sm border border-nepal-blue/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-nepal-blue/10 flex items-center justify-center rounded-full mr-2">
                  <Briefcase className="text-nepal-blue w-4 h-4" />
                </span>
                Our Mission
              </h2>
              <p className="mb-4 text-muted-foreground">
                We believe in the transformative power of technology to address social, environmental, and economic 
                challenges. HackForNepal aims to:
              </p>
              <ul className="space-y-3">
                {[
                  "Foster innovation and entrepreneurship in Nepal's tech ecosystem",
                  "Create practical solutions to real-world problems facing Nepalese communities",
                  "Build a supportive community of developers, designers, and changemakers",
                  "Connect talented individuals with opportunities for growth and impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 group">
                    <span className="h-6 w-6 rounded-full bg-nepal-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-nepal-blue/20 transition-colors">
                      <span className="h-2 w-2 rounded-full bg-nepal-blue"></span>
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <span className="w-8 h-8 bg-nepal-red/10 flex items-center justify-center rounded-full mr-2">
                <Medal className="text-nepal-red w-4 h-4" />
              </span>
              2025 Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Sustainable Development",
                  description: "Creating technology solutions that support Nepal's sustainable development goals, from clean energy to sustainable agriculture and responsible consumption.",
                  color: "nepal-red",
                  number: 1,
                  delay: 0.1
                },
                {
                  title: "Digital Inclusion",
                  description: "Developing tools and platforms that expand digital access and literacy across Nepal's diverse communities, ensuring no one is left behind in the digital age.",
                  color: "nepal-blue",
                  number: 2,
                  delay: 0.2
                },
                {
                  title: "Cultural Preservation",
                  description: "Using technology to document, preserve, and promote Nepal's rich cultural heritage, from languages and traditions to historical sites and artistic expressions.",
                  color: "nepal-red",
                  number: 3,
                  delay: 0.3
                }
              ].map((area, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + area.delay }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-t-4 border-nepal-red">
                    <div className="absolute top-0 left-0 w-full h-1 bg-nepal-red"></div>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-${area.color}/10 flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                        <span className={`text-${area.color} text-xl font-bold`}>{area.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                      <p className="text-muted-foreground">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Arun Poudel", role: "Founder & Director", initials: "AP" },
                { name: "Sita Maharjan", role: "Program Coordinator", initials: "SM" },
                { name: "Raj Gurung", role: "Technical Lead", initials: "RG" }
              ].map((member, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                >
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-nepal-blue/20 to-nepal-red/20 mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-nepal-blue text-2xl font-bold">{member.initials}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-nepal-red/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-nepal-red text-xs">+</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
