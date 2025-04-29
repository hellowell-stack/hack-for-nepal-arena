
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">Register for HackForNepal</h1>
            <p className="text-lg text-muted-foreground">
              Join Nepal's biggest hackathon and be part of an innovative community 
              dedicated to solving real-world challenges through technology.
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
