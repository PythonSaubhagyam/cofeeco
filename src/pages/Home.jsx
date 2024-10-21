import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

const cofeecoCategories = [
  {
    id: 1,
    imageSrc: require("../assets/home/1.jpg"),
    title: "COFFEE BEANS",
  },
  {
    id: 2,
    imageSrc: require("../assets/home/2.jpg"),
    title: "COFFEE POWDER",
  },
  {
    id: 3,
    imageSrc: require("../assets/home/3.jpg"),
    title: "GREEN COFFEE",
  },
  {
    id: 4,
    imageSrc: require("../assets/home/aaaaaaaa.png"),
    title: "HERBAL COFFEE",
  },
];
const newArrival = [
  {
    image1: require("../assets/home/Arjuna_coffee.jpg"),
    id: 1543,
  },
  {
    image1: require("../assets/home/coffee_year_3.jpg"),
    id: 1544,
  },
  {
    image1: require("../assets/home/methi_coffee.jpg"),
    id: 1546,
  },
  {
    image1: require("../assets/home/moringa_coffee.jpg"),
    id: 1547,
  },
  {
    image1: require("../assets/home/parijat_coffee.jpg"),
    id: 1548,
  },
  {
    image1: require("../assets/home/turmeric_coffee.jpg"),
    id: 1549,
  },
];
const cofeecoProduct = [
  {
    image1: require("../assets/home/coffee_month_7.jpg"),
    id: 1168,
  },
  {
    image1: require("../assets/home/coffee_month_8.jpg"),
    id: 1167,
  },
  {
    image1: require("../assets/home/coffee_year_2.jpg"),
    id: 1165,
  },
  {
    image1: require("../assets/home/coffee_month_10.jpg"),
    id: 1161,
  },
  {
    image1: require("../assets/home/coffee_year_1.jpg"),
  },
  {
    image1: require("../assets/home/coffee_month_11.jpg"),
  },
];
const bestSeller = [
  {
    image1: require("../assets/home/coffee_month_12.jpg"),
    id: 1166,
  },
  {
    image1: require("../assets/home/coffee_month_9.jpg"),
    id: 1169,
  },
  {
    image1: require("../assets/home/super_men.jpg"),
    id: 1544,
  },
  {
    image1: require("../assets/home/coffee_year_3.jpg"),
    id: 1170,
  },
  {
    image1: require("../assets/home/super_nutrition.jpg"),
    id: 1171,
  },
  {
    image1: require("../assets/home/women.jpg"),
  },
];
const cocoaPower = [
  {
    image1: "./cocoa Super kids.jpg.png",
    name: "COCOA Super - Kids ",
    id: 1168,
  },
  {
    image1: "./cocoa Super Man.jpg.png",
    name: "COCOA Super - Men ",
    id: 1169,
  },
  {
    image1: "./cocoa super women.jpg.png",
    name: "COCOA Super - Women ",
    id: 1171,
  },
  {
    image1: "./cocoa super nutrition.jpg.png",
    name: "COCOA Super - Nutrition ",
    id: 1170,
  },
];

