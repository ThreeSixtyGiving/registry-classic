<template>
  <div class="hero-section">
    <div class="wrapper">
      <div class="hero" :class="hero.colourClass">
        <div class="hero__column hero__logo">
          <a :href="hero.home_link || '/'"> <img :src="hero.logo" :alt="hero.title"></a>
        </div>
        <div class="hero__column hero__lead">
          <h2 v-if="hero.subhead" class="hero__title">
              {{hero.subhead}}
          </h2>
          <p v-if="hero.blurb" class="hero__blurb">
              {{hero.blurb}}
          </p>
        </div>  
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Hero",
  data() {
    return { 
      hero: {
        home_link:"/",
        title:'360 Data Registry',
        logo:"@/assets/images/360-logos/360giving-registry.svg", 
        colourClass:`hero--orange`,
        subhead:"Which funders publish grants data openly?" ,
        blurb:"Explore this list of organisations that publish to the 360Giving Data Standard and download the data.",
      }
    };
  },
}
</script>
