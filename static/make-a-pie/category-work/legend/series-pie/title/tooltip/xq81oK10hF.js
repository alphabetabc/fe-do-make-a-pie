for(var datas=[{name:"TV",value:675},{name:"盒子高级版",value:1397},{name:"盒子基础版",value:318},{name:"APP",value:101},{name:"小程序",value:110},{name:"iPad",value:111},{name:"PC",value:110}],total_datas=0,i=0;i<datas.length;i++)total_datas+=datas[i].value;option={color:["#FF8352","#E271DE","#00FFFF","#4AEAB0","#31C5C0","#1E9BD1","#009D85"],backgroundColor:"#012A5C",title:{text:"总数",subtext:total_datas,textStyle:{color:"#f2f2f2",fontSize:40,align:"center"},subtextStyle:{fontSize:30,color:["#ff9d19"]},x:"center",y:"center"},grid:{bottom:150,left:100,right:"10%"},legend:{bottom:"5%",textStyle:{color:"#f2f2f2",fontSize:25},icon:"roundRect",data:datas},tooltip:{formatter:"{a}：<br/>{b}: {c}人"},series:[{radius:["30%","61%"],center:["50%","50%"],type:"pie",label:{normal:{show:!0,formatter:"{c}次",textStyle:{fontSize:30},position:"outside"},emphasis:{show:!0}},labelLine:{normal:{show:!0,length:30,length2:55},emphasis:{show:!0}},name:"信息统计",data:datas},{radius:["30%","34%"],center:["50%","50%"],type:"pie",label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},animation:!1,tooltip:{show:!1},data:[{value:1,itemStyle:{color:"rgba(250,250,250,0.3)"}}]},{name:"外边框",type:"pie",clockWise:!1,hoverAnimation:!1,center:["50%","50%"],radius:["65%","65%"],label:{normal:{show:!1}},data:[{value:9,name:"",itemStyle:{normal:{borderWidth:2,borderColor:"#0b5263"}}}]}]};
