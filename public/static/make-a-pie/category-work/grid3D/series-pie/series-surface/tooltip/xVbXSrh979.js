var data=[{name:"满意",value:30,itemStyle:{color:"#c045ed"},startRatio:0,endRatio:.7},{name:"非常满意",value:45,itemStyle:{color:"#6442ee"},startRatio:.7,endRatio:1},{name:"满意",value:6,itemStyle:{color:"#3556ee"},startRatio:.7,endRatio:1},{name:"基本满意",value:14,itemStyle:{color:"#82cbe4"},startRatio:.7,endRatio:1},{name:"不满意",value:5,itemStyle:{color:"#56c0f4"},startRatio:.7,endRatio:1}],optionConfig={};const getPie3D=(t,c)=>{let i=[],s=0,a=0,f=0,m=1;t.sort((e,n)=>n.value-e.value);for(let e=0;e<t.length;e++){s+=t[e].value;let n={name:typeof t[e].name>"u"?`series${e}`:t[e].name,type:"surface",parametric:!0,wireframe:{show:!1},pieData:t[e],pieStatus:{selected:!1,hovered:!1,k:m},radius:"50%",center:["10%","10%"]};if(typeof t[e].itemStyle<"u"){let u={};typeof t[e].itemStyle.color<"u"&&(u.color=t[e].itemStyle.color),typeof t[e].itemStyle.opacity<"u"&&(u.opacity=t[e].itemStyle.opacity),n.itemStyle=u}i.push(n)}for(let e=0;e<i.length;e++)f=a+i[e].pieData.value,i[e].pieData.startRatio=a/s,i[e].pieData.endRatio=f/s,i[e].parametricEquation=getParametricEquation(i[e].pieData.startRatio,i[e].pieData.endRatio,!1,!1,m,i[e].pieData.value),a=f;let h=getHeight3D(i,25),l={backgroundColor:"#203598",labelLine:{show:!0,lineStyle:{color:"#404772"}},label:{show:!0,position:"outside",rich:{b:{fontSize:24,lineHeight:30,fontWeight:"bold",color:"#fff"},c:{fontSize:18,color:"#fff"}},formatter:`{b|{b}}
{c|{c}%}`},tooltip:{backgroundColor:"#053A8D",formatter:e=>{if(e.seriesName!=="mouseoutSeries"&&e.seriesName!=="pie2d"){let n=((l.series[e.seriesIndex].pieData.endRatio-l.series[e.seriesIndex].pieData.startRatio)*100).toFixed(2);return`${e.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${e.color};"></span>${n}%`}}},xAxis3D:{min:-1,max:1},yAxis3D:{min:-1,max:1},zAxis3D:{min:-1,max:1},grid3D:{show:!1,boxHeight:h,left:0,top:0,viewControl:{alpha:20,distance:250,rotateSensitivity:0,zoomSensitivity:0,panSensitivity:0,autoRotate:!1}},series:i};return l},getHeight3D=(t,c)=>(t.sort((i,s)=>s.pieData.value-i.pieData.value),c*25/t[0].pieData.value),getParametricEquation=(t,c,i,s,a,f)=>{let m=(t+c)/2,h=t*Math.PI*2,l=c*Math.PI*2,e=m*Math.PI*2;t===0&&c===1&&(i=!0),a=typeof a<"u"?a:1/3;let n=i?Math.cos(e)*.1:0,u=i?Math.sin(e)*.1:0,d=s?1.05:1;return{u:{min:-Math.PI,max:Math.PI*3,step:Math.PI/32},v:{min:0,max:Math.PI*2,step:Math.PI/20},x:function(o,r){return o<h?n+Math.cos(h)*(1+Math.cos(r)*a)*d:o>l?n+Math.cos(l)*(1+Math.cos(r)*a)*d:n+Math.cos(o)*(1+Math.cos(r)*a)*d},y:function(o,r){return o<h?u+Math.sin(h)*(1+Math.cos(r)*a)*d:o>l?u+Math.sin(l)*(1+Math.cos(r)*a)*d:u+Math.sin(o)*(1+Math.cos(r)*a)*d},z:function(o,r){return o<-Math.PI*.5?Math.sin(o):o>Math.PI*2.5?Math.sin(o)*f*.1:Math.sin(r)>0?1*f*.1:-1}}};option=getPie3D(data,.8),console.log(option),option.series.push({name:"pie2d",type:"pie",labelLine:{length:10,length2:10},startAngle:-25,clockwise:!1,radius:["65%","65%"],center:["55%","48%"],data,itemStyle:{opacity:0}});
