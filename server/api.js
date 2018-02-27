const express = require('express');
const router = express.Router();
const navigationData = {
  navigation: [
    {
      "link": "1",
      "content": "Home",
    },
    {
      "link": "3",
      "content": "Men",
    },
    {
      "link": "3",
      "content": "Women",
    },
  ],
}

const exData = {
  banner: [
    {
      "image": "/images/banner/banner-1.jpg",
    },
    {
      "image": "/images/banner/banner-2.jpg",
    },
    {
      "image": "/images/banner/banner-3.jpg",
    },
    {
      "image": "/images/banner/banner-4.jpg",
    },
  ],
  product: [
    {
      "id": 1,
      "image": "/images/product/1/thumb1.jpg",
      "imageHover": "/images/product/1/thumb2.jpg",
      "title": "Nike Air Max 90",
      "color": "White / Navy",
      "size": ["9", "10", "11"],
      "price": 100000,
      "unit": "WON",
    },
    {
      "id": 2,
      "image": "/images/product/2/thumb1.jpg",
      "imageHover": "/images/product/2/thumb2.jpg",
      "title": "Nike Air Terra 89",
      "color": "White / Red",
      "size": ["9", "10", "11", "12", "13"],
      "price": 90000,
      "unit": "WON",
    },
    {
      "id": 3,
      "image": "/images/product/3/thumb1.jpg",
      "imageHover": "/images/product/3/thumb2.jpg",
      "title": "Nike Air Force 1",
      "color": "Black / Gray",
      "size": ["9", "9.5", "10", "14"],
      "price": 140000,
      "unit": "WON",
    }
  ]
}

const indexData = Object.assign({}, navigationData, exData)

/* GET home page. */
router.get('/index/', function (req, res, next) {
  res.json(indexData);
});
module.exports = router;
