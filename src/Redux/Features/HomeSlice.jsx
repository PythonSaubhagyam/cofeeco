import { createSlice } from '@reduxjs/toolkit';
import client from "../setup/axiosClient";

const initialState = {
  banners: [],
  loading: true,
  blogs: [],
  newArrival: [],
  mustTry: [],
  bestSeller: [],
  aboutSection: [],
  certificateSection: [],
  licencesSection: [],
  nonGMOSection: [],
  statisticsSection: [],
  awardsSection: [],
  servicesSection: [],
  availableSection: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setBanners(state, action) {
      state.banners = action.payload;
    },
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    setNewArrival(state, action) {
      state.newArrival = action.payload;
    },
    setMustTry(state, action) {
      state.mustTry = action.payload;
    },
    setBestSeller(state, action) {
      state.bestSeller = action.payload;
    },
    setAboutSection(state, action) {
      state.aboutSection = action.payload;
    },
    setCertificateSection(state, action) {
      state.certificateSection = action.payload;
    },
    setLicencesSection(state, action) {
      state.licencesSection = action.payload;
    },
    setNonGMOSection(state, action) {
      state.nonGMOSection = action.payload;
    },
    setStatisticsSection(state, action) {
      state.statisticsSection = action.payload;
    },
    setAwardsSection(state, action) {
      state.awardsSection = action.payload;
    },
    setServicesSection(state, action) {
      state.servicesSection = action.payload;
    },
    setAvailableSection(state, action) {
      state.availableSection = action.payload;
    },
  },
});

export const {
  setLoading,
  setBanners,
  setBlogs,
  setNewArrival,
  setMustTry,
  setBestSeller,
  setAboutSection,
  setCertificateSection,
  setLicencesSection,
  setNonGMOSection,
  setStatisticsSection,
  setAwardsSection,
  setServicesSection,
  setAvailableSection,
} = homeSlice.actions;

export const fetchHomePageData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const [banners, blogs, newArrival, mustTry, bestSeller, statisticsSection, lowerSection, upperSection] = await Promise.all([
      client.get('/ecommerce/banners/?sequence=Upper'),
      client.get('/home/blogs/'),
      client.get('newarrival/list'),
      client.get('musttry/list'),
      client.get('bestofalltime/list'),
      client.get('/statistics-section/'),
      client.get('/lower-section/'),
      client.get('/cofeeco-section/?type=upper'),
    ]);

    if (banners.data.status) dispatch(setBanners(banners.data.banner));
    if (blogs.data.status) dispatch(setBlogs(blogs.data.blogs));
    if (newArrival) dispatch(setNewArrival(newArrival.data.data));
    if (mustTry) dispatch(setMustTry(mustTry.data.data));
    if (bestSeller) dispatch(setBestSeller(bestSeller.data.data));
    if (statisticsSection.data.status) dispatch(setStatisticsSection(statisticsSection.data.data));
    if (lowerSection.data.status) {
      const services = lowerSection.data.data.filter(section => section.id === 2);
      const available = lowerSection.data.data.filter(section => section.id === 3);
      const awards = lowerSection.data.data.filter(section => section.id === 1);
      dispatch(setServicesSection(services));
      dispatch(setAvailableSection(available));
      dispatch(setAwardsSection(awards));
    }
    if (upperSection.data.status) {
      const about = upperSection.data.data.filter(section => section.id === 1);
      const certificate = upperSection.data.data.filter(section => section.id === 2);
      dispatch(setAboutSection(about));
      dispatch(setCertificateSection(certificate));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setLoading(false));
  }
};

export default homeSlice.reducer;
