Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue !',
      message2: 'Vous avez affiché cette page le ' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: 'Apprendre JavaScript' },
        { text: 'Apprendre Vue' },
        { text: 'Créer quelque chose de génial' }
      ],
      groceryList: [
        { id: 0, text: 'Légumes' },
        { id: 1, text: 'Fromage' },
        { id: 2, text: 'Tout ce que les humains sont supposés manger' }
      ]
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
