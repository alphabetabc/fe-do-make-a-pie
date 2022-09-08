const data=[["00:00","00:05","00:10","00:15","00:20","00:25","00:30","00:35","00:40","00:45","00:50","00:55","01:00","01:05","01:10","01:15","01:20","01:25","01:30","01:35","01:40","01:45","01:50","01:55","02:00","02:05","02:10","02:15","02:20","02:25","02:30","02:35","02:40","02:45","02:50","02:55","03:00","03:05","03:10","03:15","03:20","03:25","03:30","03:35","03:40","03:45","03:50","03:55","04:00","04:05","04:10","04:15","04:20","04:25","04:30","04:35","04:40","04:45","04:50","04:55","05:00","05:05","05:10","05:15","05:20","05:25","05:30","05:35","05:40","05:45","05:50","05:55","06:00","06:05","06:10","06:15","06:20","06:25","06:30","06:35","06:40","06:45","06:50","06:55","07:00","07:05","07:10","07:15","07:20","07:25","07:30","07:35","07:40","07:45","07:50","07:55","08:00","08:05","08:10","08:15","08:20","08:25","08:30","08:35","08:40","08:45","08:50","08:55","09:00","09:05","09:10","09:15","09:20","09:25","09:30","09:35","09:40","09:45","09:50","09:55","10:00","10:05","10:10","10:15","10:20","10:25","10:30","10:35","10:40","10:45","10:50","10:55","11:00","11:05","11:10","11:15","11:20","11:25","11:30","11:35","11:40","11:45","11:50","11:55","12:00","12:05","12:10","12:15","12:20","12:25","12:30","12:35","12:40","12:45","12:50","12:55","13:00","13:05","13:10","13:15","13:20","13:25","13:30","13:35","13:40","13:45","13:50","13:55","14:00","14:05","14:10","14:15","14:20","14:25","14:30","14:35","14:40","14:45","14:50","14:55","15:00","15:05","15:10","15:15","15:20","15:25","15:30","15:35","15:40","15:45","15:50","15:55","16:00","16:05","16:10","16:15","16:20","16:25","16:30","16:35","16:40","16:45","16:50","16:55","17:00","17:05","17:10","17:15","17:20","17:25","17:30","17:35","17:40","17:45","17:50","17:55","18:00","18:05","18:10","18:15","18:20","18:25","18:30","18:35","18:40","18:45","18:50","18:55","19:00","19:05","19:10","19:15","19:20","19:25","19:30","19:35","19:40","19:45","19:50","19:55","20:00","20:05","20:10","20:15","20:20","20:25","20:30","20:35","20:40","20:45","20:50","20:55","21:00","21:05","21:10","21:15","21:20","21:25","21:30","21:35","21:40","21:45","21:50","21:55","22:00","22:05","22:10","22:15","22:20","22:25","22:30","22:35","22:40","22:45","22:50","22:55","23:00","23:05","23:10","23:15","23:20","23:25","23:30","23:35","23:40","23:45","23:50","23:55"],["x",59.55,60.43,57.46,48.87,66.33,57.38,42.1,59.17,42.36,47.38,59.09,56.93,40.51,49.98,49.49,42.98,50.66,66.24,62.87,48.13,43.53,47.1,53.37,56.59,59.31,59.88,62.58,60.05,47.61,45.74,53.88,54.67,54.39,45.76,42.95,65.34,54.12,47.35,58.83,48.88,44.71,65.08,51.64,56.81,46.16,58.28,42.08,41.98,62.02,67.37,50.72,59.75,51.67,54.2,46.03,48.87,50.32,50.04,68.93,43.94,63.13,55.98,43.84,56.76,53.14,62.04,52.28,54.63,57.34,68.33,51.86,55.37,61.32,44.51,64.95,49.7,65.38,55.45,58.58,51.34,57.26,43.3,49.81,59.29,59.94,59.92,63.54,64.71,55.81,41.88,69.29,47.25,63.34,62.68,65.64,57.86,57.12,63.92,41.45,63.5,56.61,53.95,57.35,53.35,41.88,45.68,69.45,47.06,69.66,64.61,60.21,67.58,53.34,48.74,63.23,53.08,45.9,67.39,51.47,68.96,63.92,51.57,61.89,50.69,61.01,47.51,43.23,48.44,68.44,66.4,43.21,52,69.41,45.93,64.69,59.14,48.98,49.27,66.35,59.6,54.53,53.75,62.3,69.16,50.63,62.52,60.33,69.25,60.07,47.12,56.82,51.04,45.5,63.34,44.19,47.62,61.46,60.59,61.79,40.32,42.08,42.67,59.06,69.07,40.55,54.9,56.73,62.33,58.02,59.59,42.68,60.44,51.14,43.78,68.12,44.56,44.1,52.22,49.94,51.08,54.63,60.05,59.49,43.94,59.75,47.41,59.63,60.88,66.53,56.49,59.47,51.07,51.94,55.42,58.68,55.09,68.66,49.03,61.49,68.65,52.11,63.02,59.7,41.22,50.9,54.94,55.6,49.6,45.57,54.14,58.71,46.1,50.64,51.29,44.27,61.84,50.08,48.7,59.96,67.08,41.4,46.2,43.41,69.96,45.01,61.37,45.54,49.81,52.81,59.61,43.21,56.22,45.25,69.64,52.31,65.54,44.99,45.09,53.55,65.33,61.55,48.34,66.99,47.17,67.78,63.74,42.92,62.02,64.12,48.64,52.18,40.06,55.23,64.91,68.62,57.13,54.4,65.24,51.03,63.72,44.56,58.82,65.82,50.83,53.79,41.03,41.65,55.64,56.39,57.82,57.17,41.63,57.04,56.95,44.26,69.19,69.95,46.33,61.99,69.14,40.02,57.72,49.88,68.05,54.53,41.83,43.35,59.65],["z",88,73.28,87.86,75.15,60.15,81.5,54.39,94.44,61.61,82.85,64.97,99.25,75.8,58.09,80.71,59.15,68.02,64.93,85.11,96.2,71.2,71.58,62.03,82.51,93.24,82.89,80.01,88.79,99.69,93.6,62.08,60.14,83.33,59.62,87.43,53.58,81.79,76.44,92.13,75.6,71.13,71.21,89.13,76.93,96.36,84.8,99.84,99.56,79.29,96.73,82.1,67.61,99.91,91.7,78.15,81.25,56.17,67.88,63.95,59.84,75.1,66.47,54.59,94.94,92.48,52.41,52.83,57.6,84.53,72.85,84.76,89.15,86.14,74.25,73.13,67.56,56.38,61.88,82.08,72.54,79.62,62.12,56.41,99.61,85.3,90.24,91.4,89.51,77.5,51.39,63.43,56.9,92.92,96.72,70.55,63.61,73.63,91.97,84.53,80.9,57.65,84.61,88.72,65.43,70.98,55.24,85.18,56.3,53.58,60.23,53.79,85.8,80,70.37,59.45,60.4,56.71,95.99,84.45,69.99,53.81,66.27,64.5,77.46,69.58,55.31,52.77,59.77,66.22,57.67,98.46,64.04,96.49,70.8,87.97,50.6,67.37,91.6,55.91,88.88,50.47,95.19,75.31,57.51,71.77,72.89,67.3,99.64,92.72,55,83.61,77.44,58.24,99.04,58.36,77.23,89.92,91.5,75.21,87.2,62.91,83.65,70.34,50.08,81.03,91.77,86.41,97.38,61.98,65.37,99.29,57.19,91.19,59.76,77.5,75.59,89.16,81.81,77.1,62.3,60.32,86.38,87.22,74.47,56.72,56.83,91.27,86.42,62.3,63.19,87.81,80.29,75.25,76.26,88.97,81.51,86.97,61.73,54.9,83.75,88.26,66.6,56.83,83.91,64.77,61.12,53.04,97.41,80.86,85.47,89.53,50.25,77.88,62.43,61.68,69.63,90.48,61.62,86.51,93.34,54.96,74.23,77.67,87.23,91.63,88.27,88.7,78.16,71.49,82.41,59.34,77.43,98.42,83.94,96.22,75.09,97.5,90.26,71.88,87.58,92.3,80.81,86.68,90.19,75.63,99.5,99.93,65.74,87.88,75.49,74.85,91.94,85.96,82.57,70.99,79.9,54.88,95.53,62.08,86.27,93.53,62.39,74.85,79.28,69.41,85.76,75.35,75.39,52.7,83.56,57.22,82.78,92.43,73.19,83.53,80.6,73.73,77.6,52.97,79.52,63.76,63.55,70.11,57.46,64.98,80.34,57.34,53.3]];option={tooltip:{trigger:"axis"},axisPointer:{type:"shadow",link:{xAxisIndex:"all"}},grid:[{left:"10%",top:"5%",width:"80%",height:"30%"},{left:"10%",top:"50%",width:"80%",height:"30%"}],xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{type:"value",name:"均值-X轴",nameLocation:"middle",nameGap:"30",gridIndex:0,nameTextStyle:{color:"#333"},axisTick:{show:!1},axisLabel:{show:!0}},{type:"value",name:"均值-Z轴",nameLocation:"middle",nameGap:"30",gridIndex:1,nameTextStyle:{color:"#333"},axisTick:{show:!1},axisLabel:{show:!0}}],dataZoom:[{type:"slider",left:"5%",right:"5%",top:"90%",xAxisIndex:[0,1],realtime:!0}],series:[{type:"line",name:"均值-X轴",xAxisIndex:0,yAxisIndex:0,seriesLayoutBy:"row"},{type:"line",name:"均值-Z轴",xAxisIndex:1,yAxisIndex:1,seriesLayoutBy:"row"}],dataset:{source:data}};
