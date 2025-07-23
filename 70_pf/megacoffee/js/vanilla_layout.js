// tabs_layout function
import { data } from "./data.js";

const tabs_1 = document.getElementById('tabs-1');

const tabsFn = function (num1, num2, num3) {
    // $('#tabs-1').html(`
    tabs_1.innerHTML = `
        <div>
            <div><img src="${data[num1].img}" alt="${data[num1].txt}"></div>
            <h3>1위. ${data[num1].txt}</h3>
        </div>
        <div>
            <div><img src="${data[num2].img}" alt="${data[num2].txt}"></div>
            <h3>2위. ${data[num2].txt}</h3>
        </div>
        <div>
            <div><img src="${data[num3].img}" alt="${data[num3].txt}"></div>
            <h3>3위. ${data[num3].txt}</h3>
        </div>
    `;
}

export default tabsFn;