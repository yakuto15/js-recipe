new Vue({
  el: "#nyuryoku",
  data: {
    nyuryokugaku: 0,
    kouzazandaka: 0,
    logs: [],
  },
  methods: {
    nyukin: function() {
      this.kouzazandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: Number(this.nyuryokugaku),
      })
    },
    syukkin: function() {
      this.kouzazandaka -= Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: Number(this.nyuryokugaku),
      })
    },
  },
})
