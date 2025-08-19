import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mypallogo from '../../images/mypallogo.svg'

// Using inline SVG for the chevron-down icon
const ChevronDownIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// Inline SVG for the chevron-right icon
const ChevronRightIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);


// Updated categories data with a 'path' for each item
const categories = [
    { name: 'Restaurant', path: '/', subCategories: [
        { name: 'Chinese', path: '/' },
        { name: 'Indian', path: '/' },
        { name: 'Asian', path: '/' },
        { name: 'Greek', path: '/' },
        { name: 'Continental', path: '/' },
        { name: 'Arabian', path: '/' },
        { name: 'Mexican', path: '/' },
        { name: 'Brazilian', path: '/' },
        { name: 'Buffet Offering', path: '/' },
        { name: 'African Delicacies', path: '/' },
        { name: 'Takeout', path: '/' },
        
    ]},
    { name: 'Outdoor Activities', path: '/', subCategories: [
        { name: 'Hiking & Trekking', path: '/' },
        { name: 'Camping', path: '/' },
        { name: 'Beach & Water Sports', path: '/' },
        { name: 'Wildlife & Safari', path: '/' },
        { name: 'Cycling & Adventure', path: '/' }
    ]},
    { name: 'Accommodation', path: '/', subCategories: [
        { name: 'Shortlet Apartments', path: '/' },
        { name: 'Hotels & Lodges', path: '/' },
        { name: 'Rental Homes', path: '/' },
        { name: 'Purchase Property', path: '/' },
        { name: 'Real Estate Agencies', path: '/' }
    ]},
    { name: 'Beauty & Health', path: '/', subCategories: [
        { name: 'Hospitals & Clinics', path: '/' },
        { name: 'Pharmacies', path: '/' },
        { name: 'Beauty Salons', path: '/' },
        { name: 'Spas & Wellness', path: '/' },
        { name: 'Fitness & Gyms', path: '/' }
    ] },
    { name: 'Night Life', path: '/', subCategories: [
        { name: 'Bars & Lounges', path: '/' },
        { name: 'Clubs', path: '/' },
        { name: 'Live Music Venues', path: '/' },
        { name: 'Karaoke', path: '/' },
        { name: 'Casinos', path: '/' }
    ] },
    { name: 'Mobility', path: '/', subCategories: [
        { name: 'Car Rentals', path: '/' },
        { name: 'Ride Hailing & Taxi', path: '/' },
        { name: 'Public Transport', path: '/' },
        { name: 'Logistics & Delivery', path: '/' },
        { name: 'Bike Rentals', path: '/' }
    ] },
    { name: 'Luxury Rental', path: '/', subCategories: [
        { name: 'Luxury Cars', path: '/' },
        { name: 'Yachts', path: '/' },
        { name: 'Private Jets', path: '/' },
        { name: 'Vacation Villas', path: '/' },
        { name: 'Designer Fashion Rentals', path: '/' }
    ] },
    { name: 'Event ticketing', path: '/', subCategories: [
        { name: 'Concerts & Shows', path: '/' },
        { name: 'Sports Events', path: '/' },
        { name: 'Theater & Cinema', path: '/' },
        { name: 'Festivals & Carnivals', path: '/' },
        { name: 'Conferences & Seminars', path: '/' }
    ]},
];

