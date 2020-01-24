//Гласные и согласные
let glas = ["a", "e", "i", "u", "o"];
let soglas = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

//глагол в правильной форм для конструктура ответа
let correctVerb = "";

//местоимения
let pronouns = [
    {id:1, russianSide: "Я",                    englishSide:"I", 
           posessiveEnglish:"my",               posessiveRussian:"мой", 
           absolutePosessiveEnglish:"mine",     absolutePosessiveRussian:"мой", 
           objectCaseEnglish:"me",              objectCaseRussian:"мне",
           reflexiveEnglish:"myself",           reflexiveRussian:"меня"},

    {id:2, russianSide: "Ты",  englishSide:"you",
           posessiveEnglish:"your",             posessiveRussian:"твой", 
           absolutePosessiveEnglish:"yours",    absolutePosessiveRussian:"твой", 
           objectCaseEnglish:"you",             objectCaseRussian:"тебе",
           reflexiveEnglish:"yourself",         reflexiveRussian:"тебя"},

    {id:3, russianSide: "Вы",  englishSide:"you", 
           posessiveEnglish:"your",             posessiveRussian:"ваш", 
           absolutePosessiveEnglish:"yours",    absolutePosessiveRussian:"ваш", 
           objectCaseEnglish:"you",             objectCaseRussian:"вам",
           reflexiveEnglish:"yourselves",       reflexiveRussian:"вас"},

    {id:4, russianSide: "Мы",  englishSide:"we",
           posessiveEnglish:"our",              posessiveRussian:"ваш", 
           absolutePosessiveEnglish:"ours",     absolutePosessiveRussian:"ваш", 
           objectCaseEnglish:"us",              objectCaseRussian:"нам",
           reflexiveEnglish:"ourselves",        reflexiveRussian:"нас"},

    {id:5, russianSide: "Они", englishSide:"they",
           posessiveEnglish:"their",            posessiveRussian:"их", 
           absolutePosessiveEnglish:"theirs",   absolutePosessiveRussian:"их", 
           objectCaseEnglish:"them",            objectCaseRussian:"им",
           reflexiveEnglish:"themselves",       reflexiveRussian:"их"},

    {id:6, russianSide: "Она", englishSide:"she",
           posessiveEnglish:"her",              posessiveRussian:"её", 
           absolutePosessiveEnglish:"hers",     absolutePosessiveRussian:"её", 
           objectCaseEnglish:"her",             objectCaseRussian:"ей",
           reflexiveEnglish:"herself",          reflexiveRussian:"её"},

    {id:7, russianSide: "Он",  englishSide:"he",
           posessiveEnglish:"his",              posessiveRussian:"его", 
           absolutePosessiveEnglish:"his",      absolutePosessiveRussian:"его", 
           objectCaseEnglish:"him",             objectCaseRussian:"ему",
           reflexiveEnglish:"himself",          reflexiveRussian:"его"},

    {id:8, russianSide: "Это", englishSide:"it",
           posessiveEnglish:"its",              posessiveRussian:"его", 
           absolutePosessiveEnglish:"its",      absolutePosessiveRussian:"его", 
           objectCaseEnglish:"its",             objectCaseRussian:"ему",
           reflexiveEnglish:"itself",           reflexiveRussian:"его"},
];

//обычные глаголы
//если stressedLastVowel == true, то при конструкции ответа последняя буква удваивается при добавлении окончания
let regularVerbs = [
    {id:1, russianSide:"начинать",       englishSide:"start",  stressedLastVowel: false},
    {id:2, russianSide:"любить",         englishSide:"love",   stressedLastVowel: false},
    {id:3, russianSide:"прыгать",        englishSide:"jump",   stressedLastVowel: false},
    {id:5, russianSide:"звонить(звать)", englishSide:"call",   stressedLastVowel: true},
    {id:6, russianSide:"помогать",       englishSide:"help",   stressedLastVowel: false},
    {id:7, russianSide:"игнорировать",   englishSide:"ignore", stressedLastVowel: false},
    {id:8, russianSide:"управлять",      englishSide:"manage", stressedLastVowel: false},
    {id:9, russianSide:"соглашаться",    englishSide:"agree",  stressedLastVowel: false},
    {id:10, russianSide:"чистить",       englishSide:"dry",    stressedLastVowel: true},
    {id:11, russianSide:"жениться",      englishSide:"marry",  stressedLastVowel: false},
    {id:12, russianSide:"играть",        englishSide:"play",   stressedLastVowel: false},
    {id:13, russianSide:"наслаждаться",  englishSide:"enjoy",  stressedLastVowel: false},
    {id:14, russianSide:"кивать",        englishSide:"nod",    stressedLastVowel: true},
    {id:15, russianSide:"остановить",    englishSide:"stop",   stressedLastVowel: true},
    {id:15, russianSide:"смешивать",     englishSide:"mix",    stressedLastVowel: true},
    {id:15, russianSide:"чинить",        englishSide:"fix",    stressedLastVowel: true},
    {id:15, russianSide:"расслабляться", englishSide:"relax",  stressedLastVowel: true},
    {id:16, russianSide:"паниковать",    englishSide:"panic",  stressedLastVowel: false},
];

