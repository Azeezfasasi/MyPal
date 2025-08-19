import React from 'react';

export default function ServiceDetailTitle() {
    return (
        <div className="bg-white py-6 md:py-12 font-sans antialiased">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-24">
                    {/* The Golden Terrace Title */}
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#4D1402] font-['DrukCyr-Medium',_sans-serif] tracking-tight text-center md:text-left">
                            THE GOLDEN TERRACE
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <p className="text-base sm:text-lg text-gray-700 text-center md:text-left max-w-lg">
                            Our passion for driver construction stems from a genuine desire to foster safer communities. We understand that new drivers are challenging, but we have a team of experts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
