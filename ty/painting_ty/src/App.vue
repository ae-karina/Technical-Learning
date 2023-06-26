<script setup lang="ts">
import { onMounted, ref } from 'vue'
const width = ref<number>(1920)
const height = ref<number>(1080)
// 是否允许进行画线————ty
let printFlag = ref<boolean>(false)
// 当前画布对象————ty
let canvasLineDom: any = null
// 当前画布容器对象————ty
let context: any = null
// 是否允许在canvas上进行描线————ty
let allowPrintLine = ref<boolean>(false)

let showx=ref<number>(0)
let showy = ref<number>(0)


// 画布宽高自适应————ty
onMounted(() => {
  // 第一次加载时获取当前宽高，赋值给画布————ty
  const dom = document.getElementsByTagName('body')
  width.value = dom[0].clientWidth
  height.value = dom[0].clientHeight
  // 当窗口大小改变时更改画布宽高————ty
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
    height.value = window.innerHeight-80
  })
  // 监听键盘enter事件，当用户按下enter时，清空线————ty
  window.addEventListener('keydown', () => {
    printFlag.value = !printFlag.value
    if (canvasValid()) {
      context.reset()
      showx.value = 0
      showy.value = 0
    }
  })
})


// 获取画布对象————ty
onMounted(() => {
  canvasLineDom = document.querySelector('#canvas-line')
  if (canvasValid()) {
    context = canvasLineDom.getContext('2d')
    allowPrintLine.value = true
  }
})


// 获取鼠标在canvas上的具体坐标————ty
const windowToCanvas = (canvas: any, x: number, y: number) => {
  let rect = canvas.getBoundingClientRect()
  return {
    x: x - rect.left * (canvas.width / rect.width),
    y: y - rect.top * (canvas.height / rect.height)
  }
}


// 鼠标按下————ty
function handlerMousedown(e: any) {
  allowPrintLine.value = true
  if (canvasValid()) {
    let ele = windowToCanvas(canvasLineDom, e.clientX, e.clientY)
    let { x, y } = ele
    context.moveTo(x, y)
    canvasLineDom.onmousemove = handlerMouseMove
  }
}

// 鼠标移动————ty
const handlerMouseMove = (e: any) => {
  if (canvasValid() && allowPrintLine.value) {
    let ele = windowToCanvas(canvasLineDom, e.clientX, e.clientY)
    let { x, y } = ele
    context.lineTo(x, y)
    context.lineWidth = '5'
    context.strokeStyle = 'rgba(255,0,0,0.87)'
    context.stroke()
    showx.value=ele.x
    showy.value = ele.y
  }
}

// 鼠标松开————ty
function handlerMoseUp(e: Event) {
  if (canvasValid()) {
    allowPrintLine.value = false
  }
}


function clickChoice(){

}

// 是否支持canvas————ty
function canvasValid(): boolean {
  return !canvasLineDom || !canvasLineDom.getContext ? false : true
}

</script>

<template>
  <canvas @mousedown="handlerMousedown" @mouseup="handlerMoseUp" id="canvas-line" :width="width" :height="height">您的浏览器暂不支持Canvas,请切换浏览器!</canvas>
  	<div :style="{ zIndex: printFlag ? -99 : 100 }" class="content"><slot>放置所需内容</slot></div>
    <div>X:{{ showx }}</div>
    <div>Y:{{ showy }}</div>
</template>

<style scoped>

#canvas-line {
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0);
	margin: 20px 0;
	padding: 0px;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
}
.content {
	overflow: hidden;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
}


</style>
