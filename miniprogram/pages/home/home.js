const db = require('../../utils/db')
const util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList()
  },

  getProductList() {
    wx.showLoading({
      title: 'Loading...',
    })

    db.getProducts().then(result => {
      console.log(result)
      wx.hideLoading()

      const data = result.data
      data.forEach(product => product.price = util.formatPrice(product.price))

      if (data.length) {
        this.setData({
          productList: data
        })
      }
    }).catch(err => {
      console.error(err)
      wx.hideLoading()
    })

  }
})