import { Container, Divider, Grid } from "@mui/material";
import Slider from "../../compenents/Slider/Slider";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Campaign from "../../compenents/Campaign/Campaign";
import About from "../About/About";
import { Link } from "react-router-dom";

const slide = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const campaigns = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

function Homepage() {
  return (
    <Container maxWidth="xl">
      
      <main>
        <Header />
        <Slider post={slide} />
        <div style={{ height: '2000px', width: '100%' }}></div>
        <Grid container spacing={4}>
            {campaigns.map((post) => (
              <Campaign key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            
          </Grid>
          
      <Divider orientation="horizontal" />

      <div id="about">
      <About />
      </div>
              
              
      <Divider orientation="horizontal" />
        <Footer />
      </main>
    </Container>
  );
}

export default Homepage;
