<template>
  <div>
    <Header />
    <Slider />
    <Sideleft />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Slider from "./Slider";
import Sideleft from "./Sideleft";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Header,
    Slider,
    Sideleft,
    Footer,
  },
};
</script>