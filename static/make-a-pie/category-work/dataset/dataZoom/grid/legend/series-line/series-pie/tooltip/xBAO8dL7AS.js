const source=[["日期","正向消息","中性消息","负向消息"],["2019/10/01",338,110,206],["2019/10/02",416,45,113],["2019/10/03",452,56,79],["2019/10/04",129,84,99],["2019/10/05",383,71,256],["2019/10/06",461,28,126],["2019/10/07",377,60,76],["2019/10/08",423,73,238],["2019/10/09",252,98,130],["2019/10/10",40,119,67],["2019/10/11",267,70,257],["2019/10/12",290,101,254],["2019/10/13",295,41,51],["2019/10/14",53,110,151],["2019/10/15",447,47,54]],pietheme="消息情感",piedata=[{name:"正向消息",value:1834},{name:"中性消息",value:123},{name:"负向消息",value:325}];myChart.resize({height:320,width:1112}),option={backgroundColor:"#fff",dataset:{source},grid:{left:408,right:40,top:64,bottom:64},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:16,formatter:e=>{var d=e[0].axisValue;return console.log(e),e.reduce((a,i)=>{const{data:t,seriesIndex:o,seriesName:s,marker:r,componentSubType:n}=i,l=n==="line"?`${t[o+1]}`:`${t[o+1]}`;return[...a,`${r} ${s}：${l}`]},[`<span style="font-size: 14px; color: #FFFFFF; font-weight: bold; padding-bottom: 8px; display: inline-block;">${e[0].name}</span>`]).join("</br>")}},legend:{show:!0,left:372,top:16,itemWidth:12,itemHeight:12},dataZoom:{height:16,bottom:8},color:["#15B374 ","#1574B3","#D96969"],xAxis:{type:"category"},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitNumber:4,axisLabel:{color:"#8C8C8C"},splitLine:{lineStyle:{type:"dashed"}}},series:[{type:"line",smooth:!0,name:source[0][1],encode:{x:0,y:1}},{type:"line",smooth:!0,name:source[0][2],stack:!0,encode:{x:0,y:2}},{type:"line",smooth:!0,name:source[0][3],stack:!0,encode:{x:0,y:3}},{name:pietheme,type:"pie",z:100,radius:["40%","60%"],center:[180,"55%"],data:piedata,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}  ({d}%)"},label:{show:!0,fontSize:12,formatter:`{b}
{d}%`,color:"#A3A3A3"}}]};
