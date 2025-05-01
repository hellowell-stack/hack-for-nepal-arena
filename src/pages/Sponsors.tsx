
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
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-2 mb-6 bg-muted/50 rounded-full">
              <span className="w-16 h-16 bg-nepal-red/10 flex items-center justify-center rounded-full">
                <HandShake className="text-nepal-red w-8 h-8" />
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-nepal-red to-nepal-blue bg-clip-text text-transparent">
              Our Sponsors & Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              HackForNepal wouldn't be possible without the generous support of our sponsors and partners.
              We're grateful for their commitment to fostering innovation in Nepal.
            </p>
          </motion.div>
          
          {/* Current Sponsors */}
          <div className="mb-32">
            {sponsorTiers.map((tier, tierIndex) => (
              <motion.div 
                key={tierIndex} 
                className="mb-24 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * tierIndex }}
              >
                <div className="flex items-center justify-center mb-12 max-w-4xl mx-auto">
                  <div className="h-0.5 flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                  <div className="px-8 py-2 bg-card rounded-full shadow-sm border border-muted mx-4">
                    <h2 className="text-2xl font-bold whitespace-nowrap">{tier.tier}</h2>
                  </div>
                  <div className="h-0.5 flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                </div>
                
                <div className="max-w-7xl mx-auto">
                  <div className={`grid gap-8 ${
                    tier.tier === "Community Partners" 
                      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" 
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  }`}>
                    {tier.sponsors.map((sponsor, sponsorIndex) => (
                      <motion.div 
                        key={sponsorIndex} 
                        className="group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + (0.05 * sponsorIndex) }}
                      >
                        <Card className={`
                          h-full overflow-hidden hover:shadow-md transition-all 
                          ${tier.tier === "Platinum Sponsors" ? "border-nepal-red/20" : 
                            tier.tier === "Gold Sponsors" ? "border-amber-500/20" : 
                            tier.tier === "Silver Sponsors" ? "border-gray-300/20" :
                            "border-nepal-blue/20"}
                          hover:border-primary/30
                        `}>
                          <div className={`h-1.5 w-full
                            ${tier.tier === "Platinum Sponsors" ? "bg-nepal-red/50" : 
                              tier.tier === "Gold Sponsors" ? "bg-amber-500/50" : 
                              tier.tier === "Silver Sponsors" ? "bg-gray-300/50" :
                              "bg-nepal-blue/50"}
                          `}></div>
                          <CardContent className={`p-8 flex flex-col items-center justify-center ${tier.tier === "Community Partners" ? "py-6" : ""}`}>
                            <div className={`
                                ${tier.tier === "Community Partners" ? "w-16 h-16" : "w-32 h-32"}  
                                rounded-md mb-4 flex items-center justify-center 
                                ${tier.tier === "Platinum Sponsors" ? "bg-red-500/10" : 
                                  tier.tier === "Gold Sponsors" ? "bg-amber-500/10" : 
                                  tier.tier === "Silver Sponsors" ? "bg-gray-300/20" :
                                  "bg-blue-500/10"
                                }
                                group-hover:scale-105 transition-transform
                              `}>
                              <span className={`
                                ${tier.tier === "Community Partners" ? "text-2xl" : "text-4xl"}
                                font-bold 
                                ${tier.tier === "Platinum Sponsors" ? "text-red-600" : 
                                  tier.tier === "Gold Sponsors" ? "text-amber-600" : 
                                  tier.tier === "Silver Sponsors" ? "text-gray-500" :
                                  "text-blue-600"
                                }`}>
                                {sponsor.logo}
                              </span>
                            </div>
                            <h3 className={`font-semibold text-center ${tier.tier === "Community Partners" ? "text-base" : "text-xl"}`}>
                              {sponsor.name}
                            </h3>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Become a Sponsor */}
          <motion.div 
            className="max-w-5xl mx-auto mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-card to-muted/50 overflow-hidden border-none shadow-lg relative">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-nepal-red/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-nepal-blue/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-nepal-red/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-nepal-blue/5 rounded-full blur-xl"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="inline-block p-3 bg-muted/50 rounded-full">
                    <span className="w-16 h-16 bg-nepal-red/10 flex items-center justify-center rounded-full">
                      <Award className="w-8 h-8 text-nepal-red" />
                    </span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Become a Sponsor
                </h2>
                <p className="text-center text-muted-foreground mb-12 text-lg max-w-xl mx-auto">
                  Support innovation in Nepal by sponsoring HackForNepal 2025. We offer various 
                  sponsorship packages to align with your organization's goals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-nepal-red/5 rounded-full blur-2xl"></div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <BadgeCheck className="w-6 h-6 mr-3 text-nepal-red" />
                      Why Sponsor?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Connect with top talent in Nepal's tech ecosystem",
                        "Showcase your brand to engaged, tech-savvy audience",
                        "Demonstrate your commitment to innovation and social impact",
                        "Identify promising projects for potential investment or development",
                        "Support Nepal's growing technology ecosystem"
                      ].map((benefit, index) => (
                        <li key={index} className="flex gap-3 items-start group">
                          <span className="h-8 w-8 rounded-full bg-nepal-red/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-nepal-red/20 transition-colors">
                            <span className="h-2 w-2 rounded-full bg-nepal-red"></span>
                          </span>
                          <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-nepal-blue/5 rounded-full blur-2xl"></div>
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <Medal className="w-6 h-6 mr-3 text-nepal-blue" />
                      Sponsorship Tiers
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-nepal-red/20 bg-nepal-red/5 rounded-lg hover:bg-nepal-red/10 transition-colors">
                        <p className="font-semibold text-xl text-nepal-red mb-1">Platinum Sponsor</p>
                        <p className="text-muted-foreground">Maximum visibility and engagement</p>
                      </div>
                      <div className="p-4 border border-amber-500/20 bg-amber-500/5 rounded-lg hover:bg-amber-500/10 transition-colors">
                        <p className="font-semibold text-xl text-amber-600 mb-1">Gold Sponsor</p>
                        <p className="text-muted-foreground">High visibility opportunities</p>
                      </div>
                      <div className="p-4 border border-gray-300/20 bg-gray-300/5 rounded-lg hover:bg-gray-300/10 transition-colors">
                        <p className="font-semibold text-xl text-gray-500 mb-1">Silver Sponsor</p>
                        <p className="text-muted-foreground">Prominent branding and representation</p>
                      </div>
                      <div className="p-4 border border-nepal-blue/20 bg-nepal-blue/5 rounded-lg hover:bg-nepal-blue/10 transition-colors">
                        <p className="font-semibold text-xl text-nepal-blue mb-1">Community Partner</p>
                        <p className="text-muted-foreground">Support through resources and networks</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-gradient-to-r from-nepal-red to-nepal-red/80 hover:from-nepal-red/90 hover:to-nepal-red/70 transition-all shadow-sm rounded-full px-8">
                    <a href="mailto:sponsors@hackfornepal.com" className="flex items-center">
                      Contact Us About Sponsorship
                    </a>
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
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex justify-center mb-12">
              <div className="inline-block p-2 bg-muted/50 rounded-full">
                <span className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full">
                  <HandShake className="text-nepal-blue w-6 h-6" />
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-10 text-center">
              Sponsorship Benefits
            </h2>
            
            <Card className="shadow-lg border-nepal-blue/10">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/70 border-b border-border">
                        <th className="p-5 text-left">Benefit</th>
                        <th className="p-5 text-center text-nepal-red">Platinum</th>
                        <th className="p-5 text-center text-amber-600">Gold</th>
                        <th className="p-5 text-center text-gray-500">Silver</th>
                        <th className="p-5 text-center text-nepal-blue">Community</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sponsorshipBenefits.platinum.map((benefit, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="p-5 text-muted-foreground">{benefit}</td>
                          <td className="p-5 text-center">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-nepal-red/10 text-nepal-red">
                              ✓
                            </span>
                          </td>
                          <td className="p-5 text-center">
                            {sponsorshipBenefits.gold.includes(benefit) ? (
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                                ✓
                              </span>
                            ) : "—"}
                          </td>
                          <td className="p-5 text-center">
                            {sponsorshipBenefits.silver.includes(benefit) ? (
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/30 text-gray-500">
                                ✓
                              </span>
                            ) : "—"}
                          </td>
                          <td className="p-5 text-center">
                            {sponsorshipBenefits.community.includes(benefit) ? (
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-nepal-blue/10 text-nepal-blue">
                                ✓
                              </span>
                            ) : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-16 text-center">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                <a href="mailto:sponsors@hackfornepal.com">Request Sponsorship Package</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
