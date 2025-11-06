import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Facebook, Instagram, ExternalLink, Download } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Leah Mae S.</h1>
          <div className="flex gap-6 text-sm">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-600 transition">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Leah Mae Santillan</h2>
            <p className="text-2xl text-blue-600 font-semibold mb-6">Social Media Manager & Graphic Designer</p>
            <p className="text-lg text-gray-700 mb-8">Crafting compelling visual content and managing social media presence for brands in real estate, food, and e-commerce industries.</p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection('contact')}>Get In Touch</Button>
              <a href="/Leah_Santillan_Resume.pdf" download className="inline-flex items-center justify-center px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 text-center">
            <img src="/profile.png" alt="Leah Mae Santillan" className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hi, I'm Leah Mae Santillan, a creative professional based in General Santos, Philippines. With over 3,942 hours of professional experience, I've successfully managed social media accounts and created engaging visual content for diverse industries.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Before specializing in social media management and graphic design, I worked in customer support, sales, and administrative roles, which gave me valuable insights into client needs and business operations. This background helps me create content that truly resonates with target audiences.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                My expertise spans across real estate, food and beverage, and e-commerce sectors. I have a proven track record of:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Creating customer-focused content and advertisements</li>
                <li>✓ Managing and scheduling social media content</li>
                <li>✓ Designing visual assets for brand promotion</li>
                <li>✓ Building brand presence and driving engagement</li>
                <li>✓ Collaborating with teams to strengthen overall branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Social Media Management</h4>
              <ul className="text-gray-700 space-y-3">
                <li>• Content creation and curation</li>
                <li>• Social media scheduling and posting</li>
                <li>• Community engagement and management</li>
                <li>• Social media strategy development</li>
                <li>• Performance analytics and reporting</li>
                <li>• Influencer collaboration coordination</li>
              </ul>
            </Card>
            <Card className="p-8 border-0 shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Graphic Design</h4>
              <ul className="text-gray-700 space-y-3">
                <li>• Social media graphics and posts</li>
                <li>• Brand identity design</li>
                <li>• Marketing materials and collateral</li>
                <li>• Product photography editing</li>
                <li>• Banner and thumbnail design</li>
                <li>• Custom visual content creation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Design Tools</h4>
              <p className="text-gray-700 text-sm">Canva, Adobe Creative Suite, Photoshop, Figma, product photography editing, and professional design software</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Social Platforms</h4>
              <p className="text-gray-700 text-sm">Facebook, Instagram, TikTok, LinkedIn, Twitter, Pinterest, and emerging platforms</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Content Creation</h4>
              <p className="text-gray-700 text-sm">Copywriting, visual storytelling, video editing, carousel design, and engagement strategies</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Brand Strategy</h4>
              <p className="text-gray-700 text-sm">Brand positioning, audience analysis, competitor research, and growth strategies</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Analytics</h4>
              <p className="text-gray-700 text-sm">Performance tracking, engagement metrics, ROI analysis, and data-driven insights</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h4 className="font-bold text-gray-900 mb-4">Communication</h4>
              <p className="text-gray-700 text-sm">Client collaboration, project management, and clear stakeholder communication</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Portfolio & Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/BundleFBAds.png" alt="Fraiche Skin Product Bundle" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fraiche Skin - Product Bundle Campaign</h4>
                <p className="text-gray-700 mb-4">Created stunning product photography and marketing graphics for Fraiche Skin's skincare bundle. Designed cohesive visual identity showcasing the complete restore collection with professional product styling and compelling copy that highlights key benefits.</p>
              </div>
            </Card>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/tiktok1cleanser.png" alt="Fraiche Cleanser TikTok Content" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fraiche Skin - Social Media Content</h4>
                <p className="text-gray-700 mb-4">Developed engaging TikTok and social media content for Fraiche Skin's cleanser product line. Created visually appealing graphics with aloe vera and natural ingredient emphasis, designed to drive engagement and product awareness across multiple platforms.</p>
              </div>
            </Card>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/17.png" alt="Hydrogen Water Bottle Marketing" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Hydrogen Water Bottle - Product Launch</h4>
                <p className="text-gray-700 mb-4">Designed comprehensive marketing materials for the Hydrogen Water Bottle product launch. Created instructional graphics and promotional content highlighting the product's unique features: Fill, Press, Drink cycle with built-in filtering and hydrogen health benefits.</p>
              </div>
            </Card>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/4.png" alt="Quietpaws Anti-Barking Device" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quietpaws - Pet Tech Product Campaign</h4>
                <p className="text-gray-700 mb-4">Created eye-catching social media graphics for Quietpaws Anti-Barking Device. Designed product showcase layouts with packaging and device imagery, highlighting key features like dog-friendly technology, lightweight design, and rechargeable functionality for pet owners.</p>
              </div>
            </Card>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/50.png" alt="Skincare Educational Content" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Skincare Education - Before & After Content</h4>
                <p className="text-gray-700 mb-4">Designed compelling educational graphics about sunscreen importance and skin health. Created split-screen before/after visuals with persuasive copy explaining UV damage prevention, perfect for driving engagement and educating customers on skincare benefits.</p>
              </div>
            </Card>
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition">
              <img src="/portfolio/addoncartridges.png" alt="HydraPure Add-on Cartridges" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">HydraPure - Product Accessories Marketing</h4>
                <p className="text-gray-700 mb-4">Developed product marketing graphics for HydraPure's add-on cartridges. Designed professional product layouts showcasing exfoliator and brush accessories with pricing information, perfect for e-commerce and social media promotion to drive accessory sales.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Ready to elevate your brand's social media presence and create stunning visual content? Get in touch with me today!</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:leahmae@example.com" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Mail size={20} /> Email Me
            </a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">Schedule a Call</Button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Leah Mae S. All rights reserved.</p>
          <p className="text-sm mt-2">Social Media Manager & Graphic Designer | General Santos, Philippines</p>
        </div>
      </footer>
    </div>
  );
}
