var xCenter=3,yCenter=1,random=Math.random,numberWithSign=function(e){var t=random()>.5?-1:1;return random()*e*t},seriesData=new Array(100).fill(0).map((e,t)=>({value:[numberWithSign(800),numberWithSign(500),random()*2e3],name:"数据"+t}));option={color:["rgba(51, 103, 214, .5)"],tooltip:{trigger:"item",backgroundColor:"#fff",borderWidth:1,borderColor:"#e2e2e2",textStyle:{color:"#000"},padding:10,axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty"},{type:"slider",yAxisIndex:0,filterMode:"empty",right:16},{type:"inside",xAxisIndex:0,filterMode:"empty"},{type:"inside",yAxisIndex:0,filterMode:"empty"}],grid:{left:20,right:100,top:40,bottom:50,containLabel:!0},visualMap:[{show:!1,left:"right",top:"10%",dimension:2,itemWidth:30,itemHeight:120,calculable:!0,precision:.1,text:["圆形大小"],padding:[30,0,0,30],textGap:20,textStyle:{color:"#000"},inRange:{symbolSize:[10,70]},outOfRange:{symbolSize:[10,70],color:["rgba(255, 255, 255, .2)"]},controller:{inRange:{color:["rgba(51, 103, 214, .5)"]},outOfRange:{color:["#e1e1e1"]}}}],xAxis:{type:"value",scale:!0,nameTextStyle:{color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#e1e1e1"}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#999"}},min:e=>{const t=adjustMinMax(e,xCenter);return toFixed(t.min)},max:e=>{const t=adjustMinMax(e,xCenter);return toFixed(t.max)}},yAxis:{type:"value",scale:!0,min:e=>{const t=adjustMinMax(e,yCenter);return toFixed(t.min)},max:e=>{const t=adjustMinMax(e,yCenter);return toFixed(t.max)},nameTextStyle:{color:"transparent"},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#e1e1e1"}},axisLine:{lineStyle:{color:"#999"}}},series:{type:"scatter",label:{show:!0,formatter:"{b}"},markLine:{animation:!1,lineStyle:{color:"#000",type:"solid",width:2},label:{show:!0,position:"start",formatter:"{b}",fontSize:11,color:"#666"},symbol:["none","none"],silent:!0,data:[{xAxis:xCenter},{yAxis:yCenter}]},data:seriesData}};function adjustMinMax(e,t){const{min:r,max:o}=e;let i=t;if(isFinite(t)||(i=0),!isFinite(r))return{max:i+2,min:i-2};const a=Math.abs(o-i),l=Math.abs(i-r),n=Math.max(a,l),s=i+n,x=i-n;return{max:s,min:x}}function toFixed(e){return Number(e.toFixed(2))}
