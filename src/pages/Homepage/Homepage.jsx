import { Container, Grid } from "@mui/material";
import Slide from "../../compenents/Slider/Slide";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";

const slide = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
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
        <Slide post={slide} />
        <Grid container spacing={4}></Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}></Grid>
        <Footer />
      </main>
    </Container>
  );
}

export default Homepage;
