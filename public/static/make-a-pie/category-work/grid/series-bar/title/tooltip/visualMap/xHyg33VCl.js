var value=[5,8,12,14,16,18,20,22,24,26,30];option={backgroundColor:"#333",title:{text:"阶梯数据值",x:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},dataRange:{show:!1,min:0,max:12,calculable:!0,color:["#d94e5d","#eac736","#50a3ba"],y:"center"},xAxis:[{type:"category",show:!1,data:["Line","Bar","Scatter","K","Pie","Radar","Chord","Force","Map","Gauge","Funnel"]}],yAxis:[{type:"value",show:!1}],series:[{name:"ECharts例子个数统计",type:"bar",barGap:.1,barCategoryGap:.01,itemStyle:{normal:{color:function(e){var a=["#C1232B","#B5C334","#FCCE10","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0"];return a[e.dataIndex]},label:{show:!0,position:"top",formatter:`{b}
{c}`},shadowBlur:80,shadowColor:"rgba(0, 0, 0, 0.5)"}},data:value.map(function(e,a){return[a,e+30,a]})}]};