//нестандартные глаголы
let irRegularVerbs = [
    {id: 17,  russianSide:"идти",                   englishSide:"go",         secondForm:"went",       thirdForm:"gone",    },
    {id: 18,  russianSide:"быть",                   englishSide:"be",         secondForm:"was/were",   thirdForm:"been",    },
    {id: 19,  russianSide:"становиться",            englishSide:"become",     secondForm:"became",     thirdForm:"become",  },
    {id: 20,  russianSide:"начинаться",             englishSide:"begin",      secondForm:"began",      thirdForm:"begun",   },
    {id: 21,  russianSide:"ломать",                 englishSide:"break",      secondForm:"broke",      thirdForm:"broke",   },
    {id: 22,  russianSide:"приносить",              englishSide:"bring",      secondForm:"brought",    thirdForm:"brought", },
    {id: 23,  russianSide:"строить",                englishSide:"build",      secondForm:"built",      thirdForm:"built"},
    {id: 24,  russianSide:"купить",                 englishSide:"buy",        secondForm:"bought",     thirdForm:"bought"},
    {id: 25,  russianSide:"ловить",                 englishSide:"catch",      secondForm:"caught",     thirdForm:"caught"},
    {id: 26,  russianSide:"выбрать",                englishSide:"choose",     secondForm:"chose",      thirdForm:"chosen"},
    {id: 27,  russianSide:"приходить",              englishSide:"come",       secondForm:"came",       thirdForm:"come"},
    {id: 28,  russianSide:"стоить",                 englishSide:"cost",       secondForm:"cost",       thirdForm:"cost"},
    {id: 29,  russianSide:"резать",                 englishSide:"cut",        secondForm:"cut",        thirdForm:"cut"},
    {id: 30,  russianSide:"делать",                 englishSide:"do",         secondForm:"did",        thirdForm:"done"},
    {id: 31,  russianSide:"рисовать",               englishSide:"draw",       secondForm:"drew",       thirdForm:"drawn"},
    {id: 32,  russianSide:"пить",                   englishSide:"drink",      secondForm:"drank",      thirdForm:"drunk"},
    {id: 33,  russianSide:"водить",                 englishSide:"drive",      secondForm:"drove",      thirdForm:"driven"},
    {id: 34,  russianSide:"есть",                   englishSide:"eat",        secondForm:"ate",        thirdForm:"eaten"},
    {id: 35,  russianSide:"падать",                 englishSide:"fall",       secondForm:"fell",       thirdForm:"fallen"},
    {id: 36,  russianSide:"чувствовать",            englishSide:"feel",       secondForm:"fed",        thirdForm:"fed"},
    {id: 37,  russianSide:"драться",                englishSide:"fight",      secondForm:"fought",     thirdForm:"fought"},
    {id: 39,  russianSide:"искать",                 englishSide:"find",       secondForm:"found",      thirdForm:"found"},
    {id: 40,  russianSide:"летать",                 englishSide:"fly",        secondForm:"flew",       thirdForm:"flown"},
    {id: 41,  russianSide:"забывать",               englishSide:"forget",     secondForm:"forgot",     thirdForm:"forgotten"},
    {id: 42,  russianSide:"замерзать",              englishSide:"freeze",     secondForm:"froze",      thirdForm:"frozen"},
    {id: 43,  russianSide:"почучать/становиться",   englishSide:"get",        secondForm:"got",        thirdForm:"got"},
    {id: 44,  russianSide:"давать",                 englishSide:"give",       secondForm:"gave",       thirdForm:"given"},
    {id: 45,  russianSide:"иметь",                  englishSide:"have",       secondForm:"had",        thirdForm:"had"},
    {id: 46,  russianSide:"слышать",                englishSide:"hear",       secondForm:"heard",      thirdForm:"heard"},
    {id: 47,  russianSide:"скрывать",               englishSide:"hide",       secondForm:"hid",        thirdForm:"hidden"},
    {id: 48,  russianSide:"ударять",                englishSide:"hit",        secondForm:"hit",        thirdForm:"hit"},
    {id: 49,  russianSide:"хранить",                englishSide:"keep",       secondForm:"kept",       thirdForm:"kept"},
    {id: 50,  russianSide:"знать",                  englishSide:"know",       secondForm:"knew",       thirdForm:"known"},
    {id: 51,  russianSide:"прокладывать",           englishSide:"lay",        secondForm:"laid",       thirdForm:"laid"},
    {id: 52,  russianSide:"вести",                  englishSide:"lead",       secondForm:"led",        thirdForm:"led"},
    {id: 53,  russianSide:"покидать",               englishSide:"leave",      secondForm:"left",       thirdForm:"left"},
    {id: 54,  russianSide:"позволять",              englishSide:"let",        secondForm:"let",        thirdForm:"let"},
    {id: 55,  russianSide:"лгать",                  englishSide:"lie",        secondForm:"lay",        thirdForm:"lain"},
    {id: 56,  russianSide:"светить",                englishSide:"light",      secondForm:"lit",        thirdForm:"lit"},
    {id: 57,  russianSide:"проигрывать",            englishSide:"lose",       secondForm:"lost",       thirdForm:"lost"},
    {id: 58,  russianSide:"производить",            englishSide:"make",       secondForm:"made",       thirdForm:"made"},
    {id: 59,  russianSide:"значить",                englishSide:"mean",       secondForm:"meant",      thirdForm:"meant"},
    {id: 60,  russianSide:"встречать",              englishSide:"meet",       secondForm:"met",        thirdForm:"met"},
    {id: 61,  russianSide:"платить",                englishSide:"pay",        secondForm:"paid",       thirdForm:"paid"},
    {id: 62,  russianSide:"класть",                 englishSide:"put",        secondForm:"put",        thirdForm:"put"},
    {id: 63,  russianSide:"читать",                 englishSide:"read",       secondForm:"read",       thirdForm:"read"},
    {id: 64,  russianSide:"звонить",                englishSide:"ring",       secondForm:"rang",       thirdForm:"rung"},
    {id: 65,  russianSide:"бежать",                 englishSide:"run",        secondForm:"ran",        thirdForm:"run"},
    {id: 66,  russianSide:"сказать",                englishSide:"say",        secondForm:"said",       thirdForm:"said"},
    {id: 67,  russianSide:"видеть",                 englishSide:"see",        secondForm:"saw",        thirdForm:"seen"},
    {id: 68,  russianSide:"продавать",              englishSide:"sell",       secondForm:"sold",       thirdForm:"sold"},
    {id: 69,  russianSide:"передавать",             englishSide:"send",       secondForm:"sent",       thirdForm:"sent"},
    {id: 70,  russianSide:"устанавливать",          englishSide:"set",        secondForm:"set",        thirdForm:"set"},
    {id: 71,  russianSide:"стрелять",               englishSide:"shoot",      secondForm:"shot",       thirdForm:"shot"},
    {id: 72,  russianSide:"показывать",             englishSide:"show",       secondForm:"showed",     thirdForm:"shown"},
    {id: 73,  russianSide:"петь",                   englishSide:"sing",       secondForm:"sang",       thirdForm:"sung"},
    {id: 74,  russianSide:"сидеть",                 englishSide:"sit",        secondForm:"sat",        thirdForm:"sat"},
    {id: 75,  russianSide:"спать",                  englishSide:"sleep",      secondForm:"slept",      thirdForm:"slept"},
    {id: 76,  russianSide:"говорить",               englishSide:"speak",      secondForm:"spoke",      thirdForm:"spoken"},
    {id: 77,  russianSide:"тратить",                englishSide:"spend",      secondForm:"spent",      thirdForm:"spent"},
    {id: 78,  russianSide:"стоять",                 englishSide:"stand",      secondForm:"stood",      thirdForm:"stood"},
    {id: 79,  russianSide:"покляться",              englishSide:"swear",      secondForm:"swore",      thirdForm:"sworn"},
    {id: 80,  russianSide:"плавать",                englishSide:"swim",       secondForm:"swam",       thirdForm:"swum"},
    {id: 81,  russianSide:"брать",                  englishSide:"take",       secondForm:"took",       thirdForm:"taken"},
    {id: 82,  russianSide:"учить",                  englishSide:"teach",      secondForm:"taught",     thirdForm:"taught"},
    {id: 83,  russianSide:"рвать",                  englishSide:"tear",       secondForm:"tore",       thirdForm:"torn"},
    {id: 84,  russianSide:"рассказать",             englishSide:"tell",       secondForm:"told",       thirdForm:"told"},
    {id: 85,  russianSide:"думать",                 englishSide:"think",      secondForm:"thought",    thirdForm:"thought"},
    {id: 86,  russianSide:"бросать",                englishSide:"throw",      secondForm:"threw",      thirdForm:"thrown"},
    {id: 87,  russianSide:"понимать",               englishSide:"understand", secondForm:"understood", thirdForm:"understood"},
    {id: 88,  russianSide:"будить",                 englishSide:"wake",       secondForm:"woke",       thirdForm:"woken"},
    {id: 89,  russianSide:"носить",                 englishSide:"wear",       secondForm:"wore",       thirdForm:"worn"},
    {id: 90,  russianSide:"ткать",                  englishSide:"weave",      secondForm:"wove",       thirdForm:"woven"},
    {id: 91,  russianSide:"побеждать",              englishSide:"win",        secondForm:"won",        thirdForm:"won"},
    {id: 92,  russianSide:"писать",                 englishSide:"write",      secondForm:"wrote",      thirdForm:"written"},
    {id: 93,  russianSide:"жечь",                   englishSide:"burn",       secondForm:"burnt",      thirdForm:"burnt"},
    {id: 94,  russianSide:"мечтать",                englishSide:"dream",      secondForm:"dreamt",     thirdForm:"dreamt"},
    {id: 95,  russianSide:"учить",                  englishSide:"learn",      secondForm:"learnt",     thirdForm:"learnt"},
    {id: 96,  russianSide:"похнуть",                englishSide:"smell",      secondForm:"smelt",      thirdForm:"smelt"},
    {id: 97,  russianSide:"произносить",            englishSide:"spell",      secondForm:"spelt",      thirdForm:"spelt"},
    {id: 98,  russianSide:"бить",                   englishSide:"beat",       secondForm:"beat",       thirdForm:"beaten"},
    {id: 99,  russianSide:"дуть",                   englishSide:"blow",       secondForm:"blew",       thirdForm:"blown"},
    {id: 100, russianSide:"взрывать",               englishSide:"burst",      secondForm:"burst",      thirdForm:"burst"},
    {id: 101, russianSide:"совершить сделку",       englishSide:"deal",       secondForm:"dealt",      thirdForm:"dealt"},
    {id: 102, russianSide:"кормить",                englishSide:"feed",       secondForm:"fed",        thirdForm:"fed"},
    {id: 103, russianSide:"расти",                  englishSide:"grow",       secondForm:"grew",       thirdForm:"grown"},
    {id: 104, russianSide:"вешать",                 englishSide:"hang",       secondForm:"hung",       thirdForm:"hung"},
    {id: 105, russianSide:"скрывать",               englishSide:"hide",       secondForm:"hid",        thirdForm:"hidden"},
    {id: 105, russianSide:"держать пари",           englishSide:"bet",        secondForm:"bet",        thirdForm:"bet"},
    {id: 105, russianSide:"держать",                englishSide:"hold",       secondForm:"held",       thirdForm:"held"},
    {id: 105, russianSide:"причинить боль",         englishSide:"hurt",       secondForm:"hurt",       thirdForm:"hurt"},
    {id: 105, russianSide:"скакать",                englishSide:"ride",       secondForm:"rode",       thirdForm:"ridden"},
    {id: 105, russianSide:"подниматься",            englishSide:"rise",       secondForm:"rose",       thirdForm:"risen"},
    {id: 105, russianSide:"встряхивать",            englishSide:"shake",      secondForm:"shook",      thirdForm:"shaken"},
    {id: 105, russianSide:"воровать",               englishSide:"steal",      secondForm:"stole",      thirdForm:"stolen"},
    {id: 105, russianSide:"сиять",                  englishSide:"shine",      secondForm:"shone",      thirdForm:"shone"},
    {id: 105, russianSide:"сливать",                englishSide:"sink",       secondForm:"sank",       thirdForm:"sunk"},
    {id: 105, russianSide:"скользить",              englishSide:"slide",      secondForm:"slid",       thirdForm:"slid"},
    {id: 105, russianSide:"скакать",                englishSide:"spring",     secondForm:"sprang",     thirdForm:"sprung"},
    {id: 105, russianSide:"придерживаться",         englishSide:"stick",      secondForm:"stuck",      thirdForm:"stuck"},
    {id: 105, russianSide:"подметать",              englishSide:"sweep",      secondForm:"swept",      thirdForm:"swept"},
];

//времена
let times = [
    {id: 1, englishSide: "present", russianSide: "Настоящее"},
    {id: 2, englishSide: "past",    russianSide: "Прошлое"},
    {id: 3, englishSide: "future",  russianSide: "Будущее"},
];

//типы предложений
let senTypes = [
    {id: 1, englishSide:"negative",      russianSide:"отрицательное"},
    {id: 2, englishSide:"affirmative",   russianSide:"Утвердительное"},
    {id: 3, englishSide:"interrogative", russianSide:"Вопросительное"},
];

