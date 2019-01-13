<template>
  <div>
    <b-carousel
      id="carousel1"
      style="text-shadow: 0px 0px 2px #00be00;"
      controls
      indicators
      background="#891e67"
      :interval="4000"
      img-width="720"
      img-height="383"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/images/infra4.jpeg"
      ></b-carousel-slide>-->
      <!-- Slides with custom text -->
      <!-- <b-carousel-slide img-src="../assets/images/infra4.jpeg">
        <h1>Hello world!</h1>
      </b-carousel-slide>-->
      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="../assets/images/infra4.jpeg"></b-carousel-slide> -->
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/images/infra.jpeg"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/images/infra2.jpeg"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/images/infra3.jpeg"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/images/infra4.jpeg"
          alt="image slot"
        >
      </b-carousel-slide>
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../assets/images/infra5.jpeg"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}
      <br>
      Sliding: {{ sliding }}
    </p>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>