var data={name:"JHPDL:JH_PAT_INFO",children:[{name:"患者编号",children:[{name:"内部编码",children:[{name:"PAT#,#P#,#2"}]}]},{name:"来源业务系统主键",children:[{name:"字段复制",children:[{name:"{PATIENT_ID}"}]}]},{name:"患者姓名",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"别名",children:[{name:"函数处理",children:[{name:"3#,#RANDOM_STRING#,#100000#,#abc123"}]},{name:"字段复制",children:[{name:"${R1}"}]}]},{name:"性别",children:[{name:"内部编码",children:[{name:"PAT#,#P#,#2"}]}]},{name:"出生日期",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"医保类型",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"出生地点",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"双胞胎标记",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"双胞胎顺序",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"婴儿标记",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"携带婴儿标记",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"携带婴儿数",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"死亡标记",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"死亡时间",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"婚姻状态",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"器官捐献者标记",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"残疾码",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"国籍",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"民族",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"籍贯",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]},{name:"经济状况",children:[{name:"字段复制",children:[{name:"{NAME}"}]}]}]};myChart.setOption(option={tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",layout:"orthogonal",data:[data],orient:"LR",symbol:"circle",top:"1%",edgeShape:"polyline",edgeForkPosition:"50%",roam:!0,initialTreeDepth:8,left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}]});
