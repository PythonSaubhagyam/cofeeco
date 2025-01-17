import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../setup/axiosClient";

export const initializeAppData = createAsyncThunk("app/initializeData", async (_, { rejectWithValue }) => {
    try {
        const [
            bannersResponse, 
            upperSectionResponse, 
            tryOurNewProductResponse,
            mustTryResponse, 
            allTimeBestSellerResponse, 
            lowerSectionResponse1,
            blogsResponse, 
            statisticsResponse, 
            lowerSectionResponse2
        ] = await Promise.all([
            client.get("/ecommerce/banners/?sequence=Upper"),
            client.get("/cofeeco-section/?type=upper"),
            client.get("/newarrival/list"),
            client.get("/musttry/list"),
            client.get("/bestofalltime/list"),
            client.get("/cofeeco-section/?type=lower"),
            client.get("/home/blogs/"),
            client.get("/statistics-section/"),
            client.get("/lower-section/"),
        ]);

        return {
            banners: bannersResponse.data.banner || [],
            upperSection: upperSectionResponse.data.data || [],
            tryOurNewProductSection: tryOurNewProductResponse.data.data || [],
            mustTry: mustTryResponse.data.data || [],
            allTimeBestSellerSection : allTimeBestSellerResponse.data.data || [],
            lowerSection1: lowerSectionResponse1.data.data || [],
            blogs: blogsResponse.data.blogs || [],
            statistics: statisticsResponse.data.data || {},
            lowerSection2: lowerSectionResponse2.data.data || [],
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const bannerSlice = createSlice({
    name: "home",
    initialState : {
            banners: [],
            upperSection: {
                ourAboutSection: [],
                certificateSection: [],
            },
            tryOurNewProductSection: [],
            mustTrySection: [],
            allTimeBestSellerSection: [],
            lowerSection1: {
               ourLicenceSection: [],
                nonGmoSection: [],
            },
            blogs: [],
            statisticsSection: {},
            lowerSection2: {
                awardsSection: [],
                servicesSection: [],
                availableSection: [],
            },
            loader: false,
            error: null,
        },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initializeAppData.pending, (state) => {
                state.loader = true;
            })
            .addCase(initializeAppData.fulfilled, (state, action) => {
                state.loader = false;
                const { banners, upperSection, tryOurNewProductSection, mustTry, allTimeBestSellerSection, lowerSection1, blogs, statistics, lowerSection2 } = action.payload;

                state.banners = banners;

                // Organize upperSection data
                state.upperSection = {
                    ourAboutSection: upperSection.filter((section) => section.id === 1),
                    ourCertificateSection: upperSection.filter((section) => section.id === 2),
                };

                state.tryOurNewProductSection = tryOurNewProductSection;
                state.mustTry = mustTry;
                state.allTimeBestSellerSection = allTimeBestSellerSection;

                // Organize lowerSection1 data
                state.lowerSection1 = {
                    skinCareSection: lowerSection1.filter((section) => section.id === 6),
                    nonGmoSection: lowerSection1.filter((section) => section.id === 7),
                };

                state.blogs = blogs;
                state.statistics = statistics;

                // Organize lowerSection2 data
                state.lowerSection2 = {
                    awardsSection: lowerSection2.filter((section) => section.id === 1),
                    servicesSection: lowerSection2.filter((section) => section.id === 2),
                    availableSection: lowerSection2.filter((section) => section.id === 3),
                };
                state.hasFetched = true
            })
            .addCase(initializeAppData.rejected, (state, action) => {
                state.loader = false;
                state.error = action.payload;
            });
    },
});

export default bannerSlice.reducer;
