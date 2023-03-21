import { hi } from 'm.js'
let a = 10
console.log(hi)
// 这是一个注释
console.log(a)

// a = 'hello'

function fn(a: number, b: number) {
  return a + b;
}

function fn2(this: Window) {  //手动指定就可以用 指定any也行
  alert(this)
}

let box1 = document.getElementById('box1')//元素不一定存在，执行就会报错，需检查
// if (box1 !== null) {
//   box1.addEventListener('click', function () {
//     alert('hello');
//   })
// }


box1?.addEventListener('click', function () {
  alert('hello');
});