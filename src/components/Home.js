import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomePageProducts, addItem } from '../redux/actions';

import Carousel from 'react-elastic-carousel';
import Card from './Card';
import Badge from './Badge';
import { Item } from './CarouselItems';

import '../App.css';

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { list } = useSelector((state) => state.listing);

  useEffect(() => {
    dispatch(getHomePageProducts());
  }, [dispatch]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        focusOnSelect={true}>
        {products?.map((item) => (
          <Item key={item.title} onClick={() => dispatch(addItem(item))}>
            <img src="milk.jpeg" alt="milk" width="100" />
            {item.title}
          </Item>
        ))}
      </Carousel>
      <Badge list={list} products={products} />
      {list.map((item) => (
        <div key={item.title}>
          <div className="category-title">{item.title}</div>
          <div className="card-container">
            {item.data.map((item) => (
              <Card item={item} key={item.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
