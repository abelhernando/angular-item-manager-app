const DB = require("./database.json");

const logic = {
  limit: 5,

  getProducts(search, pageNumber, sort) {
    const page = Number(pageNumber) || 1;
    let items = DB.items;

    if (search) items = logic._getSearchedItems(items, search);

    totalCount = items.length;
    pageCount = Math.ceil(totalCount / this.limit);

    items = this._prepareData(items, page, sort);

    return {
      products: items,
      totalCount,
      pageCount,
    };
  },

  _prepareData(data, page, sort) {
    const preparingData = [...data];
    const sortedItems = this._sortData(preparingData, sort);
    const items = this._paginateData(sortedItems, page);
    return items;
  },

  _paginateData(data, page) {
    const first = (page - 1) * this.limit;
    const last = page * this.limit;

    return data.slice(first, last);
  },

  _sortData(data, sort) {
    const isSorted =
      !sort || (sort && sort.hasOwnProperty("field") && !sort.field);

    if (isSorted) return data;

    const result = this._sortAction(data, sort);
    return result;
  },

  _sortAction(data, sort) {
    return data.sort((a, b) => {
      let pre = a[sort.field];
      let post = b[sort.field];

      if (sort.field === "price") {
        pre = Number(pre);
        post = Number(post);
      }
      if (sort.order === "asc") {
        if (pre > post) {
          return 1;
        }
        if (pre < post) {
          return -1;
        }
      } else if (sort.order === "desc") {
        if (pre < post) {
          return 1;
        }
        if (pre > post) {
          return -1;
        }
      }

      return 0;
    });
  },

  _getSearchedItems(data, search) {
    const value = search.toLowerCase();
    return data.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.price.includes(value)
      );
    });
  },
};

module.exports = logic;
