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
  let [start, setStart] = useState(0);
  // let [paginate, setPaginate] = useState({
  //   page: 1,
  //   end: false,
  //   fetching: false,
  // });

  // useEffect(() => {
  //   load(paginate.page);
  //   window.addEventListener("scroll", handleWindowScroll);
  //   return ()=> {
  //   window.removeEventListener("scroll", handleWindowScroll);
  // }
  // })

  // async function load(page) {
  //     if (page === 1) this.loading = true;
  //     else this.pagination.fetching = true;
  //     const limit = 20;
  //     const start = page * limit - limit;
  //     const res = await axios.post(
  //       `https://wema.creditclan.com/api/v3/wesabi/unskilled/${start}`,

  //     );

  //     this.properties = [...this.properties, ...res.data];
  //     this.loading = false;
  //     this.pagination.fetching = false;
  //   },
  //   handleWindowScroll(e) {
  //     if (this.loading || this.pagination.fetching || this.end) return;
  //     const { clientHeight, scrollHeight, scrollTop } =
  //       e.target.scrollingElement;
  //     const scrolled = scrollTop + clientHeight > scrollHeight - 800;
  //     if (scrolled) this.load(++this.pagination.page);
  //   },

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
        `https://wema.creditclan.com/api/v3/wesabi/unskilled/${start}`
      );
      setUnSkill(data.data);
      setStart(20);
    }
    getUnSkillArtisanData();
  }, []);

  const next_function = async () => {
    const { data } = await axios.get(
      `https://wema.creditclan.com/api/v3/wesabi/unskilled/${start}`
    );
    setUnSkill(data.data);
    setStart(start + 20);
  };

  const pre_function = async () => {
    const { data } = await axios.get(
      `https://wema.creditclan.com/api/v3/wesabi/unskilled/${start - 40}`
    );
    setUnSkill(data.data);
    setStart(start - 20);
  };

  console.log(customerRequest);
  return (
    <>
      {/* <AppContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<DashboardPage users={customerRequest} />} />
            <Route path="skill" element={<SkillPage users={skills} />} />
            <Route
              path="unSkill"
              element={
                <UnSkillPage
                  users={unSkills}
                  pre_function={pre_function}
                  next_function={next_function}
                />
              }
            />
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
