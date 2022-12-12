import moment from "moment";

export const Filter = {
  getFullName(user) {
    if (user) {
      return `${user.firstName} ${user.lastName}`
    }
    return ""
  },
  currentUser() {
    return {
      username: "dexter",
      firstName: "Jamal",
      lastName: "Da Conquerer",
      profileImage: "images/conquerer.jpeg",
    }
  },

  toLocalTimeString(str) {
    return moment(str).calendar(null, {
      lastDay: "[Yesterday,] LT",
      sameDay: "[Today,] LT",
      nextDay: "[Tomorrow,] LT",
      lastWeek: "LLLL",
      nextWeek: "LLLL",
      sameElse: "LLLL",
    });
  },

  formatDate(value) {
    if (value) {
      return moment(String(value)).format("MMM DD, YYYY");
    }
  },

  formatDateFromNow(value) {
    if (value) {
      moment.locale("en");
      return moment(String(value)).fromNow();
    }
  },

  formatDateFromNowShort(value) {
    if (value) {
      moment.locale("en");
      const ago = moment(String(value)).fromNow(true);
      const splitAgo = ago.split(" ");

      if (ago.includes("seconds")) {
        return ago;
       
      }

      return `${splitAgo[0]}${splitAgo[1][0]}`;
    }
  },

  // #REF https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn
  formatLargeNumber: (num) => {
    if (num === null || num === undefined || num === 0) {
      return "0";
    } // terminate early
    const fixed = 0; // number of decimal places to show
    let b = num.toPrecision(2).split("e"); // get power
    let k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
    let c =
      k < 1
        ? num.toFixed(0 + fixed)
        : (num / Math.pow(10, k * 3)).toFixed(1 + fixed); // divide by power
    let d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
    let e = d + ["", "K", "M", "B", "T"][k]; // append power
    return e;
  },

  truncateInMiddle(str, len) {
    if (str.length > len) {
      return (
        str.substr(0, len - 5) + "..." + str.substr(str.length - 5, str.length)
      );
    } else {
      return str;
    }
  },
  truncateTxt(str, len) {
    if (str.length > len) {
      return (
        str.substr(0, len - 5) + "..."
      );
    } else {
      return str;
    }
  },
};
