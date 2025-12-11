import { useState, useMemo } from 'react'
import CheeseList from './components/CheeseList'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import cheesesData from './cheeses.json'
import './index.css'

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState({
        vegetarien: false,
        halal: false,
        marque: 'Toutes'
    })

    const toggleFilter = (filterKey, value) => {
        setFilters(prev => {
            if (filterKey === 'marque') {
                return { ...prev, marque: value }
            }
            return {
                ...prev,
                [filterKey]: !prev[filterKey]
            }
        })
    }

    const filteredCheeses = useMemo(() => {
        let result = cheesesData;

        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(cheese =>
                cheese.product_name.toLowerCase().includes(lowerTerm) ||
                cheese.marque.toLowerCase().includes(lowerTerm) ||
                (cheese.regulated_name && cheese.regulated_name.toLowerCase().includes(lowerTerm))
            );
        }

        if (filters.vegetarien) {
            result = result.filter(cheese => cheese.vegetarien);
        }
        if (filters.halal) {
            result = result.filter(cheese => cheese.halal);
        }

        if (filters.marque && filters.marque !== 'Toutes') {
            const selectedBrand = filters.marque.toLowerCase().replace(/\s+/g, '');
            result = result.filter(cheese => {
                const cheeseBrand = cheese.marque.toLowerCase().replace(/\s+/g, '');
                // Handle specific variations if needed, or broad match
                if (filters.marque === 'Leclerc') return cheeseBrand.includes('leclerc') || cheeseBrand.includes('marquerepère') || cheese.marque.toLowerCase().includes('leclerc');
                // Removed loose 'u' match which was matching 'Auchan'
                if (filters.marque === 'SystemU') return cheeseBrand.includes('systemu') || cheeseBrand === 'u';

                return cheeseBrand.includes(selectedBrand);
            });
        }

        return result;
    }, [searchTerm, filters]);

    return (
        <div className="app">
            <header className="app-header">
                <div className="container">
                    <h1>Fromagio</h1>
                    <p className="subtitle">L'excellence fromagère sélectionnée pour vous</p>

                    <div className="header-controls">
                        <div className="count-display">
                            <span className="count-number">{filteredCheeses.length}</span>
                            <span className="count-label">Fromages</span>
                        </div>
                        <div className="search-filter-wrapper" style={{ width: '100%', maxWidth: '600px' }}>
                            <SearchBar onSearch={setSearchTerm} />
                            <FilterBar filters={filters} onFilterChange={toggleFilter} />
                        </div>
                    </div>
                </div>
            </header>
            <main className="container">
                <CheeseList cheeses={filteredCheeses} />
            </main>
        </div>
    )
}

export default App
