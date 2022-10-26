import React from "react";
import { MetaData } from "../../components";
import { Categories, Banner, DealSlider, ProductSlider } from "./components";

const Home = () => {
  return (
    <>
      <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
      <Categories />
      <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
        <Banner />
        <DealSlider title={"Discounts for You"} />
        <ProductSlider
          title={"Suggested for You"}
          tagline={"Based on Your Activity"}
        />
        <DealSlider title={"Top Brands, Best Price"} />
        <ProductSlider
          title={"You May Also Like..."}
          tagline={"Based on Your Interest"}
        />
        <DealSlider title={"Top Offers On"} />
        <ProductSlider
          title={"Don't Miss These!"}
          tagline={"Inspired by your order"}
        />
      </main>
    </>
  );
};

export default Home;
