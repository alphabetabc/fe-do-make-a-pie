var uploadedDataURL1="/asset/get/s/data-1514970761653-ByzqAf9XG.png",uploadedDataURL2="/asset/get/s/data-1514970765660-B1I50M5QM.png",baifenbi=[.333,.444,.555,.777,.888,.922],grayBar=[1,1,1,1,1,1],paiming=[6,5,4,3,2,1],zongjine=[2e3,3e3,4e3,5e3,6e3,7e3],xingm=["杨子涛","李娜","王军军","陈翔","刘亚娜","张晓明"];option={backgroundColor:"#061A42",color:["#61A8FF"],xAxis:[{show:!1},{show:!1}],yAxis:{type:"category",axisLabel:{show:!1},itemStyle:{},axisTick:{show:!1},axisLine:{show:!1},data:xingm},series:[{show:!0,type:"bar",barGap:"-100%",barWidth:"35%",itemStyle:{normal:{color:"rgba(102, 102, 102,0.5)"}},z:1,data:grayBar},{show:!0,type:"bar",barGap:"-100%",barWidth:"35%",itemStyle:{normal:{color:{type:"bar",colorStops:[{offset:0,color:"#39A7FC"},{offset:1,color:"#00FBFF"}],globalCoord:!1}}},max:1,label:{normal:{show:!0,textStyle:{color:"#fff"},position:"inside",formatter:function(e){return(baifenbi[e.dataIndex]*100).toFixed(1)+"%"}}},labelLine:{show:!1},z:2,data:baifenbi},{show:!0,type:"bar",xAxisIndex:1,barGap:"-100%",barWidth:"25%",itemStyle:{normal:{barBorderRadius:200,color:"rgba(22,203,115,0.05)"}},label:{normal:{show:!0,position:[0,"-100%"],rich:{white:{color:"#ffffff"},start1:{backgroundColor:{image:uploadedDataURL1}},start2:{backgroundColor:{image:uploadedDataURL2}},green:{color:"#70DDA7"},yellow:{color:"#CCB877"},red:{color:"#BC3C47"},gray:{color:"#727CBA"}},formatter:function(e){return paiming[e.dataIndex]==1?"{start1|}{red|"+paiming[e.dataIndex]+"  "+xingm[e.dataIndex]+"}                                                           {white|    总销售额:}{gray|"+zongjine[e.dataIndex]+"}{white|元}":paiming[e.dataIndex]==2?"{start1|}{yellow|"+paiming[e.dataIndex]+"  "+xingm[e.dataIndex]+"}                                                           {white|    总销售额:}{gray|"+zongjine[e.dataIndex]+"}{white|元}":paiming[e.dataIndex]==3?"{start1|}{green|"+paiming[e.dataIndex]+"  "+xingm[e.dataIndex]+"}                                                           {white|    总销售额:}{gray|"+zongjine[e.dataIndex]+"}{white|元}":"{start2|}{white|"+paiming[e.dataIndex]+"  "+xingm[e.dataIndex]+"}                                                           {white|    总销售额:}{gray|"+zongjine[e.dataIndex]+"}{white|元}"}}},data:zongjine}]};
