import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";

import ProductListSection from "../components/ProductListSection";
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
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import ProductListSectionHome from "../components/ProductListSectionHome";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {
  initializeAppData,
} from "../redux/slices/homeapi";


export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  // const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [newArrival, setNewArrival] = useState([]);
  const [MustTry, setMustTry] = useState([]);
  const [BestSeller, setBestSeller] = useState([]);
  const [sections, setSections] = useState([]);
  const [aboutSection, setAboutSection] = useState([]);
  const [licencesSection, setLicencesSection] = useState([]);

  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );
  const [countUp, setCountUp] = useState()
  // const [cocoaPower, setCocoaPower] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    banners,
    upperSection,
    tryOurNewProductSection,
    mustTry,
    loader,
    allTimeBestSellerSection,
    lowerSection1,
    blogs,
    statistics,
    lowerSection2,
    hasFetched,
  } = useSelector((state) => state.home);

  const {
    ourAboutSection,
    certificateSection,
  } = upperSection;

  const {
    ourLicenceSection,
    nonGmoSection,
  } = lowerSection1;
  const {
    awardsSection,
    servicesSection,
    availableSection,
  } = lowerSection2;
  

  useEffect(() => {
    CheckOrSetUDID();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!hasFetched) {
      dispatch(initializeAppData());
    }
  }, [dispatch, hasFetched]);

  

 
  return (
    <>
    <Helmet>
        <title>CO FEE CO - Home</title> {/* Set default title */}
        <meta
          name="description"
          content="Co Fee Co is committed to bringing you the very best and most 
          refreshing coffee and herbs with minimal impact to the environment."
        />
        {/* You can add other meta tags for SEO */}
      </Helmet> 
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loader === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners?.length > 0 && banners} />
        )}
      </Container>

      {ourAboutSection?.length > 0 &&
        ourAboutSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={8} px={0}>
            <Text
              fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
              fontWeight={500}
              bgColor={"bg.500"}
              textAlign={{ base: "center", md: "start" }}
              px={{ base: 2, md: 8 }}
              py={4}
              //my={7}
            >
              {ourAboutSection[0]?.label}
            </Text>
            <Text
              color={"text.300"}
              align={{ base: "justify", md: "center " }}
              px={{ base: 15, lg: 20 }}
              fontSize={{ base: "sm", lg: "lg" }}
              whiteSpace={"pre-line"}
              mt={4}
            >
              {ourAboutSection[0]?.description}
              <br />
              <br />
            </Text>
            <Button
              fontWeight={700}
              color={"brand.500"}
              as={RouterLink}
              to={"/about-us"}
              variant={"outline"}
              borderRadius={"10px"}
              borderColor={"brand.500"}
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
                transition: "opacity 0.7s", // Note the corrected syntax here
                width: "100%",
              }}
            />
          </Container>
        )}

      {tryOurNewProductSection && tryOurNewProductSection?.length > 0 && (
        <ProductListSectionHome
          title="Try Our New Products"
          loader={loader}
          products={tryOurNewProductSection}
          type={isMobile && "carousal"}
        />
      )}

      {mustTry && mustTry?.length > 0 && (
        <ProductListSectionHome
          title="Must Try: Co Fee Co Products"
          loader={loader}
          products={mustTry}
          type={isMobile && "carousal"}
        />
      )}

      {allTimeBestSellerSection && allTimeBestSellerSection?.length > 0 && (
        <ProductListSectionHome
          title="All Time Best Sellers"
          loader={loader}
          products={allTimeBestSellerSection}
          type={isMobile && "carousal"}
        />
      )}
      {/* <Container mb={5} px={0} maxW={"container.xl"} >
       
         <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
          fontWeight={500}
          bgColor={"bg.500"}
          textAlign={{ base: "center", md: "start" }}
          px={{ base: 2, md: 8 }}
          py={4}
          my={7}
        >
          COCOA Product
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          my={6}
          px={{ base: 7, md: 15, xl: 20 }}
        >
          {cocoaPower.map((data) => (
            <GridItem>
              <Flex flexDirection={"column"} gap={3} alignItems={"center"}>
                <Image src={data.image1} />
                <Text fontSize={"xl"} color={"text.300"} fontWeight={500}>
                  {data.title}
                </Text>
                <Image w={"80%"} src={require("../assets/home/buy now right.png")} />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Container> */}

      {/* <ProductListSection
        title="COCOA Products"
        loading={loading}
        products={cocoaPower}
      /> */}

      <Container maxW={"container.xl"}>
        <Heading color="brand.500" size="lg" mx="auto" align={"center"} mt={3}>
          BLOGS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loader="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "brand.500" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="gray.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"brand.500"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {statistics?.length > 0 && (
        <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
          <SimpleGrid
            columns={[2, 3, null, 5]}
            px={6}
            maxW={"container.xl"}
            my={6}
            backgroundColor={"bg.500"}
            align="center"
            spacingX={{ base: "10vw", md: "30px" }}
            spacingY="40px"
          >
            {statistics?.length > 0 &&
              statistics?.map((data) => (
                <Stat key={data.id}>
                  <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
                    <ScrollTrigger
                      onEnter={() => setCountUp(true)}
                      // onExit={() => setCountUp(false)}
                    >
                      {countUp ? (
                        <CountUp
                          start={0}
                          end={Number(data.value.replace('+', ''))}
                          duration={2}
                          delay={0}
                        />
                      ) : null}
                      +
                      </ScrollTrigger>
                  </StatNumber>
                  <StatHelpText color="gray.600">{data?.name}</StatHelpText>
                </Stat>
              ))}
          </SimpleGrid>
        </Container>
      )}
      {awardsSection?.length > 0 &&
        awardsSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              mt={3}
              pb={"10px"}
            >
              {awardsSection?.length > 0 && awardsSection[0]?.label}
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

      {ourLicenceSection?.length > 0 &&
        ourLicenceSection[0]?.is_visible_on_website === true && (
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
                {ourLicenceSection[0]?.label}
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
              {ourLicenceSection[0]?.images?.length > 0 &&
                ourLicenceSection[0]?.images?.map((data) => (
                  <GridItem mx={"auto"}>
                    <Image src={data.image} boxSize={{ base: 130, lg: 190 }} />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {nonGmoSection?.length > 0 &&
        nonGmoSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} pt={5} pb={8} centerContent>
            <Image
              w={{ md: "70%" }}
              src={nonGmoSection[0]?.image}
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
         {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
