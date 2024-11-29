import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../setup/axiosClient";


export const fetchUpperSectionUpper = createAsyncThunk(
  "sections/fetchUpperSectionUpper",
  async () => {
    const response = await client.get("/cofeeco-section/?type=upper");
    return response.data;
  }
);

export const fetchStatisticsSection = createAsyncThunk(
  "sections/fetchStatisticsSection",
  async () => {
    const response = await client.get("/statistics-section/");
    return response.data;
  }
);

export const fetchUpperSectionLower = createAsyncThunk(
  "sections/fetchUpperSectionLower",
  async () => {
    const response = await client.get("/cofeeco-section/?type=lower");
    return response.data;
  }
);

export const fetchLowerSection = createAsyncThunk(
  "sections/fetchLowerSection",
  async () => {
    const response = await client.get("/lower-section/");
    return response.data;
  }
);

export const fetchUpperSectionbanner = createAsyncThunk(
  "sections/fetchUpperSectionbanner",
  async () => {
    const response = await client.get("/ecommerce/banners/?sequence=Upper");
    return response.data;
  }
);


export const fetchnewarrival = createAsyncThunk(
  "sections/fetchnewarrival",
  async () => {
    const response = await client.get("/newarrival/list"); 
    return response.data;
  }
);


export const fetchbestofalltime = createAsyncThunk(
  "sections/fetchbestofalltime",
  async () => {
    const response = await client.get("/bestofalltime/list");
    return response.data;
  }
);

export const fetchmusttry = createAsyncThunk(
  "sections/fetchmusttry",
  async () => {
    const response = await client.get("musttry/list"); 
    return response.data;
  }
);

const sectionsSlice = createSlice({
  name: "sections",
  initialState: {
    aboutSection: [],
    certificateSection: [],
    statisticsSection: null,
    licencesSection: [],
    awardsSection: [],
    servicesSection: [],
    availableSection: [],
    banners: [],
    newArrival: [], 
    MustTry: [],
    BestSeller: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchUpperSectionUpper.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpperSectionUpper.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;
        state.aboutSection = data.filter((section) => section.id === 1);
        state.certificateSection = data.filter((section) => section.id === 2);
      })
      .addCase(fetchUpperSectionUpper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(fetchUpperSectionLower.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpperSectionLower.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;
        state.licencesSection = data.filter((section) => section.id === 3);
        state.nonGMOSection = data.filter((section) => section.id === 4);
      })
      .addCase(fetchUpperSectionLower.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(fetchLowerSection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLowerSection.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.data;
        state.awardsSection = data.filter((section) => section.id === 1);
        state.servicesSection = data.filter((section) => section.id === 2);
        state.availableSection = data.filter((section) => section.id === 3);
      })
      .addCase(fetchLowerSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(fetchUpperSectionbanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpperSectionbanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload.data;
      })
      .addCase(fetchUpperSectionbanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

     
      .addCase(fetchnewarrival.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchnewarrival.fulfilled, (state, action) => {
        state.loading = false;
        state.newArrival = action.payload.data;  
      })
      .addCase(fetchnewarrival.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(fetchbestofalltime.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchbestofalltime.fulfilled, (state, action) => {
        state.loading = false;
        state.MustTry = action.payload.data;  
      })
      .addCase(fetchbestofalltime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchmusttry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchmusttry.fulfilled, (state, action) => {
        state.loading = false;
        state.MustTry = action.payload.data;  
      })
      .addCase(fetchmusttry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default sectionsSlice.reducer;
