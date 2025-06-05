import './App.css';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import CategorySlider from './components/CategorySlider';
import TopProductsFlashSale from './components/TopProducts';
import DiscountBanner from './components/DiscountBanner';
import FeaturedProducts from './components/FeaturedProducts';
function App() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <CategorySlider/>
      <TopProductsFlashSale/>
      <DiscountBanner/>
      <FeaturedProducts/>
    </>
  )
}

export default App