const Licences = [
  {
    src: require("../assets/home/fassai 2.png"),
    alt: "Gir Gauveda",
    size: 190,
  },
  {
    src: require("../assets/home/apeda.jpg"),
    alt: "So Good",
    size: 190,
  },
  {
    src: require("../assets/home/coffee board.jpg"),
    alt: "Spices Board",
    size: 200,
  },
  {
    src: require("../assets/home/msme.jpg"),
    alt: "Himalayan Mountain",
    size: 190,
  },
  // {
  //   src: require("../assets/home/lPCR_logo.jpg"),
  //   alt: "CoffeeCo",
  //   size: 160,
  // },
  // {
  //   src: require("../assets/home/spices board.jpg"),
  //   alt: "Shishu veda",
  //   size: 200,
  // },
];
const imageInfo = [
  {
    src: require("../assets/home/icon_cofeeco_1.png"),
    name: "NON-GMO Product",
  },
  {
    src: require("../assets/home/icon_cofeeco_2.png"),
    name: "Ethical & Natural",
  },
  {
    src: require("../assets/home/icon_cofeeco_4.png"),
    name: "Quality you'll Love Guaranteed",
  },
  {
    src: require("../assets/home/icon_cofeeco_5.png"),
    name: "Minimum Order Value Rs.250",
  },
  {
    src: require("../assets/home/icon_cofeeco_6.png"),
    name: "Best Service",
  },
];
const banner = [
  {
    id: 11,
    alt_text: "Image2",
    image: require("../assets/home/1st page cofeeco.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 12,
    alt_text: "Image3",
    image: require("../assets/home/3rdpage.jpg"),
    display_status: true,
    image_url: null,
  },
  {
    id: 13,
    alt_text: "Image3",
    image: require("../assets/home/4th green.jpg"),
    display_status: true,
    image_url: null,
  },
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState(banner);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [MustTry, setMustTry] = useState([]);
  const [BestSeller, setBestSeller] = useState([]);
  const [sections, setSections] = useState([]);

  const [awardsSection, setAwardSection] = useState();
  const [servicesSection, setServicesSection] = useState();
  const [availableSection, setAvailableSection] = useState();
  // const [cocoaPower, setCocoaPower] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    // getHomePageData();
    getBlogs();
    getNewArrival();
    getMustTry();
    getBestSeller();
    getLowerSection();
  }, []);

  // async function getHomePageData() {
  //   const response = await client.get("/home");
  //   if (response.data.status === true) {
  //     //setBanners(response.data.banners);
  //     setHome(response.data);
  //   }
  //   setLoading(false);
  // }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
    setLoading(false);
  }

  async function getNewArrival() {
    const response = await client.get("newarrival/list");
    if (response) {
      setNewArrival(response.data.data);
    }
    setLoading(false);
  }

  async function getMustTry() {
    const response = await client.get("musttry/list");
    if (response) {
      setMustTry(response.data.data);
    }
    setLoading(false);
  }

  async function getBestSeller() {
    const response = await client.get("bestofalltime/list");
    if (response) {
      console.log(response.data);
      setBestSeller(response.data.data);
    }
    setLoading(false);
  }
  async function getLowerSection() {
    const params = {};
    const response = await client.get("/lower-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);
     
      const ourServicesSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const availableAtSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const ourAwardsSection = response.data.data?.filter(
        (section) => section.id === 1
      );
     
      setAwardSection(ourAwardsSection);
      setServicesSection(ourServicesSection);
      setAvailableSection(availableAtSection);
     
    }
  }

  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners} />
        )}
      </Container>

      <Container maxW={"container.xl"} mb={8}  px={0}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
          fontWeight={500}
          bgColor={"bg.500"}
          textAlign={{ base: "center", md: "start" }}
          px={{ base: 2, md: 8 }}
          py={4}
          //my={7}
        >
          About CO FEE CO
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify", md: "center" }}
          px={{ base: 15, lg: 20 }}
          fontSize={{ base: "sm", lg: "lg" }}
        >
          Our blends are made with some of the finest, most authentic coffee
          beans sourced from the Southern regions of Bharat.Ever since Sufi
          Saint Baba Budan brought the first 7 coffee beans from Arabia to
          Bharat three and a half centuries ago, Southern Bharat is a favourite
          among coffee lovers globally. Coffee sourced from this region has a
          unique flavor which is less acidic and sweeter than the African and
          South American varieties. The aroma reminds you of Dakshin Bharat ,its
          verdant hills and rich cultural heritage.
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

      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={require("../assets/home/coffecco_certificate.jpg")}
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
      </Container>

      <ProductListSectionHome
        title="Try Our New Products"
        loading={loading}
        products={newArrival}
      />

      <ProductListSectionHome
        title="Must Try: Co Fee Co Products"
        loading={loading}
        products={MustTry}
      />

      <ProductListSectionHome
        title="All Time Best Sellers"
        loading={loading}
        products={BestSeller}
      />
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
        <Heading
          color="brand.500"
          size="lg"
          mx="auto"
          align={"center"}
          mt={3}
         
        >
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
                    loading="lazy"
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
          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              600+
            </StatNumber>
            <StatHelpText color="gray.600">Natural Products</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              70000+
            </StatNumber>
            <StatHelpText color="gray.600">Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              1560+
            </StatNumber>
            <StatHelpText color="gray.600">Cities & Towns</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              7+
            </StatNumber>
            <StatHelpText color="gray.600">Countries</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              14+
            </StatNumber>
            <StatHelpText color="gray.600">Stores</StatHelpText>
          </Stat>

          {/* <Stat>
            <StatNumber color="text.500" fontSize={{ base: "3xl", md: "3xl" }}>
              11<sup>th</sup>
            </StatNumber>
            <StatHelpText color="gray.600">Generation of Farmers</StatHelpText>
          </Stat> */}
        </SimpleGrid>
      </Container>
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
            LICENSES & AFFILIATIONS
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
          px={{ lg: "18%" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {Licences.map((data) => (
            <GridItem mx={"auto"}>
              <Image src={data.src} boxSize={{ base: 130, lg: data.size }} />
            </GridItem>
          ))}
        </Grid>

        <Container maxW={"container.xl"} pt={5} pb={8} centerContent>
          <Image
            w={{ md: "70%" }}
            src={require("../assets/home/cofeeco.jpg")}
          />
        </Container>
       
        {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Image
          w={{md:"65%"}}
          my={10}
          src={require("../assets/home/vama_icon(1).jpg")}
          mx="auto"
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
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
     
     
      <ScrollToTop/>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}