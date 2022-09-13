var color=["#4aa1ff","#5acb75","#fcd44c","#4fcccb"],title="调用错误数",legend=["3XX","4XX","5XX","其他"],seriesData=[{name:"3XX",value:30},{name:"4XX",value:10},{name:"5XX",value:15},{name:"其他",value:12}];let formatNumber=function(e){let t=/(?=(\B)(\d{3})+$)/g;return e.toString().replace(t,",")},total=seriesData.reduce((e,t)=>e+t.value*1,0);var option={backgroundColor:"#fff",color,title:{text:"{name|"+title+`}
{val|`+formatNumber(total)+"}",top:"center",left:"center",textStyle:{rich:{name:{fontSize:14,fontWeight:"normal",color:"#666666",padding:[10,0]},val:{fontSize:32,fontWeight:"bold",color:"#333333"}}}},grid:{top:"15%",left:0,right:"1%",bottom:5,containLabel:!0},legend:{icon:"circle",itemWidth:10,orient:"vertical",top:"center",right:50,textStyle:{align:"left",verticalAlign:"middle",rich:{name:{color:"rgba(0,0,0,0.5)",fontSize:12},value:{color:"rgba(0,0,0,0.5)",fontSize:12},rate:{color:"rgba(0,0,0,0.9)",fontSize:12}}},data:legend,formatter:e=>{if(seriesData.length){const t=seriesData.filter(a=>a.name===e)[0];return`{name|${e} | }{rate| ${t.value/2}%} {value| ${t.value}} `}}},series:[{name:"调用错误",type:"pie",center:["50%","50%"],radius:["45%","65%"],hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{show:!1,length:0,length2:0},data:seriesData}]};myChart.setOption(option);