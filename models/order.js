class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate() {
    // return this.date.toLocaleDateString('en-EN', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    var dateFormat = require('dateformat');
    // return moment(this.date).format('MMMM Do YYYY, hh:mm');
    return dateFormat(this.date, 'ddd mmm dd yyyy, hh:MM');
  }
}

export default Order;
