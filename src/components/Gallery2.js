import { Component } from "react";
import FotoProduct2 from "./FotoProduct2";
import data from "../data/data_kategori_product.json"

export default class Gallery extends Component {
  render() {
    const product = data.filter(item => item.Title.toLowerCase().includes(this.props.title.toLowerCase().trim()))
    .sort((a, b) => {      
      if (this.props.sortBy === 'DESC'){
        return a.Title < b.Title ? 1 : -1
      }

      return a.Title > b.Title ? 1 : -1
    })
    .map((item) => {
      return (
        <FotoProduct2 item={item} key={item.Uuid} />
      )
    })

    return (
      <div class="grid grid-cols-4 gap-y-10">
        { product }
      </div>
    );
  }
}
