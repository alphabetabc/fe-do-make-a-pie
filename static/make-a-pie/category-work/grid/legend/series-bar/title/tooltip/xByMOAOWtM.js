var colors=["#81d0d7"],data2=[917,689,1264,234,457,435,754,456,742,1135,754,456,1242,742];options=[{backgroundColor:"#fff",title:{text:"色标管理市场规模情况（餐饮服务）"},color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{top:80,left:"10%",right:"47%",bottom:"55%"},legend:{data:["色标管理开展数","色标管理开展环比率"],align:"left",left:"7%",top:45},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},boundaryGap:["0%","0%"],axisLabel:{interval:{default:0},rotate:50,formatter:function(e){var a="",t=e.length,r=4,o=Math.ceil(t/r);if(t>r){var i="";i=e.substring(0,4),a=i+"..."}else a=e;return a}},data:["崇左市","来宾市","河池市","贺州市","百色市","玉林市","贵港市","钦州市","防城港市","北海市","梧州市","桂林市","柳州市","南宁市"]}],yAxis:[{type:"value",name:"",min:0,max:1500,position:"left",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#1f6770"}},axisLabel:{formatter:"{value} %"}}],series:[{name:"色标管理开展数",type:"bar",barWidth:"30%",data:data2}]}];
