<template>
  <div>
    <h2>Included Publishers:</h2>
    <ul v-if="publishers" class="card-list" id="publisher-list-updater">
      <li
        v-for="publisher in publishers"
        v-bind:key="publisher.prefix"
        class="card-list__item"
      >
        <article class="registry-card">
          <div v-if="publisher.logo" class="registry-card__pub-logo">
            <a v-bind:href="publisher.website" target="_blank">
              <img v-bind:src="publisher.logo" v-bind:alt="publisher.name" />
            </a>
          </div>
          <div class="registry-card__content">
            <h3 class="registry-card__pub-name">
              {{ publisher.name }}
            </h3>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PublisherList",
  props: {
    publishers: {}
  },
};
</script>

<style scoped>
img {
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
}

.card-list {
  list-style-type: none;
  padding: 0 8px 0 0;
}
.card-list__item + .card-list__item {
  margin-top: 24px;
}

.card-list--linked {
  --card-list-links-hsl: var(--base-hsl);
  margin-left: 40px;
}
.card-list--linked .card-list__item {
  position: relative;
}
.card-list--linked .card-list__item:before {
  content: "";
  width: 4px;
  height: calc(100% + 32px);
  position: absolute;
  top: 48px;
  left: -40px;
  background-color: hsl(var(--card-list-links-hsl), 0.2);
}
.card-list--linked .card-list__item:last-of-type::before {
  height: 0;
}
.card-list--linked .card-list__item:after {
  content: "";
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: 48px;
  left: -50px;
  background-color: hsl(var(--card-list-links-hsl), 1);
}

.registry-card {
  display: flex;
}

.registry-card__content {
  flex: 1;
}

.registry-card {
  --registry-card-border-hsl: var(--teal-hsl);
  background: hsl(var(--white-hsl), 1);
  box-shadow: 0px 4px 8px hsl(var(--base-hsl), 0.15);
  position: relative;
  padding: 16px 24px 16px 24px;
}
@media (min-width: 85em) {
  .registry-card {
    padding: 32px 40px 16px 40px;
  }
}

.registry-card:before {
  content: "";
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(var(--registry-card-border-hsl, transparent), 1);
}

.registry-card__pub-logo {
  width: 132px;
}

.registry-card__pub-name {
  font-size: 1.5rem;
  color: hsl(var(--base-hsl), 1);
  font-weight: 300;
}

.registry-card__content {
  margin-left: 32px;
}

.registry-card__list {
  list-style: none;
  padding-left: 0;
}
</style>
