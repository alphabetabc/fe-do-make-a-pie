config={rotate:90,align:"left",verticalAlign:"middle",position:"bottom",distance:140};var labelOption={normal:{show:!0,position:config.position,distance:config.distance,align:config.align,verticalAlign:config.verticalAlign,rotate:config.rotate,formatter:"{b}",fontSize:12,textStyle:{color:"black"}}};option={title:{text:"ESI学科基线比较量"},grid:{bottom:170},tooltip:{trigger:"axis"},legend:{data:["机构最低被引量","本校被引量"]},calculable:!0,xAxis:[{interval:0,axisLabel:{show:!1},type:"category",boundaryGap:!0,data:["Space Science",`Social Sciences,
 general`,`Psychiatry/Psycho
logy`,`Plant & Animal
Science`,"Physics",`Pharmacology
& Toxicology`,`Neuroscience
& Behavior`,"Multidisciplinary",`Molecular Biology
& Genetics`,"Microbiology","Mathematics","Materials Science","Immunology","Geosciences",`Environment/Eco
logy`,"Engineering",`Economics
& Business`,"Computer Science","Clinical Medicine","Chemistry",`Biology
& Biochemistry`,`Agricultural
Sciences`]}],yAxis:[{type:"value"}],series:[{name:"机构最低被引量",type:"bar",label:labelOption,data:[2300,500,4e3,2e3,1e4,2500,4e3,9e3,9500,22e3,100,4e3,3e3,1e4,3500,4500,8e3,9e3,4500,8500,9e3,4500],itemStyle:{normal:{color:"#33FFFF"}}},{name:"本校被引量",type:"bar",data:[200,500,900,200,200,700,100,100,400,100,600,200,100,200,300,500,100,500,200,300,400,500],itemStyle:{normal:{color:"#003333"}}}]};
