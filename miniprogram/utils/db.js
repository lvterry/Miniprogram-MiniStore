const db = wx.cloud.database({
  env: "mini-store-op3rr"
})

module.exports = {
  getProducts() {
    return db.collection('product').get()
  },

  getProductDetail(id) {
    return wx.cloud.callFunction({
      name: 'productDetail',
      data: {
        id: id
      }
    })
  }
}