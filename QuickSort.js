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

btn[0].addEventListener("click", () => quickSort(0, arr.length - 1));

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

async function quickSort(left, right) {
    if (left < right) {
        let pivotIndex = await partition(left, right);
        await quickSort(left, pivotIndex - 1);
        await quickSort(pivotIndex + 1, right);
    }
}

async function partition(left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            await swap(i, j);
        }
    }

    await swap(i + 1, right);
    return i + 1;
}

async function swap(i, j) {
    await sleep(700);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    swapColorHeight(i, j);
}

function swapColorHeight(i, j) {
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
    impImg.src = "./img/quickc.png"
})
cpp.addEventListener("click", () => {
    impImg.src = "./img/quickcpp.png"
})
java.addEventListener("click", () => {
    impImg.src = "./img/quickjava.png"
})
js.addEventListener("click", () => {
    impImg.src = "./img/quickjs.png"
})
py.addEventListener("click", () => {
    impImg.src = "./img/quickpy.png"
})