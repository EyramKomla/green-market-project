import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2940&auto=format&fit=crop",
      title: "Fresh Fruits",
      description: "Get fresh fruits and vegetables delivered to your doorstep"
    },
    {
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2940&auto=format&fit=crop",
      title: "Organic Vegetables",
      description: "100% organic vegetables from trusted farmers"
    },
    {
      image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=2940&auto=format&fit=crop",
      title: "Local Products",
      description: "Support local farmers and get the freshest produce"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    className: "relative",
    dotsClass: "slick-dots absolute bottom-4",
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <div 
              className="w-full h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/30">
                <div className="container mx-auto h-full flex items-center">
                  <div className="max-w-lg text-white p-6">
                    <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                    <p className="text-lg mb-6">{item.description}</p>
                    <Link 
                      to="/shop" 
                      className="inline-block bg-[#468847] text-white px-6 py-3 rounded-md hover:bg-[#3a7139] transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}