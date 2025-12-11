import React from 'react';
import { Leaf, Moon, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './FilterBar.css';

const FilterBar = ({ filters, onFilterChange }) => {
    return (
        <div className="filter-bar">
            <motion.button
                className={`filter-btn ${filters.vegetarien ? 'active' : ''} veg`}
                onClick={() => onFilterChange('vegetarien')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Leaf size={16} className="icon" />
                Végétarien
            </motion.button>

            <motion.button
                className={`filter-btn ${filters.halal ? 'active' : ''} halal`}
                onClick={() => onFilterChange('halal')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Moon size={16} className="icon" />
                Halal
            </motion.button>

            <div className="brand-select-wrapper">
                <select
                    className="brand-select"
                    value={filters.marque || 'Toutes'}
                    onChange={(e) => onFilterChange('marque', e.target.value)}
                >
                    <option value="Toutes">Toutes les marques</option>
                    <option value="SystemU">System U</option>
                    <option value="Carrefour">Carrefour</option>
                    <option value="Auchan">Auchan</option>
                    <option value="Monoprix">Monoprix</option>
                    <option value="Leclerc">Leclerc</option>
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
