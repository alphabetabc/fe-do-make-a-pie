option=commonEchartOption_4(["#9fb9e3",21,"链路利用率Top5","5%"],[["15%","10%","53%","5"],["15%","55%","7%","5"]],[[1020,0],[1060,1]],[["category","left",[-5,0,0,0],[-70,0,0,12],"#9FB9E3",16,35,0,"left",[-32,-30,0,0],14,[!0,[32,-30,0,0]]],["category","left",[-5,0,0,0],[-70,0,0,10],"#9FB9E3",16,5,1,"left",[-32,-20,0,0],14,[!0,[32,-20,0,0]]]],[["一平面入口流量","8%","#00D4FF","#00D4FF",0,0,["40%",["80%","100%"],["0%","0%"]],[!0,"进","#00D4FF"]],["一平面出口流量","8%","#34E598","#34E598",0,0,["40%",["80%","100%"],["0%","0%"]],[!0,"出","#34E598"]],["二平面入口流量","8%","#00D4FF","#00D4FF",1,3,["40%",["80%","100%"],["0%","0%"]],[!0,"进","#00D4FF"]],["二平面出口流量","8%","#34E598","#34E598",1,3,["40%",["80%","100%"],["0%","0%"]],[!0,"出","#34E598"]]],5,"Mb",!0),option.yAxis[0].data=["xx站(一平面)","xx站(一平面)","xx站(一平面)","xx站(一平面)","xx站(一平面)"],option.series[0].data=[360,420,534,635,800],option.series[1].data=[400,434,335,260,220],option.yAxis[1].data=[360,420,534,635,800],option.yAxis[2].data=[400,434,335,260,220],option.yAxis[3].data=["xx站(二平面)","xx站(二平面)","xx站(二平面)","xx站(二平面)","xx站(二平面)"],option.series[2].data=[360,420,534,635,800],option.series[3].data=[400,434,335,260,220],option.yAxis[4].data=[360,420,534,635,800],option.yAxis[5].data=[400,434,335,260,220];function commonEchartOption_4(o,A,l,n,e,g,c,F,r){var a={};a.backgroundColor={type:"radial",x:.5,y:.5,r:.5,colorStops:[{offset:0,color:"#0f2660"},{offset:1,color:"#020712"}],global:!1},a.title={text:o[2]?o[2]:"统计分析图",textStyle:{fontFamily:"宋体",fontWeight:"bolder",color:o[0],fontSize:o[1]},left:o[5]?o[5]:"center"},o[3]&&(a.title.top=o[3]);for(var h=[],t=0;t<A.length;t++)h.push({top:A[t][0],left:A[t][1],right:A[t][2],bottom:A[t][3]});a.grid=h,a.tooltip={show:!1};for(var p=[],t=0;t<l.length;t++)p.push({type:"value",gridIndex:l[t][1],axisLine:{show:!1},max:l[t][0],splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}});a.xAxis=p,r=r||[];for(var f=[],t=0;t<n.length;t++)f.push({type:n[t][0],offset:n[t][6],splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,align:n[t][1],padding:n[t][2],textStyle:{color:n[t][4],fontSize:n[t][5]},formatter:function(i,u){return u==g-1?"{b|}{name|"+i+"}":"{c|"+(g-u)+"}{name|"+i+"}"},rich:{b:{backgroundColor:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAB2ElEQVQ4jaWVX0tUQRjGX7fSG5liMZHtvOdLJPWFMuzDmH/BRYUgyUAQROumjv82dWfGY0Fl3kQXIgXZrtBFxDovjxfS6u45Z3fWBp6bmXd+8Dy88w6Rx0Jp4C7iQp9PbWvQIt0Qy0/EcMUZrkjMwwDlrgeLg4diOHaGcVViOMZe8KADUKHPGZ4Ty9IMq8uyOBPOtowBoJzEPOwu7KWDkqqISYmhVk6314H26jE4E866Vvb8JWLDGfIpPniRw8fnXV5gL+C3JYWvi72dA2v6XqLg704/NscJG2OEP9v9ifPmOw3ArQnC8apqstuDaIQQjRA+zfc0nP14rbA1TtnA0zWFd1OEw4VuVN8qVKN8HfZPv97cQTW6jcOX3ShNEqqRygY6w7Azl5fXn1ICeHWvXKREBAngl4VbCUiWPs/fbA88XlHewKNl1R74e8MfeLrmATzTQUOOWdJFSm2z1MY+0wG+v1L48IywPXXRg+ujhNIEIZ4jHC33olYuZDb2ic8L8JFY/knYDfJieNqZ/xoQ4gxPYzfIX44ww4NOs7kGTNd0eD9zyDobDnnGcOJM8AigrvbfwEGQFxMWM2IQabbnu/CeB51tiEFjP8OeNxSUEx0+djYc8vlCzwEjfRpEh+5lrwAAAABJRU5ErkJggg=="},width:29,height:29,align:"center"},c:{color:"#FFFFFF",width:29,height:29,align:"center",verticalAlign:"center",backgroundColor:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAA+0lEQVQ4je3VPW7CQBAF4GfBAVzFxyA1cA3qQIeimbWPwBmcA4SchCbU5gQgPLMSrnyAIG9KfhzwGlJ6pNetPmleMQv4TFKGSHah19u741wAsjOQFiApwDoFXPAYlugrWNYgcRdh/QbroAW0C8HyAZJjDTvlCJK0oQYXgHUKkuIOdBU9wOhbvYb3G+v5w2c1kKQN6/mF9QckKZ6GrtOBHdiBnmD5j2AJxNsIlC9BUj0BVWD9xPzwcjphZEcg2bTHNIOxw79v7MT1YCx71lCCLWHies3fQFxEoPzrRg0VKF8i3kbNUA3ejy9r0AxkR+2h81ms+mAxMJZ91vsFh2hnzEe9YUgAAAAASUVORK5CYII="},fontSize:n[t][5]},name:{color:"#9FB9E3",fontSize:n[t][5],padding:n[t][3]}}},axisTick:{show:!1},gridIndex:n[t][7]?n[t][7]:0,position:n[t][8]?n[t][8]:"left"}),f.push({type:"category",gridIndex:n[t][7]?n[t][7]:0,position:"right",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,align:"right",fontSize:n[t][5],formatter:function(i){return"{name|"+i+c+"}"},rich:{name:{color:"#9FB9E3",width:100,fontSize:n[t][10],padding:n[t][9]}}}}),n[t][11]&&n[t][11][0]&&f.push({type:"category",gridIndex:n[t][7]?n[t][7]:0,position:"right",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,align:"right",fontSize:n[t][5],formatter:function(i){return"{name|"+i+c+"}"},rich:{name:{color:"#9FB9E3",width:100,fontSize:n[t][10],padding:n[t][11][1]}}}});a.yAxis=f;for(var d=[],t=0;t<e.length;t++){var w={name:e[t][0],xAxisIndex:e[t][4],yAxisIndex:e[t][5],barGap:"220%",barCategoryGap:"5%",barWidth:e[t][1],type:"pictorialBar",xAxisIndex:e[t][4],yAxisIndex:e[t][5],symbol:"rect",symbolMargin:e[t][6][0],symbolSize:e[t][6][1],symbolOffset:e[t][6][2],symbolRepeat:!0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:e[t][2]},{offset:1,color:e[t][3]}],global:!1}},z:2};e[t][7]&&e[t][7][0]&&(w.label={show:e[t][7][0],position:"left",offset:r[0]?r[0]:[-64,0],padding:r[1]?r[1]:[0,0,0,295],borderWidth:1,borderColor:r[2]?r[2]:"#1F2C83",distance:r[3]?r[3]:-370,color:e[t][7][2]?e[t][7][2]:"#9FB9E3",fontSize:r[4]?r[4]:13,formatter:e[t][7][1]}),d.push(w)}if(a.series=d,F&&a.yAxis.length>=2)for(var x=1;x<a.yAxis.length;x++)a.yAxis[x].position=="left"&&(a.yAxis[x].axisLabel.formatter=function(m,i){return"{name|"+m+"}"});return a}