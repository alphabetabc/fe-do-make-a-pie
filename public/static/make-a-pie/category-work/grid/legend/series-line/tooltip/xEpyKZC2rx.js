let dateList=[];for(let o=1;o<=7;o++){let i=new Date(new Date().getTime()-864e5*o),e=i.getMonth()+1,t=i.getDate();e>=1&&e<=9&&(e="0"+e),t>=0&&t<=9&&(t="0"+t);let a=`${e}/${t}`;dateList.unshift(a)}option={legend:{icon:"circle",bottom:"0%",data:["日访问人数"]},tooltip:{trigger:"axis",axisPointer:{type:"cross"},textStyle:{color:"#5c6c7c"},backgroundColor:"rgba(255, 255, 255, 0.8)",extraCssText:"width: 170px"},xAxis:{type:"category",axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#556677"}},boundaryGap:!1,data:dateList},yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{textStyle:{color:"#556677"}},splitLine:{lineStyle:{type:"dashed"},show:!0},axisPointer:{show:!1}},{type:"value",position:"right",axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}}}],series:[{name:"日访问人数",data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0,symbol:"circle",symbolSize:10,hoverAnimation:!1,animation:!1,color:"#1cae1b"}]};