var randomData=function(){var r=[];for(i=0;i<data.length;i++)data[i][2]===0&&r.push(i);var o=Math.floor(Math.random()*r.length);i=r[o];var a=Math.round(Math.random())+1;data[i][2]=a},isOver=function(){for(i=0;i<X;i++)if(data[i*Y][2]===0)return 0;for(i=0;i<X;i++)for(j=1;j<Y;j++)if(data[i*Y+j][2]===0||data[i*Y+j][2]==data[i*Y+j-1][2])return 0;for(j=0;j<Y;j++)for(i=1;i<X;i++)if(data[i*Y+j][2]==data[(i-1)*Y+j][2])return 0;is_over=!0},vecMerge=function(r,o){if(data[r*Y+o][2]){if(val_vec.length&&data[r*Y+o][2]==val_vec[val_vec.length-1])return score+=Math.pow(2,val_vec[val_vec.length-1]),val_vec[val_vec.length-1]+=1,val_vec.push(0),0;val_vec.push(data[r*Y+o][2])}},leftFcn=function(){for(j=0;j<Y;j++){for(val_vec=[],i=0;i<X;i++)vecMerge(i,j);var r=0;for(k=0;k<val_vec.length;k++)val_vec[k]&&(val_arr[r*Y+j]=val_vec[k],r+=1)}},rightFcn=function(){for(j=0;j<Y;j++){for(val_vec=[],i=X-1;i>=0;i--)vecMerge(i,j);var r=X-1;for(k=0;k<val_vec.length;k++)val_vec[k]&&(val_arr[r*Y+j]=val_vec[k],r-=1)}},upFcn=function(){for(i=0;i<X;i++){for(val_vec=[],j=Y-1;j>=0;j--)vecMerge(i,j);var r=Y-1;for(k=0;k<val_vec.length;k++)val_vec[k]&&(val_arr[i*Y+r]=val_vec[k],r-=1)}},downFcn=function(){for(i=0;i<X;i++){for(val_vec=[],j=0;j<Y;j++)vecMerge(i,j);var r=0;for(k=0;k<val_vec.length;k++)val_vec[k]&&(val_arr[i*Y+r]=val_vec[k],r+=1)}};document.onkeydown=function(r){if(is_over||r&&(r.keyCode<37||r.keyCode>40))return 0;for(i=0;i<X;i++)for(j=0;j<Y;j++)val_arr[i*Y+j]=0;r&&r.keyCode===37&&leftFcn(),r&&r.keyCode===39&&rightFcn(),r&&r.keyCode===38&&upFcn(),r&&r.keyCode===40&&downFcn();var o=!1;for(i=0;i<X;i++)for(j=0;j<Y;j++)data[i*Y+j][2]!=val_arr[i*Y+j]&&(o=!0,data[i*Y+j][2]=val_arr[i*Y+j]);o&&(randomData(),isOver(),is_over&&(score="OVER")),option.series.data=data,option.title.text=score+"",myChart.setOption(option,!0)};for(var X=4,Y=X,score=0,data=[],i=0;i<X;i++)for(var j=0;j<Y;j++)data.push([i,j,0]);var val_arr=[],val_vec,is_over=!1;randomData(),randomData();var axisType={type:"category",data:["0","1","2","3"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}},option={title:{text:score+"",left:"center",top:15},tooltip:{formatter:function(r){return"["+r.value[0]+", "+r.value[1]+"]: "+r.value[2]}},grid:{left:60,right:60},xAxis:axisType,yAxis:axisType,visualMap:{min:0,max:14,show:!1},series:{name:"2048",type:"heatmap",data,label:{normal:{show:!0,fontSize:18,formatter:function(r){return r.value[2]?Math.pow(2,r.value[2]):""}}},itemStyle:{normal:{borderWidth:1,borderColor:"#FFF"}}}};
