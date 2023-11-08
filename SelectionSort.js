function selectionSort() {
    window.location.href = 'http://127.0.0.1:5500/SelectionSort.html'
    // console.log("working");
}
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

btn[0].addEventListener('click', () => selectionSort(arr));

const sleep1 = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

async function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        await sleep1(700);

        if (minIndex !== i) {
            swapNumber(arr, i, minIndex);
            await swapColorHeight(i, minIndex);
        }
    }
}

function swapNumber(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

async function swapColorHeight(i, j) {
    let a = 'elem' + i;
    let b = 'elem' + j;
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
    impImg.src = "./img/selectionc.png"
})
cpp.addEventListener("click", () => {
    impImg.src = "./img/selectioncpp.png"
})
java.addEventListener("click", () => {
    impImg.src = "./img/selectionjava.png"
})
js.addEventListener("click", () => {
    impImg.src = "./img/selectionjs.png"
})
py.addEventListener("click", () => {
    impImg.src = "./img/selectionpy.png"
})
