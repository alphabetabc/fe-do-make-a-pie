let xData=[{name:"食品类",value:12},{name:"危化品类",value:12},{name:"电子电器类",value:9},{name:"医疗耗材类",value:7},{name:"机械设备类",value:11},{name:"日化品类",value:19},{name:"木材类",value:8},{name:"普货类",value:10}],colorList=["red","orange","yellow","green","Cyan","blue","purple","pink"],seriesVal=[];for(let e=0;e<xData.length;e++)seriesVal.push({showBackground:!0,type:"bar",data:[xData[e].value],name:xData[e].name,coordinateSystem:"polar",color:colorList[e]});option={angleAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"category",z:10,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{radius:["10%","50%"]},series:seriesVal,legend:{top:"middle",right:"20%",orient:"vertical",itemWidth:5,icon:"rect",formatter:function(e){for(var l=xData,r=0,t,a=0,o=l.length;a<o;a++)r+=l[a].value,l[a].name==e&&(t=l[a].value);var s=["{a|"+e+":}","{c|"+t+"}"];return s.join(" ")},textStyle:{rich:{a:{fontSize:14,align:"left"},b:{width:20,color:"gray",fontSize:14}}},shadowBlur:10,show:!0,data:xData.map(e=>e.name)}};
