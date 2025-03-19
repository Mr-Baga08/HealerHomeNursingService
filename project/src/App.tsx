import React, { useState } from 'react';
import { Clock, MapPin, Phone, Heart, Star, Users, Activity, Shield, Calendar, Mail, MessageSquare } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const reviews = [
    {
      name: "Samarpita Behera",
      rating: 5,
      text: "Best attendant compared to other agencies in Bhubaneswar. Healer home nursing management and their response is very well. Even they received calls any time even at night. Still 6 months I have received the service for my mother but they never disappointed me.",
      date: "1 year ago"
    },
    {
      name: "Priyadarsini Swain",
      rating: 5,
      text: "Best home nursing service in Bhubaneswar. We received services for my grandfather in Rasulgarh. I am extremely happy with your response 🙏",
      date: "1 year ago"
    },
    {
      name: "Bleshee Neha",
      rating: 5,
      text: "Excellent service and they're very kind and cooperative to the client and they have a quick response to their client.",
      date: "1 year ago"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Healer Home Nursing Service</h1>
            <p className="text-xl mb-8">Professional Healthcare in the Comfort of Your Home</p>
            <a 
              href="tel:+919937331708"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 099373 31708
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Users />}
            title="Skilled Nursing Care"
            description="Experienced and trained nursing staff providing 24/7 professional care"
          />
          <ServiceCard 
            icon={<Activity />}
            title="Patient Monitoring"
            description="Regular health monitoring and detailed reporting"
          />
          <ServiceCard 
            icon={<Shield />}
            title="Elder Care"
            description="Specialized care services for elderly patients"
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location & Hours */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">
                  PlotNo: K9 A MIG-269 Kalinga Nagar Patrapada,<br />
                  near DN Regalia Road, mall, Tamando,<br />
                  Bhubaneswar, Odisha 751019
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Hours of Operation</h3>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <p className="text-gray-600">Open 24 hours</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Serving Bhubaneswar and nearby areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-xl font-semibold">Experienced Staff</h3>
            </div>
            <p className="text-gray-600">Our nursing staff is well-trained and experienced in providing quality home care services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
            </div>
            <p className="text-gray-600">Round-the-clock service to ensure your loved ones receive care whenever needed.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              <span className="text-xl font-semibold">Healer Home Nursing Service</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919937331708" className="hover:text-blue-400">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:contact@healerhomenursing.com" className="hover:text-blue-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © 2024 Healer Home Nursing Service. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
        <div className="w-8 h-8 text-blue-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;