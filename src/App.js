import { menu } from './components/Data';
import Categories from './components/Categories';
import Menu from './components/Menu';
import { useState } from 'react';

//ALL CATEGORIES FUNCTIONALITY

const AllCategory = ['all', ...new Set(menu.map((item) => item.category))];
console.log(AllCategory);

function App() {
  //local data storage to usestate = menuItems
  const [MenuItems, setMenuItems] = useState(menu);
  //categories usestate
  const [categories] = useState(AllCategory);

  //creating a function to filter menu food items

  const filterItemsByCategory = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <div className="menu_titlebox">
          <h1 className="menu_title">OUR MENU</h1>
          <div className="menu_underline"></div>
        </div>
        <Categories filter={filterItemsByCategory} category={categories} />
        <Menu items={MenuItems} />
      </section>
    </main>
  );
}

export default App;
