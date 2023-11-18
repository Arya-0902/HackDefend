
import React from "react";
import Footer from "../components/RootLayout/Footer";
import logo from "../images/logo4.png";
import { Link } from "react-router-dom";
import CategoriesCard from "../components/UI/CategoriesCard";
import { useDataContext } from "../context/dataContext";
import { useFilterContext } from "../context/filterContext";
import { TYPE } from "../utils/constants";

const HomePage = () => {
  const { categories } = useDataContext();
  const { filterDispatch } = useFilterContext();

  const categoryFilterHandler = ({ categoryName }) => {
    filterDispatch({ type: TYPE.CLEAR_FILTERS });
    filterDispatch({
      type: TYPE.ADD_CATEGORY_FILTER,
      payload: categoryName,
    });
  };

  return (
    <>
      <main className="home">
        <section className="home-container">
          <div className="home-container__info">
            <div className="info-header">
              <h1 className="info-header__greeting">Welcome to HackDefend.</h1>
              <p className="info-header__title">
              One stop for all your Cybersecurity Learnings.
              </p>
              <p>
                Discover a world of digital fortification with our cybersecurity
                course website. Gain the knowledge and skills to defend against
                cyber threats, protect sensitive data, and safeguard vital
                information. From beginner-friendly fundamentals to advanced
                techniques, our comprehensive courses empower you to navigate
                the ever-evolving landscape of cybersecurity with confidence.
                Join our community of aspiring professionals, learn from
                industry experts, and embark on a transformative journey to
                become a cybersecurity guardian. Enroll today and unlock a
                future of secure possibilities.
              </p>
            </div>
            <Link to="/products">
              <button className="shop-btn">Shop Now</button>
            </Link>
          </div>
          <div className="book-img">
            <img src={logo} alt="" />
          </div>
        </section>
        {categories && (
          <section className="categories">
            <h1 className="categories__title">Explore Categories</h1>
            <div className="categories__container">
              {categories.map((item) => {
                return (
                  <Link
                    to="/products"
                    key={item.id}
                    onClick={() => categoryFilterHandler(item)}
                  >
                    <CategoriesCard category={item} />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;