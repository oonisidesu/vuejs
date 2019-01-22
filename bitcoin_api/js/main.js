new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true,
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      // console.log(response.data.bpi)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error)
      this.hasError = true
    }.bind(this))
    .finally(function(){
      this.loading = false
    }.bind(this))

    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        // console.log(response.data.bpi)
        this.kiyo = response.data.kiyo
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})

var MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516);
var Options = {
  zoom: 15,      //地図の縮尺値
  center: MyLatLng,    //地図の中心座標
  mapTypeId: 'roadmap'   //地図の種類
};
var map = new google.maps.Map(document.getElementById('map'), Options);

