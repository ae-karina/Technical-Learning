<!-- created by ty -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';

// 默认是空的,页面加载完毕,说明组件已经存在了,获取文本框元素————ty
const inputRef = ref<HTMLElement | null>(null)
// 页面加载后的生命周期组合API
onMounted(() => {
  inputRef.value && inputRef.value.focus() // 自动获取焦点————ty
})

// 定义一个用于显示的计算器的操作————ty
const result = ref({
  num: " ",
  re: false
})

// 显示计算结果————ty
const res = ref({
  total: " ",
  tit: false
})


// 获取值并显示————ty
function getKeyValue(e: string) {
  if (!result.value.re && !res.value.tit) {
    result.value.num = e
    result.value.re = true
  } else {
    if (res.value.tit) {
      Clear()
      result.value.num += e
      result.value.re = true
    } else {
      result.value.num += e
    }

  }
}


//当输入的字符里面有算数的字符时，进行计算————ty
function cal() {
  if (result.value.num.includes('+') || result.value.num.includes('-') || result.value.num.includes('*') || result.value.num.includes('/')
    && /\d/.test(result.value.num.charAt(result.value.num.length - 1))) {
    calculation()
  }
}


//计算
function calculation() {
  try {
    let g: number = eval(result.value.num)
    res.value.total = g.toString()
  } catch (e) {

  }
  // 返回显示计算结果的值
  return res.value.total
}

// 清除所有的值————ty
function Clear() {
  result.value = {
    num: " ",
    re: false
  }
  res.value = {
    total: " ",
    tit: false
  }
}

// “=”的功能
function eal() {
  result.value.num = res.value.total,
    res.value = {
      total: " ",
      tit: true
    }
}


// 一个个删除功能—————ty
function del() {
  if (result.value.num.length) {
    console.log('xxx')
    result.value.num = result.value.num.slice(0, result.value.num.length - 1)
    if (!result.value.num.length) {
      console.log('del')
      result.value.re = false,
        res.value = {
          total: " ",
          tit: false
        }
    }
  }
}

</script>


<template>
  <div class="head">
    <input id="counterShow" class="oper" ref="inputRef" :value="result.num">
    <div id="showResult" class="sho" >{{ res.total }}</div>
  </div>

  <div class="cho fty">
    <div>mc</div>
    <div>m+</div>
    <div>m-</div>
    <div>mr</div>
    <div class="ico" @click="Clear">C</div>
    <div class="iconfont icon-chengbeifen ico" @click="getKeyValue('/')"></div>
    <div class="iconfont icon-shanchu ico" @click="getKeyValue('*')"></div>
    <div class="iconfont icon-shanchu1 ico" @click="del"></div>
  </div>

  <div class="totl">
    <div class="numb">
      <div @click="getKeyValue('1'),cal()">1</div>
      <div @click="getKeyValue('2'),cal()">2</div>
      <div @click="getKeyValue('3'),cal()">3</div>
      <div @click="getKeyValue('4'),cal()">4</div>
      <div @click="getKeyValue('5'),cal()">5</div>
      <div @click="getKeyValue('6'),cal()">6</div>
      <div @click="getKeyValue('7'),cal()">7</div>
      <div @click="getKeyValue('8'),cal()">8</div>
      <div @click="getKeyValue('9'),cal()">9</div>
      <div @click="getKeyValue('%'),cal()">%</div>
      <div @click="getKeyValue('0'),cal()">0</div>
      <div @click="getKeyValue('.'),cal()">.</div>
    </div>
    <div class="tapb">
      <div class="iconfont icon-jianhao" @click="getKeyValue('-'), cal()"></div>
      <div class="iconfont icon-jiahao"  @click="getKeyValue('+'), cal()"></div>
      <div class="iconfont icon-dengyu" @click="eal"></div>
    </div>
  </div>
</template>



<style scoped>
@import url('../assets/font/iconfont.css');

.head {
  height: 213px;
  padding: 1px 20px 2px 20px;
  background-color: #fcfcfc;
}

.oper {
  margin-top: 72px;
  height: 60px;
  width: 300px;
  text-align: right;
  line-height: 60px;
  font-size: 40px;
  font-weight: 700;
  font-family: "黑体";
  color: #464646;
  caret-color: #31b3e7;
  background: none;
  outline: none;
  border: none;
}

.sho {
  margin-top: 10px;
  height: 22px;
  font-size: 24px;
  text-align: right;
  line-height: 22px;
  color: #a1a1a1;
}

.cho{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  line-height: 86px;
}
.cho>div{
  width: 86px;
  height: 86px;
  background-color: #f0f0f0;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
}


.cho div:nth-child(4n){
  border-right: none;
}
.cho div:nth-child(-n+4){
  border-top: 1px solid #d3d3d3;
  color: #afafaf;
}

.cho .ico{
  color:#40c0e8;
}

.totl{
  display: flex;
}

.numb{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  line-height: 86px;
}

.numb>div{
  width: 86px;
  height: 86px;
  background-color: #fcfcfc;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
}

.tapb{
  display: flex;
  flex-direction:column;
  text-align: center;
  line-height: 86px;
}
.tapb>div{
  width: 86px;
  height: 86px;
  background-color: #f0f0f0;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #d3d3d3;
}


.tapb div:nth-child(-n+2){
   color:#40c0e8;
}

.tapb div:nth-child(3){
  flex:2;
  line-height: 172px;
  color: #edfcfe;
  background-color: #01b0ff;
}
</style>