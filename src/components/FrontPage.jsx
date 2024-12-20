import React from "react";
import { useNavigate } from 'react-router-dom';
import filter2 from "../images/filter2.png"
import Vegetables from "../images/Vegetables.jpg"
import butter_chicken from "../images/Butter-Chicken.jpeg"
import classic_greek_salad from "../images/Classic-Greek-Salad.jpg"
import steak from "../images/Steak.png"
import chow_mein from "../images/Chow-Mein.jpg"
import alfredo_pasta from "../images/Alfredo-Pasta.jpg"
import burrito from "../images/Burrito.jpg"


const FrontPage = () => {

    const navigate = useNavigate();

    const openRecipePage = () => {
        navigate('/recipe');
      };
    return (
        <div
            className="p-5  border border-transparent rounded w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Vegetables})` }}
        >
            {/*Name and profile icon*/}
            <div className="rounded m-4 flex items-center">
            <button className="border border-transparent shadow rounded-xl p-4 bg-gray-200"></button>
                <h1 className="text-2xl text-white p-2">Hello, Mukesh</h1>
            </div>

            {/*Search Bar and filter*/}
            <div className="m-4 flex justify-center">
                <input
                    className="border border-gray-300 rounded-full p-2 w-1/3 text-center"
                    placeholder="Search Recipe"
                />
                <button
                    className="m-3 border p-1 border-transparent rounded text-white"
                    style={{
                        backgroundImage: `url(${filter2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white", // Ensure text is visible
                        width: "45px", // Adjust size
                        height: "40px",
                    }}
                >
                </button>
            </div>

            {/*List of Cuisine*/}
            <div className="m-20 rounded flex justify-between items-center">

                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg"> All</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Indian</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Italian</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">American</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Mexican</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Chinese</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Japanese</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Pakistani</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Mediterranean</button>
                <button className="bg-[#008080] text-gray-200 border border-transparent hover:text-white hover:bg-green-500 hover:border-green-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg">Other</button>
            </div>

            {/*Top-rated dishes*/}
            <div>

                <p className="mt-10 text-center text-xl text-gray-400">Discover The Culinary Delights</p>

                <div className="flex justify-between mt-6 m-10 pt-20">

                    {/*Butter Chicken*/}
                    <button onClick={openRecipePage} className="static mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-60 h-50 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={butter_chicken}
                                alt="Butter Chicken"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Butter Chicken</span>
                            <span className="text-sm text-gray-500">Time: 30 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.5</div>
                        </div>
                    </button>

                    {/*Classic Greek Salad*/}
                    <button className="mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-64 h-60 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={classic_greek_salad}
                                alt="Classic Greek Salad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Classic Greek Salad</span>
                            <span className="text-sm text-gray-500">Time: 20 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.8</div>
                        </div>
                    </button>

                    {/*Steak*/}
                    <button className="mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-64 h-60 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={steak}
                                alt="Steak"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Steak</span>
                            <span className="text-sm text-gray-500">Time: 30 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.3</div>
                        </div>
                    </button>

                    {/*Chow Mein*/}
                    <button className="mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-64 h-60 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={chow_mein}
                                alt="Chow Mein"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Chow Mein</span>
                            <span className="text-sm text-gray-500">Time: 40 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.0</div>
                        </div>
                    </button>

                    {/*Alfredo Pasta*/}
                    <button className="mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-64 h-60 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={alfredo_pasta}
                                alt="Alfredo Pasta"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Alfredo Pasta</span>
                            <span className="text-sm text-gray-500">Time: 43 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.4</div>
                        </div>
                    </button>

                    {/*Burrito*/}
                    <button className="mr-8 p-4 border border-transparent rounded-2xl bg-gray-200 w-64 h-60 relative flex flex-col items-center justify-between shadow-lg">
                        {/* Image */}
                        <div className="absolute -top-12 w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <img
                                src={burrito}
                                alt="Burrito"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text */}
                        <div className="pt-4 mt-20 flex flex-col items-center">
                            <span className="text-lg font-semibold">Burrito</span>
                            <span className="text-sm text-gray-500">Time: 28 Mins</span>
                            <div className="text-yellow-500 text-sm font-semibold">★ 4.2</div>
                        </div>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default FrontPage;