//слова для игр и заучивания
let firstStepWords = [
    "I","You","He","We","They","It","Speak","Do","Big","Open","Close","See","Go","Know","Love",
    "Revolution","Information","Ask","Take","Answer","Help","Travel","Me","Him","Us","Them","Hope",
    "Who","Where","When","How","In","To","Well","Mean","Hello","Here","Free","Happy","Name","Surname",
    "My","His","Her","Our","Hungry","Pregnant","Pretty","Crazy","Cute","Art","Study","Public","Relations",
    "Library","Write","Book","Non-fiction","Novel","Play","Role","Character","Director","Freelancer",
    "Student","Jewel","Order","Designer","Hi","Good afternoon","After","Before","Good evening","Dear",
    "Thanks","Welcome","Nice","Meet","Pardon","Forgive me","Excuse me","Factory","Call center",
    "Grocery store","Office","Hospital","School","This","A","An","Apologize","Regret","Late",
    "Goodbye","Bye","Take care","See you","Fare well","Waiter","Seller","Senior manager","Supervisor",
    "Teacher","Be","Of","But","That","Have","Not","With","As","Or","Will","All","About","Which","Make",
    "Like","Time","People","Some","Other","Than","Now","Look","Only","Also","Use","First","Even","New",
    "Want","Give","Day","Thing","She","Good morning","Fiction","Live","Good night","Movie","Work",
    "Please","Script","Come","Sorry","Jewelry","Barf","Restaurant","Then","Give","Bank","Think","Speak",
    "The","Way","Her","One","Because","What","For","life","Why","So long","If","From","Worker","Can",
    "Okey","Nurse","Their","Independent","And","Fat","Your","For","History","Museum","By","Year",
    "Monday","Tuesday","Webnesday","Thursday","Friday","Saturday","Sunday","January","February",
    "March","April","May","June","July","August","September","October","November","December",
    "Maybe","Serious","Stand","Understand","Bad","Read","Black","Blue","One","Two","Three",
    "Four","Five","Six","Seven","Eight","Nine","Ten","Watermelon","Apple","Banana","Avocado",
    "Kiwi","Lime","Lemon","Melon","Apricot","Orange","Club","small","Happy","sad"];

//животные
let animals = [
    {id:"1",   englishSide:"Сat",                russianSide:"Кот",                           englishTranscription:"[kæt] "},
    {id:"2",   englishSide:"Kitten",             russianSide:"Котенок",                       englishTranscription:"[kɪtn]"},
    {id:"3",   englishSide:"Dog",                russianSide:"Собака",                        englishTranscription:"[dɒɡ]"},
    {id:"4",   englishSide:"Puppy",              russianSide:"Щенок",                         englishTranscription:"['pʌpɪ]"},
    {id:"5",   englishSide:"Hamster",            russianSide:"Хомяк",                         englishTranscription:"['hæmstə]"},
    {id:"6",   englishSide:"Parrot",             russianSide:"Попугай",                       englishTranscription:"['pærət] "},
    {id:"7",   englishSide:"guinea pig",         russianSide:"морская свинка",                englishTranscription:"['ɡɪnɪ pɪɡ]"},
    {id:"8",   englishSide:"Chicken",            russianSide:"Курица",                        englishTranscription:"['tʃɪkɪn]"},
    {id:"9",   englishSide:"Rooster",            russianSide:"Петух",                         englishTranscription:"['ru:stə]"},
    {id:"10",  englishSide:"Turkey",             russianSide:"Индейка",                       englishTranscription:"['tɜ:kɪ] "},
    {id:"11",  englishSide:"Gobbler",            russianSide:"Индюк",                         englishTranscription:"['gɔblə]"},
    {id:"12",  englishSide:"Goat",               russianSide:"Коза",                          englishTranscription:"[ɡəʊt]"},
    {id:"13",  englishSide:"billy goat",         russianSide:"Козел",                         englishTranscription:"[bili goʊt] "},
    {id:"14",  englishSide:"Kid",                russianSide:"Козленок",                      englishTranscription:"[kɪd] "},
    {id:"15",  englishSide:"Sheep",              russianSide:"Овца",                          englishTranscription:"[ʃi:p]"},
    {id:"16",  englishSide:"Ram",                russianSide:"Баран",                         englishTranscription:"[ræm]"},
    {id:"17",  englishSide:"Lamb",               russianSide:"Ягненок",                       englishTranscription:"[læm]"},
    {id:"18",  englishSide:"Bull",               russianSide:"Бык",                           englishTranscription:"[bʊl]"},
    {id:"19",  englishSide:"Cow",                russianSide:"Корова",                        englishTranscription:"[kaʊ] "},
    {id:"20",  englishSide:"Calf",               russianSide:"Теленок",                       englishTranscription:"[kɑ:f] "},
    {id:"21",  englishSide:"Horse",              russianSide:"Лошадь",                        englishTranscription:"[hɔ:s]"},
    {id:"22",  englishSide:"Stallon",            russianSide:"Жеребек",                       englishTranscription:"['stæljən] "},
    {id:"23",  englishSide:"Colt",               russianSide:"Жеребенок",                     englishTranscription:"[kəult]"},
    {id:"24",  englishSide:"Mare",               russianSide:"Кобыла",                        englishTranscription:"[meə]"},
    {id:"25",  englishSide:"Pig",                russianSide:"Свинья",                        englishTranscription:"[pɪɡ]"},
    {id:"26",  englishSide:"Sow",                russianSide:"самка свиньи",                  englishTranscription:"[səu] "},
    {id:"27",  englishSide:"Piglet",             russianSide:"Поросенок",                     englishTranscription:"['pɪɡlɪŋ] "},
    {id:"28",  englishSide:"Rabbit",             russianSide:"Кролик",                        englishTranscription:"['ræbɪt]"},
    {id:"29",  englishSide:"Kit",                russianSide:"Крольченок",                    englishTranscription:"[kɪt]"},
    {id:"30",  englishSide:"Doe",                russianSide:"Самка",                         englishTranscription:"[dəu]"},
    {id:"31",  englishSide:"Buck",               russianSide:"Самец",                         englishTranscription:"[bʌk] "},
    {id:"32",  englishSide:"Crocodile",          russianSide:"Крокодил",                      englishTranscription:"['krɒkədaɪl]"},
    {id:"33",  englishSide:"Deer",               russianSide:"Олень",                         englishTranscription:"[dɪə]"},
    {id:"34",  englishSide:"Elephant",           russianSide:"Слон",                          englishTranscription:"['elɪfənt] "},
    {id:"35",  englishSide:"Elk",                russianSide:"Лось",                          englishTranscription:"[elk]"},
    {id:"36",  englishSide:"Fox",                russianSide:"Лиса",                          englishTranscription:"[fɒks]"},
    {id:"37",  englishSide:"Giraffe",            russianSide:"Жираф",                         englishTranscription:"[dʒɪ'rɑ:f] "},
    {id:"38",  englishSide:"Goat",               russianSide:"Козёл",                         englishTranscription:"[ɡəʊt] "},
    {id:"39",  englishSide:"Hare",               russianSide:"Заяц",                          englishTranscription:"[heə]"},
    {id:"40",  englishSide:"Hippopotamus",       russianSide:"Бегемот",                       englishTranscription:"[hɪpə'pɒtəməs]"},
    {id:"41",  englishSide:"Hyena",              russianSide:"Гиена",                         englishTranscription:"[haɪ'i:nə] "},
    {id:"42",  englishSide:"Jaguar",             russianSide:"Ягуар",                         englishTranscription:"['dʒæɡjʊə]"},
    {id:"43",  englishSide:"Leopard",            russianSide:"Леопард",                       englishTranscription:"['lɛpəd] "},
    {id:"44",  englishSide:"Lion",               russianSide:"Лев",                           englishTranscription:"['laɪən]"},
    {id:"45",  englishSide:"Lynx",               russianSide:"Рысь",                          englishTranscription:"[lɪŋks] "},
    {id:"46",  englishSide:"Marten",             russianSide:"Куница",                        englishTranscription:"['mɑ:tɪn]"},
    {id:"47",  englishSide:"Mink",               russianSide:"Норка",                         englishTranscription:"[mɪŋk]"},
    {id:"48",  englishSide:"mole",               russianSide:"Крот",                          englishTranscription:"[məʊl]"},
    {id:"49",  englishSide:"Mongoose",           russianSide:"Мангуст",                       englishTranscription:"['mɒŋɡu:s]"},
    {id:"50",  englishSide:"Monkey",             russianSide:"Обезьяна",                      englishTranscription:"['mʌŋki]"},
    {id:"51",  englishSide:"Mouse",              russianSide:"Мышь",                          englishTranscription:"[maʊs] "},
    {id:"52",  englishSide:"Hedgehog",           russianSide:"Еж",                            englishTranscription:"['hedʒhɔg] "},
    {id:"53",  englishSide:"Muskrat",            russianSide:"Ондатра",                       englishTranscription:"['mʌskræt] "},
    {id:"54",  englishSide:"Otter",              russianSide:"Выдра",                         englishTranscription:"['ɒtə]"},
    {id:"55",  englishSide:"Panda",              russianSide:"Панда",                         englishTranscription:"['pændə]"},
    {id:"56",  englishSide:"Panther",            russianSide:"Пантера",                       englishTranscription:"['pænθə] "},
    {id:"57",  englishSide:"Polar(arctic) fox",  russianSide:"песец",                         englishTranscription:"['pəʊlə]"},
    {id:"58",  englishSide:"Puma",               russianSide:"Пума",                          englishTranscription:"['pju:mə] "},
    {id:"59",  englishSide:"Raccoon",            russianSide:"Енот",                          englishTranscription:"[rə'ku:n] "},
    {id:"60",  englishSide:"Rhinoceros",         russianSide:"Носорог",                       englishTranscription:"[raɪ'nɒsərəs]"},
    {id:"61",  englishSide:"Sable",              russianSide:"Соболь",                        englishTranscription:"['seɪbl]"},
    {id:"62",  englishSide:"Squirrel",           russianSide:"Белка",                         englishTranscription:"['skwɪrəl]"},
    {id:"63",  englishSide:"Tiger",              russianSide:"Тигр",                          englishTranscription:"['taɪɡə] "},
    {id:"64",  englishSide:"Tortoise",           russianSide:"Черепаха",                      englishTranscription:"['tɔ:təs] "},
    {id:"65",  englishSide:"Wolf",               russianSide:"Волк",                          englishTranscription:"[wʊlf]"},
    {id:"66",  englishSide:"Yak",                russianSide:"Як",                            englishTranscription:"[jæk]"},
    {id:"67",  englishSide:"Zebra",              russianSide:"зебра",                         englishTranscription:"['zi:brə]"},
    {id:"68",  englishSide:"hissing cockroach",  russianSide:"шипящий таракан",               englishTranscription:"[hɪssɪŋ 'kɔkrəutʃ]"},
    {id:"69",  englishSide:"Triton",             russianSide:"Тритон",                        englishTranscription:"['trʌɪt(ə)n]"},
    {id:"70",  englishSide:"Piranha",            russianSide:"Пиранья",                       englishTranscription:"[pɪ'rɑ:nə]"},
    {id:"71",  englishSide:"Scorpion",           russianSide:"Скорпион",                      englishTranscription:"['skɔ:pɪən]"},
    {id:"72",  englishSide:"Salamander",         russianSide:"Саламандра",                    englishTranscription:"['saləmandə]"},
    {id:"73",  englishSide:"Chameleon",          russianSide:"Хамелеон",                      englishTranscription:"[kə'mi:lɪən]"},
    {id:"74",  englishSide:"Tarantula",          russianSide:"Тарантул",                      englishTranscription:"[tə'ræntjulə]"},
    {id:"75",  englishSide:"green iguana",       russianSide:"зеленая игуана",                englishTranscription:"[gri:n ɪ'gwɑ:nə]"},
    {id:"76",  englishSide:"Tamandua",           russianSide:"Муравьед",                      englishTranscription:"[tə'mand(j)ʊə] "},
    {id:"77",  englishSide:"flying squirrel ",   russianSide:"белка–летяга",                  englishTranscription:"['flaɪɪŋ 'skwɪr(ə)l] "},
    {id:"78",  englishSide:"Kinkajou",           russianSide:"кинкажу (цепохвостый медведь)", englishTranscription:"['kɪŋkədʒu:]"},
    {id:"79",  englishSide:"chanterelle fennec", russianSide:"фенек, африканская лисица",     englishTranscription:"[ʃæntə'rel 'fɛnɛk]"},
    {id:"80",  englishSide:"Skunk",              russianSide:"Скунс",                         englishTranscription:"[skʌŋk]"},
    {id:"81",  englishSide:"Capybara",           russianSide:"капибара, водосвинка",          englishTranscription:"[kapɪ'bɑ:rə]"},
    {id:"82",  englishSide:"hermit сrab",        russianSide:"краб–отшельник",                englishTranscription:"['hɜ:mɪt kræb]"},
    {id:"83",  englishSide:"bush baby",          russianSide:"галаго (полуобезьяна)",         englishTranscription:"[buʃ 'beɪbɪ]"},
    {id:"84",  englishSide:"Alligator",          russianSide:"Аллигатор",                     englishTranscription:"['alɪɡeɪtə]"},
    {id:"85",  englishSide:"Crocodile",          russianSide:"Крокодил",                      englishTranscription:"['krɒkədʌɪl] "},
    {id:"86",  englishSide:"Emu",                russianSide:"Эму",                           englishTranscription:"['i:mju:]"},
    {id:"87",  englishSide:"Ostrich",            russianSide:"Страуc",                        englishTranscription:"['ɒstrɪtʃ]"},
    {id:"88",  englishSide:"Penguin",            russianSide:"Пингвин",                       englishTranscription:"['pɛŋɡwɪn]"},
    {id:"89",  englishSide:"Snake",              russianSide:"Змея",                          englishTranscription:"[sneɪk]"},
    {id:"90",  englishSide:"Lizard",             russianSide:"Ящерица",                       englishTranscription:"[lɪzəd]"},
    {id:"91",  englishSide:"Chinchilla",         russianSide:"Шиншилла",                      englishTranscription:"[tʃɪn'tʃɪlə]"},
    {id:"92",  englishSide:"Kangaroo",           russianSide:"Кенгуру",                       englishTranscription:"[kæŋɡə'ru:]"},
    {id:"93",  englishSide:"mosquito",           russianSide:"комар",                         englishTranscription:""},
    {id:"94",  englishSide:"horn",               russianSide:"Рог",                           englishTranscription:""},
    {id:"95",  englishSide:"hoof",               russianSide:"Копыто",                        englishTranscription:""},
    {id:"96",  englishSide:"wool",               russianSide:"Шерсть",                        englishTranscription:""},
    {id:"97",  englishSide:"tooth",              russianSide:"Зуб",                           englishTranscription:""},
    {id:"98",  englishSide:"fang",               russianSide:"Клык",                          englishTranscription:""},
    {id:"99",  englishSide:"claws",              russianSide:"Когти",                         englishTranscription:""},
    {id:"100", englishSide:"mammal",             russianSide:"Млекопитающее",                 englishTranscription:""},
    {id:"101", englishSide:"reptile",            russianSide:"Рептилия",                      englishTranscription:""},
    {id:"102", englishSide:"insect",             russianSide:"насекомое",                     englishTranscription:""},
    {id:"103", englishSide:"smell",              russianSide:"Запах",                         englishTranscription:""},
    {id:"104", englishSide:"tail",               russianSide:"хвост",                         englishTranscription:""},
    {id:"105", englishSide:"paw",                russianSide:"лапа",                          englishTranscription:""}
];

