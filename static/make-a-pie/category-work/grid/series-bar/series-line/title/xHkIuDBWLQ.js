const arr=["1%","11%","21%","31%","41%","51%","61%"];option={title:{text:"demo Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],min:0},yAxis:{min:0},series:[{type:"bar",name:"linedemo",tooltip:{show:!1},animation:!1,barWidth:1.4,hoverAnimation:!1,data:[220,182,191,234,290,330,310],itemStyle:{normal:{color:"#f17a52",opacity:.6,label:{show:!1}}}},{type:"bar",name:"bar_2",tooltip:{show:!1},animation:!1,barWidth:5,hoverAnimation:!1,data:[-20,82,91,-34,90,30,10],itemStyle:{normal:{color:"#f17a52",opacity:.6,label:{show:!1}}}},{type:"line",label:{show:!0,position:"top",textStyle:{color:"#FEC201",fontSize:18,fontWeight:"bold"},formatter:a=>{const{data:t,dataIndex:e}=a;return arr[e]+`
`+t}},data:[220,182,191,234,290,330,310]}]};
