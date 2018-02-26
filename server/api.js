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
      "content": "MEN",
    },
    {
      "link": "3",
      "content": "WOMEN",
    },
  ],
}

const exData = {
  banner: [
    {
      "image": "http://img.alpha.wemep.co.kr/gnb_main/2018-02-05/1517756400_964a333f5cac59e555ace12dbf576fbf650b0a03.jpg",
    },
    {
      "image": "http://img.alpha.wemep.co.kr/gnb_main/2018-02-05/1517756400_6b231645cbcaf2e0beca9ed55ca96d19b7554c0b.jpg",
    },
    {
      "image": "http://img.alpha.wemep.co.kr/gnb_main/2018-02-05/1517756400_964a333f5cac59e555ace12dbf576fbf650b0a03.jpg",
    },
    {
      "image": "http://img.alpha.wemep.co.kr/gnb_main/2018-02-05/1517756400_6b231645cbcaf2e0beca9ed55ca96d19b7554c0b.jpg",
    },
  ],
  product: [
    {
      "id": 1,
      "image": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/lwdrghrtvnawnbhmnpel/vandal-high-lx-womens-shoe-0WQbWC.jpg",
      "imageHover": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/qv0ins2o0xdk1ot6ojrz/vandal-high-lx-womens-shoe-0WQbWC.jpg",
      "title": "Nike Air Max 90",
      "color": "White / Black",
      "size": ["9", "10", "11"],
      "price": 100000,
      "unit": "WON",
    },
    {
      "id": 2,
      "image": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/fy8elp7pqwcgmldj6vsv/vandal-high-lx-womens-shoe-0WQbWC.jpg",
      "imageHover": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/u96ute0oquntftgiy7du/vandal-high-lx-womens-shoe-0WQbWC.jpg",
      "title": "Nike Air Terra 89",
      "color": "White / Red",
      "size": ["9", "10", "11", "12", "13"],
      "price": 90000,
      "unit": "WON",
    },
    {
      "id": 3,
      "image": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/kvnx1wgmjqmzkprckrrd/air-force-1-07-patent-womens-shoe-dTmQJf.jpg",
      "imageHover": "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mbv3nkdhhmmd84bjpmsx/air-force-1-07-patent-womens-shoe-dTmQJf.jpg",
      "title": "Nike Air Force 1",
      "color": "White / Blue",
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
