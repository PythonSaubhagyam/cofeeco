import React, { useEffect } from "react";
import {
  fetchUpperSectionUpper,
  fetchUpperSectionLower,
  fetchLowerSection,
  fetchUpperSectionbanner,
} from "../../src/Redux/Features/sectionsSlice";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Ensure correct import
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  const dispatch = useDispatch();
  const {
    aboutSection,
    certificateSection,
    licencesSection,
    nonGMOSection,
    awardsSection,
    servicesSection,
    availableSection,
    banners,
    MustTry,
    BestSeller,
    newArrival,
    loading,
    error,
  } = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(fetchUpperSectionUpper());
    //dispatch(fetchStatisticsSection());
    dispatch(fetchUpperSectionLower());
    dispatch(fetchLowerSection());
    dispatch(fetchUpperSectionbanner());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading) return <Spinner size="xl" color="blue.500" />;
  if (error) return <Alert status="error">{error}</Alert>;

  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners?.length > 0 && banners} />
        )}
      </Container>
      {aboutSection?.length > 0 &&
        aboutSection[0]?.is_visible_on_website === true && (
          <Container maxW="container.xl" mb={8} px={0}>
            <Text
              fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
              fontWeight={500}
              bgColor="bg.500"
              textAlign={{ base: "center", md: "start" }}
              px={{ base: 2, md: 8 }}
              py={4}
            >
              {aboutSection[0]?.label}
            </Text>
            <Text
              color="text.300"
              align={{ base: "justify", md: "center " }}
              px={{ base: 15, lg: 20 }}
              fontSize={{ base: "sm", lg: "lg" }}
              whiteSpace="pre-line"
              mt={4}
            >
              {aboutSection[0]?.description}
              <br />
              <br />
            </Text>
            <Button
              fontWeight={700}
              color="brand.500"
              as={RouterLink}
              to="/about-us"
              variant="outline"
              borderRadius="10px"
              borderColor="brand.500"
              _hover={{ bgColor: "brand.500", color: "white" }}
              mx={{ lg: "45%", base: "33%", md: "42%" }}
            >
              Read more
            </Button>
          </Container>
        )}
      {certificateSection?.length > 0 &&
        certificateSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} maxW={"container.xl"} centerContent>
            <LazyLoadImage
              src={certificateSection[0]?.image}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s",
                width: "100%",
              }}
            />
          </Container>
        )}

      {newArrival && newArrival?.length > 0 && (
        <ProductListSectionHome
          title="Try Our New Products"
          loading={loading}
          products={newArrival}
          type={isMobile && "carousal"}
        />
      )}

      {MustTry && MustTry?.length > 0 && (
        <ProductListSectionHome
          title="Must Try: Co Fee Co Products"
          loading={loading}
          products={MustTry}
          type={isMobile && "carousal"}
        />
      )}

      {BestSeller && BestSeller?.length > 0 && (
        <ProductListSectionHome
          title="All Time Best Sellers"
          loading={loading}
          products={BestSeller}
          type={isMobile && "carousal"}
        />
      )}

      {awardsSection?.length > 0 && awardsSection[0]?.is_visible_on_website && (
        <Container maxW="container.xl" py={6}>
          <Heading textAlign="center" mb={4}>
            {awardsSection[0]?.label}
          </Heading>
          <Text my={5} textAlign={"center"} color="text.300">
            We are committed to quality and each of our facilities is
            independently certified by an industry-accredited agency.
          </Text>
          <Flex
            justifyContent="space-evenly"
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={12}
            pt={1}
            pb={6}
          >
            <LazyLoadImage
              src={
                awardsSection[0]?.images?.length > 0 &&
                awardsSection[0]?.images[0]?.image
              }
              alt="global-certificate"
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
            <LazyLoadImage
              src={
                awardsSection[0]?.images?.length > 0 &&
                awardsSection[0]?.images[1]?.image
              }
              alt="ciolook-certificate"
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Flex>
        </Container>
      )}
      {licencesSection?.length > 0 &&
        licencesSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={0} pb={6}>
            <Box
              w="100%"
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="brand.500"
                fontSize={{ md: 33, base: 22 }}
                mx="auto"
                align={"center"}
                my={5}
                pb={"10px"}
              >
                {licencesSection[0]?.label}
              </Heading>
            </Box>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={5}
              my={10}
              px={{ lg: "20%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {licencesSection[0]?.images?.length > 0 &&
                licencesSection[0]?.images?.map((data) => (
                  <GridItem mx={"auto"}>
                    <Image src={data.image} boxSize={{ base: 130, lg: 190 }} />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {nonGMOSection?.length > 0 && nonGMOSection[0]?.is_visible_on_website && (
        <Container maxW="container.xl" py={8} centerContent>
          <Image
            src={nonGMOSection[0]?.image}
            alt="Non-GMO Section"
            boxSize={{ base: "100%", md: "70%" }}
            objectFit="contain"
          />
        </Container>
      )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {servicesSection?.length > 0 && servicesSection[0].label}
            </Heading>

            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={
                  servicesSection?.length > 0 &&
                  servicesSection[0]?.images[0].image
                }
                w={{ base: "100%", md: "100%" }}
                alt=""
                py={4}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Box>
          </Container>
        )}
      {availableSection?.length > 0 &&
        availableSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} px={0} centerContent>
            <Heading
              color="brand.500"
              fontSize={{ md: 33, base: 22 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {availableSection?.length > 0 && availableSection[0].label}
            </Heading>

            <Image
              src={
                availableSection?.length > 0 &&
                availableSection[0]?.images[0].image
              }
              w={"container.xl"}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {/* {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )} */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
