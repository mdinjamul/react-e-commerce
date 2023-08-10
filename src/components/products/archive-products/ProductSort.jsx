import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContexHook } from "../../../hooks/context/filterContext";

const ProductSort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContexHook();

  return (
    <ProductSortStyle className="sort-section">
      {/* first column */}
      <div className="sorting-list--grid">
        <PrimaryButton
          className={grid_view ? "sort-btn active" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </PrimaryButton>
        <PrimaryButton
          className={grid_view ? "sort-btn" : "sort-btn active"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </PrimaryButton>
      </div>
      <div className="products-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onClick={sorting}
            >
              <option value="lowest">Price(Lowest)</option>
              <option value="highest">Price(Highest)</option>
              <option value="a-z">Product(A-Z)</option>
              <option value="z-a">Product(Z-A)</option>
            </select>
          </label>
        </form>
      </div>
    </ProductSortStyle>
  );
};

const ProductSortStyle = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    button.sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray};
    }
    .icon {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.white};
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black} !important;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default ProductSort;
