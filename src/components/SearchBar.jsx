import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            className={`search-container ${isFocused ? 'focused' : ''}`}
            animate={{
                scale: isFocused ? 1.02 : 1,
                boxShadow: isFocused ? "0 10px 25px -5px rgba(244, 196, 48, 0.3)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            <Search className="search-icon" size={20} />
            <input
                type="text"
                placeholder="Rechercher un fromage, une marque..."
                className="search-input"
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </motion.div>
    );
};

export default SearchBar;
