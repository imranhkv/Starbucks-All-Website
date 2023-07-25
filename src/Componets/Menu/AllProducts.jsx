import React, { useEffect, useState } from 'react';
import './AllProducts.css';
import { Link } from 'react-router-dom';
import MenuNavbar from './MenuNavbar';
import Footer from '../Footer/Footer';
import GreenArea from '../Green Area/GreenArea';
import Header from '../Header/Header';
import { LoadingOutlined } from '@ant-design/icons';


function AllProducts() {
  const [jsonData, setJsonData] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loadAll, setLoadAll] = useState(true)


  // mehsulların fetch ilə çağırılması
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Starbucks.json');
        const data = await response.json();
        setJsonData(data); setProducts(data); setLoadAll(false)
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);
  // son

  // ümumi loading
  if (loadAll) {
    return (
      <LoadingOutlined
        style={{
          fontSize: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          overflowY: "hidden"
        }}
        spin
      />
    )
  }
  // son

  // buttona basanda seçilən category gəlməsi
  const selectCategory = (category) => {
    setSelectedCategory(category);
    const result = jsonData.filter((item) => item.subcategory === category);
    setProducts(result);
  };
  // son

  // alt kategoriyaların gəlməsi sadəcə birinin gəlməsi üçün 
  const uniqueSubcategories = jsonData ? [...new Set(jsonData.map((item) => item.subcategory))] : [];
  // son

  const groupProductsByType = (products) => {
    const groupedProducts = {};
    products.forEach((product) => {
      if (groupedProducts.hasOwnProperty(product.type)) {
        groupedProducts[product.type].push(product);
      } else {
        groupedProducts[product.type] = [product];
      }
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByType(products);

  const CategoryImg = [
    'hot-coffe.jpg',
    'hot-tea.jpg',
    'hot-drinks.jpg',
    'frappicino2.jpg',
    'cold-coffe.jpg',
    'ice-tea.jpg',
    'cold-drinks.jpg'
  ]

  return (
    <div className="all-product-content-all">
      <div className="home-header">
        <Header />
        <MenuNavbar />
      </div>
      <div className="container">
        <div className="allproducts">
          <div className="category-left">
            <h4>Drinks</h4>
            {uniqueSubcategories.map((item) => (
              <div key={item} className='category-buttons'>
                <button onClick={() => selectCategory(item)}>{item}</button>
              </div>
            ))}
          </div>
          <div className="menu-right">
            <div>
              <div className="menu-right-head">
                {!selectedCategory ? <div className="menu-right-head-nonselected">
                  <h3>Menu</h3> <h5>Drinks</h5>
                  <div className="border-products"></div>
                </div>
                  :
                  <h4><Link to='/menu'>Menu</Link> / {selectedCategory}</h4>}
              </div>
              <h2>{selectedCategory}</h2>
              {
                !selectedCategory ? <div className="menu-buttons">
                  {uniqueSubcategories.map((item, index) => {
                    const catImg = CategoryImg[index % CategoryImg.length]
                    return (
                      <div key={item} className='menu-buttons-content'>
                        <button onClick={() => selectCategory(item)}>
                          <img src={require(`../img/${catImg}`)} alt="" /> <h4>{item}</h4>
                        </button>
                      </div>
                    )
                  })}
                </div>

                  :
                  <div className='products-card-all'>
                    {Object.entries(groupedProducts).map(([type, products]) => (
                      <div key={type} className='products-card-content'>
                        <div className="card-head">
                          <h3 className='type-head'>{type}</h3>
                        </div>
                        <div className="border-products"></div>
                        <div className="product-card-content">
                          {products.map((item) => (
                            <Link to={`/product/${item.id}`}>
                              <div className="product-card" key={item.id}>
                                <img src={item.img} alt="" />
                                <h4>{item.name}</h4>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="menu-footer">
        <Footer />
      </div>
      <div className="green-area">
        <GreenArea />
      </div>
    </div>
  );
}

export default AllProducts;
