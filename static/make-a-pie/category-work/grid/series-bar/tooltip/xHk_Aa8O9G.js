option={backgroundColor:"#ffffff",grid:{left:"30%",right:"30%",top:100,bottom:"20%",containLabel:!0},tooltip:{show:"true",trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{name:"问题数",type:"value",axisTick:{show:!0},axisLine:{show:!0,lineStyle:{color:"#000"}},splitLine:{show:!0}},yAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#000000"}},axisLabel:{interval:{default:0},rotate:0,formatter:function(e){var r="",t=e.length,a=8,i=Math.ceil(t/a);if(t>a){var o="";o=e.substring(0,8),r=o+"..."}else r=e;return r}},data:["企业资质","生产环境条件","生产环境条件","生产过程控制","产品检验","贮存和运输","标识标签","食品召回","人员要求、事故处置","企业自查"]}],series:[{name:"事项申请数",type:"bar",itemStyle:{normal:{show:!0,color:"#81d0d7",borderWidth:0,borderColor:"#333"}},barGap:"0%",barCategoryGap:"50%",data:[70,90,100,110,122,130,135,150,157,195]}]};
