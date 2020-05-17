<template>
  <div class="constanttop">
    <!-- Got rid of container because row would not occupy full width, reference site: https://stackoverflow.com/questions/43741988/bootstrap-row-not-occupying-100-width -->
    <b-row class="text-center">
      <b-col xl="3" lg="3">1 of 3</b-col>
      <b-col xl="6" lg="6">
        <b-row>
          <b-col><img src="../assets/logo.png" alt="Library Logo"></b-col>
          <b-col cols="5">
            <b-row class="text-center" align-h="center">
              <b-form inline>
                <b-col cols="8">
                  <label class="sr-only" for="inline-form-input-name">Name</label>
                  <b-input
                    id="inline-form-input-name"
                    placeholder="Search"
                    @keyup.enter="searchQuery"
                    v-model="searchText"
                  ></b-input>
                </b-col>
                <b-col><b-button size="md" @click="searchQuery">Submit</b-button></b-col>
              </b-form>
            </b-row>
          </b-col>
          <b-col>
            <ul>
              <li id="leftAligned" v-for="link in links.link" :key="link.name">
                <router-link :to="link.url">{{ link.name }}</router-link>
                <br>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
      <b-col xl="3" lg="3">3 of 3</b-col>
    </b-row>
    <b-row class="text-center" align-h="center">
      <b-col xl="2.5" lg="2.5">Row 2: 1 of 3</b-col>
      <b-col xl="7" lg="7">
        <div id="nav2">
          <div v-for="link in links2.link" :key="link.name">
            <router-link :to="link.url" class="blue button">{{ link.name }}</router-link>
            <div v-for="link in link.sublinks" :key="link.name" class="dropdown-content" style="left: 0;">
              <router-link :to="link.url" class="blue button">{{ link.name }}</router-link>
            </div>
          </div>
          <router-link to="/signin" class="dropdown button red" >My Library Sign-in</router-link>
          <div class="dropdown-content" style="left: 0;">
            <router-link to="/test" class="blue button">link1</router-link>
            <router-link to="/test" class="blue button">link2</router-link>
            <router-link to="/test" class="blue button">link3</router-link>
          </div>
        </div>
        <div v-for="link in links2.link" :key="link.name">
          <div v-for="link in link.sublinks" :key="link.name" class="" style="left: 0;">
            <router-link :to="link.url">{{ link.name }}</router-link> |
          </div>
        </div>
      </b-col>
      <b-col xl="2.5" lg="2.5">Row 2: 3 of 3</b-col>
    </b-row>
    <h1>{{searchText}}</h1>
  </div>
</template>

<script>

import router from '../router'

export default {
  name: 'ConstantTop',
  data: function() {
    return {
      /* nested arrays thanks to this link reference: https://stackoverflow.com/questions/37534249/nested-arrays-of-objects-and-v-for */
      dropdown: false,
      links: {
        link: [{
          name: 'Home',     /* Reference to this link: https://stackoverflow.com/questions/37534249/nested-arrays-of-objects-and-v-for    */
          url: '/home/'
        },
        {
          name: 'A to Z Services',
          url: '/atozserives/'
        },
        {
          name: 'Contact Us',
          url: '/contact/'
        },
        {
          name: 'Francais',
          url: '/fr/'
        }
        ]
      },
      links2: {
        link: [{
          name: 'About Us',
          url: '/about/',
          sublinks: [
            { name: 'Branch Hours and & Contacts', url: '/about/branchourscontacts'},
            { name: 'FAQs', url: '/about/howdoi'}
          ]
        },
        {
          name: 'Books & Much More',
          url: '/booksmuchmore/',
          sublinks: [
            { name: 'Chromebook Lending', url: '/booksmuchmore/chromebooklending'}
          ]
        },
        {
          name: 'Digital Library',
          url: '/digitalibrary/',
          sublinks: [
            { name: 'New Titles', url: '/digitalibrary/newtitles'}
          ]
        },
        {
          name: "What's Hot",
          url: '/whatshot/'
        },
        {
          name: "Programs & Services",
          url: '/programservices/',
          sublinks: [
            { name: 'A to Z Services', url: '/programservices/atozservices'}
          ]
        },
        ]
      },
      searchText: ''
    };
  },
  props: {
  },
  methods: {
    searchQuery: function () {
      router.push({ path: 'search', query: { queryString: this.searchText } })
    }
  }
}
</script>

<style lang="scss" scoped>
$fLBlue: linear-gradient(to bottom, #0DADB9 0%, #016F78 100%);
$fDBlue: linear-gradient(to bottom, #0097A2 0%, #003539 100%);
$fRed: linear-gradient(to bottom, #F2425F 0%, #A10A23 100%);
$blueLine: 1px solid #76BEC3;

  * {
    display: inline-block;
  }
  .constanttop {
    background: linear-gradient(to right, #455a64 0%, #ffffff 100%); /* got from: https://www.w3schools.com/colors/colors_gradient.asp */
    background-image: linear-gradient(to left, #cfcfcf, #d7d7d7, #dedede, #e6e6e6, #eeeeee, #eeeeee, #eeeeee, #eeeeee, #e6e6e6, #dedede, #d7d7d7, #cfcfcf); /* or this link: https://mycolor.space/gradient3?ori=to+left&hex=%23CFCFCF&hex2=%23F8F8F8&hex3=%23CFCFCF&submit=submit */
    width: 100%;
  }
  li {
    list-style-type: none;
    display: block;
  }
  img {
    height:100px;
  }
  #leftAligned {
    text-align: left;
    border-bottom: dashed;
    border-color: #B8E1DF;
  }
  .text-center {
    padding-top: 1%;
  }
  .blue {
      background: $fLBlue;
    }
  .red {
      background: $fRed;
    }
  .button {
    color: white;
    cursor: pointer;
    padding: 30px 18px;
    text-align: center;
    display: inline-block;
    font-family: 'Advent Pro';
    font-size: 125%;
    border: none;
    text-decoration: none;
  }

  .button.blue {
    border-right: $blueLine
  }

  .dropdown-content .button.blue:hover {
    background: $fRed;
  }

  .button.blue:hover {
    background: $fDBlue;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    width: 90%;
    z-index: 1;
    position: fixed;
  }

  .dropdown-content a {
    display: block;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-bottom: $blueLine;
    right: 0px;
  }

  .dropdown-content a:hover {
    background-color: $fRed;
  }

  .button:hover + .dropdown-content {   /* Reference to this link: https://stackoverflow.com/questions/6910049/on-a-css-hover-event-can-i-change-another-divs-styling */
    display: block;
  }

  .dropdown-content:hover {
    display: block;
  }
</style>
