for(var series_data=[],colorList=[{a:"rgba(137, 189, 27, 0.3)",b:"rgba(137, 189, 27, 0)",c:"rgb(137,189,27)",d:"rgba(137,189,2,0.27)"},{a:"rgba(0, 136, 212, 0.3)",b:"rgba(0, 136, 212, 0)",c:"rgb(0,136,212)",d:"rgba(0,136,212,0.2)"},{a:"rgba(219, 50, 51, 0.3)",b:"rgba(219, 50, 51, 0)",c:"rgb(219,50,51)",d:"rgba(219,50,51,0.2)"},{a:"rgba(102,102,102, 0.3)",b:"rgba(102,102,102, 0)",c:"rgb(102,102,102)",d:"rgba(102,102,102,0.2)"},{a:"rgba(0, 204, 153, 0.3)",b:"rgba(0, 204, 153, 0)",c:"rgb(0, 204, 153)",d:"rgba(0, 204, 153,0.2)"},{a:"rgba(0, 204, 255, 0.3)",b:"rgba(0, 204, 255, 0)",c:"rgb(0, 204, 255)",d:"rgba(0, 204, 255,0.2)"},{a:"rgba(102, 0, 0, 0.3)",b:"rgba(102, 0, 0, 0)",c:"rgb(102, 0, 0)",d:"rgba(102, 0, 0,0.2)"},{a:"rgba(102,511,53, 0.3)",b:"rgba(102,511,53, 0)",c:"rgb(102,511,53)",d:"rgba(102,511,53,0.2)"},{a:"rgba(102, 153, 153, 0.3)",b:"rgba(102, 153, 153, 0)",c:"rgb(102, 153, 153)",d:"rgba(102, 153, 153,0.2)"},{a:"rgba(153, 153, 255, 0.3)",b:"rgba(153, 153, 255, 0)",c:"rgb(153, 153, 255)",d:"rgba(153, 153, 255,0.2)"},{a:"rgba(255, 153, 51, 0.3)",b:"rgba(255, 153, 51, 0)",c:"rgb(255, 153, 51)",d:"rgba(255, 153, 51,0.2)"},{a:"rgba(255, 255, 153, 0.3)",b:"rgba(255, 255, 153, 0)",c:"rgb(255, 255, 153)",d:"rgba(255, 255, 153,0.2)"}],data={value08:[],value07:[],value09:[],value04:[],value03:["45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.25","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","45.0","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.75","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.5","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.0","43.0","43.25","43.25","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.0","42.0","42.25","42.25","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","41.75","41.75","42.0","42.0","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.0","41.0","41.25","41.25","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.0","40.0","40.0","40.0","40.25","40.25","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.5","39.5","39.5","39.5"],value06:[],value05:[],begin_times:["2018-08-06 09:31","2018-08-06 09:31","2018-08-06 09:41","2018-08-06 09:41","2018-08-06 09:51","2018-08-06 10:01","2018-08-06 10:01","2018-08-06 10:11","2018-08-06 10:11","2018-08-06 10:21","2018-08-06 10:21","2018-08-06 10:31","2018-08-06 10:31","2018-08-06 10:41","2018-08-06 10:41","2018-08-06 10:51","2018-08-06 10:51","2018-08-06 11:01","2018-08-06 11:01","2018-08-06 11:11","2018-08-06 11:11","2018-08-06 11:21","2018-08-06 11:21","2018-08-06 11:31","2018-08-06 11:31","2018-08-06 11:41","2018-08-06 11:41","2018-08-06 11:51","2018-08-06 11:51","2018-08-06 12:01","2018-08-06 12:01","2018-08-06 12:11","2018-08-06 12:11","2018-08-06 12:21","2018-08-06 12:21","2018-08-06 12:31","2018-08-06 12:31","2018-08-06 12:41","2018-08-06 12:41","2018-08-06 12:51","2018-08-06 12:51","2018-08-06 13:01","2018-08-06 13:01","2018-08-06 13:11","2018-08-06 13:11","2018-08-06 13:21","2018-08-06 13:21","2018-08-06 13:31","2018-08-06 13:31","2018-08-06 13:41","2018-08-06 13:41","2018-08-06 13:51","2018-08-06 14:11","2018-08-06 14:11","2018-08-06 14:21","2018-08-06 14:21","2018-08-06 14:31","2018-08-06 14:31","2018-08-06 14:41","2018-08-06 14:41","2018-08-06 14:51","2018-08-06 15:01","2018-08-06 15:01","2018-08-06 15:11","2018-08-06 15:11","2018-08-06 15:21","2018-08-06 15:21","2018-08-06 15:31","2018-08-06 15:31","2018-08-06 15:41","2018-08-06 15:41","2018-08-06 15:51","2018-08-06 15:51","2018-08-06 16:01","2018-08-06 16:01","2018-08-06 16:11","2018-08-06 16:11","2018-08-06 16:21","2018-08-06 16:21","2018-08-06 16:31","2018-08-06 16:31","2018-08-06 16:41","2018-08-06 16:41","2018-08-06 16:51","2018-08-06 16:51","2018-08-06 17:01","2018-08-06 17:01","2018-08-06 17:11","2018-08-06 17:11","2018-08-06 17:21","2018-08-06 17:21","2018-08-06 17:31","2018-08-06 17:31","2018-08-06 17:41","2018-08-06 17:41","2018-08-06 17:51","2018-08-06 17:51","2018-08-06 18:01","2018-08-06 18:01","2018-08-06 18:11","2018-08-06 18:11","2018-08-06 18:21","2018-08-06 18:21","2018-08-06 18:31","2018-08-06 18:31","2018-08-06 18:41","2018-08-06 18:41","2018-08-06 18:51","2018-08-06 18:51","2018-08-06 19:01","2018-08-06 19:01","2018-08-06 19:11","2018-08-06 19:11","2018-08-06 19:21","2018-08-06 19:21","2018-08-06 19:31","2018-08-06 19:32","2018-08-06 19:41","2018-08-06 19:42","2018-08-06 19:51","2018-08-06 19:52","2018-08-06 20:01","2018-08-06 20:02","2018-08-06 20:11","2018-08-06 20:12","2018-08-06 20:21","2018-08-06 20:22","2018-08-06 20:31","2018-08-06 20:32","2018-08-06 20:41","2018-08-06 20:42","2018-08-06 20:51","2018-08-06 20:52","2018-08-06 21:01","2018-08-06 21:02","2018-08-06 21:11","2018-08-06 21:12","2018-08-06 21:21","2018-08-06 21:22","2018-08-06 21:31","2018-08-06 21:32","2018-08-06 21:41","2018-08-06 21:42","2018-08-06 21:51","2018-08-06 21:52","2018-08-06 22:01","2018-08-06 22:02","2018-08-06 22:12","2018-08-06 22:12","2018-08-06 22:22","2018-08-06 22:22","2018-08-06 22:42","2018-08-06 22:42","2018-08-06 22:52","2018-08-06 22:52","2018-08-06 23:12","2018-08-06 23:12","2018-08-06 23:22","2018-08-06 23:22","2018-08-06 23:42","2018-08-06 23:42","2018-08-06 23:52","2018-08-06 23:52","2018-08-07 00:12","2018-08-07 00:12","2018-08-07 00:22","2018-08-07 00:22","2018-08-07 00:42","2018-08-07 00:42","2018-08-07 00:42","2018-08-07 00:52","2018-08-07 00:52","2018-08-07 01:12","2018-08-07 01:12","2018-08-07 01:22","2018-08-07 01:22","2018-08-07 01:42","2018-08-07 01:42","2018-08-07 01:52","2018-08-07 02:12","2018-08-07 02:12","2018-08-07 02:22","2018-08-07 02:22","2018-08-07 02:42","2018-08-07 02:42","2018-08-07 02:52","2018-08-07 02:52","2018-08-07 03:12","2018-08-07 03:22","2018-08-07 03:22","2018-08-07 03:42","2018-08-07 03:52","2018-08-07 03:52","2018-08-07 04:12","2018-08-07 04:12","2018-08-07 04:22","2018-08-07 04:22","2018-08-07 04:42","2018-08-07 04:42","2018-08-07 04:52","2018-08-07 04:52","2018-08-07 05:12","2018-08-07 05:12","2018-08-07 05:22","2018-08-07 05:22","2018-08-07 05:42","2018-08-07 05:42","2018-08-07 05:52","2018-08-07 05:52","2018-08-07 06:02","2018-08-07 06:02","2018-08-07 06:12","2018-08-07 06:12","2018-08-07 06:22","2018-08-07 06:22","2018-08-07 06:32","2018-08-07 06:32","2018-08-07 06:42","2018-08-07 06:42","2018-08-07 06:52","2018-08-07 06:52","2018-08-07 07:02","2018-08-07 07:02","2018-08-07 07:12","2018-08-07 07:12","2018-08-07 07:22","2018-08-07 07:22","2018-08-07 07:32","2018-08-07 07:32","2018-08-07 07:42","2018-08-07 07:42","2018-08-07 07:52","2018-08-07 07:52","2018-08-07 08:02","2018-08-07 08:02","2018-08-07 08:12","2018-08-07 08:12","2018-08-07 08:22","2018-08-07 08:22","2018-08-07 08:32","2018-08-07 08:32","2018-08-07 08:42","2018-08-07 08:52","2018-08-07 08:52","2018-08-07 09:02","2018-08-07 09:02","2018-08-07 09:12","2018-08-07 09:12","2018-08-07 09:22","2018-08-07 09:22","2018-08-07 09:22","2018-08-07 09:32","2018-08-07 09:32","2018-08-07 09:42","2018-08-07 09:42","2018-08-07 09:52","2018-08-07 09:52","2018-08-07 10:02","2018-08-07 10:02","2018-08-07 10:12","2018-08-07 10:12","2018-08-07 10:22","2018-08-07 10:22","2018-08-07 10:32","2018-08-07 10:32","2018-08-07 10:42","2018-08-07 10:42","2018-08-07 10:52","2018-08-07 10:52","2018-08-07 11:02","2018-08-07 11:02","2018-08-07 11:12","2018-08-07 11:12","2018-08-07 11:22","2018-08-07 11:22","2018-08-07 11:32","2018-08-07 11:32","2018-08-07 11:42","2018-08-07 11:42","2018-08-07 11:52","2018-08-07 11:52","2018-08-07 12:02","2018-08-07 12:02","2018-08-07 12:12","2018-08-07 12:12","2018-08-07 12:22","2018-08-07 12:22","2018-08-07 12:32","2018-08-07 12:32","2018-08-07 12:42","2018-08-07 12:42","2018-08-07 12:52","2018-08-07 12:52","2018-08-07 13:02","2018-08-07 13:02","2018-08-07 13:12","2018-08-07 13:12","2018-08-07 13:22","2018-08-07 13:22","2018-08-07 13:32","2018-08-07 13:32","2018-08-07 13:42","2018-08-07 13:42","2018-08-07 13:52","2018-08-07 13:52","2018-08-07 13:52","2018-08-07 14:02","2018-08-07 14:02","2018-08-07 14:12","2018-08-07 14:12","2018-08-07 14:22","2018-08-07 14:22","2018-08-07 14:32","2018-08-07 14:32","2018-08-07 14:42","2018-08-07 14:42","2018-08-07 14:52","2018-08-07 14:52","2018-08-07 15:02","2018-08-07 15:02","2018-08-07 15:12","2018-08-07 15:12","2018-08-07 15:22","2018-08-07 15:22","2018-08-07 15:32","2018-08-07 15:42","2018-08-07 15:42","2018-08-07 15:52","2018-08-07 15:52","2018-08-07 16:02","2018-08-07 16:02","2018-08-07 16:12","2018-08-07 16:12","2018-08-07 16:22","2018-08-07 16:22","2018-08-07 16:32","2018-08-07 16:32","2018-08-07 16:42","2018-08-07 16:42","2018-08-07 16:52","2018-08-07 16:52","2018-08-07 17:02","2018-08-07 17:02","2018-08-07 17:12","2018-08-07 17:12","2018-08-07 17:22","2018-08-07 17:22","2018-08-07 17:32","2018-08-07 17:32","2018-08-07 17:42","2018-08-07 17:42","2018-08-07 17:52","2018-08-07 17:52","2018-08-07 18:02","2018-08-07 18:02","2018-08-07 18:12","2018-08-07 18:12","2018-08-07 18:22","2018-08-07 18:22","2018-08-07 18:32","2018-08-07 18:32","2018-08-07 18:52","2018-08-07 18:52","2018-08-07 19:02","2018-08-07 19:02","2018-08-07 19:22","2018-08-07 19:22","2018-08-07 19:32","2018-08-07 19:32","2018-08-07 19:52","2018-08-07 19:52","2018-08-07 20:02","2018-08-07 20:02","2018-08-07 20:22","2018-08-07 20:22","2018-08-07 20:32","2018-08-07 20:32","2018-08-07 20:52","2018-08-07 20:52","2018-08-07 21:02","2018-08-07 21:02","2018-08-07 21:22","2018-08-07 21:22","2018-08-07 21:32","2018-08-07 21:32","2018-08-07 21:52","2018-08-07 21:52","2018-08-07 22:02","2018-08-07 22:02","2018-08-07 22:22","2018-08-07 22:22","2018-08-07 22:32","2018-08-07 22:32","2018-08-07 22:52","2018-08-07 22:52","2018-08-07 23:02","2018-08-07 23:22","2018-08-07 23:22","2018-08-07 23:32","2018-08-07 23:32","2018-08-07 23:52","2018-08-07 23:52","2018-08-08 00:02","2018-08-08 00:02","2018-08-08 00:22","2018-08-08 00:22","2018-08-08 00:32","2018-08-08 00:32","2018-08-08 00:52","2018-08-08 00:52","2018-08-08 01:02","2018-08-08 01:02","2018-08-08 01:22","2018-08-08 01:22","2018-08-08 01:32","2018-08-08 01:32","2018-08-08 01:52","2018-08-08 01:52","2018-08-08 02:02","2018-08-08 02:02","2018-08-08 02:12","2018-08-08 02:12","2018-08-08 02:22","2018-08-08 02:22","2018-08-08 02:32","2018-08-08 02:32","2018-08-08 02:42","2018-08-08 02:42","2018-08-08 02:52","2018-08-08 02:52","2018-08-08 03:02","2018-08-08 03:02","2018-08-08 03:12","2018-08-08 03:12","2018-08-08 03:22","2018-08-08 03:22","2018-08-08 03:32","2018-08-08 03:32","2018-08-08 03:42","2018-08-08 03:42","2018-08-08 03:43","2018-08-08 03:52","2018-08-08 04:02","2018-08-08 04:03","2018-08-08 04:12","2018-08-08 04:13","2018-08-08 04:22","2018-08-08 04:23","2018-08-08 04:32","2018-08-08 04:33","2018-08-08 04:42","2018-08-08 04:43","2018-08-08 04:52","2018-08-08 04:53","2018-08-08 05:02","2018-08-08 05:03","2018-08-08 05:12","2018-08-08 05:13","2018-08-08 05:22","2018-08-08 05:23","2018-08-08 05:32","2018-08-08 05:33","2018-08-08 05:42","2018-08-08 05:43","2018-08-08 05:52","2018-08-08 05:53","2018-08-08 06:02","2018-08-08 06:03","2018-08-08 06:12","2018-08-08 06:13","2018-08-08 06:22","2018-08-08 06:23","2018-08-08 06:32","2018-08-08 06:33","2018-08-08 06:43","2018-08-08 06:43","2018-08-08 06:53","2018-08-08 06:53","2018-08-08 07:03","2018-08-08 07:03","2018-08-08 07:13","2018-08-08 07:13","2018-08-08 07:23","2018-08-08 07:23","2018-08-08 07:33","2018-08-08 07:33","2018-08-08 07:43","2018-08-08 07:43","2018-08-08 07:53","2018-08-08 07:53","2018-08-08 08:03","2018-08-08 08:03","2018-08-08 08:13","2018-08-08 08:13","2018-08-08 08:23","2018-08-08 08:23","2018-08-08 08:33","2018-08-08 08:33","2018-08-08 08:43","2018-08-08 08:43","2018-08-08 08:53","2018-08-08 08:53","2018-08-08 09:03","2018-08-08 09:03","2018-08-08 09:13","2018-08-08 09:13","2018-08-08 09:23","2018-08-08 09:23","2018-08-08 09:33","2018-08-08 09:33","2018-08-08 09:43","2018-08-08 09:43","2018-08-08 09:53","2018-08-08 09:53","2018-08-08 10:03","2018-08-08 10:03","2018-08-08 10:13","2018-08-08 10:13","2018-08-08 10:23","2018-08-08 10:23","2018-08-08 10:33","2018-08-08 10:33","2018-08-08 10:43","2018-08-08 10:43","2018-08-08 10:53","2018-08-08 10:53","2018-08-08 11:03","2018-08-08 11:03","2018-08-08 11:13","2018-08-08 11:13","2018-08-08 11:23","2018-08-08 11:23","2018-08-08 11:33","2018-08-08 11:33","2018-08-08 11:43","2018-08-08 11:43","2018-08-08 11:53","2018-08-08 11:53","2018-08-08 12:03","2018-08-08 12:03","2018-08-08 12:13","2018-08-08 12:13","2018-08-08 12:23","2018-08-08 12:23","2018-08-08 12:33","2018-08-08 12:33","2018-08-08 12:43","2018-08-08 12:43","2018-08-08 12:53","2018-08-08 13:03","2018-08-08 13:03","2018-08-08 13:13","2018-08-08 13:13","2018-08-08 13:13","2018-08-08 13:33","2018-08-08 13:33","2018-08-08 13:43","2018-08-08 13:43","2018-08-08 14:03","2018-08-08 14:13","2018-08-08 14:33","2018-08-08 14:33","2018-08-08 14:43","2018-08-08 14:43","2018-08-08 15:03","2018-08-08 15:03","2018-08-08 15:13","2018-08-08 15:13","2018-08-08 15:33","2018-08-08 15:33","2018-08-08 15:43","2018-08-08 15:43","2018-08-08 16:03","2018-08-08 16:03","2018-08-08 16:13","2018-08-08 16:13","2018-08-08 16:33","2018-08-08 16:33","2018-08-08 16:43","2018-08-08 16:43","2018-08-08 17:03","2018-08-08 17:03","2018-08-08 17:13","2018-08-08 17:13","2018-08-08 17:33","2018-08-08 17:33","2018-08-08 17:43","2018-08-08 17:43","2018-08-08 18:03","2018-08-08 18:03","2018-08-08 18:13","2018-08-08 18:13","2018-08-08 18:33","2018-08-08 18:33","2018-08-08 18:43","2018-08-08 18:43","2018-08-08 18:43","2018-08-08 19:03","2018-08-08 19:03","2018-08-08 19:13","2018-08-08 19:13","2018-08-08 19:33","2018-08-08 19:33","2018-08-08 19:43","2018-08-08 19:43","2018-08-08 20:03","2018-08-08 20:03","2018-08-08 20:13","2018-08-08 20:13","2018-08-08 20:33","2018-08-08 20:33","2018-08-08 20:43","2018-08-08 20:43","2018-08-08 21:03","2018-08-08 21:03","2018-08-08 21:13","2018-08-08 21:13","2018-08-08 21:33","2018-08-08 21:33","2018-08-08 21:43","2018-08-08 21:43","2018-08-08 21:53","2018-08-08 22:03","2018-08-08 22:03","2018-08-08 22:13","2018-08-08 22:13","2018-08-08 22:23","2018-08-08 22:23","2018-08-08 22:33","2018-08-08 22:33","2018-08-08 22:43","2018-08-08 22:43","2018-08-08 22:53","2018-08-08 22:53","2018-08-08 23:03","2018-08-08 23:03","2018-08-08 23:13","2018-08-08 23:13","2018-08-08 23:23","2018-08-08 23:23","2018-08-08 23:33","2018-08-08 23:33","2018-08-08 23:43","2018-08-08 23:43","2018-08-08 23:53","2018-08-08 23:53","2018-08-09 00:03","2018-08-09 00:03","2018-08-09 00:13","2018-08-09 00:13","2018-08-09 00:13","2018-08-09 00:23","2018-08-09 00:23","2018-08-09 00:33","2018-08-09 00:33","2018-08-09 00:43","2018-08-09 00:43","2018-08-09 00:53","2018-08-09 00:53","2018-08-09 01:03","2018-08-09 01:03","2018-08-09 01:13","2018-08-09 01:13","2018-08-09 01:23","2018-08-09 01:23","2018-08-09 01:33","2018-08-09 01:33","2018-08-09 01:43","2018-08-09 01:43","2018-08-09 01:53","2018-08-09 01:53","2018-08-09 02:03","2018-08-09 02:03","2018-08-09 02:13","2018-08-09 02:13","2018-08-09 02:23","2018-08-09 02:23","2018-08-09 02:33","2018-08-09 02:33","2018-08-09 02:43","2018-08-09 02:43","2018-08-09 02:53","2018-08-09 02:53","2018-08-09 03:03","2018-08-09 03:03","2018-08-09 03:13","2018-08-09 03:13","2018-08-09 03:23","2018-08-09 03:23","2018-08-09 03:33","2018-08-09 03:33","2018-08-09 03:43","2018-08-09 03:53","2018-08-09 03:53","2018-08-09 04:03","2018-08-09 04:03","2018-08-09 04:13","2018-08-09 04:13","2018-08-09 04:23","2018-08-09 04:23","2018-08-09 04:33","2018-08-09 04:33","2018-08-09 04:43","2018-08-09 04:43","2018-08-09 04:53","2018-08-09 04:53","2018-08-09 05:03","2018-08-09 05:03","2018-08-09 05:13","2018-08-09 05:13","2018-08-09 05:23","2018-08-09 05:23","2018-08-09 05:33","2018-08-09 05:33","2018-08-09 05:43","2018-08-09 05:43","2018-08-09 05:53","2018-08-09 06:03","2018-08-09 06:03","2018-08-09 06:13","2018-08-09 06:13","2018-08-09 06:23","2018-08-09 06:23","2018-08-09 06:33","2018-08-09 06:33","2018-08-09 06:43","2018-08-09 06:43","2018-08-09 06:53","2018-08-09 06:53","2018-08-09 07:03","2018-08-09 07:03","2018-08-09 07:13","2018-08-09 07:13","2018-08-09 07:23","2018-08-09 07:23","2018-08-09 07:33","2018-08-09 07:43","2018-08-09 07:43","2018-08-09 07:53","2018-08-09 07:53","2018-08-09 08:13","2018-08-09 08:13","2018-08-09 08:23","2018-08-09 08:23","2018-08-09 08:43","2018-08-09 08:53","2018-08-09 08:53","2018-08-09 09:13","2018-08-09 09:13","2018-08-09 09:23","2018-08-09 09:23"],value11:[],value10:[],value02:["44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.25","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","44.0","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.75","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.5","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.25","43.0","43.0","43.25","43.25","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","43.0","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.75","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.5","42.25","42.25","42.5","42.5","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.25","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","42.0","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.75","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.5","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.25","41.0","41.0","41.25","41.25","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","41.0","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.75","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.5","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.25","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","40.0","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.75","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.5","39.25","39.25","39.5","39.5","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.25","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","39.0","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.75","38.5","38.75","38.75","38.5","38.5","38.5","38.5"],value01:["37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.5","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.25","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","37.75","37.75","37.75","37.75","38.0","38.0","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","38.0","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.75","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.5","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.25","37.0","37.0","37.0","37.0","37.0","37.0","37.0","37.0","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.75","36.5","36.5","36.5","36.5","36.5","36.5","36.5","36.5","36.5","36.5","36.5","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.25","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","36.0","35.75","35.75","36.0","36.0","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.75","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.5","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25","35.25"],value12:[]},i=0;i<12;i++){var line_template={name:i+1,type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colorList[i].a},{offset:.8,color:colorList[i].b}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:colorList[i].c,borderColor:colorList[i].d,borderWidth:12}},data:function(){return i<=9?data["value0"+i]:data["value"+i]}()};series_data.push(line_template)}console.log(JSON.stringify(series_data)),option={backgroundColor:"#394056",title:{text:"趋势变化图",textStyle:{fontWeight:"normal",fontSize:16,color:"#F1F1F3"},left:"6%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{icon:"rect",itemWidth:14,itemHeight:5,itemGap:13,data:["1","2","3","4","5","6","7","8","9","10","11","12"],right:"4%",textStyle:{fontSize:12,color:"#F1F1F3"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#57617B"}},data:data.begin_times}],yAxis:[{type:"value",name:"单位（℃）",axisTick:{show:!1},axisLine:{lineStyle:{color:"#57617B"}},axisLabel:{margin:10,textStyle:{fontSize:14}},splitLine:{lineStyle:{color:"#57617B"}}}],series:series_data};