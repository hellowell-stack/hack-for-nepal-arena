
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">About HackForNepal</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about Nepal's biggest hackathon and how we're working to drive innovation and positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
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
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4 text-muted-foreground">
                We believe in the transformative power of technology to address social, environmental, and economic 
                challenges. HackForNepal aims to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Foster innovation and entrepreneurship in Nepal's tech ecosystem</li>
                <li>Create practical solutions to real-world problems facing Nepalese communities</li>
                <li>Build a supportive community of developers, designers, and changemakers</li>
                <li>Connect talented individuals with opportunities for growth and impact</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">2025 Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-red text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
                <p className="text-muted-foreground">
                  Creating technology solutions that support Nepal's sustainable development goals, from clean energy to 
                  sustainable agriculture and responsible consumption.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Inclusion</h3>
                <p className="text-muted-foreground">
                  Developing tools and platforms that expand digital access and literacy across Nepal's diverse 
                  communities, ensuring no one is left behind in the digital age.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-red text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
                <p className="text-muted-foreground">
                  Using technology to document, preserve, and promote Nepal's rich cultural heritage, from languages and 
                  traditions to historical sites and artistic expressions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">AP</span>
                </div>
                <h3 className="font-semibold">Arun Poudel</h3>
                <p className="text-sm text-muted-foreground">Founder & Director</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">SM</span>
                </div>
                <h3 className="font-semibold">Sita Maharjan</h3>
                <p className="text-sm text-muted-foreground">Program Coordinator</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">RG</span>
                </div>
                <h3 className="font-semibold">Raj Gurung</h3>
                <p className="text-sm text-muted-foreground">Technical Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
