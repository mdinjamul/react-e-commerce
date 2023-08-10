import React from "react";
import styled from "styled-components";
import { useFilterContexHook } from "../../../hooks/context/filterContext";
import { HiCheck } from "react-icons/hi";
import PriceFormat from "../../helper-components/PriceFormat";
import { PrimaryButton } from "../../Buttons/PrimaryButton";

const FilterSection = () => {
  const {
    filters: { text, colors, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContexHook();

  // category filter
  const getCategoryData = (data, attr) => {
    let newVal =
      data &&
      data.map((currentElement) => {
        return currentElement[attr];
      });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    // get only unique data
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryFilterData = getCategoryData(all_products, "category");
  // company Filter
  const companyFilterData = getCategoryData(all_products, "company");
  // colors Filter
  const colorsFilterData = getCategoryData(all_products, "colors");

  // console.log(colorsFilterData);

  return (
    <FilterSectionStyle>
      <div className="filter-search">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search Products"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryFilterData &&
            categoryFilterData.map((currentElement, index) => {
              return (
                <button
                  key={index}
                  name="category"
                  type="button"
                  onClick={updateFilterValue}
                  value={currentElement}
                >
                  {currentElement}
                </button>
              );
            })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyFilterData &&
              companyFilterData.map((currentElement, index) => {
                return (
                  <option key={index} name="company" value={currentElement}>
                    {currentElement}
                  </option>
                );
              })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsFilterData &&
            colorsFilterData.map((currentColors, index) => {
              if (currentColors === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    className="color-all--style"
                    onClick={updateFilterValue}
                    value={currentColors}
                    name="colors"
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  className={
                    colors === currentColors ? "btnStyle active" : "btnStyle"
                  }
                  style={{ backgroundColor: currentColors }}
                  onClick={updateFilterValue}
                  value={currentColors}
                  name="colors"
                >
                  {colors === currentColors ? (
                    <HiCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <PriceFormat price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <PrimaryButton className="btn" onClick={clearFilters}>
          Clear Filter
        </PrimaryButton>
      </div>
    </FilterSectionStyle>
  );
};
const FilterSectionStyle = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.5rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
