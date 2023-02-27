import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu_box">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;

        return (
          <div key={id}>
            <article className="menu_article" key={id}>
              <div>
                <img src={img} alt={title} className="menu_article_img" />
              </div>
              <div className="menu_article_minibox">
                <div className="flex">
                  <h4 className="menu_article_minibox_title">{title}</h4>
                  <p className="menu_article_minibox_price">${price}</p>
                </div>
                <p className="menu_article_desc">{desc}</p>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
