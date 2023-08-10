import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContextHook } from "../hooks/context/productContext";
import styled from "styled-components";
import PageNavigation from "../components/page-navigation/PageNavigation";
import ProductImage from "../components/products/single-product/ProductImage";
import PriceFormat from "../components/helper-components/PriceFormat";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Stars from "../components/products/single-product/Stars";
import AddToCart from "../components/products/single-product/AddToCart";

const API = import.meta.env.VITE_PRODUCTS_API;

const SingleProduct = () => {
  // discructure from useProductsContextHook hook
  const { isSingleLoading, singleProductDetails, getSingleProduct } =
    useProductsContextHook();

  const { id } = useParams();

  // destructure single product data from SingleProducts
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProductDetails;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isSingleLoading) {
    return (
      <center className="page_loading container">
        <h3>Loading...</h3>
      </center>
    );
  }

  return (
    <SingleProductStyle>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* Product Image */}
          <div className="product-images">
            <ProductImage images={image} />
          </div>
          {/* Product Data */}
          <div className="product-data">
            <h2>{name}</h2>
            <p>
              Category: <span>{category}</span>
            </p>
            {/* Rating section */}
            <Stars stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP:
              <del>
                <PriceFormat price={price} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <PriceFormat price={price - 20 / 100} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>7 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Tricky Delivered</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Availability:
                <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                ID: <span>{alias}</span>
              </p>
              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProductDetails} />}
          </div>
        </div>
      </div>
    </SingleProductStyle>
  );
};

const SingleProductStyle = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 100%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
