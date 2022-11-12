import { Component } from "react";
import { Link } from "react-router-dom";

export default class FotoProduct extends Component {
  render() {
    return (
      <Link class="flex justify-center" to={`/product/${this.props.item.Uuid}`}>
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img
              class="rounded-t-lg w-full"
              src={this.props.item.Foto}
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{this.props.item.Title}</h5>
          </div>
        </div>
      </Link>
    );
  }
}
