option={title:{textStyle:{fontSize:34,fontStyle:"normal",fontWeight:"normal"},text:"新世纪外语老师旗下学生数",x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!1,xAxis:[{type:"category",data:["Amanda","Candy","Chris","Cindy","Emma","Grace","Kent","Lily","Lisa","Michlle","Sandy","Shirly","Stancey"]}],yAxis:[{type:"value"}],series:[{name:"学生数",type:"bar",data:[23,26,34,39,5,25,26,39,32,66,43,27,33],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]},myChart.setOption(option),window.onresize=myChart.resize;