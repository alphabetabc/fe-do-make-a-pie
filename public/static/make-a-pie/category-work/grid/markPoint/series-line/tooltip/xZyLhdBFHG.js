for(var data=[[1539162681857,.5],[1539171310247,1],[1539179938616,.8],[1539182032910,.7]],marks=[{value:1539171310247,note:"标记一"},{value:1539182032910,note:"标记二"}],markPoints=[],i=0;i<marks.length;++i)for(var j=0;j<data.length;++j)data[j][0]===marks[i].value&&markPoints.push({xAxis:data[j][0],yAxis:data[j][1]});var option={xAxis:{type:"time"},yAxis:{type:"value"},color:["#EE9400"],tooltip:{show:!0,formatter:function(t){if(!!t.data){for(var r=0;r<marks.length;++r)if(marks[r].value===t.data.coord[0])return marks[r].note}}},series:[{type:"line",data,showSymbol:!1,markPoint:{symbol:"circle",symbolSize:15,itemStyle:{color:"transparent",borderColor:"rgba(255, 77, 81, 0.8)",borderWidth:6},data:markPoints}}]};