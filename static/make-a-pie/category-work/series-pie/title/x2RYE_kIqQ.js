var data={title:"**省",dataSex:[{name:"男性",value:"100.00"},{name:"女性",value:"200.00"}],dataAge:[{name:"0-10岁",value:"200.00"},{name:"11-25岁",value:"200.00"},{name:"26-40岁",value:"200.00"},{name:"41-55岁",value:"200.00"},{name:"56-70岁",value:"200.00"},{name:"70岁以上",value:"200.00"}],dataHostype:[{name:"药店",value:"200.00"},{name:"一级医院",value:"200.00"},{name:"二级医院",value:"200.00"},{name:"三级医院",value:"200.00"}],dataDis:[{name:"呼吸系统疾病",value:"200.00"},{name:"循环系统疾病",value:"200.00"},{name:"内分泌系统疾病",value:"200.00"},{name:"消化系统疾病",value:"200.00"},{name:"泌尿系统疾病",value:"200.00"},{name:"其他",value:"200.00"}]};option={backgroundColor:"#05274C",color:["#2AC9FD","#76FBC0","#35C96E","#FCC708","#48B188","#5957C2","#4A5D73"],title:[{top:"20%",text:data.title+"用药年龄分布",textStyle:{color:"#3494BD",fontSize:18,align:"center"},left:"8%"},{top:"20%",text:data.title+"用药性别分布",textStyle:{color:"#3494BD",fontSize:18,align:"center"},left:"32%"},{top:"20%",text:data.title+"用药量机构类别占比",textStyle:{color:"#3494BD",fontSize:18,align:"center"},left:"54%"},{top:"20%",text:"药品治疗疾病类型占比",textStyle:{color:"#3494BD",fontSize:18,align:"center"},left:"81%"}],series:[{color:["#2AC9FD","#76FBC0","#35C96E","#FCC708","#48B188","#5957C2"],type:"pie",radius:["16%","23%"],center:["14%","60%"],labelLine:{normal:{length:25,length2:65,lineStyle:{type:"solid"}}},label:{normal:{formatter:`{b} : {d}%
{c}（万元）`,borderWidth:0,borderRadius:4,padding:[0,-80],height:70,fontSize:13,align:"center",color:"#3494BD",rich:{b:{fontSize:13,lineHeight:5,color:"#41B3DC"}}}},data:data.dataAge},{color:["#76FBC0","#2AC9FD"],type:"pie",radius:["16%","23%"],center:["38%","60%"],labelLine:{normal:{length:25,length2:65,lineStyle:{type:"solid"}}},label:{normal:{formatter:`{b} : {d}%
{c}（万元）`,borderWidth:0,borderRadius:4,padding:[0,-90],height:70,fontSize:13,align:"center",color:"#3494BD",rich:{b:{fontSize:13,lineHeight:5,color:"#41B3DC"}}}},data:data.dataSex},{color:["#76FBC0","#29C6FA","#FCC708","#5957C2"],type:"pie",radius:["16%","23%"],center:["62%","60%"],labelLine:{normal:{length:25,length2:65,lineStyle:{type:"solid"}}},label:{normal:{formatter:`{b} : {d}%
{c}（万元）`,borderWidth:0,borderRadius:4,padding:[0,-80],height:75,fontSize:13,align:"center",color:"#3494BD",rich:{b:{fontSize:13,lineHeight:5,color:"#41B3DC"}}}},data:data.dataHostype},{color:["#76FBC0","#2AC9FD","#35C96E","#FCC708","#5957C2","#4A5D73"],type:"pie",radius:["16%","23%"],center:["88%","60%"],labelLine:{normal:{length:25,length2:65,lineStyle:{type:"solid"}}},label:{normal:{formatter:`{b} : {d}%
{c}（万元）`,borderWidth:0,borderRadius:4,padding:[0,-80],height:75,fontSize:13,align:"center",color:"#3494BD",rich:{b:{fontSize:13,lineHeight:5,color:"#41B3DC"}}}},data:data.dataDis}]};