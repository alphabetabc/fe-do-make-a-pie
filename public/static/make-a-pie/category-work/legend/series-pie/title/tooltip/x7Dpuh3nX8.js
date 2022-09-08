const chartPieColors=[[{offset:0,color:"#59B5FF"},{offset:1,color:"#2263BD"}],[{offset:0,color:"#FF9793"},{offset:1,color:"#E7504C"}],[{offset:0,color:"#AE60FA"},{offset:1,color:"#6D32C1"}],[{offset:0,color:"#EFCE49"},{offset:1,color:"#D79C12"}],[{offset:0,color:"#FFB058"},{offset:1,color:"#C56625"}],[{offset:0,color:"#4ACC88"},{offset:1,color:"#27A657"}],[{offset:0,color:"#2C989E"},{offset:1,color:"#27BCC9"}],[{offset:0,color:"#8A98FF"},{offset:1,color:"#2B36A8"}]];let datas=[{name:"打架斗殴",value:1},{name:"课堂违纪",value:10},{name:"早恋",value:1},{name:"其他",value:3},{name:"校园暴力",value:1}],seriesData=datas.map((o,e)=>({value:o.value,name:o.name,itemStyle:{borderWidth:3,borderColor:"#182037",color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:chartPieColors[e>8?Math.floor(Math.random()*8+1):e],global:!1}}}));option={backgroundColor:"#0A2E5D",tooltip:{trigger:"高二(三)班李四违纪情况分析"},title:{text:"高二(三)班李四违纪情况分析",textStyle:{color:"white"}},legend:{orient:"vertical",right:10,data:["打架斗殴","校园暴力","课堂违纪","早恋","其他"],textStyle:{color:"white"}},series:[{name:"违纪情况",type:"pie",radius:["40%","55%"],label:{formatter:`{a|{a}}{abg|}
{hr|}
  {b|{b}：}{c}  {per|{d}%}  `,backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"black",lineHeight:22,align:"center"},hr:{borderColor:"",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}},data:seriesData}]};
