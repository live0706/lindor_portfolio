import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-16">
          Entrons en Contact
        </h2>
        <div className="max-w-4xl mx-auto bg-card-bg p-8 md:p-12 rounded-lg shadow-lg border border-primary/30">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold font-inter text-white mb-4">Envoyez-moi un message</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-400 mb-2">Nom</label>
                            <input type="text" id="name" name="name" className="w-full bg-dark-bg/70 border border-primary/50 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-dark-bg/70 border border-primary/50 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full bg-dark-bg/70 border border-primary/50 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                            Envoyer le Message
                        </button>
                    </form>
                </div>
                 <div className="flex flex-col justify-center">
                     <h3 className="text-2xl font-bold font-inter text-white mb-6">Informations de Contact</h3>
                     <div className="space-y-6 text-gray-300">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-accent"/>
                            <span>email@example.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-accent"/>
                            <span>+221 77 123 45 67</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-accent"/>
                            <span>Dakar, Sénégal</span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;