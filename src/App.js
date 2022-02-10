import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import SkillPage from "./pages/SkillPage";
import UnSkillPage from "./pages/UnSkillPage";
import ArtisanPage from "./pages/Artisanpage";
import CustomerRequestPage from "./pages/CustomerRequestPage";
import axios from "axios";
import AssignPage from "./pages/AssignPage";
// import AppContextProvider from "./api/context";

function App() {
  let [skills, setSkill] = useState([]);
  let [unSkills, setUnSkill] = useState([]);
  let [customerRequest, setCustomerRequest] = useState([]);
  let [artisans, setArtisan] = useState([]);

  //get register artisan
  useEffect(() => {
    async function getRegisteredArtisanData() {
      const data = await axios.get(
        "https://artisanservice.herokuapp.com/api/all_records"
      );
      setArtisan(data.data.artisans);
    }
    getRegisteredArtisanData();
  }, []);
  //get customer request
  useEffect(() => {
    async function getCustomerRequestData() {
      const data = await axios.get(
        "https://artisanservice.herokuapp.com/api/all_records"
      );
      setCustomerRequest(data.data.customer_request);
    }
    getCustomerRequestData();
  }, []);

  //get skillArtisan

  useEffect(() => {
    async function getSkillArtisanData() {
      const { data } = await axios.get(
        "https://wema.creditclan.com/api/v3/wesabi/skilled/0"
      );
      setSkill(data.data);
    }
    getSkillArtisanData();
  }, []);

  // get unSkillArtisan
  useEffect(() => {
    async function getUnSkillArtisanData() {
      const { data } = await axios.get(
        "https://wema.creditclan.com/api/v3/wesabi/unskilled/0"
      );
      setUnSkill(data.data);
    }
    getUnSkillArtisanData();
  }, []);

  console.log(customerRequest);
  return (
    <>
      {/* <AppContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<DashboardPage users={customerRequest} />} />
            <Route path="skill" element={<SkillPage users={skills} />} />
            <Route path="unSkill" element={<UnSkillPage users={unSkills} />} />
            <Route path="artisan" element={<ArtisanPage users={artisans} />} />
            <Route
              path="customer"
              element={<CustomerRequestPage users={customerRequest} />}
            />
            <Route path="assign/:id" element={<AssignPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </AppContextProvider> */}
    </>
  );
}
export default App;
