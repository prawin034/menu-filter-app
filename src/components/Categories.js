import React from 'react';
const Categories = ({ filter, category }) => {
  return (
    <div className="btn_container">
      {category.map((categories, index) => {
        return (
          <button
            className="btn"
            onClick={() => {
              console.log(categories, index);

              return filter(categories);
            }}
            key={index}
          >
            {categories}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