//прилагательные
let adjectives = [
    {id:"1",   englishSide:"afraid",       russianSide:"боящийся",       englishTranscription:"[əˈfreɪd]",         synonym:"", antonym:""},
    {id:"2",   englishSide:"alive",        russianSide:"живой",          englishTranscription:"[əˈlaɪv]",          synonym:"", antonym:""},
    {id:"3",   englishSide:"angry",        russianSide:"сердитый",       englishTranscription:"[ˈæŋgri]",          synonym:"", antonym:""},
    {id:"4",   englishSide:"awful",        russianSide:"отвратительный", englishTranscription:"[ˈɔːfəl]",          synonym:"", antonym:""},
    {id:"5",   englishSide:"bad",          russianSide:"плохой",         englishTranscription:"[bæd]",             synonym:"", antonym:""},
    {id:"6",   englishSide:"beautiful",    russianSide:"красивый",       englishTranscription:"[ˈbjuːtɪfəl]",      synonym:"", antonym:""},
    {id:"7",   englishSide:"big",          russianSide:"большой",        englishTranscription:"[bɪg]",             synonym:"", antonym:""},
    {id:"8",   englishSide:"bored",        russianSide:"скучающий",      englishTranscription:"[bɔːd]",            synonym:"", antonym:""},
    {id:"9",   englishSide:"brave",        russianSide:"Храбрый",        englishTranscription:"[breɪv]",           synonym:"", antonym:""},
    {id:"10",  englishSide:"bright",       russianSide:"яркий",          englishTranscription:"[braɪt]",           synonym:"", antonym:""},
    {id:"11",  englishSide:"broken",       russianSide:"сломанный",      englishTranscription:"[ˈbrəukən]",        synonym:"", antonym:""},
    {id:"12",  englishSide:"busy",         russianSide:"занятый",        englishTranscription:"[ˈbɪzi]",           synonym:"", antonym:""},
    {id:"13",  englishSide:"calm",         russianSide:"спокойный",      englishTranscription:"[kɑːm]",            synonym:"", antonym:""},
    {id:"14",  englishSide:"careful",      russianSide:"осторожный",     englishTranscription:"[ˈkeəfəl]",         synonym:"", antonym:""},
    {id:"15",  englishSide:"clean",        russianSide:"чистый",         englishTranscription:"[kliːn]",           synonym:"", antonym:""},
    {id:"16",  englishSide:"clear",        russianSide:"ясный",          englishTranscription:"[klɪər]",           synonym:"", antonym:""},
    {id:"17",  englishSide:"clever",       russianSide:"умный",          englishTranscription:"[ˈklevər]",         synonym:"", antonym:""},
    {id:"18",  englishSide:"cold",         russianSide:"холодный",       englishTranscription:"[kəʊld]",           synonym:"", antonym:""},
    {id:"19",  englishSide:"comfortable",  russianSide:"удобный",        englishTranscription:"[ˈkʌmpfətəbl̩]",     synonym:"", antonym:""},
    {id:"20",  englishSide:"crazy",        russianSide:"сумасшедший",    englishTranscription:"[ˈkreɪzi]",         synonym:"", antonym:""},
    {id:"21",  englishSide:"cruel",        russianSide:"жестокий",       englishTranscription:"[ˈkruːəl]",         synonym:"", antonym:""},
    {id:"22",  englishSide:"curious",      russianSide:"любопытный",     englishTranscription:"[ˈkjʊəriəs]",       synonym:"", antonym:""},
    {id:"23",  englishSide:"dangerous",    russianSide:"опасный",        englishTranscription:"[ˈdeɪndʒərəs]",     synonym:"", antonym:""},
    {id:"24",  englishSide:"dark",         russianSide:"темный",         englishTranscription:"[dɑːk]",            synonym:"", antonym:""},
    {id:"25",  englishSide:"dead",         russianSide:"мертвый",        englishTranscription:"[ded]",             synonym:"", antonym:""},
    {id:"26",  englishSide:"depressed",    russianSide:"подавленный",    englishTranscription:"[dɪˈprest]",        synonym:"", antonym:""},
    {id:"27",  englishSide:"determined",   russianSide:"определенный",   englishTranscription:"[dɪˈtɜːmɪnd]",      synonym:"", antonym:""},
    {id:"28",  englishSide:"different",    russianSide:"другой",         englishTranscription:"[ˈdɪfərənt]",       synonym:"", antonym:""},
    {id:"29",  englishSide:"difficult",    russianSide:"трудный",        englishTranscription:"[ˈdɪfɪkəlt]",       synonym:"", antonym:""},
    {id:"30",  englishSide:"dirty",        russianSide:"грязный",        englishTranscription:"[ˈdə:tɪ]",          synonym:"", antonym:""},
    {id:"31",  englishSide:"disturbed",    russianSide:"нарушенный",     englishTranscription:"[dɪˈstɜːbd]",       synonym:"", antonym:""},
    {id:"32",  englishSide:"dry",          russianSide:"сухой",          englishTranscription:"[draɪ]",            synonym:"", antonym:""},
    {id:"33",  englishSide:"early",        russianSide:"ранний",         englishTranscription:"[ˈə:lɪ]",           synonym:"", antonym:""},
    {id:"34",  englishSide:"easy",         russianSide:"легкий",         englishTranscription:"[ˈiːzi]",           synonym:"", antonym:""},
    {id:"35",  englishSide:"embarrassed",  russianSide:"смущенный",      englishTranscription:"[ɪmˈbærəst]",       synonym:"", antonym:""},
    {id:"36",  englishSide:"enthusiastic", russianSide:"восторженный",   englishTranscription:"[ɪnˌθjuːziˈæstɪk]", synonym:"", antonym:""},
    {id:"37",  englishSide:"evil",         russianSide:"злой",           englishTranscription:"[ˈiːvəl]",          synonym:"", antonym:""},
    {id:"38",  englishSide:"excited",      russianSide:"взволнованный",  englishTranscription:"[ɪkˈsaɪtɪd]",       synonym:"", antonym:""},
    {id:"39",  englishSide:"false",        russianSide:"ложный",         englishTranscription:"[fɒls]",            synonym:"", antonym:""},
    {id:"40",  englishSide:"famous",       russianSide:"известный",      englishTranscription:"[ˈfeɪməs]",         synonym:"", antonym:""},
    {id:"41",  englishSide:"fast",         russianSide:"быстрый",        englishTranscription:"[fɑːst]",           synonym:"", antonym:""},
    {id:"42",  englishSide:"fine",         russianSide:"прекрасный",     englishTranscription:"[faɪn]",            synonym:"", antonym:""},
    {id:"43",  englishSide:"foolish",      russianSide:"безрассудный",   englishTranscription:"[ˈfu:lɪʃ]",         synonym:"", antonym:""},
    {id:"44",  englishSide:"fresh",        russianSide:"свежий",         englishTranscription:"[freʃ]",            synonym:"", antonym:""},
    {id:"45",  englishSide:"friendly",     russianSide:"дружелюбный",    englishTranscription:"[ˈfrendli]",        synonym:"", antonym:""},
    {id:"46",  englishSide:"funny",        russianSide:"смешной",        englishTranscription:"[ˈfʌni]",           synonym:"", antonym:""},
    {id:"47",  englishSide:"good",         russianSide:"хороший",        englishTranscription:"[gʊd]",             synonym:"", antonym:""},
    {id:"48",  englishSide:"happy",        russianSide:"счастливый",     englishTranscription:"[ˈhæpi]",           synonym:"", antonym:""},
    {id:"49",  englishSide:"hard",         russianSide:"тяжелый",        englishTranscription:"[hɑːd]",            synonym:"", antonym:""},
    {id:"50",  englishSide:"healthy",      russianSide:"здоровый",       englishTranscription:"[ˈhelθi]",          synonym:"", antonym:""},
    {id:"51",  englishSide:"high-pitched", russianSide:"пронзительный",  englishTranscription:"[ˌhaɪˈpɪtʃt]",      synonym:"", antonym:""},
    {id:"52",  englishSide:"hot",          russianSide:"горячий",        englishTranscription:"[hɒt]",             synonym:"", antonym:""},
    {id:"53",  englishSide:"huge",         russianSide:"огромный",       englishTranscription:"[hjuːdʒ]",          synonym:"", antonym:""},
    {id:"54",  englishSide:"hungry",       russianSide:"голодный",       englishTranscription:"[ˈhʌŋgri]",         synonym:"", antonym:""},
    {id:"55",  englishSide:"important",    russianSide:"важный",         englishTranscription:"[ɪmˈpɔːtənt]",      synonym:"", antonym:""},
    {id:"56",  englishSide:"impossible",   russianSide:"невозможный",    englishTranscription:"[ɪmˈpɒsɪbl̩]",       synonym:"", antonym:""},
    {id:"57",  englishSide:"large",        russianSide:"крупный",        englishTranscription:"[lɑːdʒ]",           synonym:"", antonym:""},
    {id:"58",  englishSide:"late",         russianSide:"поздний",        englishTranscription:"[leɪt]",            synonym:"", antonym:""},
    {id:"59",  englishSide:"little",       russianSide:"небольшой",      englishTranscription:"[ˈlɪtl]",           synonym:"", antonym:""},
    {id:"60",  englishSide:"lonely",       russianSide:"Одинокий",       englishTranscription:"[ˈləʊnli]",         synonym:"", antonym:""},
    {id:"61",  englishSide:"long",         russianSide:"длинный",        englishTranscription:"[lɒŋ]",             synonym:"", antonym:""},
    {id:"62",  englishSide:"loud",         russianSide:"громкий",        englishTranscription:"[laud]",            synonym:"", antonym:""},
    {id:"63",  englishSide:"lovely",       russianSide:"восхитительный", englishTranscription:"[ˈlʌvli]",          synonym:"", antonym:""},
    {id:"64",  englishSide:"lucky",        russianSide:"везучий",        englishTranscription:"[ˈlʌki]",           synonym:"", antonym:""},
    {id:"65",  englishSide:"narrow",       russianSide:"узкий",          englishTranscription:"[ˈnærəʊ]",          synonym:"", antonym:""},
    {id:"66",  englishSide:"new",          russianSide:"новый",          englishTranscription:"[nju:]",            synonym:"", antonym:""},
    {id:"67",  englishSide:"nice",         russianSide:"милый",          englishTranscription:"[naɪs]",            synonym:"", antonym:""},
    {id:"68",  englishSide:"noisy",        russianSide:"шумный",         englishTranscription:"[ˈnɔɪzi]",          synonym:"", antonym:""},
    {id:"69",  englishSide:"old",          russianSide:"старый",         englishTranscription:"[əʊld]",            synonym:"", antonym:""},
    {id:"70",  englishSide:"perfect",      russianSide:"идеальный",      englishTranscription:"[ˈpɜːfekt]",        synonym:"", antonym:""},
    {id:"71",  englishSide:"pleasant",     russianSide:"приятный",       englishTranscription:"[ˈplezənt]",        synonym:"", antonym:""},
    {id:"72",  englishSide:"poor",         russianSide:"бедный",         englishTranscription:"[pɔːr]",            synonym:"", antonym:""},
    {id:"73",  englishSide:"proud",        russianSide:"гордый",         englishTranscription:"[praʊd]",           synonym:"", antonym:""},
    {id:"74",  englishSide:"quick",        russianSide:"скорый",         englishTranscription:"[kwɪk]",            synonym:"", antonym:""},
    {id:"75",  englishSide:"quiet",        russianSide:"тихий",          englishTranscription:"[kwaɪət]",          synonym:"", antonym:""},
    {id:"76",  englishSide:"real",         russianSide:"реальный",       englishTranscription:"[rɪəl]",            synonym:"", antonym:""},
    {id:"77",  englishSide:"rich",         russianSide:"богатый",        englishTranscription:"[rɪtʃ]",            synonym:"", antonym:""},
    {id:"78",  englishSide:"safe",         russianSide:"безопасный",     englishTranscription:"[seɪf]",            synonym:"", antonym:""},
    {id:"79",  englishSide:"scared",       russianSide:"испуганный",     englishTranscription:"[skeəd]",           synonym:"", antonym:""},
    {id:"80",  englishSide:"short",        russianSide:"короткий",       englishTranscription:"[ʃɔːt]",            synonym:"", antonym:""},
    {id:"81",  englishSide:"shy",          russianSide:"застенчивый",    englishTranscription:"[ʃaɪ]",             synonym:"", antonym:""},
    {id:"82",  englishSide:"silent",       russianSide:"безмолвный",     englishTranscription:"[ˈsaɪlənt]",        synonym:"", antonym:""},
    {id:"83",  englishSide:"silly",        russianSide:"глупый",         englishTranscription:"[ˈsɪli]",           synonym:"", antonym:""},
    {id:"84",  englishSide:"slow",         russianSide:"медленный",      englishTranscription:"[sləʊ]",            synonym:"", antonym:""},
    {id:"85",  englishSide:"small",        russianSide:"маленький",      englishTranscription:"[smɔːl]",           synonym:"", antonym:""},
    {id:"86",  englishSide:"soft",         russianSide:"мягкий",         englishTranscription:"[sɔft]",            synonym:"", antonym:""},
    {id:"87",  englishSide:"stupid",       russianSide:"тупой",          englishTranscription:"[ˈstjuːpɪd]",       synonym:"", antonym:""},
    {id:"88",  englishSide:"successful",   russianSide:"успешный",       englishTranscription:"[səkˈsesfəl]",      synonym:"", antonym:""},
    {id:"89",  englishSide:"tall",         russianSide:"высокий",        englishTranscription:"[tɔːl]",            synonym:"", antonym:""},
    {id:"90",  englishSide:"tasty",        russianSide:"вкусный",        englishTranscription:"[ˈteɪsti]",         synonym:"", antonym:""},
    {id:"91",  englishSide:"terrible",     russianSide:"ужасный",        englishTranscription:"[ˈterəbl̩]",         synonym:"", antonym:""},
    {id:"92",  englishSide:"tiny",         russianSide:"крошечный",      englishTranscription:"[ˈtaɪni]",          synonym:"", antonym:""},
    {id:"93",  englishSide:"tired",        russianSide:"уставший",       englishTranscription:"[taɪəd]",           synonym:"", antonym:""},
    {id:"94",  englishSide:"ugly",         russianSide:"уродливый",      englishTranscription:"[ˈʌgli]",           synonym:"", antonym:""},
    {id:"95",  englishSide:"unhappy",      russianSide:"несчастливый",   englishTranscription:"[ʌnˈhæpɪ]",         synonym:"", antonym:""},
    {id:"96",  englishSide:"weak",         russianSide:"слабый",         englishTranscription:"[wi:k]",            synonym:"", antonym:""},
    {id:"97",  englishSide:"wicked",       russianSide:"злобный",        englishTranscription:"[ˈwɪkɪd]",          synonym:"", antonym:""},
    {id:"98",  englishSide:"wide",         russianSide:"широкий",        englishTranscription:"[waɪd]",            synonym:"", antonym:""},
    {id:"99",  englishSide:"worried",      russianSide:"тревожный",      englishTranscription:"[ˈwʌrid]",          synonym:"", antonym:""},
    {id:"100", englishSide:"young",        russianSide:"молодой",        englishTranscription:"[jʌŋ]",             synonym:"", antonym:""},
];

