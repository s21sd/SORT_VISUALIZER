let c = document.getElementById('c');
let cpp = document.getElementById('cpp');
let java = document.getElementById('java');
let js = document.getElementById('js');
let py = document.getElementById('py');
let impImg = document.getElementById("impImg");
let arr = [50, 40, 30, 20, 10, 80, 14];
let parentdiv = document.getElementsByClassName('parent-div');
let btn = document.getElementsByClassName('strtbtn');

let i = 0;
arr.forEach(e => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = e * 6 + 'px';
    innerDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    innerDiv.textContent = e;
    innerDiv.setAttribute('id', 'elem' + i);
    i++;
    innerDiv.classList.add('innerDiv');
    parentdiv[0].appendChild(innerDiv);
});

btn[0].addEventListener("click", () => insertionSort(arr));

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            await sleep(700);
            arr[j + 1] = arr[j];
            swapColorHeight(j, j + 1);
            j--;
        }

        arr[j + 1] = key;
    }
}

function swapColorHeight(j, k) {
    let a = 'elem' + j;
    let b = 'elem' + k;
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    e1.style.height = h2 + 'px';
    e2.style.height = h1 + 'px';
    let temp = e1.textContent;
    e1.textContent = e2.textContent;
    e2.textContent = temp;
}

c.addEventListener("click", () => {
    impImg.src = "./img/Insertionc.png"
})
cpp.addEventListener("click", () => {
    impImg.src = "./img/Insertioncpp.png"
})
java.addEventListener("click", () => {
    impImg.src = "./img/Insertionjava.png"
})
js.addEventListener("click", () => {
    impImg.src = "./img/Insertionjs.png"
})
py.addEventListener("click", () => {
    impImg.src = "./img/Insertionpy.png"
})
