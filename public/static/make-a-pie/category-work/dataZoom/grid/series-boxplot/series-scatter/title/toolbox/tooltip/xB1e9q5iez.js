var data=echarts.dataTool.prepareBoxplotData([[97.92,78,.36,84.48,75.72,124.44,134.52,2.28],[17.76,57.48,22.2,89.76,95.52,14.28,13.2,14.28,15.84,45.12,10.32,45.12,54.6,21.36,38.4,192.6,58.92,41.28,44.4,39.24,34.08,44.28,90.24,26.4,14.4,43.2,73.2,75.6,36,26.4,212.4,20.4,54,169.2,37.2,79.2,97.2,50.4,39.6,67.2,63.6,12,79.2,7.2,80.4,34.8,32.4,44.4,68.4,109.2,43.2,20.4,40.8,44.4,145.2,40.8,136.8,42,46.8,108,37.2,70.8,34.8,144,46.8,151.2,115.2,58.8,86.4,109.2,69.6,37.2,79.2,52.8,12,90,46.8,97.2,73.2,90,61.2,38.4,85.2,74.4],[117.84,140.04,107.04,103.08,38.88,81.72,97.44,36.48,123.36,21.96,209.88,41.64,3.36,57.24,130.32,4.92,11.76,21.72,12,6.48,33.12,8.52,39.84,48.84,19.2,15.24,37.92,82.44,18.36,2.28,75.24,23.88,23.52,34.08,81.6,124.08,74.52,67.44,47.64,43.8,39.6,60.24,98.76,109.32,17.64,89.28,7.56,35.88,2.28,19.68,118.2,26.52,7.2,72.48,189.84,58.32,136.92,6.36,.24,14.16,5.4,23.64,.48,.48,20.28,9.84,124.32,248.16,.6,14.4,63.96,36,72.96,73.44,224.64,3.12,39.96,24.24,159.6,3.6,5.76,16.08,66.72,15.72,72.72,57.6,87.6,116.4,12,26.4,48,39.6,88.8,24,132,18,28.8,49.2,36,69.6,16.8,32.4,40.8,76.8,86.4,46.8,28.8,49.2,60,19.2,87.6,21.6,64.8,14.4,61.2,9.6,58.8,28.8,1.2,14.4,64.8,99.6,105.6,96,39.6,68.4,56.4,75.6,20.4,79.2,58.8,100.8,43.2,78,115.2,80.4,7.2,54,76.8,15.6,46.8,82.8,70.8,84,33.6,61.2,52.8,52.8,27.6,14.4,76.8,70.8,81.6,44.4,43.2,1.2,48,52.8,55.2,88.8],[16.08,18,27.6,39.36,81.24,7.68,6.96,15.24,8.28,15.6,23.04,5.76,8.52,7.92,5.64,15.12,11.76,10.32,7.44,2.52,12.36,4.92,11.28,7.08,79.44,1.92,2.16,10.56,24.6,16.8,75.72,19.08,10.08,.48,38.52,4.44,150.72,7.08,12.96,9.84,34.68,18.6,3.84,3,7.8,7.68,.36,6.96,3.6,15.48,41.52,3.36,8.76,29.52,1.44,13.92,13.32,10.56,9.6,3.48,8.64,21,3.6,8.88,6.6,6.72,12.72,3.96,37.2,3.12,12.24,39.72,7.8,4.2,5.4,7.2,13.68,7.44,8.04,3.24,27.12,8.52,3.36,66.72,10.68,28.92,7.32,14.64,4.8,8.4,2.16,12.72,117.48,31.92,31.44,21.72,49.56,19.32,23.04,39.84,14.52,14.52,.72,22.2,.6,.24,15.12,66.72,12.6,5.64,.96,.24,4.2,7.32,7.8,6,4.08,.24,62.04,35.16,10.92,.6,18.36,9.48,4.2,11.04,6.6,2.88,5.76,27.6,6.36,3.6,11.76,8.76,33.48,5.76,4.2,2.52,39.84,2.76,18.96,13.68,9.12,26.64,6.72,7.56,3.36,23.04,1.8,4.08,13.44,3.48,12.6,1.32,4.56]]),d1="grade4";option={title:[{text:"box of type 's survival",left:"center"},{text:`upper: Q3 + 1.5 * IRQ 
lower: Q1 - 1.5 * IRQ`,borderColor:"#ff0000",borderWidth:1,textStyle:{fontSize:14,color:"#ff0000"},left:"10%",top:"90%"}],tooltip:{trigger:"item",axisPointer:{type:"shadow"}},toolbox:{feature:{dataView:{show:!0},dataZoom:{},brush:{type:["rect","polygon","clear","line"]}}},grid:{left:"10%",right:"10%",bottom:"15%"},xAxis:{type:"category",data:["grade1","grade2","grade3","grade4"],boundaryGap:!0,nameGap:30,splitArea:{show:!1},axisLabel:{formatter:"{value}"},splitLine:{show:!1}},yAxis:{type:"value",name:"survival",splitArea:{show:!0}},series:[{name:"boxplot",type:"boxplot",data:data.boxData,tooltip:{formatter:function(t){return["grade "+t.name+": ","upper: "+t.data[4],"Q3: "+t.data[3],"median: "+t.data[2],"Q1: "+t.data[1],"lower: "+t.data[0]].join("<br/>")}}},{name:"outlier",type:"scatter",data:data.outliers}]};
