import React from "react";

const Nav = () => {
    return (
        <>
            <header className="bg-gradient-to-r from-gradientMain to-gradientMainR">
                <nav className="h-24 flex justify-evenly items-center">
                    <h1 className="font-black text-white text-lg">NFTMarketPlace</h1>

                    <ul className=" gap-5 text-white hidden lg:flex">
                        <li>Home</li>
                        <li>Discover</li>
                        <li>Marketplace</li>
                        <li>Creators</li>
                        <li>Community</li>
                    </ul>

                    <button className="bg-button h-14 w-48 rounded-full text-white font-semibold">Connect Wallet</button>
                </nav>
            </header>
        </>
    )
}

export default Nav;