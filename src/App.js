import React, { useEffect, useContext } from "react";
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
import { Store } from "./store";

function App() {
  const { state, dispatch } = useContext(Store);
  const { start } = state;

  useEffect(() => {
    async function getCustomerRequestData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const data = await axios.get(
          "https://artisanservice.herokuapp.com/api/all_records"
        );
        dispatch({
          type: "GET_CUSTOMER",
          payload: data.data.customer_request,
        });
        dispatch({ type: "GET_ARTISAN", payload: data.data.artisans });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getCustomerRequestData();
  }, []);

  useEffect(() => {
    async function getSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const { data } = await axios.get(
          "https://wema.creditclan.com/api/v3/wesabi/skilled/0"
        );
        dispatch({ type: "GET_SKILL", payload: data.data });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getSkillArtisanData();
  }, []);

  useEffect(() => {
    async function getUnSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        let startingPoint = start > -1 ? start : 0;
        const { data } = await axios.get(
          `https://wema.creditclan.com/api/v3/wesabi/unskilled/${startingPoint}`
        );
        dispatch({ type: "GET_UNSKILL", payload: data.data });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getUnSkillArtisanData();
  }, [start, dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<DashboardPage />} />

            <Route path="skill" element={<SkillPage />} />

            <Route path="unSkill" element={<UnSkillPage />} />

            <Route path="artisan" element={<ArtisanPage />} />
            <Route path="customer" element={<CustomerRequestPage />} />

            <Route path="assign/:id" element={<AssignPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
