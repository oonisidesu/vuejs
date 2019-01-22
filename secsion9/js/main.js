var app = new Vue({
    el: '#app',
    data: {
      isLarge: false,
      hasError: true,
      largeClass: 'large',
      dangerClass: 'text-danger',
      classObject: {
        'large': true,
        'text-danger': true
      },
      largeClass2: {
        large: true,
        'bg-gray': true
      },
      dangerClass2: {
        'text-danger': true
      },
    }
})