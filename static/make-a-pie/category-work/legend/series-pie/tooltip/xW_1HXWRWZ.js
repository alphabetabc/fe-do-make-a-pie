const data=[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}];app.title="饼图分割";const offsetData=[],randomColor=()=>"#"+Math.round(Math.random()*16777215).toString(16);data.forEach(e=>{const a={name:"border",value:0,itemStyle:{color:"transparent"}};offsetData.push({name:e.name,value:e.value,itemStyle:{borderWidth:1,borderColor:"#0f0",color:randomColor()}},a)}),option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,minAngle:5,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:offsetData}]};