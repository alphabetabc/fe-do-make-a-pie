var dataAll=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]];option={grid:[{x:"7%",y:"7%",width:"80%",height:"38%"},{x:"7%",y2:"7%",width:"80%",height:"38%"}],tooltip:{formatter:"Group {a}: ({c})"},xAxis:[{gridIndex:0,min:0,max:20},{gridIndex:1,min:0,max:20}],yAxis:[{gridIndex:0,min:0,max:15},{gridIndex:1,min:0,max:15}],dataZoom:[{type:"slider",show:!0,id:"sliderX",xAxisIndex:[0,1],start:1,end:35},{type:"inside",id:"insideX",xAxisIndex:[0,1],start:1,end:35},{type:"slider",show:!0,orient:"vertical",yAxisIndex:[0],left:"93%",start:29,end:36},{type:"inside",orient:"vertical",yAxisIndex:[0],start:29,end:36},{type:"slider",show:!0,orient:"vertical",yAxisIndex:[1],left:"93%",start:29,end:36},{type:"inside",orient:"vertical",yAxisIndex:[1],start:29,end:36}],series:[{name:"I",type:"scatter",xAxisIndex:0,yAxisIndex:0,data:dataAll[0]},{name:"II",type:"scatter",xAxisIndex:1,yAxisIndex:1,data:dataAll[1]}]};