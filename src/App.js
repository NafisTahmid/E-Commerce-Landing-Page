import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import productsData from "./Components/Data/ProductsData";
import Offer from "./Components/Offer/Offer";
import BenefitsProducts from "./Components/BenefitsProducts/BenefitsProducts";
import MakesDifferent from "./Components/MakesDifferent/MakesDifferent";
import LatestBlog from "./Components/LatestBlog/LatestBlog";
import LatestBlogData from "./Components/Data/LatestBlogData";
function App() {
  return (

    <main>
        <Navbar/>
        <Hero />
        <Products title="Top Products" data={productsData}/>
        <Products title="Featured Products" data={productsData}/>
        <Offer />
        <BenefitsProducts />
        <MakesDifferent />
        <LatestBlog title="Latest Blogs" data={LatestBlogData}/>
    </main>

  );
}

export default App;
