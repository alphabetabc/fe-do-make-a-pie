option={backgroundColor:"#FFFFFF",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},grid:{left:"1%",right:"52%",containLabel:!0},xAxis:{name:"问题数(个)",type:"value",position:"top",splitLine:{show:!1},boundaryGap:[0,.01]},yAxis:{type:"category",axisLabel:{interval:{default:0},rotate:0,formatter:function(e){var a="",r=e.length,t=6,i=Math.ceil(r/t);if(r>t){var o="";o=e.substring(0,6),a=o+"..."}else a=e;return a}},data:["企业资质","生产环境条件","生产环境条件","生产过程控制","产品检验","贮存和运输","标识标签","食品召回","人员要求、事故处置","企业自查"]},series:[{name:"事项申请数",type:"bar",barWidth:"50%",barGap:"0%",barCategoryGap:"50%",itemStyle:{normal:{show:!0,color:"#81d0d7",borderWidth:0,borderColor:"#333"}},data:[70,90,100,110,122,130,135,150,157,195]}]};