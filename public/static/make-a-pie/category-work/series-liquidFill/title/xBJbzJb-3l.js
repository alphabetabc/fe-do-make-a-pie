for(var series=[],data=[-28,-6,-3,12,22,31,40],countries=["俄罗斯","中国","美国","英国","墨西哥","巴西","澳大利亚"],titles=[],i=0;i<7;i++){var x=7+i/7*100+"%";titles.push({text:countries[i],textAlign:"center",left:x,bottom:10,padding:0,textStyle:{color:"#fff",fontSize:12,fontWeight:"normal"}}),series.push({animation:!0,waveAnimation:!0,color:["rgb(253, 77, 73)"],center:[x,"50%"],radius:"50%",type:"liquidFill",shape:"path://M43.844,188.547 L43.844,21.797 C43.844,9.877 34.182,0.215 22.264,0.215 C10.346,0.215 0.683,9.877 0.683,21.797 L0.683,188.547 L22.2635,221.428128 L43.844,188.547 Z",outline:{show:!1},amplitude:1,waveLength:"10%",backgroundStyle:{color:"none",borderColor:"#fff",borderWidth:15},data:[{value:(data[i]- -60)/160+.1,rawValue:data[i]}],itemStyle:{normal:{shadowBlur:0}},label:{normal:{position:"insideBottom",distance:-40,formatter:function(t){return" "+t.data.rawValue+"°"},textStyle:{color:"rgb(253, 77, 73)",fontSize:16}}}})}myChart.setOption({title:titles,series});