//from berseker
let bersekerDictionary = [
    {id:"1", englishSide:"stingy", russianSide:"скупой"},
    {id:"2", englishSide:"nourishment", russianSide:"питание"},
    {id:"3", englishSide:"garment", russianSide:"одеяние"},
    {id:"4", englishSide:"penetrate", russianSide:"проникать"},
    {id:"5", englishSide:"novice", russianSide:"новичок"},
    {id:"6", englishSide:"besides", russianSide:"кроме того"},
    {id:"7", englishSide:"strain", russianSide:"деформировать"},
    {id:"8", englishSide:"rely", russianSide:"полагаться"},
    {id:"9", englishSide:"obstinate", russianSide:"упрямый"},
    {id:"10", englishSide:"petty", russianSide:"мелкий"},
    {id:"11", englishSide:"merely", russianSide:"просто(только)"},
    {id:"12", englishSide:"senile", russianSide:"дряхлый"},
    {id:"13", englishSide:"reckless", russianSide:"опрометчивый(безрассудный)"},
    {id:"14", englishSide:"infant", russianSide:"младенец"},
    {id:"15", englishSide:"demise", russianSide:"кончина"},
    {id:"16", englishSide:"gross", russianSide:"большой"},
    {id:"17", englishSide:"claim", russianSide:"утверждать"},
    {id:"18", englishSide:"mud", russianSide:"грязь"},
    {id:"19", englishSide:"neat", russianSide:"аккуратный"},
    {id:"20", englishSide:"nest", russianSide:"гнездо"},
    {id:"21", englishSide:"percieve", russianSide:"воспринимать"},
    {id:"22", englishSide:"according", russianSide:"согласно"},
    {id:"23", englishSide:"further still", russianSide:"еще дальше"},
    {id:"24", englishSide:"perhaps", russianSide:"возможно"},
    {id:"25", englishSide:"certain", russianSide:"определенный"},
    {id:"26", englishSide:"govern", russianSide:"править"},
    {id:"27", englishSide:"revelation", russianSide:"откровение"},
    {id:"28", englishSide:"contested", russianSide:"спорить(бороться)"},
    {id:"29", englishSide:"encountered", russianSide:"столкнуться с чем-то"},
    {id:"30", englishSide:"disciple", russianSide:"ученик"},
    {id:"31", englishSide:"significant", russianSide:"значимый"},
    {id:"32", englishSide:"tingles", russianSide:"покалывания"},
    {id:"33", englishSide:"ointment", russianSide:"мазь"},
    {id:"34", englishSide:"consecrate", russianSide:"освященный"},
    {id:"35", englishSide:"falter", russianSide:"колебаться"},
    {id:"36", englishSide:"scatter", russianSide:"разбрасывать"},
    {id:"37", englishSide:"mutual", russianSide:"обоюдный"},
    {id:"38", englishSide:"interstice", russianSide:"расщелина"},
    {id:"39", englishSide:"splendid", russianSide:"великолепный"},
    {id:"40", englishSide:"nuisance", russianSide:"досада"},
    {id:"41", englishSide:"vicious", russianSide:"порочный"},
    {id:"42", englishSide:"vanity", russianSide:"тщеславие"},
    {id:"43", englishSide:"vague", russianSide:"расплывчатый"},
    {id:"44", englishSide:"lump", russianSide:"сваливать"},
    {id:"45", englishSide:"rustic", russianSide:"деревенский"},
    {id:"46", englishSide:"invoke", russianSide:"призывать"},
    {id:"47", englishSide:"salvation", russianSide:"спасение"},
    {id:"48", englishSide:"falcon", russianSide:"сокол"},
    {id:"49", englishSide:"bunch", russianSide:"кучка"},
    {id:"50", englishSide:"errand", russianSide:"поручение"},
    {id:"51", englishSide:"kindred", russianSide:"родственный"},
    {id:"52", englishSide:"stagnant", russianSide:"застойный"},
    {id:"53", englishSide:"feast", russianSide:"пир"},
    {id:"54", englishSide:"stroll", russianSide:"прогулка"},
    {id:"55", englishSide:"sting", russianSide:"жалить"},
    {id:"56", englishSide:"shrewd", russianSide:"проницательный"},
    {id:"57", englishSide:"indeed", russianSide:"действительно"},
    {id:"58", englishSide:"od", russianSide:"защитный"},
    {id:"59", englishSide:"herd", russianSide:"примкнуть"},
    {id:"60", englishSide:"scent", russianSide:"запах, нюх "},
    {id:"61", englishSide:"at least", russianSide:"по крайней мере"},
    {id:"62", englishSide:"flattened", russianSide:"сплющенный"},
    {id:"63", englishSide:"canteen", russianSide:"буфет"},
    {id:"64", englishSide:"clumsily", russianSide:"неумело"},
    {id:"65", englishSide:"unjustly", russianSide:"незаслуженно"},
    {id:"66", englishSide:"timid", russianSide:"робкий"},
    {id:"67", englishSide:"indecency", russianSide:"непристойность"},
    {id:"68", englishSide:"hesitation", russianSide:"нерешительность"},
    {id:"69", englishSide:"refinement", russianSide:"утонченность"},
    {id:"70", englishSide:"ransom", russianSide:"выкуп"},
    {id:"71", englishSide:"conjuction", russianSide:"союз, соединение"},
    {id:"72", englishSide:"attached", russianSide:"приложенный"},
    {id:"73", englishSide:"fascinated", russianSide:"очарованный"},
    {id:"74", englishSide:"wraith", russianSide:"привидение"},
    {id:"75", englishSide:"flawless", russianSide:"безупречный"},
    {id:"76", englishSide:"dwelling", russianSide:"жилище"},
    {id:"77", englishSide:"posture", russianSide:"поза"},
    {id:"78", englishSide:"sniffing", russianSide:"нюхать"},
    {id:"79", englishSide:"aurora", russianSide:"северное сияние, утренняя заря"},
    {id:"80", englishSide:"bulwark", russianSide:"оплот, бастион"},
    {id:"81", englishSide:"divert", russianSide:"отвлекать"},
    {id:"82", englishSide:"sole", russianSide:"подошва"},
    {id:"83", englishSide:"kite", russianSide:"коршун"},
    {id:"84", englishSide:"curtail", russianSide:"сокращение"},
    {id:"85", englishSide:"abduct", russianSide:"исчезновение"},
    {id:"86", englishSide:"oarsmen", russianSide:"гребцы"},
    {id:"87", englishSide:"solemn", russianSide:"торжественный"},
    {id:"88", englishSide:"backbone", russianSide:"позвоночник"},
    {id:"89", englishSide:"obstonate", russianSide:"упрямый"},
    {id:"90", englishSide:"efficacy", russianSide:"эффективный"},
    {id:"91", englishSide:"fiance", russianSide:"жених"},
    {id:"92", englishSide:"forlorn", russianSide:"покинутый"},
    {id:"93", englishSide:"seize", russianSide:"воспользоваться"},
    {id:"94", englishSide:"undeniable", russianSide:"бесспорный"},
    {id:"95", englishSide:"tacit", russianSide:"подразумеваемый"},
    {id:"96", englishSide:"supreme", russianSide:"высший"},
    {id:"97", englishSide:"tossing", russianSide:"бросание, качка"},
    {id:"98", englishSide:"harbored", russianSide:"укрывал"},
    {id:"99", englishSide:"dense", russianSide:"плотный"},
    {id:"100", englishSide:"frail", russianSide:"хилый"},
    {id:"101", englishSide:"bisect", russianSide:"разрубить пополам"},
    {id:"102", englishSide:"blundered", russianSide:"сплоховал"},
    {id:"103", englishSide:"naval", russianSide:"флотский"},
    {id:"104", englishSide:"feud", russianSide:"междуусобица"},
    {id:"105", englishSide:"crucial", russianSide:"ключевой"},
    {id:"106", englishSide:"sensation", russianSide:"ощущение"},
    {id:"107", englishSide:"temporary", russianSide:"временный"},
    {id:"108", englishSide:"tamed", russianSide:"прирученный"},
    {id:"109", englishSide:"omnipotence", russianSide:"всемогущество"},
    {id:"110", englishSide:"certain", russianSide:"определенный"},
    {id:"111", englishSide:"bowel", russianSide:"кишка"},
    {id:"112", englishSide:"sinister", russianSide:"зловещий"},
    {id:"113", englishSide:"capacity", russianSide:"вместимость"},
    {id:"114", englishSide:"alongside", russianSide:"на стороне"},
    {id:"115", englishSide:"tenacious", russianSide:"цепкий"},
    {id:"116", englishSide:"avast!", russianSide:"стой!"},
    {id:"117", englishSide:"rusty", russianSide:"ржавый"},
    {id:"118", englishSide:"odd", russianSide:"странный"},
    {id:"119", englishSide:"solitary", russianSide:"уединенный"},
    {id:"120", englishSide:"hectic", russianSide:"беспокойный"},
    {id:"121", englishSide:"vague", russianSide:"расплывчатый"},
    {id:"122", englishSide:"faint", russianSide:"унывать"},
    {id:"123", englishSide:"merrow", russianSide:"русалка"},
    {id:"124", englishSide:"dove", russianSide:"голубь"},
    {id:"125", englishSide:"slug", russianSide:"слизень"},
    {id:"126", englishSide:"yearn", russianSide:"тосковать"},
    {id:"127", englishSide:"handle", russianSide:"рукоять"},
    {id:"128", englishSide:"everlasting", russianSide:"вечный"},
    {id:"129", englishSide:"convenient", russianSide:"удобный"},
    {id:"130", englishSide:"maw", russianSide:"пасть"},
    {id:"131", englishSide:"repulsive", russianSide:"отталкивающий"},
    {id:"132", englishSide:"brethren", russianSide:"братия"},
    {id:"133", englishSide:"cling", russianSide:"цепляться"},
    {id:"134", englishSide:"heirloom", russianSide:"фамильная ценность"},
    {id:"135", englishSide:"surge", russianSide:"волна"},
    {id:"136", englishSide:"rattle", russianSide:"грохот"},
    {id:"137", englishSide:"labor", russianSide:"труд, работа"},
    {id:"138", englishSide:"clad", russianSide:"облекать"},
    {id:"139", englishSide:"verge", russianSide:"обочина"},
    {id:"140", englishSide:"rough", russianSide:"грубый"},
    {id:"141", englishSide:"disaster", russianSide:"стихийное бедствие"},
    {id:"142", englishSide:"reluctance", russianSide:"нежелание"},
    {id:"143", englishSide:"mess", russianSide:"беспорядок"},
    {id:"144", englishSide:"rag", russianSide:"тряпка"},
    {id:"145", englishSide:"disembark", russianSide:"высаживаться"},
    {id:"146", englishSide:"seagull", russianSide:"чайка"},
    {id:"147", englishSide:"trespass", russianSide:"прегрешение, посягательство"},
    {id:"148", englishSide:"tempest", russianSide:"буря"},
    {id:"149", englishSide:"neat", russianSide:"аккуратный"},
    {id:"150", englishSide:"intrepid", russianSide:"бесстрашный"},
    {id:"151", englishSide:"glimmer", russianSide:"мерцание"},
    {id:"152", englishSide:"seal", russianSide:"тюлень"},
    {id:"153", englishSide:"absorb", russianSide:"поглощать"},
    {id:"154", englishSide:"roar", russianSide:"рев"},
    {id:"155", englishSide:"vast", russianSide:"огромный"},
    {id:"156", englishSide:"attend", russianSide:"посещать"},
    {id:"157", englishSide:"brownie", russianSide:"домовой"},
    {id:"158", englishSide:"delve", russianSide:"копаться"},
    {id:"159", englishSide:"inhale", russianSide:"вдох"},
    {id:"160", englishSide:"blossom", russianSide:"цвести"},
    {id:"161", englishSide:"approach", russianSide:"подход"},
    {id:"162", englishSide:"bestow", russianSide:"даровать"},
    {id:"163", englishSide:"glimpse", russianSide:"проблеск"},
    {id:"164", englishSide:"convey", russianSide:"транспортировать"},
];

