
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Check, X, ExternalLink, Leaf, Info, Moon } from 'lucide-react';
import './CheeseCard.css';

const CheeseCard = ({ cheese }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="cheese-card"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="card-header">
                <span className="brand">{cheese.marque}</span>
                <h2 className="product-name">{cheese.product_name}</h2>
                <div className="info-item-header">
                    <Scale size={16} className="icon" />
                    <span>{cheese.info}</span>
                </div>
                <div className="regulated-name">{cheese.regulated_name}</div>
            </div>

            <div className="card-body">
                <div className="badges-row">
                    {cheese.vegetarien ? (
                        <span className="badge badge-success" title="Végétarien">
                            <Leaf size={12} style={{ marginRight: 4 }} /> Végétarien
                        </span>
                    ) : (
                        <span className="badge badge-danger" title="Non Végétarien">
                            <X size={12} style={{ marginRight: 4 }} /> Non Végétarien
                        </span>
                    )}
                    {cheese.halal ? (
                        <span className="badge badge-success" title="Halal">
                            <Moon size={12} style={{ marginRight: 4 }} /> Halal
                        </span>
                    ) : (
                        <span className="badge badge-danger" title="Non Halal">
                            <X size={12} style={{ marginRight: 4 }} /> Non Halal
                        </span>
                    )}
                </div>

                <div className="ingredients-section">
                    <h3>Ingrédients</h3>
                    <p className={`ingredients-text ${isExpanded ? 'expanded' : ''}`}>
                        {cheese.ingredients}
                    </p>
                    <button
                        className="expand-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Voir moins' : 'Voir plus'}
                    </button>
                </div>
            </div>

            <div className="card-footer">
                <a
                    href={cheese.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                >
                    Voir le produit <ExternalLink size={16} style={{ marginLeft: 8 }} />
                </a>
            </div>
        </motion.div>
    );
};

export default CheeseCard;
