let arr = [50, 40, 30, 20, 10, 80, 14];
let parentdiv = document.querySelector('.parent-div');
let btn = document.querySelector('.strtbtn');

let i = 0;

arr.forEach(e => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = e * 6 + 'px';
    innerDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    innerDiv.textContent = e;
    innerDiv.setAttribute('id', 'elem' + i);
    i++;
    innerDiv.classList.add('innerDiv');
    parentdiv.appendChild(innerDiv);
});

btn.addEventListener("click", () => mergeSort(arr, 0, arr.length - 1));

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

async function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);
        await merge(arr, left, mid, right);
    }
}

async function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        await sleep(700);
        swapColorHeight(k, arr[k]);
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        await sleep(700);
        swapColorHeight(k, arr[k]);
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        await sleep(700);
        swapColorHeight(k, arr[k]);
        j++;
        k++;
    }
}

function swapColorHeight(index, height) {
    let a = 'elem' + index;
    let e1 = document.getElementById(a);
    e1.style.height = height * 6 + 'px';
}
