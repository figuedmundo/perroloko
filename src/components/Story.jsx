import { motion } from 'framer-motion';
import { Flame, Heart, Bone } from 'lucide-react';

const Story = () => {
    const features = [
        {
            icon: <Flame size={40} className="text-[var(--color-clay)]" />,
            title: "Horno de Barro",
            desc: "Cocinamos a leña, dando un sabor ahumado único que a los perros les encanta."
        },
        {
            icon: <Bone size={40} className="text-[var(--color-sand)]" />,
            title: "100% Natural",
            desc: "Sin conservantes ni químicos. Solo ingredientes frescos y saludables."
        },
        {
            icon: <Heart size={40} className="text-[var(--color-clay-dark)]" />,
            title: "Hecho con Amor",
            desc: "Una receta familiar preparada artesanalmente en Cochabamba."
        }
    ];

    return (
        <section className="section bg-[var(--color-bone)]">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-[var(--color-clay)]">Nuestra Tradición</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-lg text-[var(--color-charcoal)]">
                        En Perro Loko, creemos que las mascotas merecen comida real.
                        Nuestras galletas se hornean lentamente en un horno de barro tradicional,
                        preservando los nutrientes y el sabor natural.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="mb-4 rounded-full bg-[var(--color-bone)] p-4">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;
