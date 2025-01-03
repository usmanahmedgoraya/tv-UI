import React from 'react';
import cartoonList from '../JSONs/cartoonlist.json';

const CartoonList = ({
    setSelectedCartoon,
    selectedCartoon,
    searchTerm,
}: {
    setSelectedCartoon: (id: any) => void;
    selectedCartoon: any;
    searchTerm: string;
}) => {
    // Filter cartoons based on the search term
    const filteredCartoons = cartoonList.filter((cartoon) =>
        cartoon.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {!selectedCartoon && (
                <div className="flex flex-col mt-8 mb-20 w-full px-3 overflow-y-scroll">
                    {filteredCartoons.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2 w-full ">
                            {filteredCartoons.map((cartoon, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => setSelectedCartoon(cartoon.id)}
                                >
                                    <img
                                        src={cartoon.cartoonPosterThumbnail}
                                        alt="thumbnail"
                                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-lg"
                                    />
                                    <h1 className="mt-2 text-sm md:text-base font-semibold text-center text-gray-700">
                                        {cartoon.title}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            No cartoons found for <span className="font-semibold">"{searchTerm}"</span>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default CartoonList;
