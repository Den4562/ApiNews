import React, { useEffect, useState } from "react";
import "../style/news.css";
import { useAPP } from "../utils/context";
import { Link } from "react-router-dom";

const News = () => {
  const { get_data, globalState } = useAPP();

  const [inputValue, setInputValue] = useState("");
  //   console.log(newsData);
  const fetchData = async () => {
    try {
      const result = await get_data(inputValue);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function onFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function handleInputchange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="container">
      <h1>Top news for you</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="searchInput"
          placeholder="What you want?"
          value={inputValue}
          onChange={handleInputchange}
        />
        <button>Знайти</button>
      </form>
      <div className="card_news">
        {globalState.articles?.map((newsItem, index) => {
          return (
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/news/${newsItem.title} `}
            >
              <div key={index} className="news-item">
                <img src={newsItem.urlToImage} alt="" className="news-image" />
                <h2 className="news-title">{newsItem.title}</h2>
                <p className="news-description">{newsItem.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
