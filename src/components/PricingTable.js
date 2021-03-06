import React from 'react';

const PricingTable = () => {
    return(
        <body class="container bg-white flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
        <div class="w-full px-0 lg:px-4">
        <h2 class="px-12 text-base font-bold text-center md:text-2xl text-blue-700">
            Choose your plan
        </h2>
        <p class="py-1 text-sm text-center text-blue-700 mb-10">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div class="flex flex-wrap items-center justify-center py-4 pt-0">
            
            <div class="w-full p-4 md:w-1/2 lg:w-1/4">
            <label class="flex flex-col rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl">
                <div class="w-full px-4 py-8 rounded-t-lg bg-blue-500">
                <h3 class="mx-auto text-base font-semibold text-center underline text-white group-hover:text-white">
                    Premium
                </h3>
                <p class="text-5xl font-bold text-center text-white">
                    $21.<span class="text-3xl">95</span>
                </p>
                <p class="text-xs text-center uppercase text-white">
                    monthly
                </p>
                </div>
                <div
                class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-700"
                >
                <p class="text-xl text-white">
                    3 months
                </p>
                <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 15%
                </button>
                </div>
            </label>
            </div>

            <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
            <label class="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl">
                <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                <h3 class="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                    Elite
                </h3>
                <p class="text-5xl font-bold text-center group-hover:text-white text-blue-500">
                    $19.<span class="text-3xl">45</span>
                </p>
                <p class="text-xs text-center uppercase group-hover:text-white text-blue-500">
                    monthly
                </p>
                </div>
                <div
                class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500"
                >
                <p class="text-xl text-white">
                    6 months
                </p>
                <button class="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 25%
                </button>
                </div>
            </label>
            </div>

        </div>
        </div>
    </body>
    )
};

export default PricingTable;





