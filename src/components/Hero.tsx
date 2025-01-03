import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import CartoonList from './CartoonList';
import CartoonEpisodes from './CartoonEpisodes';

const Hero = ({ videoUrl, setVideoUrl, setIsWatch, setSelectedCartoon, selectedCartoon }: { videoUrl: any, setVideoUrl: any, setIsWatch: any, selectedCartoon: any, setSelectedCartoon: any }) => {
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term
    return (
        <div
            className="clip-container scale-x-[1.42] scale-y-[1.41] absolute left-[29.2rem] -bottom-[11.9rem]"
            style={{
                position: 'absolute',
                height: '100%',
                clipPath: 'path("M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z")',
                WebkitClipPath: 'path("M6.84 5.52s64.76-5.56 83-4.88c1.63.06 3.26.09 4.89.07 13.86-.18 71-.75 89.13 1.33l46.52 3.24s6.46-.86 6.68 13.16c0 0 6 80.06 3.52 99.51l-4.2 44.7a18.25 18.25 0 0 0-.57 4.3c-.15 2.37-1.82 7.27-12.83 7.65-2 .07-10.52.63-12.46.76-17.08 1.12-97.94 6.36-152.22 2.52L9.61 173.14s-6.2 1.52-7.06-30.76c0-.69 0-1.39-.05-2.09-.12-2.57 0-4.73-.15-7.13-1.11-13.93-2.87-58.23-1-89.48l1.42-24.94c.13-2.19.23-4.38.17-6.57-.1-1.81.58-5.97 3.9-6.65Z")',
            }}
        >
            <div className="hero-content w-[14.5rem] h-[15.4rem] flex justify-center text-black relative overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
                <Navbar
                    setSelectedCartoon={setSelectedCartoon}
                    selectedCartoon={selectedCartoon}
                    videoUrl={videoUrl}
                    setVideoUrl={setVideoUrl}
                    setIsWatch={setIsWatch}
                    searchTerm={searchTerm} // Pass searchTerm
                    setSearchTerm={setSearchTerm} // Pass setter for searchTerm
                />
                {!selectedCartoon && (
                    <CartoonList
                        setSelectedCartoon={setSelectedCartoon}
                        selectedCartoon={selectedCartoon}
                        searchTerm={searchTerm} // Pass searchTerm
                    />
                )}
                {selectedCartoon && (
                    <CartoonEpisodes
                        setSelectedCartoon={setSelectedCartoon}
                        selectedCartoon={selectedCartoon}
                        videoUrl={videoUrl}
                        setVideoUrl={setVideoUrl}
                        setIsWatch={setIsWatch}
                    />
                )}
            </div>
        </div>
    );
};

export default Hero;
