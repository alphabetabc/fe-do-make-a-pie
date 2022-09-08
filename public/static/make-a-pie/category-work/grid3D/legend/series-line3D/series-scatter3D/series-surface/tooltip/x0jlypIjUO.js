function getParametricEquation(t,a,i,r,s,l){let f=(t+a)/2,d=t*Math.PI*2,c=a*Math.PI*2,h=f*Math.PI*2;t===0&&a===1&&(i=!1),s=typeof s<"u"?s:1/3;let e=i?Math.cos(h)*.1:0,o=i?Math.sin(h)*.1:0,u=r?1.05:1;return{u:{min:-Math.PI,max:Math.PI*3,step:Math.PI/32},v:{min:0,max:Math.PI*2,step:Math.PI/20},x:function(n,p){return n<d?e+Math.cos(d)*(1+Math.cos(p)*s)*u:n>c?e+Math.cos(c)*(1+Math.cos(p)*s)*u:e+Math.cos(n)*(1+Math.cos(p)*s)*u},y:function(n,p){return n<d?o+Math.sin(d)*(1+Math.cos(p)*s)*u:n>c?o+Math.sin(c)*(1+Math.cos(p)*s)*u:o+Math.sin(n)*(1+Math.cos(p)*s)*u},z:function(n,p){return n<-Math.PI*.5?Math.sin(n):n>Math.PI*2.5?Math.sin(n)*l*.1:Math.sin(p)>0?1*l*.1:-1}}}function getPie3D(t,a){let i=[],r=0,s=0,l=0,f=[],d=typeof a<"u"?(1-a)/(1+a):1/3;for(let e=0;e<t.length;e++){r+=t[e].value;let o={name:typeof t[e].name>"u"?`series${e}`:t[e].name,type:"surface",parametric:!0,wireframe:{show:!1},pieData:t[e],pieStatus:{selected:!1,hovered:!1,k:d}};if(typeof t[e].itemStyle<"u"){let u={};typeof t[e].itemStyle.color<"u"&&(u.color=t[e].itemStyle.color),typeof t[e].itemStyle.opacity<"u"&&(u.opacity=t[e].itemStyle.opacity),o.itemStyle=u}i.push(o)}let c=[];for(let e=0;e<i.length;e++){l=s+i[e].pieData.value,i[e].pieData.startRatio=s/r,i[e].pieData.endRatio=l/r,i[e].parametricEquation=getParametricEquation(i[e].pieData.startRatio,i[e].pieData.endRatio,!1,!1,d,i[e].pieData.value),s=l;let o=(i[e].pieData.endRatio+i[e].pieData.startRatio)*Math.PI,u=Math.cos(o)*(1+Math.cos(Math.PI/2)),n=Math.sin(o)*(1+Math.cos(Math.PI/2)),p=Math.log(Math.abs(i[e].pieData.value+1))*.1,m=o>=0&&o<=Math.PI/2||o>=3*Math.PI/2&&o<=Math.PI*2?1:-1,y=t[e].itemStyle.color,M=[u*1.8+e*.1*m+(m<0?-.5:0),n*1.8+e*.1*m+(m<0?-.5:0),p*2];c.push({type:"line3D",lineStyle:{color:y},data:[[u,n,p],M]},{type:"scatter3D",label:{show:!0,textStyle:{color:"black",backgroundColor:"transparent"},formatter:"{b}"},symbolSize:0,data:[{name:i[e].name+`
`+i[e].pieData.value,value:M}]}),f.push(i[e].name)}i=i.concat(c),i.push({name:"mouseoutSeries",type:"surface",parametric:!0,wireframe:{show:!1},itemStyle:{opacity:0},parametricEquation:{u:{min:0,max:Math.PI*2,step:Math.PI/20},v:{min:0,max:Math.PI,step:Math.PI/20},x:function(e,o){return Math.sin(o)*Math.sin(e)+Math.sin(e)},y:function(e,o){return Math.sin(o)*Math.cos(e)+Math.cos(e)},z:function(e,o){return Math.cos(o)>0?.1:-.1}}});let h={legend:{data:f},tooltip:{formatter:e=>{if(e.seriesName!=="mouseoutSeries")return`${e.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${e.color};"></span>${h.series[e.seriesIndex].pieData.value}`}},xAxis3D:{min:-1,max:1},yAxis3D:{min:-1,max:1},zAxis3D:{min:-1,max:1},grid3D:{show:!1,boxHeight:10,viewControl:{alpha:40,rotateSensitivity:0,zoomSensitivity:0,panSensitivity:0,autoRotate:!1},postEffect:{enable:!0,bloom:{enable:!0,bloomIntensity:.1},SSAO:{enable:!0,quality:"medium",radius:2}}},series:i};return h}option=getPie3D([{name:"cc",value:37,itemStyle:{color:"#f77b66"}},{name:"aa",value:44,itemStyle:{color:"#3edce0"}},{name:"bb",value:32,itemStyle:{color:"#f94e76"}},{name:"ee",value:16,itemStyle:{color:"#018ef1"}},{name:"dd",value:23,itemStyle:{color:"#9e60f9"}}],.59);let selectedIndex="",hoveredIndex="";myChart.on("click",function(t){let a=!option.series[t.seriesIndex].pieStatus.selected,i=option.series[t.seriesIndex].pieStatus.hovered,r=option.series[t.seriesIndex].pieStatus.k,s=option.series[t.seriesIndex].pieData.startRatio,l=option.series[t.seriesIndex].pieData.endRatio;selectedIndex!==""&&selectedIndex!==t.seriesIndex&&(option.series[selectedIndex].parametricEquation=getParametricEquation(option.series[selectedIndex].pieData.startRatio,option.series[selectedIndex].pieData.endRatio,!1,!1,r,option.series[selectedIndex].pieData.value),option.series[selectedIndex].pieStatus.selected=!1),option.series[t.seriesIndex].parametricEquation=getParametricEquation(s,l,a,i,r,option.series[selectedIndex].pieData.value),option.series[t.seriesIndex].pieStatus.selected=a,a&&(selectedIndex=t.seriesIndex),myChart.setOption(option)}),myChart.on("mouseover",function(t){let a,i,r,s,l;hoveredIndex!==t.seriesIndex&&(hoveredIndex!==""&&(a=option.series[hoveredIndex].pieStatus.selected,i=!1,r=option.series[hoveredIndex].pieData.startRatio,s=option.series[hoveredIndex].pieData.endRatio,l=option.series[hoveredIndex].pieStatus.k,option.series[hoveredIndex].parametricEquation=getParametricEquation(r,s,a,i,l,option.series[hoveredIndex].pieData.value),option.series[hoveredIndex].pieStatus.hovered=i,hoveredIndex=""),t.seriesName!=="mouseoutSeries"&&(a=option.series[t.seriesIndex].pieStatus.selected,i=!0,r=option.series[t.seriesIndex].pieData.startRatio,s=option.series[t.seriesIndex].pieData.endRatio,l=option.series[t.seriesIndex].pieStatus.k,option.series[t.seriesIndex].parametricEquation=getParametricEquation(r,s,a,i,l,option.series[t.seriesIndex].pieData.value+5),option.series[t.seriesIndex].pieStatus.hovered=i,hoveredIndex=t.seriesIndex),myChart.setOption(option))}),myChart.on("globalout",function(){hoveredIndex!==""&&(isSelected=option.series[hoveredIndex].pieStatus.selected,isHovered=!1,k=option.series[hoveredIndex].pieStatus.k,startRatio=option.series[hoveredIndex].pieData.startRatio,endRatio=option.series[hoveredIndex].pieData.endRatio,option.series[hoveredIndex].parametricEquation=getParametricEquation(startRatio,endRatio,isSelected,isHovered,k,option.series[hoveredIndex].pieData.value),option.series[hoveredIndex].pieStatus.hovered=isHovered,hoveredIndex=""),myChart.setOption(option)});
