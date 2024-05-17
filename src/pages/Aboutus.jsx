import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, Flex, Image, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0}>
        <Image src={require("../assets/aboutus/about_us.jpg")} />
        <Flex flexDirection={"column"}  gap={3} px={{md:"10%",base:10}} py={10}>
          <Box
            fontWeight={"600"}
            color="text.300"
            fontSize={"25px"}
            alignContent={"flex-start"}
          >
            <i>Co Fee Co has Dakshin Bharatiya origins:- </i>
          </Box>

          <Box  color={"text.300"} textAlign={"justify"}>
            Our blends are made with some of the finest, most authentic coffee
            beans sourced from the Southern regions of Bharat.Ever since Sufi
            Saint Baba Budan brought the first 7 coffee beans from Arabia to
            Bharat three and a half centuries ago, Southern Bharat is a
            favourite among coffee lovers globally. Coffee sourced from this
            region has a unique flavor which is less acidic and sweeter than the
            African and South American varieties. The aroma reminds you of
            Dakshin Bharat,its verdant hills and rich cultural heritage.
            <br />
            <br />
            <b style={{ textDecoration: "underline", fontSize: "18px" }}>
              Packaging Details:-
            </b>
            <br />
            <br />
            Co Fee Co is committed to bringing you the very best and most
            refreshing coffee and herbs with minimal impact to the environment.
            This carton is made from 100% recycled paperboard. Our infusion bas
            are made from unbleached, biodegradable fiber. Please recycle.
            <br />
            <br />
            <b style={{ textDecoration: "underline", fontSize: "18px" }}>
              Reduce Plastic Usage:-
            </b>
            <br />
            <br />
            Co Fee Co fully supports the Government of Bharat’s efforts to
            reduce the use of plastic. Although recycling helps to reduce the
            amount of plastic which ends up clogging our ecosystem, we realize
            that very few types of plastics can actually be recycled by most
            municipalities. In addition, recycling consumes a lot of energy and
            water. In this situation, its best to reduce or completely eliminate
            plastic usage.
            <br/><br/>
            <b>Co Fee Co Coffee Blends </b>  are artisan blends, infused with herbs consistent with Ayurvedic principles and mixed in perfect proportions to give you a refreshing delectable taste.
            <br/><br/>
            <b>When you buy this blend</b>  , you also support ethical farming practices, and farmers who work hard under tough hilly or mountainous conditions to bring you authentic products without harming Mother Nature.  
            <br/><br/>
           <b>Co Fee Co draws inspiration </b> from "Bansi Gir Gaushala", and its work towards reviving Bharat’s ancient “Gau Sanskriti”. We believe ancient Bharat holds the solution to many of the challenges facing humanity today.
            <br/><br/>
            <b>Co fee Co’s mission</b>   is to change the way people think about food and beverage, bringing simple Ayurvedic wisdom back into people’s lives. Our brand aims to recreate the same purity and authenticity that is characteristic of ancient Bharat.While doing so, we help people empower farmers who are the cornerstone of "Bharatiya  Gau Sanskriti".
            <br/><br/>
            <b>In Ayurvedic principles </b> , caffeine is typically associated with Vatadosha,which is again associated with Vayu, a primal element that represents movement. Therefore, small amounts of caffeine can instantly make you feel energetic. However, in higher doses for sustained periods, caffeine consumption can trigger adverse health conditions. For this reason, please enjoy caffeine drinks in moderation.
            <br/><br/>
            <b>To help you reduce caffeine dependence </b> , you may enjoy our range of Co Fee Co Herbal Coffee blends that can help you stay fresh, energetic and healthy throughout the day. Each of these blends is created with authentic Ayurvedic herbs keeping certain health benefits in mind.  
           <br/><br/>
           <b>Our herbs are sourced </b>  as far as possible from Dakshin Bharat, a region which continues to be a flag bearer of ancient Ayurvedic practice. These herbs are added in perfect proportions to give you a refreshing delectable taste.
          </Box>
          
        </Flex>
        <hr/>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            AVAILABLE AT
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} centerContent>
          <Image
            src={require("../assets/home/store_names.jpg")
            }
            w={"container.xl"}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default AboutUs;
