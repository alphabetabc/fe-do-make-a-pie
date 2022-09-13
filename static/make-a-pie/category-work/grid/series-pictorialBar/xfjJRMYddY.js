let data={chart:[{month:`数据库

192.168.1.44`,value:76},{month:`网站

192.168.1.56`,value:55},{month:`服务器

192.168.1.89`,value:39},{month:`服务器

192.168.1.71`,value:30},{month:`服务器

192.168.1.55`,value:15}]},xAxisMonth=[],barData=[],lineData=[];for(let a=0;a<data.chart.length;a++)xAxisMonth.push(data.chart[a].month),barData.push({name:xAxisMonth[a],value:data.chart[a].value}),lineData.push({name:xAxisMonth[a],value:data.chart[a].ratio});option={backgroundColor:"#fff",title:"",grid:{top:"24%",left:"7%",bottom:"6%",containLabel:!0},xAxis:[{},{type:"category",position:"bottom",data:xAxisMonth,boundaryGap:!0,offset:10,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"#404752"}}}],yAxis:[{show:!0,offset:52,axisTick:{show:!1},min:0,max:80,interval:20,axisLine:{show:!1},axisLabel:{show:!0,color:"#404752"},splitLine:{lineStyle:{color:"#e1e3e5",type:"solid"}}}],series:[{type:"pictorialBar",xAxisIndex:1,barCategoryGap:"-80%",symbol:'path://d="M150 50 L130 130 L170 130  Z"',itemStyle:{normal:{color:function(a){return["rgba(90,107,205,0.8)","rgba(133,227,175,0.8)","rgba(90,107,205,0.8)","rgba(133,227,175,0.8)","rgba(90,107,205,0.8)"][a.dataIndex]}},emphasis:{opacity:1}},data:barData}]};
