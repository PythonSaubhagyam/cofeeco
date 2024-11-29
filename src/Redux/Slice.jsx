import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  banners: [],
  loading: true,
  blogs: [],
  newArrival: [],
  mustTry: [],
  bestSeller: [],
  sections: [],
  aboutSection: [],
  certificateSection: [],
  licencesSection: [],
  nonGMOSection: [],
  statisticsSection: [],
  awardsSection: [],
  servicesSection: [],
  availableSection: [],
  isLoginModalOpen: false,
  showPopup: sessionStorage.getItem("hasShownPopup"),
};

const homeSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    setNewArrival: (state, action) => {
      state.newArrival = action.payload;
    },
    setMustTry: (state, action) => {
      state.mustTry = action.payload;
    },
    setBestSeller: (state, action) => {
      state.bestSeller = action.payload;
    },
    setSections: (state, action) => {
      state.sections = action.payload;
    },
    setAboutSection: (state, action) => {
      state.aboutSection = action.payload;
    },
    setCertificateSection: (state, action) => {
      state.certificateSection = action.payload;
    },
    setLicencesSection: (state, action) => {
      state.licencesSection = action.payload;
    },
    setNonGMOSection: (state, action) => {
      state.nonGMOSection = action.payload;
    },
    setStatisticsSection: (state, action) => {
      state.statisticsSection = action.payload;
    },
    setAwardsSection: (state, action) => {
      state.awardsSection = action.payload;
    },
    setServicesSection: (state, action) => {
      state.servicesSection = action.payload;
    },
    setAvailableSection: (state, action) => {
      state.availableSection = action.payload;
    },
    setLoginModalOpen: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
  },
});

export const {
  setBanners,
  setLoading,
  setBlogs,
  setNewArrival,
  setMustTry,
  setBestSeller,
  setSections,
  setAboutSection,
  setCertificateSection,
  setLicencesSection,
  setNonGMOSection,
  setStatisticsSection,
  setAwardsSection,
  setServicesSection,
  setAvailableSection,
  setLoginModalOpen,
  setShowPopup,
} = homeSlice.actions;

export default homeSlice.reducer;
