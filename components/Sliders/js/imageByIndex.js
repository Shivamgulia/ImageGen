import image1 from '../images/slide-1.jpeg';
import image2 from '../images/slide-2.jpeg';
import image3 from '../images/slide-3.jpeg';
import image4 from '../images/slide-4.jpeg';
import image5 from '../images/slide-5.jpeg';
import image6 from '../images/slide-6.jpeg';
import image7 from '../images/slide-7.jpeg';
import image8 from '../images/slide-8.jpeg';
import image9 from '../images/slide-9.jpeg';
import image10 from '../images/slide-10.jpeg';

export const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
