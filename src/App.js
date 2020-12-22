import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Policies from './policies/Policies';
import SellerProfile from './sellerProfile/SellerProfile';
import SellerDetails from './sellerProfile/SellerDetails';
import OrderDetails from './sellerProfile/OrderDetails';
import SellerProfileEdit from './sellerProfileEdit/SellerProfileEdit';
import Step1 from './sellerProfileEdit/Step1';
import Step2 from './sellerProfileEdit/Step2';
import Step3 from './sellerProfileEdit/Step3';
import Step4 from './sellerProfileEdit/Step4';
import ReusableModal from './modal/ReusableModal';
import Modal from './modal/Modal';
import StartWork from './startWork/StartWork';
import WorkSample from './startWork/WorkSample';
import UploadFiles from './startWork/UploadFiles';
import { BuyerDashboard } from './buyerDashboard/BuyerDashboard';
import SliderApp from './slider/SliderApp';
import { MyOrders } from './myOrders/MyOrders';
import  ImageSlider  from './slider/ImageSlider';
import ShareBtn from './buyerDashboard/ShareBtn';
import Testing from './Testing/Testing';
import EditProfile from './sellerDashboard/desktopView/EditProfile';
import MobileEditProfile from './sellerDashboard/mobileView/MobileEditProfile';
import testing1 from './Testing/Testing1';

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/Policies" component={Policies} />
      <Route path="/SellerProfile" component={SellerProfile} />
      <Route path="/SellerDetails" component={SellerDetails} />
      <Route path="/OrderDetails" component={OrderDetails} />
      <Route path="/SellerProfileEdit" component={SellerProfileEdit} />
      <Route path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/reusablemodal" component={ReusableModal} />
      <Route path="/modal" component={Modal} />
      <Route path="/startwork" component={StartWork} />
      <Route path="/worksample" component={WorkSample} />
      <Route path="/uploadfile" component={UploadFiles} />
      <Route path="/buyerdashboard" component={BuyerDashboard} />
      <Route path="/sliderapp" component={SliderApp} />
      <Route path="/myorders" component={MyOrders} />
      <Route path="/imgslider" component={ImageSlider} />
      <Route path="/ShareBtn" component={ShareBtn} />
      <Route path="/testing" component={Testing} />

      <Route path="/editprofile" component={EditProfile}/>

      <Route path="/mobileeditprofile" component={MobileEditProfile} />
      <Route path="/testing1" component={testing1} />

    </Router>
  );
}

export default App;
