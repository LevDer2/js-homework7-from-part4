import {products} from "./data.js";
import template from "./data-template.hbs";

const dataList = document.querySelector(".data-list");
dataList.innerHTML = template({ products });

console.log(dataList);

