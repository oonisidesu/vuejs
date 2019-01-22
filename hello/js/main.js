Vue.filter('toUSD', function (jpy) {
  return jpy / 100
})

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix) {
  return text.substring(0, length) + suffix
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    number: 100,
    ok: true,
    price: 29800,
    jpyPrice: 298000,
    text: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    url: 'https://www.google.co.jp'
  },
  // filters: {
  //   numberFormat: function(value) {
  //     return value.toLocaleString()
  //   }
  // },
  methods: {
    clickHandler: function(event){
      this.message = this.message.split('').reverse().join('')
    }
  }
})