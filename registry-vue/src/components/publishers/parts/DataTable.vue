<template>
  <section class="collapsed-table">
    <details class="collapsed-table__details">
      <summary>
        <span class="summary-label">All publishers data</span>
        <span class="summary-icon" aria-hidden="true"><img src="@/assets/images/icons/chevron_down.svg" alt="" /></span>
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
                    <img :src="`@/assets/images/icons/${item.iconName}.svg`" alt="" />
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
  data: function() {
    return {
      "header": {
        "th1": "Title",
        "th2": "Description",
        "th3": "Type",
        "th4": "Required"
      },
      "body": [
        {
          "row": {
            "cell1": "Identifier",
            "cell2": "The unique identifier for this grant. Made up of your 360Giving prefix, and an identifier from your records. See the 360Giving Grant identifier guidance for details.",
            "cell3": "string",
            "cell4": true
          }
        },
        {
          "row": {
            "cell1": "Title",
            "cell2": "A title for this grant activity. This should be under 140 characters long.",
            "cell3": "string",
            "cell4": true
          }
        },
        {
          "row": {
            "cell1": "Description",
            "cell2": "A short description of this grant activity.",
            "cell3": "string",
            "cell4": true
          }
        },
        {
          "row": {
            "cell1": "Currency",
            "cell2": "The currency used in amounts. Use the three-letter <a href='#'>currency code from ISO 4217</a> eg: Use GBP for Pounds Sterling.",
            "cell3": "string",
            "cell4": true
          }
        },
        {
          "row": {
            "cell1": "Amount Applied For",
            "cell2": "Total amount applied for in numbers (do not include commas or currency symbols such as £). If you have provided detailed transaction information on a separate table, this should equal the sum of all the application transactions for this grant.",
            "cell3": "number",
            "cell4": false
          }
        },
        {
          "row": {
            "cell1": "Amount Awarded",
            "cell2": "Total amount awarded in numbers (do not include commas or currency symbols such as £). If you have provided detailed transaction information on a separate table, this should equal the sum of all the award transactions for this grant.",
            "cell3": "number",
            "cell4": true
          }
        },
        {
          "row": {
            "cell1": "Amount Disbursed",
            "cell2": "Total amount disbursed (paid) to this grantee when this record was last updated (in numbers: do not include commas or currency symbols such as £)). If you have provided detailed transaction information on a separate table, this should equal the sum of all the disbursement transactions for this grant.",
            "cell3": "number",
            "cell4": false
          }
        },
        {
          "row": {
            "cell1": "Award Date",
            "cell2": "When was the decision to award this grant made. The date should be written as YYYY-MM-DD, or in full date-time format.",
            "cell3": "string",
            "cell4": true
          }
        }
      ],
      "sections": [
        {
          "heading": "Location",
          "items": [
            {
              "icon": {
                "icon_name": "add_location"
              },
              "label": "Include recipient location codes",
              "value": "64%"
            },
            {
              "icon": {
                "icon_name": "add_location"
              },
              "label": "Include grant location name",
              "value": "63%"
            },
            {
              "icon": {
                "icon_name": "add_location"
              },
              "label": "Include grant location codes",
              "value": "62%"
            }
          ]
        },
        {
          "heading": "Organisation Information",
          "items": [
            {
              "icon": {
                "icon_name": "tag"
              },
              "label": "Include charity or company nos.",
              "value": "64%"
            },
            {
              "icon": {
                "icon_name": "confirmation_number"
              },
              "label": "Include external org IDs",
              "value": "45%"
            }
          ]
        },
        {
          "heading": "Grant Information",
          "items": [
            {
              "icon": {
                "icon_name": "event_note"
              },
              "label": "Include grant duration",
              "value": "57%"
            },
            {
              "icon": {
                "icon_name": "format_quote"
              },
              "label": "Include programme names",
              "value": "56%"
            },
            {
              "icon": {
                "icon_name": "label"
              },
              "label": "Include classifications",
              "value": "55%"
            }
          ]
        },
        {
          "heading": "Files",
          "items": [
            {
              "icon": {
                "icon_name": "reorder"
              },
              "label": "Include metadata",
              "value": "81%"
            },
            {
              "icon": {
                "overlaid_text": "json"
              },
              "label": "Publish using JSON",
              "value": "75%"
            },
            {
              "icon": {
                "overlaid_text": "xlsx"
              },
              "label": "Publish using spreadsheets",
              "value": "79%"
            }
          ]
        },
        {
          "heading": "Up To Date",
          "items": [
            {
              "icon": {
                "icon_name": "event_available"
              },
              "label": "Published data in the last year",
              "value": "91%"
            },
            {
              "icon": {
                "icon_name": "event_available"
              },
              "label": "Published data in the last month",
              "value": "88%"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// Adapted with tweaks from Search Summary
.collapsed-table {
  &__details {
    &[open] {
      summary {
        .summary-icon {
          img {
            transform: rotateX(180deg);
          }
        }

        &:hover {
          .summary-icon {
            img {
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

.table {
  --table-border-hsl: var(--base-hsl);
  --table-text-hsl: var(--base-hsl);
  --table-bg-hsl: var(--base-hsl);

  font-size: .9rem;
  border: 1px solid hsla(var(--table-border-hsl), .2);
  border-radius: 3px;

  table { margin: 0; }

  a {
    font-weight: inherit;
    text-decoration: underline;
    text-underline-position: under;
  }

  th, td {
    padding: 8px;
    vertical-align: top;
    color: hsla(var(--table-text-hsl), 1);
    display: block;
    @include breakpoint($medium) {
      display: table-cell;
      padding: 8px 16px;
    }
  }

  th { background-color: hsla(var(--table-bg-hsl), .1); }
  tr + tr { border-top: 1px solid hsla(var(--table-bg-hsl), .2); }

  th {
    display: none;
    @include breakpoint($medium) { display: table-cell; }
  }

  td {
    display: block;
    @include breakpoint($medium) { display: table-cell; }
  }
}

.table {
  @include breakpoint($small-only) {
    td:before {
      content: attr(data-header);
      display: block;
      font-weight: 400;
      background-color: hsla(var(--table-bg-hsl), .1);
      margin: -8px -8px 4px -8px;
      padding: 4px 8px;
    }
  }
}

.table--zebra {
  tr:nth-of-type(even) { background-color: hsla(var(--table-bg-hsl), .04); }
}

.table__lead-cell {
  font-weight: 500;
  min-width: 180px;
}

.table__checks {
  @include breakpoint($medium) { text-align: center; }
}

.table--true  { color: hsla(var(--teal-dark-hsl), 1); }
.table--false { color: hsla(var(--red-hsl), 1);; }

/* Primary styling */
.table--primary {
  border: none;
  border-bottom: 1px solid $orange-tint-lighter;

  th {
    background: $orange-tint-lighter;
    font-size: 20px;
    font-weight: 700;
    padding: 16px 14px;
    border: none;
  }

  thead {
    tr:first-of-type {
      border-radius: 3px 3px 0px 0px;

      th:first-of-type {
        border-top-left-radius: 3px;
      }

      th:last-of-type {
        border-top-right-radius: 3px;
      }
    }
  }

  tr {
    border: none;

    td + td {
      border-left: 1px solid $orange-tint-lighter;
    }

    &:nth-of-type(odd) {
      background: $orange-tint-fade;
    }

    &:nth-of-type(even) {
      background: $orange-tint-light;
    }

    + tr {
      border: none;
    }
  }
}

.table--primary-light {
  table {
    border: solid 1px $orange-tint-light;
  }

  th {
    background: $orange-tint-lightest;
  }

  td {
    border: solid 1px $orange-tint-light;
  }
}

/* Secondary styling */
.table--secondary {
  border: none;
  border-bottom: 1px solid $yellow-tint-dark;

  th {
    background: $yellow-tint-dark;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 14px;
    border: none;
  }

  thead {
    tr:first-of-type {
      border-radius: 3px 3px 0px 0px;

      th:first-of-type {
        border-top-left-radius: 3px;
      }

      th:last-of-type {
        border-top-right-radius: 3px;
      }
    }
  }

  tr {
    border: none;

    td + td {
      border-left: 1px solid $yellow-tint-dark;
    }

    &:nth-of-type(odd) {
      background: $yellow-tint-fade;
    }

    &:nth-of-type(even) {
      background: $yellow-tint-light;
    }

    + tr {
      border: none;
    }
  }
}
</style>
