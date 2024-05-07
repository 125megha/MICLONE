
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./component/Offers.jsx"
import Heading from "./component/Heading.jsx"
import StarProducts from "./component/StarProducts.jsx"
import HotAccessoriesMenu from './component/HotAccessoriesMenu.jsx';
import HotAccessories from "./component/HotAccessories.jsx"
import ProductReview from "./component/ProductReview"
import Video from "./component/video.jsx"
import Footer from "./component/Footer.jsx"
import Banner from "./component/Banner.jsx"
import NavOptions from"./component/NavOptions.jsx"
function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offers={data.offer}/>
      <Heading text="STAR PRODUCT"/>
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESORRIES"/>
      <HotAccessoriesMenu/>
      <Routes>
        {/* <Switch> */}
      <Route exact path="/" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
          {/* Add more routes for other categories here */}
          <Route exact path="/" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route exact path="/" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
           
          <Route exact path="/" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      
          <Route exact path="/" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
          
          <Route exact path="/" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
             
        {/* </Switch> */}
    </Routes> 
    <Heading text="PRODUCT REVIEW"/>
    <ProductReview productReviews={data.productReviews}/>
    <Heading text="VIDEOS"/>
    <Video videos={data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner banner={data.banner}/>
    <Footer footer={data.footer}/>
    </Router>
  );
}
export default App;
