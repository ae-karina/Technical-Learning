//树形结构数据结构化
// pid字段为基础  转成下面结构的树形结构   这是简单的只有一个字段  有的会有两个

// 树形结构化  vue会用   后端返回的路由数据  是扁平结构  接收数据之后 先变树形结构  再变成vue react的路由 动态加载到路由列表里面去
// 数据转化到don节点  做渲染  先要转换树结构再用一个方法转成一个节点 放到节点里面去



/* 
[
  {    第一级别  pid=0的数据
    id: 2,  //对应id=2的子数据是什么 即pid=2的数据 放到id=2的children数组里
    pid:0,  //pid为关键字
    path:'/course',
    name: 'Course',
    title:'课程管理',
    children:[
      {
        id: 3,
        name: ' CourseOperate',
        path: 'operate',
        link:'/course/operate',
        pid: 2,// parentId
        title:'课程操作',
        children:[
          {
            id: 4,
            name: 'CourseInfoData',
            path: 'info data',
            link: '/course/operate/info_data',
            pid: 3,
            title:'课程数据'
          }
        ]
      },
      {
        id: 5,
        name: 'CourseAdd',
        path: 'add',
        link:'/course/add',
        pid: 2,
        title:'增加课程'
      }
    ]
  },
  {
    id:6,
    pid:0,
    path:'/student',
    name:'Student',
    title:'学生管理',
    children:[
      {
        id: 7,
        name: 'StudentOperate',
        path: 'operate',
        link: '/student/operate',
        pid: 6,
        title:'学生操作'
      },
      {
        id: 8,
        name:'StudentAdd',
        path: 'add',
        link:'/student/add',
        pid:6,
        title:'增加学生'
      }
    ]
  }

]

*/


/* 
丰富的知识储备      基础知识   函数     递归   闭包
                  数组对象的操作方法   重写   提升逻辑思维
*/


/* 
一个扁平数据列表   ->  描述树形结构的字段  PID ->   树形数据列表
PID   ->  ID


如何筛选顶级数据

顶级与子级数据分开
      递归操作   下一子级数据分析

PID   ->  ID ->    {PID}  ->ID  -> {
  children : [{PID}]
}

先做顶级和第二级  再说其他的
*/

/* const treeData = formaDataTree (data);

console.log(treeData);//通过另外一个函数转成vue里面的动态路由   后端接收数据  树形结构化  再去形成路由

function formaDataTree (data){
  let parents=data.filter(p =>p.pid === 0),//filter 会返回一个新的数组
    children=data.filter(c=>c.pid!== 0);


    dataToTree(parents,children);


    // console.log(parents);
    return parents;
    // console.log(parents,children);//(2) [{…}, {…}](5) [{…}, {…}, {…}, {…}, {…}]

    // parents children  array  [] 找到每一个parents
  function dataToTree(parents,children){
    parents.map( p=> {
      children.map((c,i)  => {
        if(c.pid === p.id){
          let _children=JSON.parse(JSON.stringify(children));
          _children.splice(i,1);//每一次那边里都少一个 完成数据结构化
          // console.log(_children);
          dataToTree([c],_children);  //没有这三句话 只处理了顶级和第二级
          if(p.children){
            p.children.push(c);
          }else{
            p.children=[c];
          }
        }
      });
    })
  }
} */
// dataToTree(c,children)//直接放c不对  dataToTree两个都是数组 ，写成数组形式
// dataToTree([c],children)//不能直接放children 因为是引用值  万一要再次使用的话   深拷贝下来

// 没有必要每一次都遍历所有children  每一次遍历的都是第一次分开的children   每一次删除一次 当前的c从children删掉 从_children删  和children引用都不同了
// map(数组,下标);
// 还没完成  子级的自己的数据

// vue  路由
/* export default function genRouter (userRouters) {
  let newRoutes = userRouters.map((r) =>{
    let routes = {
    path: r.path,
    name: r.name ,
    component: () => import('@/views/${r.name}'),
  }

    if (r.children) {
      routes.children = genRouter(r.children);
    }
    return routes;
  });
  
  return newRoutes;
} */


// 不用递归   扁平化思维解决   扁平化处理方式：每遍历一个就又遍历整个数组来找子元素

const treeData = formaDataTree (data);

console.log(treeData);

function formaDataTree (data){
  let _data = JSON.parse(JSON.stringify(data));  //操作的时候是一个副本

  return _data.filter(p => {
    const _arr = _data.filter(c => c.pid === p.id);
    _arr.length && (p.children =_arr);
    return p.pid === 0;
  })
}