//1x funcs
//создание задания Simple Sentences
async function checkConstrustor() {
    let pronoun = pronouns[Math.floor(Math.random()*pronouns.length)];
    //берем глагол из обычных либо необычных на рандоме
    let selectedArrWithVerbs;
    let verb;

    if((irRegularVerbs.length != 0) && (regularVerbs.length != 0)) {
        selectedArrWithVerbs =  Math.random()>0.5 ? irRegularVerbs : regularVerbs;
    } else {
        if(irRegularVerbs.length == 0) {
            selectedArrWithVerbs =  regularVerbs;
        }
        if(regularVerbs.length == 0) {
            selectedArrWithVerbs = irRegularVerbs;
        }
    }

    if((irRegularVerbs.length == 0) && (regularVerbs.length == 0)) {
        alert("woooh! Danilla, are you crazyyy?...!");
        location.reload();
    }

    let selectedVerbFromArr =  Math.floor(Math.random()*selectedArrWithVerbs.length);

    if ($("#repeatingVerbs").prop("checked")) {
        verb = selectedArrWithVerbs.splice(selectedVerbFromArr, 1)[0];
    } else {
        verb = Math.random()>0.5 ? irRegularVerbs[Math.floor(Math.random()*irRegularVerbs.length)] : regularVerbs[Math.floor(Math.random()*regularVerbs.length)];
    }

    let time = times[Math.floor(Math.random()*times.length)];
    let senType = senTypes[Math.floor(Math.random()*senTypes.length)];
    let senConstractedArr = [];
    let correctEngSen = await sentenceCreator(pronoun, verb, time, senType)
    
    senConstractedArr = {
        pronounRus:pronoun["russianSide"],
        verbRus:verb["russianSide"],
        timeRus:time["russianSide"],
        senTypeRus:senType["russianSide"],
        correctEngSen: correctEngSen,
        verbEng: verb["englishSide"]
    };
    return senConstractedArr;
};

