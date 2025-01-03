import { ArrowLeftFromLine } from 'lucide-react';
import React from 'react';

const Navbar = ({
    setSelectedCartoon,
    selectedCartoon,
    videoUrl,
    setVideoUrl,
    setIsWatch,
    searchTerm,
    setSearchTerm,
}: {
    setSelectedCartoon: any;
    selectedCartoon: any;
    videoUrl: any;
    setVideoUrl: any;
    setIsWatch: any;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}) => {
    const handleBack = () => {
        if (selectedCartoon && videoUrl) {
            setIsWatch(false);
            setVideoUrl('');
        }
        if (selectedCartoon && !videoUrl) {
            setSelectedCartoon(null);
        }
    };

    return (
        <div className="w-[14.5rem] top-[0rem] left-[0rem] flex pl-3 items-center text-black absolute">
            <div className="flex  items- justify-between gap-4">
                {selectedCartoon && (
                    <ArrowLeftFromLine className="cursor-pointer mt-0.5" onClick={handleBack} />
                )}
                {!selectedCartoon && <input
                    type="text"
                    placeholder="Search cartoons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-5 border border-gray-300 rounded-md"
                />}
            </div>
        </div>
    );
};

export default Navbar;
