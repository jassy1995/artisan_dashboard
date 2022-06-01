import React, { useEffect, useState, useContext } from "react";
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
// import AppContextProvider from "./api/context";

function App() {
  // let [skills, setSkill] = useState([]);
  // let [unSkills, setUnSkill] = useState([]);
  // let [customerRequest, setCustomerRequest] = useState([]);
  // let [artisans, setArtisan] = useState([]);
  // let [start, setStart] = useState(0);

  const { state, dispatch } = useContext(Store);
  const { start } = state;

  // let [devf, setDev] = useState(false);
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

  const testJSON = (text) => {
    if (
      text == null ||
      text === "" ||
      text === undefined ||
      typeof text !== "string"
    )
      return false;
    else {
      try {
        JSON.parse(text);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  };

  //get customer request and artisan request
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

      // let parse_load = data.data.customer_request.map((t) => ({
      //   ...t,
      //   artisan: testJSON(t.artisan) ? JSON.parse(t.artisan) : t.artisan,
      // }));
      // setCustomerRequest(data.data.customer_request);
      // setArtisan(data.data.artisans);
    }
    getCustomerRequestData();
  }, []);

  //get skillArtisan
  useEffect(() => {
    async function getSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const { data } = await axios.get(
          "https://wema.creditclan.com/api/v3/wesabi/skilled/0"
        );
        dispatch({ type: "GET_SKILL", payload: data.data });

        // setSkill(data.data);
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getSkillArtisanData();
  }, []);

  // get unSkillArtisan
  useEffect(() => {
    async function getUnSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        let startingPoint = start > -1 ? start : 0;
        const { data } = await axios.get(
          `https://wema.creditclan.com/api/v3/wesabi/unskilled/${startingPoint}`
        );
        dispatch({ type: "GET_UNSKILL", payload: data.data });
        // setUnSkill(data.data);
        // console.log(data);
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }

      // setStart(20);
    }
    getUnSkillArtisanData();
  }, [start, dispatch]);

  // const next_function = async () => {
  //   // setStart(start + 20);
  //   dispatch({ type: "GET_UNSKILL", payload: data.data });
  // };

  // const pre_function = async () => {
  //   setStart(start - 20);
  // };

  return (
    <>
      {/* <AppContextProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<DashboardPage />} />
            {/* <Route index element={<DashboardPage users={customerRequest} />} /> */}
            <Route path="skill" element={<SkillPage />} />
            {/* <Route path="skill" element={<SkillPage users={skills} />} /> */}
            <Route
              path="unSkill"
              element={
                <UnSkillPage
                // users={unSkills}
                // pre_function={pre_function}
                // next_function={next_function}
                />
              }
            />
            {/* <Route path="artisan" element={<ArtisanPage users={artisans} />} /> */}
            <Route path="artisan" element={<ArtisanPage />} />
            <Route path="customer" element={<CustomerRequestPage />} />
            {/* <Route
              path="customer"
              element={<CustomerRequestPage users={customerRequest} />}
            /> */}
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
