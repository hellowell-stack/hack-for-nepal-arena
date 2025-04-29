
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <div className="py-24 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About the Hackathon</h2>
          <p className="text-lg text-muted-foreground">
            HackForNepal brings together innovators, developers, designers, and creators 
            to build solutions that address pressing challenges in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-red text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              Empowering Nepalese innovation through technology to build solutions 
              that address local challenges with global impact.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-blue text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Challenge Tracks</h3>
            <p className="text-muted-foreground mb-4">
              Focus on education, healthcare, sustainability, disaster resilience, 
              cultural preservation, or create your own impact project.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-6">
              <span className="text-nepal-red text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Prizes</h3>
            <p className="text-muted-foreground mb-4">
              Win cash prizes, mentorship opportunities, and the chance to showcase 
              your solutions to investors and industry leaders.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/about">Learn More About HackForNepal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
