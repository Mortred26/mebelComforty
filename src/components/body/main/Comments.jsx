import React, { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function Comments() {
  const comments = [
    {
      id: 1,
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson",
      work: "Fashion Designer",
    },
    {
      id: 2,
      comment:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      name: "Esther Howard",
      work: "Fashion Designer",
    },
    {
      id: 3,
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson3",
      work: "Fashion Designer",
    },
    {
      id: 4,
      comment:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      name: "Esther Howard4",
      work: "Fashion Designer",
    },
    {
      id: 5,
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson5",
      work: "Fashion Designer",
    },
    {
      id: 6,
      comment:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      name: "Esther Howard6",
      work: "Fashion Designer",
    },
    {
      id: 7,
      comment:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“",
      name: "Kristin Watson",
      work: "Fashion Designer",
    },
    {
      id: 8,
      comment:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum. ",
      name: "Esther Howard",
      work: "Fashion Designer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 2 : prevIndex - 2
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 2 ? 0 : prevIndex + 2
    );
  };

  const visibleComments = comments.slice(currentIndex, currentIndex + 2);

  return (
    <section className="section5">
      <div className="container">
        <div className="comment-heading-flex">
          <h2 className="comment-heading">What client says about us</h2>
          <div className="comment-navigation">
            <button onClick={handlePrevClick} className="nav-button">
              <HiArrowNarrowLeft className="featured-arrow" />
            </button>
            <button onClick={handleNextClick} className="nav-button">
              <HiArrowNarrowRight className="featured-arrow" />
            </button>
          </div>
        </div>
        <div className="comment-main">
          {visibleComments.map((item) => (
            <div key={item.id} className="comment">
              <div className="comment-text-container">
                <p className="comment-text">{item.comment}</p>
              </div>
              <h3 className="comment-name">{item.name}</h3>
              <p className="comment-work">{item.work}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
