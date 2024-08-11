import React, { useState ,useEffect} from 'react'
import './outStory.css'
const backgroundImages =[
  "https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?t=st=1722509714~exp=1722513314~hmac=9f69faae52ca2e0bd4abfd2d9c5835a3e0aef8459cb63e3be13885bf8d48db37&w=1380",
  "https://img.freepik.com/premium-photo/3d-set-home-appliances-white-background_751108-1072.jpg?w=1380",
  "https://img.freepik.com/free-vector/vector-household-appliances-icons-set_1284-43232.jpg?t=st=1722509846~exp=1722513446~hmac=d01d735f27a235545bcac533b4aea28ca562d26ef996d36dcb0b2cdb86f9307d&w=826",
  "https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/8512383/pexels-photo-8512383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg",
  "https://images.pexels.com/photos/3228418/pexels-photo-3228418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.stockcake.com/public/a/8/6/a8619004-0d7c-4e94-a254-c194b4a2cf67_large/modern-office-space-stockcake.jpg",
  "https://images.stockcake.com/public/a/3/3/a335d7c2-5061-423a-936d-46ad2209c29e_large/modern-office-interior-stockcake.jpg",
  "https://images.stockcake.com/public/6/1/5/615f4c2c-a624-4a5f-bc39-fa6094255a1c_large/modern-office-space-stockcake.jpg",
  "https://images.stockcake.com/public/3/f/2/3f2bc0ce-b13a-4192-accf-edf634bd2d37_large/sunny-home-office-stockcake.jpg",
  "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]
const quotes = [
    'About',
    'Innovation distinguishes between a leader and a follower."',
    '"The best way to predict the future is to invent it.',
    '"The real problem is not whether machines think but whether men do.'
  ];
function OurStory() {
    const[currentIndex,setCurrentIndex]=useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="our-story-wrapper">
        <div className="our-story-container" style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
          <div className="our-story-content">
            <em>{quotes[currentIndex]}</em>
          </div>
        </div>
        <div className="our-story-text">
        Welcome to ElectroGoods, your ultimate destination for the latest and greatest in electronics. Whether you're a tech enthusiast, a savvy shopper, or simply looking for the best deals on the market, we've got you covered.<br></br>
At ElectroGoods, we believe in empowering our customers with cutting-edge technology and exceptional customer service. Our extensive range of products includes everything from smartphones and laptops to home appliances and smart gadgets, all sourced from top brands and manufacturers you trust.

        </div>
      </div>
    </>
  );
}


export default OurStory
