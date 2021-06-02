<template>
<div id="modal-00" class="modal modal--shown dashboard-modal">
  <div v-on:click="hideModal" class="modal__overlay modal__trigger" data-id="modal-00"></div>
  <div class="modal__window">
    <button v-on:click="hideModal" class="modal__close modal__trigger" data-id="modal-00"></button>
    <div class="modal__content">
      <h3>Know more: Location</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <hr class="separator-light">

      <div class="dashboard-modal__groups">
        <div class="dashboard-modal__group">
          <div class="dashboard-modal__stat">
            <span><MaterialIcon :icon_name='add_location' /></span>
            <span>Includes grant location codes</span>
            <span class="dashboard-modal__stat-value-placeholder">00%</span>
          </div>
        </div>

        <div class="dashboard-modal__group">
          <h4 class="dashboard-modal__subtitle">This means</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.</p>
          <h4 class="dashboard-modal__subtitle">This is useful because</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.</p>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import MaterialIcon from '../../generic/MaterialIcon'

export default {
  name: 'Modal',
  components: {
    MaterialIcon,
  },
  methods: {
    hideModal() {
      this.$emit('hideModalEvent');
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  transition: all .4s ease;
  align-items: center;
  justify-content: center;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  
  &__overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;  
    background-color: hsla(var(--white-hsl), .4);
  }
  
  &__trigger { cursor: pointer; }
  
  &__close { 
    all: unset; // Resets button native styles
    float: right;
    &:after {
      @extend .u-material-icons;
      content: 'close';
    }
  }

  &__window {
    position: relative;
    padding: 40px;
    max-height: 90vh;
    max-width: 80vw;
    min-width: 22vw;
    overflow-y: auto;
    background-color: hsla(var(--white-hsl), 1);
    box-shadow: 8px 8px 32px hsla(var(--base-hsl), .1);
  }
}

.modal.modal--shown { display: flex; }
body.modal--shown { overflow: hidden; }

.dashboard-modal {
  background: rgba(100, 100, 100, 0.4);
  padding: 1rem;  

  h3 {
    margin-top: 0;
  }

  &__groups {
    display: flex;
    flex-direction: column;

    @include breakpoint($regular) {
      flex-direction: row;
    }
  }

  &__group:first-child {
    max-width: 100%;

    @include breakpoint($regular) {
      max-width: 20%;
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem;
    border: solid 1px hsla(var(--gray-30-hsl));
    margin: 0 0 1rem 0; // Mobile

    @include breakpoint($regular) {
      margin: 0 1rem 0 0;
    }

    span {
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-value-placeholder {
      font-size: 1.2rem;
      font-weight: 700;
      color: hsla(var(--gray-30-hsl), 1);
    }
  }

  &__subtitle {
    font-weight: 700;
    margin: 0 0 4px 0;
  }
}
</style>
