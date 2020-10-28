import React,{useState,useEffect,useContext} from 'react';
import ItemContext from '../../contexts/ItemContext';
import Product from '../../utils/Product';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedItems = (props) => {
    const {currentlyFeatured} = useContext(ItemContext)

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1400 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 1400, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
    <div className='featured-items'>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5 ease"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        itemClass="carousel-item"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup
          next={props.next}
          previous={props.previous}
          rest={props.rest}
      />}
      >
      {currentlyFeatured.map((item,i) => {
        return (
          <Product
          key={i}
          itemImg={item.itemImg}
          item={item}
          name={item.name}
          price={item.itemPrice}
          category={item.itemCategory}
          />
        )
      })}
    </Carousel>
        
      </div>
    )
}

export default FeaturedItems;


const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
      carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;

  return (
      <div className="carousel-button-group">
          <i className="fas fa-chevron-circle-left fa-2x" 
          onClick={() => previous()}></i>
          <i className="fas fa-chevron-circle-right fa-2x" 
          onClick={() => next()}></i>
      </div>
  );
};