import React, { Component, Fragment } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import OrderDetail from '../OrderDetail';
import './styles.css';

class Orders extends Component {
  state = {
    ordersList: [{
      id: 1,
      name: 'Iphone',
      brand: "Apple",
      model: "iphone 8 plus",
      memory: "256",
      madeYear: "2018",
      color: "gray",
      price: "60000",
      // imageUrl: "https://www.google.com/search?q=iphone+8+plus&source=lnms&tbm=isch&sa=X&ved=0ahUKEwih94K2_4DhAhVno4sKHQD5DrkQ_AUIDigB&biw=1600&bih=912#imgrc=06fmhkGdKKNdHM:",
      description: "Как и ожидалось, новые смартфоны Apple получили названия iPhone 8 и iPhone 8 Plus. Это означает, что компания решила пропустить поколение iPhone 7s/7s Plus."
    },
    {
      id: 2,
      name: 'Mi',
      brand: "Xiomi",
      model: "Mi 9",
      memory: "64",
      madeYear: "2019",
      color: "red",
      price: "32000",
      imageUrl: "",
      description: "Встроенный в экран сканер отпечатков пальцев.48 Мп (Sony IMX586, 0,8 мкм, f/1.75) + 12 Мп (1 мкм, f/2.2,) + 16 Мп (Sony IMX 481, 1 мкм, f/2.2, угол обзора 117 градусов).",
    },
    {
      id: 3,
      name: 'Sams',
      brand: "Samsung",
      model: "Galaxy S10",
      memory: "128",
      madeYear: "2018",
      color: "blue",
      price: "40000",
      imageUrl: "",
      description: "Всего было выпущено 2 варианта Samsung Galaxy S10: 6/128 ГБ и 8 ГБ/512 ГБ. В тандеме с картой памяти второй вариант может иметь до 1 ТБ встроенного накопителя.",
    },
    {
      id: 4,
      name: 'Hua',
      brand: "Huawei",
      model: "P 20",
      memory: "32",
      madeYear: "2018",
      color: "black",
      price: "45000",
      imageUrl: "",
      description: "Huawei P20 — производительный и красивый смартфон флагманского класса с модным безрамочным дизайном",
    },
    {
      id: 5,
      name: 'Xperia',
      brand: "sony",
      model: "Xperia XZ",
      memory: "512",
      madeYear: "2017",
      color: "white",
      price: "23000",
      imageUrl: "",
      description: "Также смартфон получил прогрессивный порт USB Type-C.",
    },
    {
      id: 6,
      name: 'ultra',
      brand: "asus",
      model: "ZenFone",
      memory: "256",
      madeYear: "2017",
      color: "brown",
      price: "20000",
      imageUrl: "",
      description: "смартфон с Android 5.0 поддержка двух SIM-карт экран 5.5, разрешение 1920x1080 камера 13 МП, автофокус",
    },
    {
      id: 7,
      name: 'HTC One',
      brand: "htc",
      model: "M8",
      memory: "32",
      madeYear: "2019",
      color: "blue",
      price: "15000",
      imageUrl: "",
      description: "HTC One оснащен 5-дюймовым дисплеем с разрешением 1920 x 1080 пикселей (441 ppi), 4-ядерным процессором Qualcomm Snapdragon 801 с частотой 2,3 ГГц, 2 ГБ оперативной памяти и 16 или 32 ГБ флэш-памяти",
    },
    {
      id: 8,
      name: 'Meizu M2',
      brand: "meyzi",
      model: "Meizu M2 mini",
      memory: "32",
      madeYear: "2018",
      color: "black",
      price: "50000",
      imageUrl: "",
      description: "Meizu M2 mini, новый бюджетный смартфон компании, сертифицирован в TENAA, что означает, что мы можем рассказать его технические характеристики. ",
    },
    {
      id: 9,
      name: 'Mi',
      brand: "Xiaomi",
      model: "Mi 8",
      memory: "128",
      madeYear: "30000",
      color: "red",
      price: "38000",
      imageUrl: "",
      description: "Новейший флагман Xiaomi оказался хотя и беззастенчивой, но весьма добротной копией iPhone X.",
    }],
    title: 'Orders List',
    isNeedShowOrderDetail: false,
    onClickOrderData: {},
    storeOrderList: [],
  }
  componentWillMount() {
    this.setState({
      storeOrderList: this.state.ordersList,
    })
  }
  componentDidMount

  onClickOrder = (order) => {
    console.log('bugaga', order)
    this.setState({
      title: order.name,
      isNeedShowOrderDetail: true,
      clickOrderData: order,
    })
  }
  onClickBack = (orderName) => {
    this.setState({
      isNeedShowOrderDetail: false,
      clickedOrderData: {},
      title: 'Orders list'
    })
    console.log(orderName)
  }
  onChangeSearch = (event) => {
    this.searchOrder(event.target.value)
  }
  searchOrder = (inputValue) => {
    const { storeOrderList } = this.state;
    if (inputValue === '') {
      this.setState({
        ordersList: storeOrderList
      })
    } else {
      let searchOrder = [];
      const regex = new RegExp(`\\b${inputValue}`, 'gi')
      storeOrderList.map(order => {
        if (regex.test(order.name)) {
          searchOrder.push(order)
        }
        return false;
      })

      this.setState({
        ordersList: searchOrder
      })
    }
  }
  render() {
    const { ordersList, title, isNeedShowOrderDetail, clickOrderData } = this.state;
    return (
      <section className="Orders">
        <div className="container section-container">
          <h1 className="orders__title">{title}</h1>
          {
            !isNeedShowOrderDetail ? (
              <Fragment>
                <input onChange={this.onChangeSearch} className="orders__search" />
                <ul className="orders__list">
                  {
                    ordersList.map((order, index) => {
                      return (
                        <li key={order.id} className="orders__item">
                          <img src={order.imageUrl} alt={order.name} className="orders__item-image" />
                          <h3 className="orders__item-name" onClick={() => this.onClickOrder(order)}>{order.name}</h3>
                          <LinesEllipsis
                            text={order.description}
                            maxLine='1'
                            ellipsis='...'
                            trimRight
                            onReflow={this.handleReflow}
                          />
                        </li>
                      )
                    })
                  }
                </ul>
              </Fragment>
            ) : (
                <OrderDetail orderData={clickOrderData} onClickBack={this.onClickBack} />
              )
          }
        </div>
      </section>
    )
  }
}
export default Orders;