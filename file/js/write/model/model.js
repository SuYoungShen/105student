//Write:寫作 -> model:典範人物 -> MRanking 標題
	function MRanking(i){
		var sc = "　";
		var topics = [
						"第一名",
						"第二名",
						"第三名",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作"
					];
		MR = topics.length;		
		return topics[i];
	}
//Write:寫作 -> model:典範人物 -> MRanking 標題

//Write:寫作 -> model:典範人物 -> MTopic 藍色連結 檔案
	function MTopic(i){
		var topics = [
						"勇往直前的鹹餅──訪禮面作行政主廚黃綉雅",
						"相信自己，用心起跳──訪留日視障按摩師傅潘振義",
						"身兼百戰的女強人──訪頤品大飯店陳筳宜副理",
						"技術創新，延續技藝──訪車體彩繪界的畢卡索方國彥",
						"努力，邁向夢想──訪PS54國際髮型店長蔡承彧先生",
						"奉獻大地，我是小小農夫──訪有機農民張婉儀",
						"默默地，把保險送進安靜的世界",
						"為夢飛翔，勇躍龍門──訪藝之魚創辦人之一林思妤小姐",
						"高考I'mpossible──訪問正修土木系曾文哲老師"
					];
		
		return topics[i];
	}
//Write:寫作 -> model:典範人物 -> MTopic 藍色連結 檔案

//Write:寫作 -> model:典範人物 -> MClasses 班級
	function MClasses(i){
		var classess = [
						"日間部四技資工二甲",
						"日間部四技幼保二乙",
						"日間部四技企管二甲",
						"日間部四技妝彩二丙",
						"日間部四技國企二丙",
						"日間部四技電子二丙",
						"日間部四技觀光二乙",
						"日間部四技國企二甲",
						"日間部四技土木二乙"
						];
		return classess[i];
	}
//Write:寫作 -> model:典範人物 -> MClasses 班級

//Write:寫作 -> model:典範人物 -> MNames 姓名
	function MNames(i){
		var namess = [
						"林韻如",
						"陳品慈",
						"黃寶玉",
						"廖予婷",
						"莫啟源",
						"林德文",
						"吳佩珊",
						"洪湘茹",
						"蔡忠育"
					];
		return namess[i];
	}
//Write:寫作 -> model:典範人物 -> MNames 姓名
	MRanking();
	