<template>
  <div class="cards-section">
    <section class="grid grid--four-columns">
      <div class="base-card base-card--yellow grid__1">
        <div class="base-card__content">
          <h2 class="base-card__title">589,282</h2>
          <p class="base-card__text">Grants</p>
        </div>
      </div>

      <div class="base-card base-card--orange grid__1">
        <div class="base-card__content">
          <h2 class="base-card__title">260,921</h2>
          <p class="base-card__text">Recipients</p>
        </div>
      </div>

      <div class="base-card base-card--teal grid__1">
        <div class="base-card__content">
          <h2 class="base-card__title">172</h2>
          <p class="base-card__text">Funders</p>
        </div>
      </div>

      <div class="base-card base-card--red grid__1">
        <div class="base-card__content">
          <h2 class="base-card__title">£107.9bn</h2>
          <p class="base-card__text">Total</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopStats",
};
</script>

<style lang="scss" scoped>
.cards-section {
  padding: 32px 0;
  
  &__heading,
  &__tagline {
    text-align: center;
    font-size: 2rem;
  }    

  &__tagline {
    font-weight: 200;

    > a { 
      color: hsla(var(--orange-dark-hsl), 1); 
      font-weight: 200;
    }
  }
}
</style>
