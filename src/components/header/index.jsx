import React from "react";

const Nav = () => {
    return (
        <>
            <header className="bg-gradient-to-r from-gradientMain to-gradientMainR">
                <nav className="h-24 flex justify-evenly items-center backdrop-blur-2xl">
                    <h1 className="font-black text-white text-lg">NFTMarketPlace</h1>

                    <ul className=" gap-5 text-white hidden lg:flex">
                        <li> <a href="#"> Home</a> </li>
                        <li> <a href="#"> Discover</a> </li>
                        <li> <a href="#"> Marketplace</a> </li>
                        <li> <a href="#"> Creators</a> </li>
                        <li> <a href="#"> Community</a> </li>
                    </ul>

                    <button className="bg-button sm:h-14 sm:w-48 h-14 w-44 rounded-full text-white font-semibold">Connect Wallet</button>
                </nav>
            </header>
        </>
    )
}

export default Nav;