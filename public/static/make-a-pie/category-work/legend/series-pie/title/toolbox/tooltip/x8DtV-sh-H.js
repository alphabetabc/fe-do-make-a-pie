var data=[{value:"10093.65",name:"耕地"},{value:"14875.90",name:"林地"},{value:"1053.30",name:"草地"},{value:"1759.35",name:"水域"},{value:"1069.50",name:"建设用地"},{value:"57.75",name:"其它用地"}];option={title:{text:"土地利用类型",subtext:"单位：万m³",left:"center",top:0,textStyle:{fontSize:20},subtextStyle:{color:"#888"}},backgroundColor:"rgba(0,0,0,0)",toolbox:{show:!0,feature:{saveAsImage:{show:!0,iconStyle:{color:"#333"}}}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#4ac7f5","#42a4eb","#5f71d2","#f36f8a","#fd9173","#22C3AA"],legend:{show:!1,left:"55",top:"50",orient:"vertical",itemGap:12,itemWidth:10,itemHeight:10,icon:"rect",data:["有林地","疏林地"],textStyle:{color:[],fontStyle:"normal",fontFamily:"微软雅黑",fontSize:12}},series:[{name:"",type:"pie",minAngle:20,center:["50%","50%"],radius:[180,360],avoidLabelOverlap:!0,label:{normal:{show:!0,position:"inside",formatter:`{b}

{c}万m³

{d}%`,textStyle:{color:"#fff",fontSize:16}},emphasis:{show:!0,textStyle:{fontWeight:"bold"}}},data}]};
