(function(a){function t(t){for(var s,n,l=t[0],o=t[1],c=t[2],u=0,_=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&_.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(a[s]=o[s]);d&&d(t);while(_.length)_.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],s=!0,l=1;l<e.length;l++){var o=e[l];0!==i[o]&&(s=!1)}s&&(r.splice(t--,1),a=n(n.s=e[0]))}return a}var s={},i={app:0},r=[];function n(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=s,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)n.d(e,s,function(t){return a[t]}.bind(null,s));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0127":function(a,t,e){"use strict";e("b15c")},"034b":function(a,t,e){"use strict";e("c21c")},"05b2":function(a,t,e){},"05c6":function(a,t,e){},"0882":function(a,t,e){},1870:function(a,t,e){},"21b0":function(a,t,e){a.exports=e.p+"../../static/vue-build/img/cc.5e3c5ec4.svg"},"23ec":function(a,t,e){"use strict";e("9318")},"2a96":function(a,t,e){"use strict";e("8f19")},"346d":function(a,t,e){},"3e95":function(a,t,e){a.exports=e.p+"../../static/vue-build/img/info.0d4c74a5.svg"},"47cb":function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("router-view")},r=[],n={name:"App"},l=n,o=e("2877"),c=Object(o["a"])(l,i,r,!1,null,null,null),d=c.exports,u=e("8c4f"),_=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"layout layout--single-column"},[e("Nav"),e("hr",{staticClass:"separator-light"}),e("main",[e("div",{staticClass:"layout__content dashboard-page"},[e("TopStats"),e("Tabs"),e("router-view")],1)]),e("Footer")],1)},v=[],h=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},b=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"nav-bar nav-bar--minimal"},[s("a",{staticClass:"nav-bar__home-button",attrs:{href:"/"}},[s("img",{attrs:{src:e("8369"),alt:"360Registry"}}),s("span",{staticClass:"nav-bar__product-name"},[a._v("Dashboard")])]),s("nav",{staticClass:"nav-bar__nav-menu"},[s("ul",[s("li",{staticClass:"nav-menu__item"},[a._v(" Based on data published by UK grantmakers in the 360Giving Data Standard ")])])])])}],p={name:"Nav"},m=p,f=Object(o["a"])(m,h,b,!1,null,null,null),g=f.exports,C=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},y=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"cards-section"},[e("section",{staticClass:"grid grid--four-columns"},[e("div",{staticClass:"base-card base-card--yellow grid__1"},[e("div",{staticClass:"base-card__content"},[e("h2",{staticClass:"base-card__title"},[a._v("589,282")]),e("p",{staticClass:"base-card__text"},[a._v("Grants")])])]),e("div",{staticClass:"base-card base-card--orange grid__1"},[e("div",{staticClass:"base-card__content"},[e("h2",{staticClass:"base-card__title"},[a._v("260,921")]),e("p",{staticClass:"base-card__text"},[a._v("Recipients")])])]),e("div",{staticClass:"base-card base-card--teal grid__1"},[e("div",{staticClass:"base-card__content"},[e("h2",{staticClass:"base-card__title"},[a._v("172")]),e("p",{staticClass:"base-card__text"},[a._v("Funders")])])]),e("div",{staticClass:"base-card base-card--red grid__1"},[e("div",{staticClass:"base-card__content"},[e("h2",{staticClass:"base-card__title"},[a._v("£107.9bn")]),e("p",{staticClass:"base-card__text"},[a._v("Total")])])])])])}],w={name:"TopStats"},x=w,k=(e("034b"),Object(o["a"])(x,C,y,!1,null,"0bea359a",null)),I=k.exports,M=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},O=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("footer",{staticClass:"layout__footer"},[e("footer",{staticClass:"footer footer--compact"},[e("div",{staticClass:"footer__row wrapper footer__small-print"},[e("div",{staticClass:"footer__column-1"},[e("div",{staticClass:"footer__logo"},[e("img",{attrs:{src:"/images/360-giving-logo-white.svg",alt:"360Giving"}})])]),e("div",{staticClass:"footer__column-2 footer__policy-links"},[e("p",[e("strong",[a._v("360 Giving")]),a._v(" (Trading as "),e("strong",[a._v("360Giving")]),a._v(") is a registered charity "),e("a",{attrs:{href:"https://register-of-charities.charitycommission.gov.uk/charity-details/?regId=1164883&subId=0"}},[a._v("1164883")]),a._v(" and a registered company "),e("a",{attrs:{href:"https://beta.companieshouse.gov.uk/company/09668396"}},[a._v("09668396")]),a._v(". "),e("br"),a._v("Registered address: 360Giving, c/o Esmée Fairbairn Foundation, Kings Place, 90 York Way, London N1 9AG. ")])])]),e("div",{staticClass:"footer__row wrapper footer__small-print"},[e("div",{staticClass:"footer__column-2"},[e("p",[a._v("© Copyright 2021 360Giving."),e("br"),a._v("Licensed under a "),e("a",{attrs:{href:"#",target:"_blank"}},[a._v("Creative Commons Attribution 4.0 International License")]),a._v(".")])]),e("div",{staticClass:"footer__column-2 footer__policy-links hide-print"},[e("p",[e("a",{attrs:{href:"#"}},[a._v("Privacy Notice")]),a._v(" | "),e("a",{attrs:{href:"#"}},[a._v("Terms & Conditions")]),a._v(" | "),e("a",{attrs:{href:"#"}},[a._v("Cookie Policy")]),a._v(" | "),e("a",{attrs:{href:"#"}},[a._v("Take Down Policy")]),a._v(" | "),e("a",{attrs:{href:"#"}},[a._v("License")])])])])])])}],T={name:"Footer"},D=T,$=Object(o["a"])(D,M,O,!1,null,null,null),j=$.exports,P=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",["publisher"!==a.$router.currentRoute.name?e("div",{staticClass:"tabs"},[e("span",{class:"tab tab"+("overview"===a.$router.currentRoute.name?"--active":"--inactive")},[e("a",{staticClass:"tab__inner",attrs:{href:"/overview"}},[a._v("Overview")])]),e("span",{class:"tab tab"+("publishers"===a.$router.currentRoute.name?"--active":"--inactive")},[e("a",{staticClass:"tab__inner",attrs:{href:"/publishers"}},[a._v("Publishers")])]),e("span",{staticClass:"tabs-empty-bar"})]):a._e(),"publisher"===a.$router.currentRoute.name?e("div",[e("a",{staticClass:"dashboard-page__back-link",attrs:{href:"/publishers"}},[e("MaterialIcon",{attrs:{iconName:"arrow_back"}}),a._v(" Back to Publishers ")],1)]):a._e()])},E=[],S=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"icon"},[a.overlaidText?e("span",{staticClass:"icon__overlaid-text"},[a._v(a._s(a.overlaidText))]):e("i",{staticClass:"material-icons icon__mat-icon"},[a._v(a._s(a.iconName))])])},N=[],L={name:"MaterialIcon",props:{overlaidText:null,iconName:null}},A=L,F=(e("8b09"),Object(o["a"])(A,S,N,!1,null,"b1d6f324",null)),G=F.exports,B={name:"Tabs",components:{MaterialIcon:G}},R=B,q=(e("62ca"),Object(o["a"])(R,P,E,!1,null,null,null)),Y=q.exports,J={name:"HomePage",components:{Nav:g,TopStats:I,Footer:j,Tabs:Y}},U=J,z=(e("2a96"),Object(o["a"])(U,_,v,!1,null,"1ec2c34c",null)),H=z.exports,K=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"dashboard-page__section-radios"},[e("RadioButtons",{attrs:{overviewMode:a.overviewMode},on:{setOverviewMode:function(t){return a.setOverviewMode(t)}}})],1),e("div",{staticClass:"spacer-2 clearfix"}),a._l(a.cards,(function(t,s){return e("DashboardCard",{key:"card-"+s,attrs:{overviewMode:a.overviewMode,cardData:t},on:{showModalEvent:function(t){return a.controlModal(!0)}}})})),a.showModal?e("Modal",{on:{hideModalEvent:function(t){return a.controlModal(!1)}}}):a._e()],2)},W=[],X=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:"dashboard-stats-card "+("grant"===a.overviewMode?"dashboard-stats-card--grant":"")},[e("div",{staticClass:"dashboard-stats-card__head"},[e("div",{staticClass:"dashboard-stats-card__left-side"},[e("h3",{staticClass:"dashboard-stats-card__title"},[a._v(a._s(a.cardData.title))]),e("p",{staticClass:"dashboard-stats-card__description"},[a._v(a._s(a.cardData.description))])]),e("div",{staticClass:"dashboard-stats-card__right-side"},[e("AlertTag",a._g({attrs:{label:a.cardData.infoLabel}},a.$listeners))],1)]),e("div",{staticClass:"dashboard-stats-card__groups"},a._l(a.cardData.stats,(function(t,s){return e("div",{key:s,staticClass:"dashboard-stats-card__group"},[e("span",[e("img",{attrs:{src:"@/assets/images/icons/"+t.iconName+".svg",alt:""}})]),e("span",{attrs:{id:"stat-"+s}},[a._v(a._s(t.label))]),e("span",{staticClass:"dashboard-stats-card__value",attrs:{"aria-labelledby":"stat-"+s}},[a._v(a._s(t.value))])])})),0),e("div",{staticClass:"spacer-2"}),a.cardData.graph?e("div",[e("hr",{staticClass:"separator-light"}),e("div",{staticClass:"graph-label"},[a._v(a._s(a.cardData.graph_description))]),e("div",{staticClass:"graph-container"})]):a._e()])},V=[],Q=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"alert-tag alert-tag--anchor",on:{click:function(t){return a.showModal()}}},[a._m(0),e("span",{staticClass:"alert-tag__content"},[a._v(a._s(a.label))])])},Z=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("span",{staticClass:"alert-tag__icon"},[s("img",{attrs:{src:e("3e95"),alt:""}})])}],aa={name:"AlertTag",props:{href:{type:String,default:""},label:{type:String,default:""}},methods:{showModal:function(){this.$emit("showModalEvent")}}},ta=aa,ea=Object(o["a"])(ta,Q,Z,!1,null,null,null),sa=ea.exports,ia={name:"DashboardCard",components:{AlertTag:sa},props:{overviewMode:String,cardData:{title:"",description:"",infoLabel:"",stats:[{label:"",values:"",iconName:""}]}}},ra=ia,na=(e("cc6f"),Object(o["a"])(ra,X,V,!1,null,"23a95b4c",null)),la=na.exports,oa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"radio-buttons"},a._l(a.radioOptions,(function(t){return e("div",{key:t.value,staticClass:"radio-buttons__group",on:{click:function(e){return a.setOverviewMode(t.value)}}},[e("input",{staticClass:"screen-reader-only",attrs:{type:"radio",id:t.value,name:"overviewMode"},domProps:{value:t.value,checked:a.overviewMode===t.value}}),e("label",{staticClass:"radio-buttons__button",attrs:{for:t.value}},[a._v(a._s(t.name))])])})),0)},ca=[],da={name:"RadioButtons",data:function(){return{radioOptions:[{name:"Publisher",value:"publisher",default:!0},{name:"Grant",value:"grant"}]}},props:{overviewMode:String},methods:{setOverviewMode:function(a){this.$emit("setOverviewMode",a)}}},ua=da,_a=Object(o["a"])(ua,oa,ca,!1,null,null,null),va=_a.exports,ha=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal modal--shown dashboard-modal",attrs:{id:"modal-00"}},[e("div",{staticClass:"modal__overlay modal__trigger",attrs:{"data-id":"modal-00"},on:{click:a.hideModal}}),e("div",{staticClass:"modal__window"},[e("button",{staticClass:"modal__close modal__trigger",attrs:{"data-id":"modal-00"},on:{click:a.hideModal}}),e("div",{staticClass:"modal__content"},[e("h3",[a._v("Know more: Location")]),e("p",[a._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),e("hr",{staticClass:"separator-light"}),e("div",{staticClass:"dashboard-modal__groups"},[e("div",{staticClass:"dashboard-modal__group"},[e("div",{staticClass:"dashboard-modal__stat"},[e("span",[e("MaterialIcon",{attrs:{icon_name:a.add_location}})],1),e("span",[a._v("Includes grant location codes")]),e("span",{staticClass:"dashboard-modal__stat-value-placeholder"},[a._v("00%")])])]),a._m(0)])])])])},ba=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dashboard-modal__group"},[e("h4",{staticClass:"dashboard-modal__subtitle"},[a._v("This means")]),e("p",[a._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.")]),e("h4",{staticClass:"dashboard-modal__subtitle"},[a._v("This is useful because")]),e("p",[a._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.")])])}],pa={name:"Modal",components:{MaterialIcon:G},methods:{hideModal:function(){this.$emit("hideModalEvent")}}},ma=pa,fa=(e("7995"),Object(o["a"])(ma,ha,ba,!1,null,"7649d53c",null)),ga=fa.exports,Ca={name:"DashboardPage",components:{DashboardCard:la,RadioButtons:va,Modal:ga},props:{publishers:{}},methods:{controlModal:function(a){this.showModal=a},setOverviewMode:function(a){this.overviewMode=a}},data:function(){return{showModal:!1,overviewMode:"publisher",cards:[{title:"Location data",description:"Grants with location data can be used to map grants, and help people understand where the money goes.\n",infoLabel:"Learn more about location data",stats:[{iconName:"person_pin_circle",label:"Include recipient locations",value:"64%"},{iconName:"edit_location",label:"Include grant location names",value:"37%"},{iconName:"add_location",label:"Include grant location codes",value:"64%"}]},{title:"Organisation identifiers",description:"Org IDs help users to understand who is involved in each grant. External\norg IDs are used to show when funders give grants to the same\nrecipient and allow grants data to be linked to official sources of\norganisation data.\n",infoLabel:"Learn more about organisation identifiers",stats:[{icon_name:"tag",label:"Include charity or company nos.",value:"64%"},{icon_name:"confirmation_number",label:"Include external org IDs for at least 50% of recipients",value:"37%"}],graph_description:"Percentage of recipients with external org IDs\n"},{title:"Grant data",description:"All 360Giving data includes information about award amounts,\naward dates and the purpose of each grant. Information about the grant\nduration, grant programmes names and classifications help users to\nunderstand more context for each grant.\n",infoLabel:"Learn more about grant data",stats:[{icon_name:"event_note",label:"Include grant duration",value:"37%"},{icon_name:"format_quote",label:"Include programme names",value:"64%"},{icon_name:"label",label:"Include classifications",value:"64%"}]},{title:"Data updates",description:"Timely updates provide users with an up-to-date picture of grantmaking.\nPublishers make updates at different frequencies; annual, biannual, quarterly, monthly\nor some publish in real-time.\n",infoLabel:"Learn more about data updates",stats:[{icon_name:"event_available",label:"Have published in the last year",value:"52%"},{icon_name:"event_available",label:"Have published in the last month",value:"90%"}],graph_description:"Publishers with grants awarded in\neach of the past 10 years\n"}]}}},ya=Ca,wa=(e("90ff"),Object(o["a"])(ya,K,W,!1,null,"2ea5e944",null)),xa=wa.exports,ka=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("main",{staticClass:"layout__content"},[e("div",{staticClass:"layout__content-inner"},[e("DataTable"),e("div",{staticClass:"spacer-2"}),e("SortFilter"),e("div",{staticClass:"spacer-4"}),a.dataDownloaded?a._e():e("div",[e("Spinner")],1),a.dataDownloaded?[a._l(a.publishers,(function(a){return e("PublisherResult",{key:a.prefix,attrs:{publisher:a}})})),e("div",{staticClass:"spacer-1"})]:a._e()],2)])},Ia=[],Ma=(e("a15b"),e("d3b7"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dashboard-publisher-result"},[e("div",{staticClass:"dashboard-publisher-result__head"},[e("div",{staticClass:"dashboard-publisher-result__left-side"},[e("a",{staticClass:"dashboard-publisher-result__title"},[a._v(" "+a._s(a.publisher.name)+" ")])]),e("div",{staticClass:"dashboard-publisher-result__right-side"},[e("div",{staticClass:"dashboard-publisher-result__date"},[a._v(" Last update "),e("time",{attrs:{datetime:a.publisher.date_timestamp}},[a._v(a._s(a.publisher.date))])])])]),a._l(a.badges,(function(a,t){return e("span",{key:t,staticClass:"dashboard-publisher-result__badge"},[e("IconBadge",{attrs:{badge:a}})],1)})),e("hr",{staticClass:"separator-light"}),e("h5",[a._v("Total grants published")]),e("div",[e("YearsChart",{attrs:{chart:a.chart}})],1),e("hr",{staticClass:"separator-light"}),e("div",[e("a",{staticClass:"button",attrs:{href:a.$router.resolve({name:"publisher",params:{id:a.publisher.prefix}}).href}},[a._v("See More")])])],2)}),Oa=[],Ta=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ul",{staticClass:"years-chart"},a._l(a.chart,(function(t,s){return e("li",{key:"item-"+s,staticClass:"years-chart__item",style:"--opacity: "+t.value+";"},[e("div",{staticClass:"years-chart__block",attrs:{"aria-label":t.detail,title:t.detail}},[e("span",[a._v(a._s(t.value_text))])]),e("div",{staticClass:"years-chart__label"},[a._v(a._s(t.label))])])})),0)},Da=[],$a={name:"YearsChart",props:{chart:{}}},ja=$a,Pa=(e("0127"),Object(o["a"])(ja,Ta,Da,!1,null,"240e682e",null)),Ea=Pa.exports,Sa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"icon-badge"},[e("img",{attrs:{src:"@/assets/images/icons/"+a.badge.iconName+".svg",alt:""}}),a._v(" "+a._s(a.badge.label)+" ")])},Na=[],La={name:"IconBadge",props:{badge:{}}},Aa=La,Fa=(e("b362"),Object(o["a"])(Aa,Sa,Na,!1,null,"6e870bfe",null)),Ga=Fa.exports,Ba={name:"PublisherResult",components:{YearsChart:Ea,IconBadge:Ga},props:{publisher:{type:Object,required:!0}},data:function(){return{chart:[{label:"Older data",value:.15,value_text:"1.5k",detail:"1.5k grants awarded before 2011"},{label:2011,value:0,value_text:"",detail:"No grants awarded in 2011"},{label:2012,value:0,value_text:"",detail:"No grants awarded in 2012"},{label:2013,value:1,value_text:"10k+",detail:"10k+ grants awarded in 2013"},{label:2014,value:.2,value_text:"2k",detail:"2k grants awarded in 2014"},{label:2015,value:.2,value_text:"2k",detail:"2k grants awarded in 2015"},{label:2016,value:.2,value_text:"2k",detail:"2k grants awarded in 2016"},{label:2017,value:.25,value_text:"2.5k",detail:"2.5k grants awarded in 2017"},{label:2018,value:.05,value_text:"0.5k",detail:"0.5k grants awarded in 2018"},{label:2019,value:.05,value_text:"0.5k",detail:"0.5k grants awarded in 2019"},{label:2020,value:.05,value_text:"0.5k",detail:"0.5k grants awarded in 2020"},{label:2021,value:1.5,value_text:"15k+",detail:"15k+ grants awarded in 2018"}],badges:[{icon_name:"location_on",label:"Include recipient location codes"},{icon_name:"money",label:"Include charity or company nos."},{overlaid_text:"xlsx",label:"Publish using spreadsheets"}]}}},Ra=Ba,qa=(e("767a"),Object(o["a"])(Ra,Ma,Oa,!1,null,"0f5b0c33",null)),Ya=qa.exports,Ja=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"collapsed-table"},[e("details",{staticClass:"collapsed-table__details"},[a._m(0),e("div",{staticClass:"collapsed-table--content"},[e("div",{staticClass:"table table--zebra table--primary-light"},[e("table",[a._l(a.sections,(function(t,s){return[e("thead",{key:"th-"+s},[e("th",{attrs:{colspan:"3"}},[a._v(a._s(t.heading))])]),e("tbody",{key:"tb-"+s},[e("tr",a._l(t.items,(function(t,s){return e("td",{key:"data-"+s,staticClass:"table__lead-cell",attrs:{"data-header":a.header.th1}},[e("img",{attrs:{src:"@/assets/images/icons/"+t.iconName+".svg",alt:""}}),a._v(" "+a._s(t.label)+": "),e("strong",[a._v(a._s(t.value))])])})),0)])]}))],2)])])])])},Ua=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("summary",[s("span",{staticClass:"summary-label"},[a._v("All publishers data")]),s("span",{staticClass:"summary-icon",attrs:{"aria-hidden":"true"}},[s("img",{attrs:{src:e("91ed"),alt:""}})])])}],za={name:"DataTable",data:function(){return{header:{th1:"Title",th2:"Description",th3:"Type",th4:"Required"},body:[{row:{cell1:"Identifier",cell2:"The unique identifier for this grant. Made up of your 360Giving prefix, and an identifier from your records. See the 360Giving Grant identifier guidance for details.",cell3:"string",cell4:!0}},{row:{cell1:"Title",cell2:"A title for this grant activity. This should be under 140 characters long.",cell3:"string",cell4:!0}},{row:{cell1:"Description",cell2:"A short description of this grant activity.",cell3:"string",cell4:!0}},{row:{cell1:"Currency",cell2:"The currency used in amounts. Use the three-letter <a href='#'>currency code from ISO 4217</a> eg: Use GBP for Pounds Sterling.",cell3:"string",cell4:!0}},{row:{cell1:"Amount Applied For",cell2:"Total amount applied for in numbers (do not include commas or currency symbols such as £). If you have provided detailed transaction information on a separate table, this should equal the sum of all the application transactions for this grant.",cell3:"number",cell4:!1}},{row:{cell1:"Amount Awarded",cell2:"Total amount awarded in numbers (do not include commas or currency symbols such as £). If you have provided detailed transaction information on a separate table, this should equal the sum of all the award transactions for this grant.",cell3:"number",cell4:!0}},{row:{cell1:"Amount Disbursed",cell2:"Total amount disbursed (paid) to this grantee when this record was last updated (in numbers: do not include commas or currency symbols such as £)). If you have provided detailed transaction information on a separate table, this should equal the sum of all the disbursement transactions for this grant.",cell3:"number",cell4:!1}},{row:{cell1:"Award Date",cell2:"When was the decision to award this grant made. The date should be written as YYYY-MM-DD, or in full date-time format.",cell3:"string",cell4:!0}}],sections:[{heading:"Location",items:[{icon:{icon_name:"add_location"},label:"Include recipient location codes",value:"64%"},{icon:{icon_name:"add_location"},label:"Include grant location name",value:"63%"},{icon:{icon_name:"add_location"},label:"Include grant location codes",value:"62%"}]},{heading:"Organisation Information",items:[{icon:{icon_name:"tag"},label:"Include charity or company nos.",value:"64%"},{icon:{icon_name:"confirmation_number"},label:"Include external org IDs",value:"45%"}]},{heading:"Grant Information",items:[{icon:{icon_name:"event_note"},label:"Include grant duration",value:"57%"},{icon:{icon_name:"format_quote"},label:"Include programme names",value:"56%"},{icon:{icon_name:"label"},label:"Include classifications",value:"55%"}]},{heading:"Files",items:[{icon:{icon_name:"reorder"},label:"Include metadata",value:"81%"},{icon:{overlaid_text:"json"},label:"Publish using JSON",value:"75%"},{icon:{overlaid_text:"xlsx"},label:"Publish using spreadsheets",value:"79%"}]},{heading:"Up To Date",items:[{icon:{icon_name:"event_available"},label:"Published data in the last year",value:"91%"},{icon:{icon_name:"event_available"},label:"Published data in the last month",value:"88%"}]}]}}},Ha=za,Ka=(e("f0ab"),Object(o["a"])(Ha,Ja,Ua,!1,null,"69715b8d",null)),Wa=Ka.exports,Xa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h4",[a._v("Sort:")]),e("div",{staticClass:"sort-filters"},a._l(a.filters,(function(t,s){return e("div",{key:"filter-"+s,staticClass:"sort-filters__select-wrapper"},[e("select",{attrs:{if:t.active?"class=sort-filters__filter-active aria-label="+t.status:""}},[e("option",{attrs:{value:""}},[a._v(a._s(t.label))]),e("option",{attrs:{if:t.selected_item,selected:""},domProps:{value:t.selected_item}},[a._v(a._s(t.selected_item))])])])})),0)])},Va=[],Qa={name:"SortFilter",data:function(){return{filters:[{label:"Alphabetically",active:!0,status:"Sorting alphabetically"},{label:"Filter by recipient",active:!1},{label:"Filter by data feature",active:!0,selected_item:"Include charity or company nos.",status:"Filtering by: Include charity or company nos."},{label:"Filter by data file",active:!1},{label:"Filter by data file",active:!1}]}}},Za=Qa,at=(e("60fe"),Object(o["a"])(Za,Xa,Va,!1,null,"333df508",null)),tt=at.exports,et=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},st=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"lds-ellipsis"},[e("div"),e("div"),e("div"),e("div")])}],it={name:"Spinner"},rt=it,nt=(e("7e4d"),Object(o["a"])(rt,et,st,!1,null,"7935ee3c",null)),lt=nt.exports,ot={name:"PublisherPage",components:{PublisherResult:Ya,DataTable:Wa,SortFilter:tt,Spinner:lt},methods:{searchFunction:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=null!==t?["&search=".concat(t)].join("&"):"";fetch("http://store.dev.default.threesixtygiving.uk0.bigv.io/api/dashboard/publishers?format=json".concat(e)).then((function(a){return a.json()})).then((function(t){a.publishers=t,a.dataDownloaded=!0}))}},data:function(){return{publishers:{},dataDownloaded:!1}},created:function(){this.searchFunction()}},ct=ot,dt=Object(o["a"])(ct,ka,Ia,!1,null,null,null),ut=dt.exports,_t=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dashboard-publisher-result-wrapper"},[e("div",{staticClass:"dashboard-publisher-result__head"},[e("div",{staticClass:"dashboard-publisher-result__left-side"},[e("div",{staticClass:"dashboard-publisher-result__title"},[a._v(" "+a._s(a.publisher.title)+" ")])]),e("div",{staticClass:"dashboard-publisher-result__right-side"},[e("div",{staticClass:"dashboard-publisher-result__date"},[a._v(" Last update "),e("time",{attrs:{datetime:a.publisher.date_timestamp}},[a._v(a._s(a.publisher.date))])])])]),a._l(a.publisher.badges,(function(a,t){return e("span",{key:t,staticClass:"dashboard-publisher-result__badge"},[e("IconBadge",{attrs:{badge:a}})],1)})),e("hr",{staticClass:"separator-light"}),e("div",{staticClass:"spacer-1"}),e("div",{staticClass:"dashboard-publisher-result-wrapper__external-buttons align-right"},[e("a",{staticClass:"button",attrs:{href:"https://grantnav.threesixtygiving.org/funder/"+a.publisher.prefix}},[a._v("See in GrantNav")]),e("a",{staticClass:"button button--black",attrs:{href:"#"}},[a._v("See in 360Insights")])]),e("div",{staticClass:"spacer-3"}),e("div",{staticClass:"dashboard-publisher-result"},[e("h4",{staticClass:"dashboard-publisher-result__title"},[a._v("Total grants published")]),e("p",[a._v("The number of grants published by award year for the past 10 years, with the total grants published that were awarded 11 or more years ago.")]),e("div",[e("YearsChart",{attrs:{chart:a.publisher.chart}})],1)]),e("div",{staticClass:"dashboard-publisher-result"},[e("h4",{staticClass:"dashboard-publisher-result__title"},[a._v("Datasets")]),e("p",[a._v(a._s(a.publisher.files_description))]),a._l(a.publisher.fileSummaries,(function(a,t){return e("FileSummary",{key:"summary-"+t,attrs:{summary:a}})}))],2)],2)},vt=[],ht=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"file-summary grid grid--three-columns"},[s("div",{staticClass:"grid__1"},[a._v(" "+a._s(a.summary.description)+" ")]),s("div",{staticClass:"grid__1 align-right"},[s("span",{staticClass:"file-summary__label"},[a._v("Records")]),s("span",{staticClass:"file-summary__stat"},[a._v(a._s(a.summary.num_records))])]),s("div",{staticClass:"grid__1 align-right"},[s("span",{staticClass:"file-summary__label"},[a._v("Total Grants £")]),s("span",{staticClass:"file-summary__stat"},[a._v(a._s(a.summary.grant_total_shorthand))])]),s("div",{staticClass:"grid__1"},[s("span",{staticClass:"tag file-summary__specs"},[a._v(a._s(a.summary.file_type)+" – "+a._s(a.summary.file_size))])]),s("div",{staticClass:"grid__1 align-right"},[s("span",{staticClass:"file-summary__label"},[a._v("Valid data")]),a.summary.validData?s("MaterialIcon",{attrs:{iconName:"check_circle_outline"}}):s("MaterialIcon",{attrs:{iconName:"priority_high"}})],1),s("div",{staticClass:"grid__1 align-right"},[s("span",{staticClass:"file-summary__label"},[a._v("Licence")]),"cc"===a.summary.licence?s("span",{staticClass:"file-summary__native-icon"},[s("img",{attrs:{src:e("21b0"),alt:""}})]):s("span",{staticClass:"file-summary__stat"},[a._v(a._s(a.summary.licence))])])])},bt=[],pt={name:"FileSummary",components:{MaterialIcon:G},props:{summary:{}}},mt=pt,ft=(e("d848"),Object(o["a"])(mt,ht,bt,!1,null,"079eb00d",null)),gt=ft.exports,Ct={name:"PublisherDetail",components:{YearsChart:Ea,FileSummary:gt,IconBadge:Ga},methods:{},data:function(){return{publisher:{title:"AB Charitable Trust",prefix:"360G-ABCT",date:"22 Aug 2017",date_timestamp:"2017-08-22",badges:[{iconName:"location_on",label:"Include recipient location codes"},{iconName:"money",label:"Include charity or company nos."},{overlaid_text:"xlsx",label:"Publish using spreadsheets"}],files_description:"The file(s) published by AB Charitable Trust are linked\nbelow, with details of the file type and open license for each file.\n",fileSummaries:[{description:"Grants from Jan 2013 to Jan 2021",num_records:783,grant_total_shorthand:"12.8m",file_type:"XLSX",file_size:"194kB",valid_data:!0,licence:"cc"}]}}},created:function(){}},yt=Ct,wt=(e("23ec"),Object(o["a"])(yt,_t,vt,!1,null,"1927ba32",null)),xt=wt.exports;s["a"].use(u["a"]);var kt=[{path:"/",redirect:"/overview"},{path:"/",component:H,children:[{path:"/overview",name:"overview",component:xa},{path:"/publishers",name:"publishers",component:ut},{path:"/publisher/:id",name:"publisher",component:xt}]}],It=new u["a"]({mode:"history",routes:kt}),Mt=It;s["a"].config.productionTip=!1,new s["a"]({render:function(a){return a(d)},router:Mt,components:{App:d}}).$mount("#app")},"60fe":function(a,t,e){"use strict";e("bf44")},"62ca":function(a,t,e){"use strict";e("88e4")},"767a":function(a,t,e){"use strict";e("943d")},7995:function(a,t,e){"use strict";e("da69")},"7e4d":function(a,t,e){"use strict";e("0882")},8369:function(a,t,e){a.exports=e.p+"../../static/vue-build/img/360registry-color.52be2c5c.svg"},"88e4":function(a,t,e){},"8b09":function(a,t,e){"use strict";e("c9db")},"8f19":function(a,t,e){},"90ff":function(a,t,e){"use strict";e("47cb")},"91ed":function(a,t,e){a.exports=e.p+"../../static/vue-build/img/chevron_down.0be3735f.svg"},9318:function(a,t,e){},"943d":function(a,t,e){},b15c:function(a,t,e){},b362:function(a,t,e){"use strict";e("05c6")},bf44:function(a,t,e){},c21c:function(a,t,e){},c9db:function(a,t,e){},cc6f:function(a,t,e){"use strict";e("05b2")},d848:function(a,t,e){"use strict";e("1870")},da69:function(a,t,e){},f0ab:function(a,t,e){"use strict";e("346d")}});
//# sourceMappingURL=app.ac53c7e4.js.map