option={color:["#fff"],title:{text:"某地区蒸发量和降水量",textStyle:{color:"#fff"}},legend:{name:[],textStyle:{color:"#fff",fontSize:18}},backgroundColor:"#08254F",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLabel:{show:!0,color:"#fff",fontSize:20},splitLine:{show:!1},axisLine:{lineStyle:{color:"#FFFFFF"}},axisTick:{show:!1}},yAxis:[{name:"降水量/蒸发量",type:"value",splitLine:{show:!1},axisTick:{show:!0},axisLine:{lineStyle:{color:"#FFFFFF"}},axisLabel:{show:!0,color:"#fff",fontSize:20}}],series:[{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],barWidth:"30%",itemStyle:{color:"#00C1FF"},markPoint:{symbolSize:60,data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{label:{formatter:"{b}：{c}ml"},data:[{name:"降水量平均线",type:"average"}]}},{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],barWidth:"30%",itemStyle:{color:"#51FFAE"},markPoint:{symbolSize:60,data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{label:{formatter:"{b}：{c}ml"},data:[{name:"蒸发量平均线",type:"average"}]}}]};