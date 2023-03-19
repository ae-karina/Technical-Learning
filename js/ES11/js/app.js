// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function(){
    import('./hello.js').then(module => {
        module.hello();
    });
}

// 默认暴露不需要写{}  import hello form。。。
// import函数返回结果是一个promise对象