option={MinWidth:800,width:1200,textStyle:{color:"#000"},series:[{type:"graph",tooltip:{backgroundColor:"skyblue"},layout:"none",symbol:"diamond",symbolSize:150,roam:"move",itemStyle:{normal:{color:"#1b9acf"}},label:{normal:{show:!0,position:"inside",textStyle:{fontSize:12,color:"#fff",fontWeight:"BOLD"},formatter:function(e){return e.name.substring(0,1)=="_"?"":e.name=="HHHHH"||e.name=="YYYYY"?e.name.substring(0,3)+`
`+e.name.substring(3,5):e.name=="商家退货"||e.name=="库存锁定"||e.name=="零售仓库"||e.name=="清除隐私"||e.name=="用户退货"||e.name=="退货审核"?e.name.substring(0,2)+`
`+e.name.substring(2,4):e.name=="x"||e.name=="y"?"":e.name}}},edgeSymbol:["none","arrow"],edgeLabel:{normal:{textStyle:{fontSize:18,padding:[0,0,0,60]}}},data:[{name:"开始：招人",x:0,y:0,symbol:"roundRect",symbolSize:100},{name:`区县支撑中心录入
人员基础信息
（中心主管）`,x:120,y:0,symbol:"rect"},{name:`中心负责人
审核`,x:260,y:0,value:"YES"},{name:`市级管理部门
审核（数量）`,x:400,y:0,value:"No"},{name:`市级服务部
审核（数量）`,x:680,y:0},{name:"总经理审核",x:600,y:300},{name:"_no11",x:120,y:100,symbolSize:[1,1],value:"No"},{name:"_no1",x:260,y:100,symbolSize:[1,1]},{name:"_nxxx",x:120,y:300,symbolSize:[1,1],value:"No"}],links:[{source:"开始：招人",target:`区县支撑中心录入
人员基础信息
（中心主管）`},{source:`区县支撑中心录入
人员基础信息
（中心主管）`,target:`中心负责人
审核`},{source:`中心负责人
审核`,target:`市级管理部门
审核（数量）`,label:{show:!0,edgeSymbol:["none","arrow"]},edgeSymbol:["none","arrow"]},{source:"总经理审核",target:"_nxxx",label:{show:!0}},{source:"_nxxx",target:`区县支撑中心录入
人员基础信息
（中心主管）`},{source:`中心负责人
审核`,target:"_no1"},{source:"_no1",target:"_no11",label:{show:!0}},{source:"no11",target:`区县支撑中心录入
人员基础信息
（中心主管）`}],lineStyle:{normal:{opacity:.9,color:"#53B5EA",width:1}}}]};
