var price=null,orderMaxLimit=null,floorPrice=null,stepSize=1,maxStepNumber=null,setpRate=null,orderAmount=null,currentPrice=null,currenStep=null,unitName="件",priceList=[],orderList=[],currentPriceList=[],currentOrderList=[];price=200,orderMaxLimit=60,floorPrice=120,stepSize=6,orderAmount=20,topLable=!1,bottomLable=!1;function getProgress(n,e,a){for(var t=[],r=0;r<=n;r++)t.push([r,e[Math.floor(r/a)]]);return t}function getBg(n,e,a){for(var t=[],r=0;r<=n;r+=stepSize+stepSize/2)t.push([r,e[Math.floor(r/a)]]);return t}function getBgMarkPoint(n,e,a){for(var t=[],r=0;r<=n;r+=stepSize)t.push([r+stepSize/2,e[Math.floor(r/a)]]);return t}function getCurrentPrice(n,e,a,t){e=e>orderMaxLimit?orderMaxLimit:e;var r=Math.ceil(orderMaxLimit/t-1),u=(n-a)/r,l=Math.floor(e/t),s=(n-l*u).toFixed(2);return s=s<a?a:s,s}function getPriceList(n,e,a,t){e=e>orderMaxLimit?orderMaxLimit:e;for(var r=[],u=Math.floor(e/t-1),l=0;l<=u;l++)r.push(getCurrentPrice(n,l*t,a,t)),e-=t;return e>0&&r.push(getCurrentPrice(n,u+1,a,t)/e),r}function getOrderList(n,e){for(var a=[],t=Math.ceil(n/e-1),r=0;r<=t;r++)a.push(r*e+e);return a}function getCurrentOrderList(n,e,a){for(var t=[],r=Math.ceil(n/a-1),u=0;u<=r;u++)n-e[u]>=0?t.push(u*a+a):t.push(n%e[u]);return t}function getCurrentPriceList(n,e,a,t){for(var r=[],u=a.length,l=0;l<u;l++)e[l]==a[l]?r.push(n[l]):r.push(n[l]-n[l]*(e[l]-a[l])/t);return r}currentPrice=getCurrentPrice(price,orderAmount,floorPrice,stepSize);var priceList=getPriceList(price,orderMaxLimit,floorPrice,stepSize),orderList=getOrderList(orderMaxLimit,stepSize),currentOrderList=getCurrentOrderList(orderAmount,orderList,stepSize),currentPriceList=getCurrentPriceList(priceList,orderList,currentOrderList,stepSize),currentProgress=getProgress(orderAmount,priceList,stepSize),markPointList=getBgMarkPoint(orderMaxLimit,priceList,stepSize);option={title:{text:"当前成交价："+currentPrice+"￥",left:"center",textStyle:{color:"red",fontWeight:"bolder",fontSize:20},subtext:"人数越多，价格越低"},tooltip:{trigger:"axis",enterable:!0,axisPointer:{type:"shadow"}},backgroundColor:"rgba(255,255,60,0.5)",xAxis:{data:orderList,boundaryGap:!1},yAxis:{type:"value"},series:[{type:"line",step:"end",data:orderList,areaStyle:{normal:{}}},{type:"line",step:"end",data:priceList,z:1,areaStyle:{normal:{}}}]};var obj=document.getElementById("chart-panel");obj.style.cssText="border-radius: 10px;",console.debug(document.getElementById("chart-panel"));