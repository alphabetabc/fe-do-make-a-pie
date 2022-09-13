option={backgroundColor:"#000",legend:{orient:"vertical",show:!0,right:"5%",y:"center",itemWidth:3,itemHeight:30,itemGap:20,textStyle:{color:"#c0c4cc",fontSize:14,lineHeight:20,rich:{percent:{color:"#fff",fontSize:16}}},formatter:e=>{switch(e){case"二级建造师":return`二级建造师\r
{percent|30%}  `+30;case"三类人员B":return`三类人员B\r
{percent|22%}  `+22;case"中级及以上职称人员":return`中级及以上职称人员\r
{percent|22%}  `+22;case"技术工人":return`技术工人\r
{percent|16%}  `+16;case"其他":return`其他\r
{percent|8%}  `+8;default:break}}},tooltip:{show:!0},series:[{type:"pie",radius:["50%","70%"],center:["40%","50%"],hoverAnimation:!0,z:10,itemStyle:{normal:{borderWidth:5,borderColor:"#00000085"}},label:{position:"center",formatter:()=>`{total|98} \r
总数(个)`,rich:{total:{fontSize:32,color:"#fff"}},color:"#dcdfe6",fontSize:16,lineHeight:50},data:[{value:32,name:"二级建造师",itemStyle:{color:"#D87A80"}},{value:22,name:"三类人员B",itemStyle:{color:"#2EC7C9"}},{value:22,name:"中级及以上职称人员",itemStyle:{color:"#B6A2DE"}},{value:16,name:"技术工人",itemStyle:{color:"#5AB1EF"}},{value:8,name:"其他",itemStyle:{color:"#FFB980"}}],labelLine:{show:!1}}]};
