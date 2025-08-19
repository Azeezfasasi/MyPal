import React from 'react';
import { Star, MoreHorizontal, ThumbsUp, Lightbulb, MessageSquare } from 'lucide-react';
import tripadvisor from '../assets/images/tripadvisor.svg';
import googlemaps from '../assets/images/googlemaps.svg';
import reviewrating from '../assets/images/reviewrating.svg';

const reviewsData = [
    {
        author: 'Abel Shola',
        title: 'Business Owner',
        date: 'Dec 1, 2025',
        rating: 4,
        reviewText: 'Our passion for driver construction stems from a genuine desire to foster safer communities. We understand that new drivers are challenging, but we have a team of experts.Our passion for driver construction stems from a genuine desire to foster safer communities. We understand that new drivers are challenging, but we have a team of experts.',
        useful: 6,
        useful2: 3,
        useful3: 9,
        message: 6,
        avatar: 'https://placehold.co/40x40/E5E7EB/9CA3AF?text=A'
    },
    {
        author: 'Abel Shola',
        title: 'Business Owner',
        date: 'Dec 1, 2025',
        rating: 4,
        reviewText: 'Our passion for driver construction stems from a genuine desire to foster safer communities. We understand that new drivers are challenging,',
        useful: 6,
        useful2: 3,
        useful3: 9,
        message: 6,
        avatar: 'https://placehold.co/40x40/9CA3AF/E5E7EB?text=A'
    }
];

// Helper component for the progress bars in the rating breakdown
const RatingBar = ({ stars, percentage }) => {
    return (
        <div className="flex items-center space-x-2">
            <span className="flex flex-row text-sm w-[60px] text-gray-500">{stars} stars</span>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-orange-600 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

// Helper component for the individual review card
const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full" />
                    <div>
                        <h4 className="font-semibold text-gray-800">{review.author}</h4>
                        <p className="text-xs text-gray-500">{review.title}</p>
                    </div>
                </div>
                <button>
                    <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <div className="flex space-x-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                </div>
                <span>{review.date}</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">{review.reviewText}</p>

            <div className="flex items-center space-x-4 text-gray-500 text-xs">
                <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-3 h-3 text-blue-500" />
                    <span>Usefull {review.useful}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-3 h-3 text-blue-500" />
                    <span>Usefull {review.useful2}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Lightbulb className="w-3 h-3 text-blue-500" />
                    <span>Usefull {review.useful3}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <MessageSquare className="w-3 h-3 text-blue-500" />
                    <span>{review.message}</span>
                </div>
            </div>
        </div>
    );
};

export default function ServicesReview() {
    return (
        <div className="bg-gray-50 rounded-[10px] border border-solid border-gray-300 font-sans antialiased">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <h2 className="text-2xl font-semibold text-[#000000] mb-2">
                    Recommended Reviews <span className='font-normal'>(120)</span>
                </h2>

                {/* Overall Rating Section */}
                <div className="bg-white rounded-[10px] p-4 border border-solid border-gray-300 mb-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
                        {/* Rating Score */}
                        <div className="w-full flex flex-col md:flex-row items-start mditems-center space-x-4">

                            {/* Tripadvisor and Google Maps logo */}
                            <div className="w-[128.81px] md:w-[32%] text-left space-y-3 mb-4 md:mb-0">
                                {/* Tripadvisor placeholder logo */}
                                <div className="mt-1 bg-[#E0F7FF] p-2 flex flex-col items-start justify-start">
                                    <p className="text-[#03aeef] text-[15.188206672668457px] font-bold leading-normal">8.4/10</p>
                                    <p className="text-[#1d2a36] text-[6.513221263885498px] leading-normal font-medium">(Very Good, 8,950 Reviews)</p>
                                    <img src={tripadvisor} alt="tripadvisor" className='mt-1'/>
                                </div>
                                {/* Google Maps placeholder logo */}
                                <div className="mt-1 bg-[#E9FFEF] p-2 flex flex-col items-start justify-start">
                                    <p className="text-[#35a853] text-[15.188206672668457px] font-bold leading-normal">8.4/10</p>
                                    <p className="text-[#1d2a36] text-[6.513221263885498px] leading-normal font-medium">(Very Good, 8,950 Reviews)</p>
                                    <img src={googlemaps} alt="google maps" className='mt-1'/>
                                </div>
                            </div>

                            {/* Overall Rating Section */}
                            <div className=" text-center">
                                <h3 className="text-xl text-left font-medium text-gray-800 ">Overall Rating</h3>
                                <div className="flex flex-col space-x-1 justify-center mb-0">
                                    <div className="flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                                        <div className="flex flex-row gap-[11px] items-center justify-start shrink-0 w-[157px] relative">
                                            <div className="flex flex-row items-center relative"
                                            // style={{ aspectRatio: 1 }}
                                            >
                                                <img
                                                    className=""
                                                    src={reviewrating}
                                                    alt="review rating"
                                                />
                                                <span className="font-['-',_sans-serif] text-[24px] md:text-[32px] font-normal">4.0</span>
                                                <span className="_4-0-128-span2" />
                                                <span className="font-['-',_sans-serif] text-[24px] md:text-[32px] font-normal">(128)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-start justify-start'>
                                        <p className="mt-1 text-[32px] text-[#000] font-semibold">88%</p>
                                        <p className="text-xl font-semibold text-[#DB3A06]">Recommended</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Star Rating Breakdown */}
                        <div className="w-full md:w-[32%] flex-shrink-0">
                            <RatingBar stars={5} percentage={80} />
                            <RatingBar stars={4} percentage={60} />
                            <RatingBar stars={3} percentage={40} />
                            <RatingBar stars={2} percentage={20} />
                            <RatingBar stars={1} percentage={10} />
                        </div>
                    </div>
                </div>

                {/* Individual Reviews Section */}
                <div className="space-y-6">
                    {reviewsData.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}
