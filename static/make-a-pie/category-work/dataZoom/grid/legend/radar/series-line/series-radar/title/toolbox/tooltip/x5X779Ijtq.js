dataArr1=[{value:[9,89,5,70,607],name:"一般客户与低价值客户"},{value:[7.8,30,18,190,1218],name:"重要保持客户"},{value:[8,15,7,100,446],name:"重要发展客户"},{value:[7.5,56,13,160,2352],name:"重要挽留客户"}],dataArr2=["一般客户与低价值客户","重要保持客户","重要发展客户","重要挽留客户"],dataArr3=[{name:"平均折扣系数",max:10},{name:"最近乘机距今的时间长度",max:90},{name:"飞行次数",max:20},{name:"总飞行里程",max:200},{name:"会员入会时间",max:3e3}],dataArr4=["平均折扣系数","最近乘机距今的时间长度","飞行次数","总飞行里程","会员入会时间"],aa=[[9,7,8,7],[89,30,15,56],[5,18,7,13],[70,190,100,160],[358,568,424,123]],options=[{title:{text:"Fly 图",textStyle:{color:["#a95d4e"]}},backgroundColor:"#90a3a9",legend:{data:dataArr2,orient:"vertical",right:20},tooltip:{},radar:{indicator:dataArr3,shape:"circle",splitLine:{lineStyle:{color:["#BFEFFF","#B0C4DE"]}}},series:[{areaStyle:{opacity:.1},type:"radar",data:dataArr1}]},{title:{text:"Fly 数据图"},tooltip:{},grid:{bottom:150,top:120},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{data:dataArr2,axisLabel:{interval:0,rotate:30}},yAxis:{},legend:{selectedMode:"single",bottom:5,data:dataArr4},backgroundColor:"#90a3a9",series:[{label:{show:!0},type:"line",name:dataArr4[0],data:aa[0]},{type:"line",label:{show:!0},name:dataArr4[1],data:aa[1]},{type:"line",label:{show:!0},name:dataArr4[2],data:aa[2]},{type:"line",label:{show:!0},name:dataArr4[3],data:aa[3]},{type:"line",label:{show:!0},name:dataArr4[4],data:aa[4]}]}];