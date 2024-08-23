import { Box, Image } from "@chakra-ui/react";
import MasonryGallery, { ResponsiveMasonry } from "react-responsive-masonry";
import Hero from "../Hero.component";

const Masonry = () => {
  return (
    <ResponsiveMasonry>
      <MasonryGallery>
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
        <Image src={require("../../assets/pension.jpg")} p={1} height={"50%"} />
      </MasonryGallery>
    </ResponsiveMasonry>
  );
};

export default Masonry;
