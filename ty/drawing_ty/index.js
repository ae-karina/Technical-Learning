let drawing = document.getElementById("drawing");
// 确保浏览器支持<canvas>
if (drawing.getContext) {
// let context = drawing.getContext("2d");
/* * 引自 MDN 文档 */
// 绘制红色矩形
// context.fillStyle = "#ff0000"; context.fillRect(10, 10, 50, 50);
// 绘制半透明蓝色矩形
// context.fillStyle = "rgba(0,0,255,0.5)"; context.fillRect(30, 30, 50, 50);

// 绘制红色轮廓的矩形
// context.strokeStyle = "#ff0000"; context.strokeRect(10, 10, 50, 50);
// 绘制半透明蓝色轮廓的矩形
// context.strokeStyle = "rgba(0,0,255,0.5)"; context.strokeRect(30, 30, 50, 50);

// 绘制红色矩形
// context.fillStyle = "#ff0000"; context.fillRect(10, 10, 50, 50);
// 绘制半透明蓝色矩形
// context.fillStyle = "rgba(0,0,255,0.5)"; context.fillRect(30, 30, 50, 50);
// 在前两个矩形重叠的区域擦除一个矩形区域 
// context.clearRect(40, 40, 10, 10);

// 取得图像的数据 URI
// let imgURI = drawing.toDataURL("image/png"); 

// 显示图片
// let image = document.createElement("img"); 
// image.src = imgURI;
// document.body.appendChild(image);

// 创建路径
// context.beginPath(); // 绘制外圆
// context.arc(100, 100, 99, 0, 2 * Math.PI, false); // 绘制内圆
// context.moveTo(194, 100);
// context.arc(100, 100, 94, 0, 2 * Math.PI, false); // 绘制分针
// context.moveTo(100, 100); context.lineTo(100, 15);
// 绘制时针
// context.moveTo(100, 100); context.lineTo(35, 100);
// 描画路径 
// context.stroke();

// context.font = "bold 14px Arial"; 
// context.textAlign = "center"; 
// context.textBaseline = "middle"; 
// context.fillText("12", 100, 20);
// 与开头对齐
// context.textAlign = "start"; 
// context.fillText("12", 100, 40); 

// 与末尾对齐
// context.textAlign = "end"; 
// context.fillText("12", 100, 60);

// let fontSize = 100;
// context.font = fontSize + "px Arial";
// while(context.measureText("Hello world!").width > 140) { 
  // fontSize--;
  // context.font = fontSize + "px Arial"; 
// } 
// context.fillText("Hello world!", 10, 10);
// context.fillText("Font size is " + fontSize + "px", 10, 50);

// 创建路径
// context.beginPath(); // 绘制外圆
// context.arc(100, 100, 99, 0, 2 * Math.PI, false); // 绘制内圆
// context.moveTo(194, 100);
// context.arc(100, 100, 94, 0, 2 * Math.PI, false); // 移动原点到表盘中心
// context.translate(100, 100); // 绘制分针
// context.moveTo(0, 0); context.lineTo(0, -85);
// 绘制时针
// context.moveTo(0, 0); context.lineTo(-65, 0);
// 描画路径 
// context.stroke();

// 创建路径
// context.beginPath(); // 绘制外圆
// context.arc(100, 100, 99, 0, 2 * Math.PI, false); // 绘制内圆
// context.moveTo(194, 100);
// context.arc(100, 100, 94, 0, 2 * Math.PI, false); // 移动原点到表盘中心
// context.translate(100, 100); // 旋转表针
// context.rotate(1); // 绘制分针
// context.moveTo(0, 0); 
// context.lineTo(0, -85);           
// // 绘制时针
// context.moveTo(0, 0); 
// context.lineTo(-65, 0);
// // 描画路径 
// context.stroke();

// 设置阴影
// context.shadowOffsetX = 5; 
// context.shadowOffsetY = 5; 
// context.shadowBlur = 4; 
// context.shadowColor = "rgba(0, 0, 0, 0.5)"; // 绘制红色矩形
// context.fillStyle = "#ff0000"; 
// context.fillRect(10, 10, 50, 50); // 绘制蓝色矩形
// context.fillStyle = "rgba(0,0,255,1)"; 
// context.fillRect(30, 30, 50, 50);

// let gradient = context.createLinearGradient(30, 30, 70, 70); 
// gradient.addColorStop(0, "white"); 
// gradient.addColorStop(1, "black");
// 绘制红色矩形
// context.fillStyle = "#ff0000"; 
// context.fillRect(10, 10, 50, 50); // 绘制渐变矩形
// context.fillStyle = gradient; 
// context.fillRect(30, 30, 50, 50);

// let gradient = createRectLinearGradient(context, 30, 30, 50, 50); 
// gradient.addColorStop(0, "white"); 
// gradient.addColorStop(1, "black"); // 绘制渐变矩形
// context.fillStyle = gradient; 
// context.fillRect(30, 30, 50, 50);

// let gradient = context.createRadialGradient(55, 55, 10, 55, 55, 30); 
// gradient.addColorStop(0, "white"); 
// gradient.addColorStop(1, "black"); // 绘制红色矩形
// context.fillStyle = "#ff0000"; 
// context.fillRect(10, 10, 50, 50); // 绘制渐变矩形
// context.fillStyle = gradient; 
// context.fillRect(30, 30, 50, 50);

// let image = document.images[0], 
  // pattern = context.createPattern(image, "repeat"); // 绘制矩形
// context.fillStyle = pattern; 
// context.fillRect(10, 10, 150, 150);
  // image = document.images[0], 
  // imageData, data, 
  // i, len, average,
  // red, green, blue, alpha; 
  
  // 绘制图像
  // context.drawImage(image, 0, 0); 
  
  // 取得图像数据
  // imageData = context.getImageData(0, 0, image.width, image.height); 
  // data = imageData.data;
  // for (i=0, len=data.length; i < len; i+=4) {
    // red = data[i]; 
    // green = data[i+1]; 
    // blue = data[i+2]; 
    // alpha = data[i+3];
    // 取得 RGB 平均值 
    // average = Math.floor((red + green + blue) / 3);
    // 设置颜色，不管透明度 
    // data[i] = average; 
    // data[i+1] = average; 
    // data[i+2] = average;
  // }
  // 将修改后的数据写回 ImageData 并应用到画布上显示出来 
  // imageData.data = data;
  // context.putImageData(imageData, 0, 0);

  // 绘制红色矩形
// context.fillStyle = "#ff0000"; 
// context.fillRect(10, 10, 50, 50); // 修改全局透明度
// context.globalAlpha = 0.5; // 绘制蓝色矩形
// context.fillStyle = "rgba(0,0,255,1)"; 
// context.fillRect(30, 30, 50, 50); // 重置
// context.globalAlpha = 0;

// 绘制红色矩形
// context.fillStyle = "#ff0000"; 
// context.fillRect(10, 10, 50, 50); // 设置合成方式
// context.globalCompositeOperation = "destination-over"; // 绘制蓝色矩形
// context.fillStyle = "rgba(0,0,255,1)"; 
// context.fillRect(30, 30, 50, 50);

let gl = drawing.getContext("webgl"); 
// if (gl){ 
//   // 使用 WebGL
// }



// try {
  // gl = drawing.getContext("webgl"); 
// } 
// catch (ex) { 
  // 什么也不做
// }
// if (gl) { 
  // 使用 WebGL 
// }
// else {
  // alert("WebGL context could not be created."); 
// }

// 视口是<canvas> 左下角四分之一区域
gl.viewport(0, 0, drawing.width/2, drawing.height/2); // 视口是<canvas> 左上角四分之一区域
gl.viewport(0, drawing.height/2, drawing.width/2, drawing.height/2); // 视口是<canvas> 右下角四分之一区域
gl.viewport(drawing.width/2, 0, drawing.width/2, drawing.height/2);
}