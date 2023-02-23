const data =[//扁平数据  一维数组  嵌套形成树形结构
  {//找到元素里面哪个字段可以说明是树形结构
    id: 2,
    pid:0,  //pid为关键字  判断的是哪一级的数据  0 为第一级
    path:'/course',
    name: 'Course',
    title:'课程管理'
  },
  {
    id: 3,
    name: ' CourseOperate',
    path: 'operate',
    link:'/course/operate',
    pid: 2,// parentId
    title:'课程操作'
  },
  {
    id: 4,
    name: 'CourseInfoData',
    path: 'info data',
    link: '/course/operate/info_data',
    pid: 3,
    title:'课程数据'
  },
  {
    id: 5,
    name: 'CourseAdd',
    path: 'add',
    link:'/course/add',
    pid: 2,
    title:'增加课程'
  },
  {
    id:6,
    pid:0,
    path:'/student',
    name:'Student',
    title:'学生管理'
  },
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
  },
  {
    id: 9,
    name: '123123',
    path: '234234',
    link: '/student/add',
    pid: 8,
    title:'增加学生'
  },
  {
    id: 10,
    name: '234234',
    path: '345345',
    link: '/student/add',
    pid: 9,
    title:'增加学生'
  },
  {
    id: 11,
    name: '345345',
    path: '456456',
    link: '/student/add',
    pid: 10,
    title:'增加学生'
  }
]


