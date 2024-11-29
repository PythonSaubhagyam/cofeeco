import { configureStore } from "@reduxjs/toolkit";
//import bannerReducer from "../Features/BannerSlice";
import sectionsReducer from "../Features/sectionsSlice";
import isMobileViewReducer from "../Features/isMobileViewSlice";
//import homeReducer from "../Features/HomeSlice";
//import giftVoucherReducer from "../Features/giftVoucherSlice";
export const Store = configureStore({
  reducer: {
     //home: homeReducer,
    //banners: bannerReducer,
    sections: sectionsReducer,
    //giftVoucher: giftVoucherReducer,
    isMobileView: isMobileViewReducer,
  },
});
