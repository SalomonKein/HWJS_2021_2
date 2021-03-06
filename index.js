class Hamburger {
  constructor(size, stuffing) {
    try {
      if (size === Hamburger.SIZE_SMALL || size === Hamburger.SIZE_LARGE) {
        this.size = size;

        if (
          stuffing === Hamburger.STUFFING_CHEESE ||
          stuffing === Hamburger.STUFFING_SALAD ||
          stuffing === Hamburger.STUFFING_POTATO
        ) {
          this.stuffing = stuffing;
        } else {
          throw new Error (`invalid stuffing ${stuffing}`);
        }
      } else {
        throw new Error (`invalid size ${size}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  addTopping(topping) {
    try {
      if (
        topping === Hamburger.TOPPING_MAYO ||
        topping === Hamburger.TOPPING_SPICE
      ) {
        if (topping !== this.topping && topping !== this.topping2) {
          if (this.topping) {
            return (this.topping2 = topping);
          }
          return (this.topping = topping);
        } else {
         throw new Error( `This topping is invited`);
        }
      } else {
        throw new Error( `invalid topping ${topping}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  removeTopping(topping) {
    if (topping === this.topping2) {
      return delete this.topping2;
    }
    if (topping === this.topping) {
      return delete this.topping;
    }
    return;
  }
  calculatePrice() {
    let sum = 0;
    if (this.topping2 && this.topping) {
      return (sum =
        this.size.cost +
        this.stuffing.cost +
        this.topping.cost +
        this.topping2.cost);
    }
    if (this.topping2) {
      return (sum = this.size.cost + this.stuffing.cost + this.topping2.cost);
    }
    if (this.topping) {
      return (sum = this.size.cost + this.stuffing.cost + this.topping.cost);
    }
    return (sum = this.size.cost + this.stuffing.cost);
  }
  calculateCalories() {
    let sum = 0;
    if (this.topping2 && this.topping) {
      return (sum =
        this.size.kall +
        this.stuffing.kal +
        this.topping.kall +
        this.topping2.kall);
    }
    if (this.topping2) {
      return (sum = this.size.kall + this.stuffing.kall + this.topping2.kall);
    }
    if (this.topping) {
      return (sum = this.size.kall + this.stuffing.kall + this.topping.kall);
    }
    return (sum = this.size.kall + this.stuffing.kall);
  }
  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }

  getToppings() {
    let arrTopping;
    if (this.topping2 && this.topping) {
      arrTopping = [this.topping, this.topping2];
    }
    if (this.topping2) {
      arrTopping = [this.topping2];
    }
    if (this.topping) {
      arrTopping = [this.topping];
    }
    return arrTopping;
  }
}
Hamburger.SIZE_SMALL = {cost: 50, kall: 20, name: "SIZE_SMALL"};
Hamburger.SIZE_LARGE = {cost: 100, kall: 40, name: "SIZE_LARGE"};
Hamburger.STUFFING_CHEESE = {cost: 10, kall: 20, name: "STUFFING_CHEESE"};
Hamburger.STUFFING_SALAD = {cost: 20, kall: 5, name: "STUFFING_SALAD"};
Hamburger.STUFFING_POTATO = {cost: 15, kall: 10, name: "STUFFING_POTATO"};
Hamburger.TOPPING_MAYO = {cost: 20, kall: 5, name: "TOPPING_MAYO"};
Hamburger.TOPPING_SPICE = {cost: 15, kall: 0, name: "TOPPING_SPICE"};

// class HamburgerException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "HamburgerException";
//   }
// }

// // ?????????????????? ?????????????????? ?? ???????????????? ???? ????????
// var hamburger2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// var hamburger2 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.SIZE_SMALL);
// var hamburger2 = new Hamburger(Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHEESE);
// // ?????????????? ???? ????????????????
// hamburger2.addTopping(Hamburger.TOPPING_MAYO);
// // ?????????????? ?????????????? ?????? ??????????????
// console.log("Calories: %f", hamburger2.calculateCalories());
// // ?????????????? ??????????
// console.log("Price: %f", hamburger2.calculatePrice());
// // ?? ?????? ?????????????????? ?? ?????????? ???????????????? ?????? ????????????????
// hamburger2.addTopping(Hamburger.TOPPING_wer);
// hamburger2.addTopping(Hamburger.TOPPING_MAYO);
//  hamburger2.addTopping(Hamburger.TOPPING_SPICE);
// //  hamburger2.addTopping(Hamburger.TOPPING_MAYO);
// //  hamburger2.addTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger2);
// // ?? ?????????????? ???????????? ???????????
// console.log("Price with sauce: %f", hamburger2.calculatePrice());
// // ??????????????????, ?????????????? ???? ???????????????????
// console.log(
//   "Is hamburger large: %s",
//   hamburger2.getSize() === Hamburger.SIZE_LARGE
// ); // -> false
// // ???????????? ??????????????
// // hamburger2.removeTopping(Hamburger.TOPPING_MAYO);
// console.log("Have %d toppings", hamburger2.getToppings().length); // 1
// console.log(hamburger2);
