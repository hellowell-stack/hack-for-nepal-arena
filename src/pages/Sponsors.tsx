
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      sponsors: [
        { name: "Nepal Tech Innovation", logo: "NT" },
        { name: "Global Digital Solutions", logo: "GD" },
      ]
    },
    {
      tier: "Gold Sponsors",
      sponsors: [
        { name: "Himalayan Software", logo: "HS" },
        { name: "KTM Digital", logo: "KD" },
        { name: "Mountain Valley Ventures", logo: "MV" }
      ]
    },
    {
      tier: "Silver Sponsors",
      sponsors: [
        { name: "Cloud Nepal", logo: "CN" },
        { name: "Dev Studios Kathmandu", logo: "DS" },
        { name: "Annapurna Innovations", logo: "AI" },
        { name: "Thamel Tech Hub", logo: "TT" }
      ]
    },
    {
      tier: "Community Partners",
      sponsors: [
        { name: "Nepal Dev Community", logo: "ND" },
        { name: "Women in Tech Nepal", logo: "WT" },
        { name: "Code for Nepal", logo: "CN" },
        { name: "Student Developers Alliance", logo: "SD" },
        { name: "Open Source Nepal", logo: "OS" },
        { name: "Kathmandu University", logo: "KU" }
      ]
    }
  ];

  const sponsorshipBenefits = {
    platinum: [
      "Prime logo placement on all event materials",
      "Dedicated booth space at the event",
      "Opportunity to address participants during opening ceremony",
      "Access to participants' resumes (with consent)",
      "First pick of projects for potential development",
      "5 judge positions on the panel",
      "Social media features and press mentions"
    ],
    gold: [
      "Prominent logo placement on event materials",
      "Booth space at the event",
      "Mention during opening ceremony",
      "3 judge positions on the panel",
      "Social media features"
    ],
    silver: [
      "Logo on event materials and website",
      "Table space at the event",
      "1 judge position on the panel",
      "Social media mention"
    ],
    community: [
      "Logo on website",
      "Mention during the event",
      "Opportunity to provide mentors"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">Our Sponsors & Partners</h1>
            <p className="text-lg text-muted-foreground">
              HackForNepal wouldn't be possible without the generous support of our sponsors and partners.
              We're grateful for their commitment to fostering innovation in Nepal.
            </p>
          </div>
          
          {/* Current Sponsors */}
          <div className="mb-20">
            {sponsorTiers.map((tier, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">{tier.tier}</h2>
                <div className={`grid gap-6 ${tier.tier === "Community Partners" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <div key={sponsorIndex} className="bg-card p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
                      <div className={`w-24 h-24 rounded-md mb-4 flex items-center justify-center ${
                        tier.tier === "Platinum Sponsors" ? "bg-nepal-red/10" : 
                        tier.tier === "Gold Sponsors" ? "bg-yellow-500/10" : 
                        tier.tier === "Silver Sponsors" ? "bg-gray-300/20" :
                        "bg-nepal-blue/10"
                      }`}>
                        <span className={`text-3xl font-bold ${
                          tier.tier === "Platinum Sponsors" ? "text-nepal-red" : 
                          tier.tier === "Gold Sponsors" ? "text-yellow-600" : 
                          tier.tier === "Silver Sponsors" ? "text-gray-500" :
                          "text-nepal-blue"
                        }`}>{sponsor.logo}</span>
                      </div>
                      <h3 className="font-semibold text-center">{sponsor.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Become a Sponsor */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-center">Become a Sponsor</h2>
              <p className="text-center text-muted-foreground mb-8">
                Support innovation in Nepal by sponsoring HackForNepal 2025. We offer various 
                sponsorship packages to align with your organization's goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Sponsor?</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-nepal-red font-bold">✓</span>
                      <span className="text-muted-foreground">Connect with top talent in Nepal's tech ecosystem</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-nepal-red font-bold">✓</span>
                      <span className="text-muted-foreground">Showcase your brand to engaged, tech-savvy audience</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-nepal-red font-bold">✓</span>
                      <span className="text-muted-foreground">Demonstrate your commitment to innovation and social impact</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-nepal-red font-bold">✓</span>
                      <span className="text-muted-foreground">Identify promising projects for potential investment or development</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-nepal-red font-bold">✓</span>
                      <span className="text-muted-foreground">Support Nepal's growing technology ecosystem</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Sponsorship Tiers</h3>
                  <div className="space-y-3">
                    <div className="p-2 border border-nepal-red/20 bg-nepal-red/5 rounded-md">
                      <p className="font-semibold text-nepal-red">Platinum Sponsor</p>
                      <p className="text-sm text-muted-foreground">Maximum visibility and engagement</p>
                    </div>
                    <div className="p-2 border border-yellow-500/20 bg-yellow-500/5 rounded-md">
                      <p className="font-semibold text-yellow-600">Gold Sponsor</p>
                      <p className="text-sm text-muted-foreground">High visibility opportunities</p>
                    </div>
                    <div className="p-2 border border-gray-300/20 bg-gray-300/5 rounded-md">
                      <p className="font-semibold text-gray-500">Silver Sponsor</p>
                      <p className="text-sm text-muted-foreground">Prominent branding and representation</p>
                    </div>
                    <div className="p-2 border border-nepal-blue/20 bg-nepal-blue/5 rounded-md">
                      <p className="font-semibold text-nepal-blue">Community Partner</p>
                      <p className="text-sm text-muted-foreground">Support through resources and networks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <a href="mailto:sponsors@hackfornepal.com">Contact Us About Sponsorship</a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  For detailed information about sponsorship packages, please email us at 
                  <a href="mailto:sponsors@hackfornepal.com" className="text-nepal-blue hover:underline ml-1">
                    sponsors@hackfornepal.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Sponsor Benefits */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Sponsorship Benefits</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 text-left">Benefit</th>
                    <th className="p-3 text-center text-nepal-red">Platinum</th>
                    <th className="p-3 text-center text-yellow-600">Gold</th>
                    <th className="p-3 text-center text-gray-500">Silver</th>
                    <th className="p-3 text-center text-nepal-blue">Community</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipBenefits.platinum.map((benefit, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3 text-muted-foreground">{benefit}</td>
                      <td className="p-3 text-center">✓</td>
                      <td className="p-3 text-center">{sponsorshipBenefits.gold.includes(benefit) ? "✓" : "—"}</td>
                      <td className="p-3 text-center">{sponsorshipBenefits.silver.includes(benefit) ? "✓" : "—"}</td>
                      <td className="p-3 text-center">{sponsorshipBenefits.community.includes(benefit) ? "✓" : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
