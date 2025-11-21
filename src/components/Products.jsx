import { motion } from 'framer-motion';
import productImg from '../assets/product_treats.png';

const products = [
    {
        id: 1,
        name: "Galletas de Hígado",
        price: "25 Bs",
        desc: "Ricas en hierro y proteína. Ideales para entrenamiento.",
        image: productImg
    },
    {
        id: 2,
        name: "Premios de Pollo",
        price: "25 Bs",
        desc: "Bajos en grasa, alto sabor. Perfectos para estómagos sensibles.",
        image: productImg
    },
    {
        id: 3,
        name: "Mix Natural",
        price: "30 Bs",
        desc: "Una combinación de nuestros mejores sabores para tu peludo.",
        image: productImg
    }
];

const Products = () => {
    return (
        <section id="products" className="section bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[var(--color-clay)] mb-4">Nuestros Premios</h2>
                    <p className="text-lg text-gray-600">Del horno a su patita.</p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group overflow-hidden rounded-2xl bg-[var(--color-bone)] shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-[var(--color-charcoal)]">{product.name}</h3>
                                    <span className="text-[var(--color-clay)] font-bold">{product.price}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{product.desc}</p>
                                <button className="w-full btn btn-primary py-2 text-sm">
                                    Añadir al Pedido
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
