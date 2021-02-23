// Array.prototype.last = () => {
//   return this[this.length - 1];
// }

new Vue({
    // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
    el: '#app',
    // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
    data: {
        name: '四郎',
        course: 'Webエンジニアコース',
        acceptancePeriod: '2019年01月期',
        defaultLastId: 3,
        students: [
            { id: 1, name: '一郎', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
            { id: 2, name: '次郎', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
            { id: 3, name: '三郎', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
        ]
    },
    // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
    methods: {
      addStudent: function(event) {
          this.students.push({ 
              id: this.students.length + 1, 
              name: this.name, 
              course: this.course, 
              acceptancePeriod: this.acceptancePeriod 
          })
          this.name = '';
          this.course = '';
          this.acceptancePeriod = '';
          // この function() { } の中にaddStudentメソッド
          // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      }
    }
});

// why: what: how:

// HOW: debag
// 1. console.log(a)
// 2. window.eee = a => console in inspect: window.a
// 3. global.eee = a => console in inspect: a

// v = new Vue()
// this != methods
// v.bind(this)
// this = v