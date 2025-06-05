import './App.css';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import CategorySlider from './components/CategorySlider';
import TopProductsFlashSale from './components/TopProducts';
import DiscountBanner from './components/DiscountBanner';
function App() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <CategorySlider/>
      <TopProductsFlashSale/>
      <DiscountBanner/>
    </>
  )
}

export default App