export default function MainHeader() {
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const dropdownRef = useRef(null);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        // Set the active link based on the current URL path
        if (location.pathname === '/') {
            setActiveLink('Home');
        } else if (location.pathname.startsWith('/for-business')) {
            setActiveLink('For Business');
        } else {
            setActiveLink('');
        }
    }, [location.pathname]);

    // This effect handles closing the dropdown when a click occurs outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCategoryDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
        if (isCategoryDropdownOpen) {
            setActiveCategory(categories[0]);
        }
    };
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-transparent font-sans antialiased relative z-50">
            {/* Header Section */}
            <header className="bg-transparent px-2 md:px-6 py-4">
                <div className="w-[95%] mx-auto flex justify-between items-center">
                    {/* Logo and Mobile Menu Button */}
                    <div className="w-full lg:w-fit flex items-center justify-between space-x-4">
                        <Link to="/" className="flex items-center space-x-2">
                             {/* Replace with your logo component or image */}
                             <img src={mypallogo} alt="MyPal Logo" />
                        </Link>
                        
                        {/* Mobile Menu Button */}
                        <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-lg text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex justify-center items-center space-x-8 backdrop-blur-[8.7px] bg-[rgba(255,255,255,0.34)] rounded-[50px] border border-solid border-[rgba(255,255,255,0.41)] h-[72px] px-1">
                        {/* Home Link */}
                        <Link
                            to="/"
                            onClick={() => setActiveLink('Home')}
                            className={`flex items-center justify-center pt-[18.92px] pr-[25.23px] pb-[18.92px] pl-[25.23px] gap-[12.61px] text-left font-['AvenirNextRoundedStd-Medium',_sans-serif] text-[18.92px] font-medium relative transition-colors duration-300 cursor-pointer ${activeLink === 'Home' ? 'bg-white text-black rounded-[50.45px]' : 'text-white'}`}
                        >
                            Home
                        </Link>

                        {/* Category Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleCategoryDropdown}
                                className={`flex items-center justify-center space-x-2 pt-[18.92px] pr-[25.23px] pb-[18.92px] pl-[25.23px] text-left font-['AvenirNextRoundedStd-Medium',_sans-serif] text-[18.92px] font-medium relative transition-colors duration-300 cursor-pointer ${isCategoryDropdownOpen ? 'bg-white text-black rounded-[50.45px]' : 'text-white'}`}
                            >
                                <span>Category</span>
                                <ChevronDownIcon className={`w-4 h-4 transform transition-transform duration-300 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isCategoryDropdownOpen && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 p-4 w-[60rem] bg-transparent shadow-2xl rounded-3xl flex flex-row gap-4 animate-fadeIn z-50">
                                    {/* Left Column: Main Categories */}
                                    <div className="flex flex-col space-y-2 bg-white rounded-xl shadow-lg w-[225px] h-fit py-2">
                                        {categories.map((category) => (
                                            <Link
                                                to={category.path}
                                                key={category.name}
                                                onMouseEnter={() => setActiveCategory(category)}
                                                onClick={() => setIsCategoryDropdownOpen(false)}
                                                className={`flex justify-between items-center px-4 py-2 rounded-lg transition-colors duration-200 ${activeCategory.name === category.name ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                <span>{category.name}</span>
                                                {category.subCategories && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Right Column: Sub-categories */}
                                    <div className="h-fit flex-1 bg-white rounded-xl shadow-lg p-4 grid grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto">
                                        {activeCategory && activeCategory.subCategories && activeCategory.subCategories.map((sub, index) => (
                                            <Link to={sub.path} key={index} onClick={() => setIsCategoryDropdownOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* For Business Link */}
                        <Link
                            to="/"
                            onClick={() => setActiveLink('For Business')}
                            className={`flex items-center justify-start pt-[18.92px] pr-[25.23px] pb-[18.92px] pl-[25.23px] text-left font-['AvenirNextRoundedStd-Medium',_sans-serif] text-lg font-medium relative transition-colors duration-300 cursor-pointer ${activeLink === 'For Business' ? 'bg-white text-black rounded-[50.45px]' : 'text-white'}`}
                        >
                            For Business
                        </Link>
                    </nav>

                    {/* Download App Button */}
                    <button className="hidden lg:block px-6 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        Download App
                    </button>
                </div>
            </header>

            {/* Mobile Menu (outside the header to use fixed positioning) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-95 z-40 lg:hidden flex flex-col items-center justify-center space-y-8 animate-slideDown">
                    <button onClick={toggleMobileMenu} className="absolute top-4 right-6 text-white p-2">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <Link to="/" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">Home</Link>
                    
                    {/* Mobile Category Dropdown */}
                    <div className="relative w-full text-center">
                        <button
                            onClick={toggleCategoryDropdown}
                            className="text-2xl font-bold text-white hover:text-orange-400 transition-colors flex items-center justify-center w-full focus:outline-none"
                        >
                            Category <ChevronDownIcon className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isCategoryDropdownOpen && (
                            <div className="flex flex-col space-y-4 mt-4 text-center">
                                {categories.map((category) => (
                                    <div key={category.name}>
                                        {category.subCategories ? (
                                            <button
                                                onClick={() => setActiveCategory(activeCategory.name === category.name ? null : category)}
                                                className="text-xl text-gray-300 hover:text-white transition-colors"
                                            >
                                                {category.name}
                                            </button>
                                        ) : (
                                            <Link to={category.path} onClick={toggleMobileMenu} className="text-xl text-gray-300 hover:text-white transition-colors">
                                                {category.name}
                                            </Link>
                                        )}
                                        {activeCategory && activeCategory.name === category.name && category.subCategories && (
                                            <div className="flex flex-col space-y-2 mt-2">
                                                {category.subCategories.map((sub, index) => (
                                                    <Link to={sub.path} key={index} onClick={toggleMobileMenu} className="text-lg text-gray-400 hover:text-white transition-colors">{sub.name}</Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <Link to="/for-business" onClick={toggleMobileMenu} className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">For Business</Link>
                    <button onClick={toggleMobileMenu} className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                        Download App
                    </button>
                </div>
            )}
        </div>
    );
}
