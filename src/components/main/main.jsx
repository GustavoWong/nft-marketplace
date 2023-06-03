import React from "react";
import Frame from "../../imgs/Frame.png";

const Main = () => {
  return (
    <>
      <main>
        <section className="flex flex-col sm:flex-row bg-gradient-to-r from-gradientMain to-gradientMainR items-center p-4">
          <div className="">
            <h1 className="sm:text-6xl text-4xl text-white">Remove borders with NFTs share art freely.</h1>
            <p>Discover the power of NFTs for a unique digital experience.</p>

            <button>Explore</button>
            <button>Create</button>
          </div>
          <picture className="w-2/4">
            <img src={Frame} alt="img"  className=""/>
          </picture>
        </section>
      </main>
    </>
  );
};

export default Main;
