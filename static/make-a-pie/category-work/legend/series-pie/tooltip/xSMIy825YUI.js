var myData=[{value:137,name:"数学"},{value:103,name:"语文"},{value:124,name:"英语"},{value:180,name:"理综"}];option={color:["#1aa3ff","#04f9fa","#16bd87","#c961ff","#7cfc12"],tooltip:{trigger:"item",formatter:"{b}：{c} ({d}%)"},legend:{bottom:"20%",itemWidth:10,itemHeight:10,textStyle:{color:"#fff",fontSize:"14"}},series:[{type:"pie",center:["50%","40%"],radius:["33.5%","35.5%"],silent:!0,label:{show:!1,position:"center"},data:myData},{type:"pie",center:["50%","40%"],radius:["40%","50%"],label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:33,lineHeight:45,formatter:e=>"{name|"+e.name+`}
{value|`+e.value+"}",rich:{name:{color:"#fff"},value:{color:"#04F9FA"}}}},data:myData}]},activeLoop();function activeLoop(){let e=-1;const t=myData.length;var a=setInterval(()=>{myChart.dispatchAction({type:"downplay",seriesIndex:1,dataIndex:e}),myChart.dispatchAction({type:"hideTip",seriesIndex:1,dataIndex:e}),e=(e+1)%t,myChart.dispatchAction({type:"highlight",seriesIndex:1,dataIndex:e}),myChart.dispatchAction({type:"showTip",seriesIndex:1,dataIndex:e})},2e3);myChart.on("mouseover",i=>{clearInterval(a),myChart.dispatchAction({type:"downplay",seriesIndex:1,dataIndex:e}),myChart.dispatchAction({type:"hideTip",seriesIndex:1,dataIndex:e})}),myChart.on("mouseout",i=>{activeLoop()})}
