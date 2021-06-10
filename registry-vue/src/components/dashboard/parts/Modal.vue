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
@import "../../../../../360-ds/src/components/03-components/modal/modal.scss"
</style>
