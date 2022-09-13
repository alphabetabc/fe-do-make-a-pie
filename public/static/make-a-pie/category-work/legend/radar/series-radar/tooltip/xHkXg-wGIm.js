myChart.setOption({backgroundColor:"rgb(35, 43, 46)",tooltip:{},color:["rgba(82, 255, 175, 0.8)","rgba(2, 159, 254, 0.8)"],legend:{data:["预算分配（Allocated Budget）","实际开销（Actual Spending）"],textStyle:{color:"#fff"}},radar:{shape:"circle",radius:150,splitNumber:4,name:{textStyle:{color:"white"}},axisLine:{lineStyle:{width:2,color:"rgba(2, 159, 254, 0.5)"}},splitLine:{show:!0,lineStyle:{width:2,type:"dashed",color:"rgba(2, 159, 254, 0.5)"}},splitArea:{areaStyle:{color:"rgba(35, 43, 46, 0.5)"}},indicator:[{name:"1",max:6500},{name:"2",max:16e3},{name:"3",max:3e4},{name:"4",max:38e3},{name:"5",max:52e3}]},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4],name:"预算分配（Allocated Budget）",areaStyle:{normal:{color:"rgba(82, 255, 175, 0.7)"}}},{value:[2e3,15e3,28e3,27e3,42e3],name:"实际开销（Actual Spending）",areaStyle:{normal:{color:"rgba(2, 159, 254, 0.7)"}}}],lineStyle:{width:3}}]});