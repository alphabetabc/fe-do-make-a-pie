var dataArr=[320,270,341,374,400,150,420,123],spaceLength=5,fixedData=[],end=0,max=300,chartColor=[["#4ED5BF","#8DCFFC"],["#45A9EC","#8DCFFC"]],categoryData=["省公司1","成都2","眉山3","达州4","德阳5","绵阳6","天府7","达州8"],data1=dataArr.map(a=>(fixedData.push(spaceLength),a-spaceLength));categoryData.length<5?end=categoryData.length-1:end=2,option={xAxis:[{splitLine:{lineStyle:{color:"#ccc",type:"dashed"}},type:"value",show:!0,axisLine:{show:!0}}],yAxis:[{splitLine:{show:!1},axisLine:{show:!0},type:"category",axisTick:{show:!1},data:categoryData,axisLabel:{}}],dataZoom:[{type:"slider",yAxisIndex:0,zoomLock:!1,width:8,showDetail:!1,startValue:0,endValue:end,borderWidth:0,borderColor:"transparent",backgroundColor:"#343F4B",fillerColor:"#4291CE",showDataShadow:!1,brushSelect:!1,height:"88%",handleStyle:{color:"#4291CE"},handleIcon:"path://M512 512m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"}],series:[{name:"",type:"bar",stack:"Ad",color:"transparent",data:fixedData},{name:"",type:"bar",stack:"Ad",barWidth:12,label:{formatter:function(a){return a.value+spaceLength},show:!0,position:"right",color:"#1CD8A8",fontSize:14,fontWeight:"bold",distance:10},data:data1.map(a=>{var o={color:a<=max-spaceLength?new this.echarts.graphic.LinearGradient(0,0,1,0,chartColor[0].map((e,t)=>({color:e,offset:t}))):new echarts.graphic.LinearGradient(0,0,1,0,chartColor[1].map((e,t)=>({color:e,offset:t})))};return{value:a,itemStyle:o}})}]};function autoMove(){setInterval(()=>{Number(option.dataZoom[0].endValue)===categoryData.length-1?(option.dataZoom[0].endValue=end,option.dataZoom[0].startValue=0):(option.dataZoom[0].endValue=option.dataZoom[0].endValue+1,option.dataZoom[0].startValue=option.dataZoom[0].startValue+1),myChart.setOption(option)},3e3)}autoMove();