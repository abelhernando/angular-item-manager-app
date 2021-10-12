const DB = require("./database.json");

const logic = {
  pageSize: 5,

  getAllItems(pageNumber) {
    const page = Number(pageNumber) || 1;

    const first = (page - 1) * this.pageSize;
    const last = page * this.pageSize;

    const items = DB.items.slice(first, last);
    totalCount = DB.items.length;
    pageCount = Math.ceil(totalCount / this.pageSize);

    return {
      products: items,
      totalCount,
      pageCount,
    };
  },

  getSearchedItems(search) {
    const searchValue = search.toLowerCase();
    const foundItems = DB.items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue)
      );
    });

    const pageSize = 5;
    const items = foundItems.slice(0, pageSize);
    totalCount = foundItems.length;
    pageCount = Math.ceil(totalCount / pageSize);

    return {
      items,
      totalCount,
      pageCount,
    };
  },
};

module.exports = logic;
