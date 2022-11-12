import { Component } from "react";

export default class FotoProduct extends Component {
  render() {
    return (
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <img
            class="rounded-t-lg w-full"
            src={this.props.item.Foto}
            alt=""
          />
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-4">{this.props.item.Title}</h5>
            <p class="text-gray-700 text-base mb-4">
              {this.props.item.Description}
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose product
            </button>
          </div>
        </div>
    );
  }
}
