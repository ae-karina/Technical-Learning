// object表示一个js对象  不实用，因为都是对象
let a: object;
a = {};
a = function () {
};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值,属性名:属性值}
// 在属性名后边加上?，表示属性是可选的  写不写都不会报错
let b: { name: string, age?: number };
// b={}报错，要求一定要包含属性   多写的会报错
b = { name: '孙悟空', age: 18 };

// [propName: string]: any 表示任意类型的属性  只限制了name属性必须加，其他可以随便加  proname名字随便起
let c: { name: string, [propName: string]: any };
c = { name: '猪八戒', age: 18, gender: '男' };

/*
*   设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let d: (a: number, b: number) => number;
// d = function (n1: string, n2: string): number{
//     return 10;   有多余参数报错，参数类型不对也报错
// }


/*
*   数组的类型声明：
*       类型[]
*       Array<类型>
* */
// string[] 表示字符串数组   数组一般都存相同类型的值
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数值
let f: number[];

let g: Array<number>;//any也可  但是能不用就不用
g = [1, 2, 3];

/*
*   元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */

// 长度固定，效率比较好
let h: [string, number];
h = ['hello', 123];//多一个，少一个也会报错，类型不对也报错

/*
* enum 枚举
*
* */
enum Gender {
    Male,
    Female
}

// 一般存储数据越小越好，所以性别一般用0  | 1  存储，然后再做判断  但是给别人用就不知道判断规则了，不怎么用
// let i: { name: string, gender: 0 | 1 };
// i = {
//     name: '孙悟空',
//     gender: 1// 'male'
// }

// 枚举解决该方法  有多个值可取的时候用这个
let i: { name: string, gender: Gender };
i = {
    name: '孙悟空',
    gender: Gender.Male // 'male'   其实存储的时候就是0/1.但是已经不重要了
}

// console.log(i.gender === Gender.Male);
// &表示同时  要同时满足
let j: { name: string } & { age: number };
// j = {name: '孙悟空', age: 18};


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 2;