//создание правильного ответа Simple Sentences
async function sentenceCreator(pronoun, verb, time, senType) {
    //time -> type -> pronoun
    //time past
    if(time["englishSide"] == "past") {
        //type
        if(senType["englishSide"] == "negative") {
            //pronoun
            return (pronoun.englishSide + " didn't " + verb.englishSide);
        } else if (senType["englishSide"] == "affirmative") {
            //pronoun
            return (pronoun.englishSide + " " + returnE(verb));
        } else {
            //pronoun
            return ("did " + pronoun.englishSide + " " + verb.englishSide);
        }
    } 
    //time present
    else if (time["englishSide"] == "present") {
        //type
        if(senType["englishSide"] == "negative") {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                return (pronoun.englishSide + " doesn't " + verb.englishSide);
            } else {
                return (pronoun.englishSide + " don't " + verb.englishSide);
            }
        } else if (senType["englishSide"] == "affirmative") {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                return (pronoun.englishSide + " " + returnS(verb));
            } else {
                return (pronoun.englishSide + " " + verb.englishSide);
            }
        } else {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                return ("does " + pronoun.englishSide + " " + verb.englishSide);
            } else {
                return ("do " + pronoun.englishSide + " " + verb.englishSide);
            }
        }
    } 
    //time future
    else {
           //type
           if(senType["englishSide"] == "negative") {
               //pronoun
               return (pronoun.englishSide + " will not " + verb.englishSide);
           } else if (senType["englishSide"] == "affirmative") {
               //pronoun
               return (pronoun.englishSide + " will " + verb.englishSide);
           } else {
               //pronoun
               return ("will " + pronoun.englishSide + " " + verb.englishSide);
           }
    }
}

