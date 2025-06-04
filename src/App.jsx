import './App.css';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlider';
import CategorySlider from './components/CategorySlider';
import TopProductsFlashSale from './components/TopProducts';
function App() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <CategorySlider/>
      <TopProductsFlashSale/>
    </>
  )
}

export default App
