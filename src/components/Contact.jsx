import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section bg-[var(--color-charcoal)] text-[var(--color-bone)]">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-[var(--color-sand)] mb-6">¿Listo para consentirlo?</h2>
                    <p className="mb-8 text-lg opacity-90">
                        Hacemos entregas en toda Cochabamba. Escríbenos para coordinar tu pedido.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                        <a
                            href="https://wa.me/59170000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-[#25D366] text-white hover:bg-[#128C7E] gap-2"
                        >
                            <MessageCircle size={20} />
                            Pedir por WhatsApp
                        </a>
                        <a
                            href="#"
                            className="btn bg-white text-[var(--color-charcoal)] hover:bg-gray-100 gap-2"
                        >
                            <Instagram size={20} />
                            Síguenos en Instagram
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 opacity-70 text-sm">
                        <MapPin size={16} />
                        <span>Cochabamba, Bolivia</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
