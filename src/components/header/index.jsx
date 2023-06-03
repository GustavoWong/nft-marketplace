import React from "react";

const Nav = () => {
    return (
        <>
            <header>
                <nav className="h-24 flex justify-evenly items-center backdrop-blur-2xl p-3">
                    <h1 className="font-black text-white text-lg">NFTMarketPlace</h1>

                    <ul className=" gap-5 text-white hidden lg:flex">
                        <li> <button> Home</button> </li>
                        <li> <button> Discover</button> </li>
                        <li> <button> Marketplace</button> </li>
                        <li> <button> Creators</button> </li>
                        <li> <button> Community</button> </li>
                    </ul>

                    <button className="bg-button sm:h-14 sm:w-48 h-14 w-44 rounded-full text-white font-semibold">Connect Wallet</button>
                </nav>
            </header>
        </>
    )
}

export default Nav;