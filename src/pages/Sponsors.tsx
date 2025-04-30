
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Medal } from "lucide-react";
import { HandShake, BadgeCheck } from "@/components/ui/custom-icons";
import { motion } from "@/components/ui/motion";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      color: "nepal-red",
      sponsors: [
        { name: "Nepal Tech Innovation", logo: "NT" },
        { name: "Global Digital Solutions", logo: "GD" },
      ]
    },
    {
      tier: "Gold Sponsors",
      color: "amber-500",
      sponsors: [
        { name: "Himalayan Software", logo: "HS" },
        { name: "KTM Digital", logo: "KD" },
        { name: "Mountain Valley Ventures", logo: "MV" }
      ]
    },
    {
      tier: "Silver Sponsors",
      color: "gray-400",
      sponsors: [
        { name: "Cloud Nepal", logo: "CN" },
        { name: "Dev Studios Kathmandu", logo: "DS" },
        { name: "Annapurna Innovations", logo: "AI" },
        { name: "Thamel Tech Hub", logo: "TT" }
      ]
    },
    {
      tier: "Community Partners",
      color: "nepal-blue",
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
      <div className="flex-grow py-24 px-4 bg-grid-pattern">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-nepal-red to-nepal-blue bg-clip-text text-transparent">
              Our Sponsors & Partners
            </h1>
            <p className="text-lg text-muted-foreground">
              HackForNepal wouldn't be possible without the generous support of our sponsors and partners.
              We're grateful for their commitment to fostering innovation in Nepal.
            </p>
          </motion.div>
          
          {/* Current Sponsors */}
          <div className="mb-20">
            {sponsorTiers.map((tier, index) => (
              <motion.div 
                key={index} 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                  <h2 className="text-2xl font-bold mx-4 whitespace-nowrap">{tier.tier}</h2>
                  <div className="h-0.5 flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                </div>
                <div className={`grid gap-6 ${tier.tier === "Community Partners" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <motion.div 
                      key={sponsorIndex} 
                      className="group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + (0.05 * sponsorIndex) }}
                    >
                      <Card className="hover:shadow-md transition-all border-gray-200 hover:border-gray-300">
                        <CardContent className="p-6 flex flex-col items-center justify-center">
                          <div className={`w-24 h-24 rounded-md mb-4 flex items-center justify-center 
                              ${tier.tier === "Platinum Sponsors" ? "bg-red-500/10" : 
                                tier.tier === "Gold Sponsors" ? "bg-amber-500/10" : 
                                tier.tier === "Silver Sponsors" ? "bg-gray-300/20" :
                                "bg-blue-500/10"
                              }
                              group-hover:scale-105 transition-transform
                            `}>
                            <span className={`text-3xl font-bold 
                              ${tier.tier === "Platinum Sponsors" ? "text-red-600" : 
                                tier.tier === "Gold Sponsors" ? "text-amber-600" : 
                                tier.tier === "Silver Sponsors" ? "text-gray-500" :
                                "text-blue-600"
                              }`}>
                              {sponsor.logo}
                            </span>
                          </div>
                          <h3 className="font-semibold text-center text-lg">{sponsor.name}</h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Become a Sponsor */}
          <motion.div 
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-card to-muted/50 overflow-hidden border-none">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-nepal-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-nepal-blue/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
                  <Award className="w-5 h-5 mr-2 text-nepal-red" />
                  Become a Sponsor
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  Support innovation in Nepal by sponsoring HackForNepal 2025. We offer various 
                  sponsorship packages to align with your organization's goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BadgeCheck className="w-4 h-4 mr-2 text-nepal-red" />
                      Why Sponsor?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Connect with top talent in Nepal's tech ecosystem",
                        "Showcase your brand to engaged, tech-savvy audience",
                        "Demonstrate your commitment to innovation and social impact",
                        "Identify promising projects for potential investment or development",
                        "Support Nepal's growing technology ecosystem"
                      ].map((benefit, index) => (
                        <li key={index} className="flex gap-2 items-start group">
                          <span className="h-6 w-6 rounded-full bg-nepal-red/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-nepal-red/20 transition-colors">
                            <span className="h-2 w-2 rounded-full bg-nepal-red"></span>
                          </span>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Medal className="w-4 h-4 mr-2 text-nepal-blue" />
                      Sponsorship Tiers
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-nepal-red/20 bg-nepal-red/5 rounded-md hover:bg-nepal-red/10 transition-colors">
                        <p className="font-semibold text-nepal-red">Platinum Sponsor</p>
                        <p className="text-sm text-muted-foreground">Maximum visibility and engagement</p>
                      </div>
                      <div className="p-3 border border-amber-500/20 bg-amber-500/5 rounded-md hover:bg-amber-500/10 transition-colors">
                        <p className="font-semibold text-amber-600">Gold Sponsor</p>
                        <p className="text-sm text-muted-foreground">High visibility opportunities</p>
                      </div>
                      <div className="p-3 border border-gray-300/20 bg-gray-300/5 rounded-md hover:bg-gray-300/10 transition-colors">
                        <p className="font-semibold text-gray-500">Silver Sponsor</p>
                        <p className="text-sm text-muted-foreground">Prominent branding and representation</p>
                      </div>
                      <div className="p-3 border border-nepal-blue/20 bg-nepal-blue/5 rounded-md hover:bg-nepal-blue/10 transition-colors">
                        <p className="font-semibold text-nepal-blue">Community Partner</p>
                        <p className="text-sm text-muted-foreground">Support through resources and networks</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-nepal-red to-nepal-red/80 hover:from-nepal-red/90 hover:to-nepal-red/70 transition-all shadow-sm">
                    <a href="mailto:sponsors@hackfornepal.com">Contact Us About Sponsorship</a>
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For detailed information about sponsorship packages, please email us at 
                    <a href="mailto:sponsors@hackfornepal.com" className="text-nepal-blue hover:underline ml-1">
                      sponsors@hackfornepal.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Sponsor Benefits */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <HandShake className="w-5 h-5 mr-2 text-nepal-blue" />
              Sponsorship Benefits
            </h2>
            <div className="overflow-x-auto bg-card rounded-lg shadow-sm border border-border">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-4 text-left">Benefit</th>
                    <th className="p-4 text-center text-nepal-red">Platinum</th>
                    <th className="p-4 text-center text-amber-600">Gold</th>
                    <th className="p-4 text-center text-gray-500">Silver</th>
                    <th className="p-4 text-center text-nepal-blue">Community</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipBenefits.platinum.map((benefit, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4 text-muted-foreground">{benefit}</td>
                      <td className="p-4 text-center">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-nepal-red/10 text-nepal-red">
                          ✓
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        {sponsorshipBenefits.gold.includes(benefit) ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                            ✓
                          </span>
                        ) : "—"}
                      </td>
                      <td className="p-4 text-center">
                        {sponsorshipBenefits.silver.includes(benefit) ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200/30 text-gray-500">
                            ✓
                          </span>
                        ) : "—"}
                      </td>
                      <td className="p-4 text-center">
                        {sponsorshipBenefits.community.includes(benefit) ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-nepal-blue/10 text-nepal-blue">
                            ✓
                          </span>
                        ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
