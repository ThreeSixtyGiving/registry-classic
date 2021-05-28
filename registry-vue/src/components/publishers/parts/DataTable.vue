<template>
  <section class="collapsed-table">
    <details class="collapsed-table__details" open>
      <summary>
        <span class="summary-label">All publishers data</span>
        <span class="summary-icon" aria-hidden="true"><img :src="`@/assets/images/icons/chevron-down.svg`" alt="" /></span>
      </summary>
      <div class="collapsed-table--content">
        <div class="table table--zebra table--primary-light">
          <table>
            <template v-for="(section, index) in sections">
              <thead :key="`th-${index}`">
                <th colspan="3">{{ section.heading }}</th>
              </thead>
              <tbody :key="`tb-${index}`">
                <tr>
                  <td v-for="(item, index) in section.items"
                    :key="`data-${index}`"
                    class="table__lead-cell"
                    :data-header="header.th1"
                  >
                    <img :src="`@/assets/images/icons/${item.icon_name}.svg`" alt="" />
                    {{ item.label }}: <strong>{{ item.value }}</strong>
                  </td>
                </tr>
              </tbody>
            </template>
          </table>
        </div>
      </div>
    </details>
  </section>
</template>

<script>
export default {
  name: "DataTable",
}
</script>

<style lang="scss" scoped>
// Adapted with tweaks from Search Summary
.collapsed-table {
  &__details {
    &[open] {
      summary {
        .summary-icon {
          svg {
            transform: rotateX(180deg);
          }
        }

        &:hover {
          .summary-icon {
            svg {
              transform: translateY(-2px) rotateX(180deg);
            }
          }
        }
      }
    }
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $orange-tint-lighter;
    padding: 0.8rem 1rem;

    &::-webkit-details-marker {
      display: none;
    }

    &:hover {
      cursor: pointer;

      .summary-icon {
        svg {
          transform: translateY(2px);
        }
      }
    }
  }

  .summary-label {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
  }

  .summary-icon {
    border: 1px solid $black;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0px);
    transition: transform 0.2s ease;
    margin-left: 12px;

    svg {
      transition: transform 0.2s ease;
    }
  }
}
</style>
