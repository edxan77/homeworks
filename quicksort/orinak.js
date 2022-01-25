let mas = [545, 55, 456, 1, 1, 1, 3, 5];
function qsort(n) {
  if (n.length < 2) {
    return n;
  }

  let index = Math.floor(Math.random() * n.length);
  let currentitem = n[index];
  let more = [];
  let less = [];

  for (let i = 0; i < n.length; i++) {
    if (i === index) {
      continue;
    }
    if (n[i] > currentitem) {
      more.push(n[i]);
    } else {
      less.push(n[i]);
    }
  }

  return [...qsort(less), currentitem, ...qsort(more)];
}

let count = 0;
let mas2 = [];
window.addEventListener("keypress", function (n) {
  let li = document.createElement("li");
  li.id = count;
  document.getElementById("cuc").appendChild(li);

  count++;
  mas2.push(n.keyCode);

  for (let i = 0; i < mas2.length; i++) {
    document.getElementById(i).innerText = qsort(mas2)[i];
  }
});


