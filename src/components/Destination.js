import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours gives you the opportunity to explore the world</p>
      <DestinationData
        cName="first-des"
        heading="Travel Across the world"
        txt="In this example, the src attribute is set to images/myimage.jpg, which is a relative path to the image from the location of the HTML file. Make sure to adjust the path according to your project structure. If the image is in the same folder as your HTML file, you can simply use the image filename without any additional path. If you're identifying color for pretty much anything digital, you're working in an RGB colorspace. If the project you're working on requires percentage representation, brown is made of 59% red, 29% green, and 0% blue. Our easy and intuitive tools allow you to start creating spectacular designs immediately, no matter your skill level."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        cName="first-des-reverse"
        heading="Fly around the country"
        txt="Mike and Morris lived in the same village. While Morris owned the largest jewelry shop in the village, Mike was a poor farmer. Both had large families with many sons, daughters-in-law and grandchildren. One fine day, Mike, tired of not being able to feed his family, decided to leave the village and move to the city where he was certain to earn enough to feed everyone. Along with his family, he left the village for the city. At night, they stopped under a large tree. There was a stream running nearby where they could freshen up themselves. He told his sons to clear the area below the tree, he told his wife to fetch water and he instructed his daughters-in-law to make up the fire and started cutting wood from the tree himself. They didn’t know that in the branches of the tree, there was a thief hiding. He watched as Mike’s family worked together and also noticed that they had nothing to cook. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
