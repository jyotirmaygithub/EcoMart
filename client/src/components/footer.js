import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content */}
                <div className="flex flex-wrap justify-center gap-y-8 md:justify-between">
                    {/* Column 1 */}
                    <div className="w-full md:w-auto mb-8 md:mb-0 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
                        <ul className='ml-0'>
                            <li><Link to="#" className="block hover:text-white">Careers</Link></li>
                            <li><Link to="#" className="block hover:text-white">Blog</Link></li>
                            <li><Link to="#" className="block hover:text-white">About EcoMart</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-auto mb-8 md:mb-0 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
                        <ul className='ml-0'>
                            <li><Link to="#" className="block hover:text-white">Sell products on EcoMart</Link></li>
                            <li><Link to="#" className="block hover:text-white">Sell apps on EcoMart</Link></li>
                            <li><Link to="#" className="block hover:text-white">Become an Affiliate</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-auto mb-8 md:mb-0 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-lg font-semibold mb-4">EcoMart Payment Products</h3>
                        <ul className='ml-0'>
                            <li><Link to="#" className="block hover:text-white">EcoMart Business Card</Link></li>
                            <li><Link to="#" className="block hover:text-white">Shop with Points</Link></li>
                            <li><Link to="#" className="block hover:text-white">Reload Your Balance</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="w-full md:w-auto mb-8 md:mb-0 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
                        <ul className='ml-0'>
                            <li><Link to="#" className="block hover:text-white">EcoMart and COVID-19</Link></li>
                            <li><Link to="#" className="block hover:text-white">Your Account</Link></li>
                            <li><Link to="#" className="block hover:text-white">Your Orders</Link></li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center mt-8">
                    <Facebook className="text-gray-300 hover:text-white cursor-pointer mx-3" />
                    <Twitter className="text-gray-300 hover:text-white cursor-pointer mx-3" />
                    <Instagram className="text-gray-300 hover:text-white cursor-pointer mx-3" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
