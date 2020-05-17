<!-- Have not completed this search yet -->
<template>
  <div id="app">
   <h1>Search results for: {{queryString}}</h1>
    <div>
      {{filteredResults}}
    </div>
    <!-- <div v-for="item in filteredItems" :key="item.id"> -->
    <div v-for="item in items.items" :key="item.id">
      <h1>{{item.title}}</h1>
      <p>{{item.firstname}}</p>
      <p>{{item.surname}}</p>
      <p>{{item.address}}</p>
      <p>{{item.id}}</p>
      <p>{{item.type}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data: function () {
    return {
      items: [],
    }
  },
  computed: { 
    queryString: function () {
      return this.$route.query.queryString;
    },
    filteredResults: function () {
//      var items_array = this.items,
      var searchString = this.queryString;
      
      if(!searchString){
        return;
      }
      else if (this.items.items == undefined){
        return;
      }
      else {
        //Takes the search string, makes all characters lowercase, and splits each word into a list
        searchString = searchString.trim().toLowerCase().split(' ');
        //Takes the list of search string and takes out all the empty strings (empty string appear when the user types a lot of extra spaces)
        searchString = searchString.filter(Boolean)   //Reference to this link: https://stackoverflow.com/questions/19888689/remove-empty-strings-from-array-while-keeping-record-without-loop/19888749
        var lkey=['title', 'firstname', 'surname', 'address', 'type']
		var thing3=lkey[1]
		console.log('this.items.items[0][thing3]: ' + this.items.items[0][thing3])  //Reference to this link: https://stackoverflow.com/questions/922544/using-variable-keys-to-access-values-in-javascript-objects
        var returnList = []
        var r;
        //Loops through every item
        /*this.items.items.length;*/
        for (r = 0; r < 2; r++) {
          var l;
          //Loop through every value of the item (ex: title, first name)
          var count=0
          for (l = 0; l < Object.keys(this.items.items[r]).length - 1; l++){  //Reference to this link: https://stackoverflow.com/questions/5223/length-of-a-javascript-object
            var thing=lkey[l]
            /*console.log(this.items.items + '------------')*/
            console.log(this.items.items[r][thing] + '----------------')
            var thing2=this.items.items[r][thing]
            console.log(thing2)
            var p;
            /*//Loops through every word in the string, and for every word that matches, add a count*/
            for (p = 0; p < searchString.length; p++) {
              console.log(searchString[p])
              if (thing2.toLowerCase().includes(searchString[p])) {
                console.log("Did match")
                count+=1
              }
              else {
                console.log("Did not match")
              }
            }
          }
          var percent = count / searchString.length * 100;
          if (count >= 1) {
            returnList[r] = count;
            console.log("count: " + count + " returnList: ")
            console.log(searchString.length)
            console.log(returnList)
            returnList[r] = percent;
          }
          }

          /*returnList.sort(function(a, b) {*/  //Reference: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
          /*return a[1] - b[1]*/
        /*})*/
        /*console.log(returnList)*/
        /*return returnList*/
        return 1

        /*articles_array = articles_array.filter(function(item){*/
        /*if(item.title.toLowerCase().indexOf(searchString) !== -1){*/
          /*return item;*/
        /*}*/
      /*})*/
      }
    }
  },
  mounted () {
    axios.get('http://localhost:3000/items')
      .then((response) => {
        this.items = response.data
        });
  }
}
</script>

<style scoped>
</style>
