var sourceData=[{name:"马山县",sales:1454,services:1564},{name:"上林县",sales:1911,services:1910},{name:"隆安县",sales:1486,services:1496},{name:"宾阳县",sales:1655,services:1651},{name:"横县",sales:1841,services:1851},{name:"武鸣区",sales:1700,services:1714},{name:"兴宁区",sales:1752,services:1742},{name:"青秀区",sales:1961,services:1965},{name:"西乡塘区 ",sales:1580,services:1601},{name:"江南区",sales:1544,services:1541},{name:"良庆区",sales:1622,services:1652},{name:"邕宁区",sales:1400,services:1422}],seriesData=sourceData.map(function(e,s,a){return{name:e.name,value:[e.sales,e.services]}}),computeServicesAvgLine=function(){let e=0;return sourceData.forEach(function(s){e+=s.services}),e/sourceData.length},computeSalesAvgLine=function(){let e=0;return sourceData.forEach(function(s){e+=s.sales}),e/sourceData.length},avg={servicesAvgLine:computeServicesAvgLine(),salesAvgLine:computeSalesAvgLine()};option={title:{text:"申请事项受理与办结分析"},backgroundColor:"#fff",grid:{bottom:"40%",left:"6%",right:"50%"},tooltip:{trigger:"item",axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}},formatter:function(e){if(e.componentType=="series")return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+e.name+"</div><span>受理数</span> : "+e.data.value[1]+"<br/><span>办结数</span> : "+e.data.value[0]}},label:{normal:{show:!0,position:"bottom",formatter:function(e){return e.name}},emphasis:{show:!0,position:"bottom"}},yAxis:{name:"受理数",min:1300,type:"value",scale:!0,axisLabel:{formatter:"{value} "},splitLine:{show:!1},axisLine:{lineStyle:{color:"#000"}}},xAxis:{name:"办结数",type:"value",scale:!0,min:1300,axisLabel:{formatter:"{value} "},splitLine:{show:!1},axisLine:{lineStyle:{color:"#000"}}},series:[{type:"scatter",data:seriesData,symbolSize:10,color:"#2ca3fd",label:{normal:{show:!0,formatter:function(e){return e.name},position:"top"}},markLine:{label:{normal:{}},lineStyle:{normal:{color:"#CD3333",type:"solid",width:1},emphasis:{color:"#d9def7"}},data:[{xAxis:avg.salesAvgLine,name:"受理数平均线",itemStyle:{normal:{color:"#b84a58"}}},{yAxis:avg.servicesAvgLine,name:"办结数平均线",itemStyle:{normal:{color:"#b84a58"}}}]}}]};