//на конце в настоящем времени третье лицо s
function returnS(verb) {
    let lastLetter = verb.englishSide[verb.englishSide.length-1];
    let preLastLetter = verb.englishSide[verb.englishSide.length-2];
    
    //если кончается на s x z o ss sh ch то окончанием становится es
    if ((lastLetter == "s") 
        || ((lastLetter) == "x")
        || ((lastLetter) == "z")
        || ((lastLetter) == "o")
        || ((preLastLetter+lastLetter) == "ss") 
        || ((preLastLetter+lastLetter) == "sh") 
        || ((preLastLetter+lastLetter) == "ch")
    ) {
        this.correctVerb = verb.englishSide + "es";
    } else {
    //если заканчивается на y, и предпоследняя буква согласная, то окончание меняется на ies
        if (lastLetter == "y") {
            for (let i = 0; i < soglas.length; i++) {
                if(preLastLetter == soglas[i]) {
                    this.correctVerb = verb.englishSide.substring(0, verb.englishSide.length-1) + "ies";
                    break;
                }
            }
        } else {
            //по умолчанию просто s
            this.correctVerb = verb.englishSide + "s";
        }
    }
    return this.correctVerb; 
}

//на конце в прошедшем времени окончание в прошедшем времени d или ed
function returnE(verb) {
    let lastLetter = verb.englishSide[verb.englishSide.length-1];
    let preLastLetter = verb.englishSide[verb.englishSide.length-2];

    //если есть вторая форма (то есть если он нестандартный) то вернем ее, иначе начинаем все это
    if (verb.secondForm) {
        this.correctVerb = verb.secondForm;
    } else {
        //если кончается на e или ee - просто добавляется d
        if ((verb.englishSide[verb.englishSide.length-1] == "e") || (verb.englishSide.substring(verb.englishSide.length-2, verb.englishSide.length) == "ee")) {
            this.correctVerb = verb.englishSide + "d";
            //если последняя y - меняется на ied
        } else if (lastLetter == "y") {
            for (let i = 0; i < glas.length; i++) {
                //если на конце y и перед ней гласная - добавляется ed
                if(preLastLetter == glas[i]) {
                    this.correctVerb = verb.englishSide + "ed";
                    break;
                }
                this.correctVerb = verb.englishSide.substring(0, verb.englishSide.length-1) + "ied";
            }
        } else if (preLastLetter+lastLetter == "ic") {
            //если оканчивается на ic - меняется на ick и добавляется ed
            this.correctVerb = verb.englishSide.substring(0, verb.englishSide.length-2) + "ick" + "ed";
        } else {
            for (let i = 0; i < soglas.length-1; i++) {
                if (lastLetter == soglas[i]) {
                    if((verb.stressedLastVowel == true) && (lastLetter != "x") && (lastLetter !="w") && (lastLetter != preLastLetter)) {
                        //если конец одна согласная и перед ней ударная гласная - последняя буква дублируется и добавляется ed (кроме x и w и если две одинаковые)
                        if (verb.englishSide[verb.englishSide.length-1] == verb.englishSide[verb.englishSide.length]) {
                            this.correctVerb = verb.englishSide + "ed";
                            break;
                        }
                        this.correctVerb = verb.englishSide + verb.englishSide[verb.englishSide.length-1] + "ed";
                    } else {
                        //если просто кончается на согласную - добавляется ed
                        this.correctVerb = verb.englishSide + "ed";
                    }
                }
            }
        }
    }
    return this.correctVerb;
}

//2ex func
//создание правильного ответа Word Card
let nextWordCard = $("button#nextWordCard");
let answerWordCardButton = $("button#answerWordCardButton");
let settingWordCard = $("button#settingWordCard");
let helpWordCard = $("button#helpWordCard");
let questionWordCard = $("div#questionWordCard");
let answerWordCard = $("div#answerWordCard");
let wordArrs = ["pronouns", "regularVerbs", "irRegularVerbs", "times", "senTypes", "animals", "adjectives"];
let settingsForSecondEx = $("tr#settingsForSecondEx");
let checkboxesChoosenWords2ex;

//создание задания Word Card
function checkWordCard(arr) {
    let word = arr[Math.floor(Math.random()*arr.length)];
    let = wordCardConstractedArr = [];

    wordCardConstractedArr = {
        russianSide: arr["russianSide"],
        englishSide: arr["englishSide"]
    };
    return wordCardConstractedArr;
}

nextWordCard.click(function() {
    wordCardCreator(wordArrs);
});

answerWordCardButton.click(function() {
    answerWordCardToggle();
});

helpWordCard.click(function() {
    wordCardHelper();
});

function wordCardCreator(wordsArrs) {
    checkboxesChoosenWords2ex = $("div#checkboxesChoosenWords2ex input[type=checkbox]:checked");
    console.log(checkboxesChoosenWords2ex);
}

function wordCardHelper() {
    alert("а здесь функционал распишем прям!");
}

function answerWordCardToggle() {
    answerWordCard.toggle();
}

//manioulations with DOM
//1ex
let pronounCell = $("td#pronounCell");
let verbCell = $("td#verbCell");
let timeCell = $("td#timeCell");
let senTypeCell = $("td#senTypeCell");
let answerCell = $("td#answerCell #pp");

let simplePolyglotTable = $("#simplePolyglotTable");
let firstExSettings = $("#firstExSettings");
let helpFor1Ex = $("#helpFor1Ex");

//при нажатии создаются русское и английское предложение
$('button#startExercise').click(function(){
    start1Ex();
});

//при нажатии щелкается вперед смена за сменой
$('button#nextExercise').click(function(){
    pressToNext();
});

//скрывает\показывает ячейку с ответом
$('button#showHideAnswer').click(function(){

});


//заполняем ячейки словами
async function start1Ex() {
    showHideAnswer(true);
    const senConstracted = await checkConstrustor();
    let translatedPartVerb;
    if($("#showEnglishSideVerb").prop("checked")) {
        translatedPartVerb = " (" +senConstracted["verbEng"]+ ")";
    } else {
        translatedPartVerb = "";
    }
    if(senConstracted) {
        pronounCell.html(senConstracted['pronounRus']);
        verbCell.html(senConstracted['verbRus'] + translatedPartVerb);
        timeCell.html(senConstracted['timeRus']);
        senTypeCell.html(senConstracted['senTypeRus']);
        answerCell.html("<button><i class='fa fa-volume-up fa-1x' aria-hidden='true'></i></button>     " + senConstracted['correctEngSen']);
    }

}
//если в ячейке есть ответ, она скрывается, если нет - появляется с новым ответом
function showHideAnswer(state) {
    if (state === true) {
        answerCell.hide();
    } else {
        answerCell.show();
    }
}

//скрывает\показывает ячейку с ответом
$('button#showHideAnswer').click(function(){
    showHideAnswer(false);
});

//озвучка текста на английском языке
$('td#answerCell').click(function(){
    //скорость воспроизведения rate 0.5 1 1.5
    //высота голоса pitch 0.5 1 1.5
    let speechRate = $("input[name=speechRate]:checked").val();
    let speechPitch = $("input[name=speechPitch]:checked").val();
    let speechVoice = $("input[name=speechVoice]:checked").val();
    responsiveVoice.speak(answerCell.text(), speechVoice, {pitch:speechPitch, rate: speechRate});
});

//для пульта
window.state = 0;
$( "html" ).keydown(function(e) {
    if (e.which == 190) {
        pressToNext();
    }
});

//функция безостановочного переключения
function pressToNext() {
    if (window.state === 0) {
        window.state = 1;
        start1Ex();
    } else {
        window.state = 0;
        showHideAnswer(false);
    }
}

//проверка чекбокса на повторение глагола в простом конструкторе
$("#repeatingVerbs").click(function(){
    console.log($("#repeatingVerbs").prop("checked"));
});

//показывает или скрывает таблицу полиглота
$("#showHidePolyglotTable").click(function() {
    $("#simplePolyglotTable").toggle();
});

//показывает скрывает настройки для первого упражнения
firstExSettings.click(function() {
    $("#settingsForFirstEx").toggle();
});

//подсказка для занимающихся первым упражнением
helpFor1Ex.click(function() {
    alert("Первое упражнение создано для тренировки времен и для запоминания глаголов. Оно работает по принципу, который был представлен в телепередаче \"Полиглот\". Для начала упражнения нажмите кнопку \"Следующий\". Программа случайным образом генерирует местоимение, глагол, время и тип предложения. После того, как вы составите предложение, нажимайте на кнопку \"Следующий\" и вы увидите ответ. Для прослушивания ответа нужно нажать на кнопку с динамиком. Если вы забыли табличку, можно нажать на кнопку \"Таблица\", и чуть ниже она появится. В настройках можно изменить параметры генерации упражнения и настройки голоса. Приятной тренировки! Для критики, пожеланий, предложений: shmihshmih@gmail.com");
});

//при загрузке документа ready
$(document).ready(function(){
    $("#simplePolyglotTable").hide();
    $("#settingsForFirstEx").hide();
    settingsForSecondEx.hide();
});

//2ex
//если в ячейке есть ответ, она скрывается, если нет - появляется с новым ответом
function showHideWordCard(state) {
    if (state === true) {
        answerWordCard.hide();
    } else {
        answerWordCard.show();
        answerWordCard.html("<button><i class='fa fa-volume-up fa-1x' aria-hidden='true'></i></button>     " + senConstracted['correctEngSen']);
    }
}

settingWordCard.click(function() {
    settingsForSecondEx.toggle();
});