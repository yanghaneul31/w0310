// HTML contents function
import { data } from "./data.js";

const tabs = $("#tabs");
const tabs_1 = tabs.find("#tabs-1");

const tabMenu = function (i1, i2, i3) {
    tabs_1.html(`
        <div>
            <div><img src="${data[i1].img}" alt="${data[i1].txt}"></div>
            <h3>1위. ${data[i1].txt}</h3>
        </div>
        <div>
            <div><img src="${data[i2].img}" alt="${data[i2].txt}"></div>
            <h3>1위. ${data[i2].txt}</h3>
        </div>
        <div>
            <div><img src="${data[i3].img}" alt="${data[i3].txt}"></div>
            <h3>1위. ${data[i3].txt}</h3>
        </div>
    `);
}

export default tabMenu;