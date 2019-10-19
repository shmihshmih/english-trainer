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
    {id:3, russianSide:"прыгать",        englishSide:"jump",   stressedLastVowel: true},
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
    {id: 17,  russianSide:"идти",                   englishSide:"go",         secondForm:"went",       thirdForm:"gone"},
    {id: 18,  russianSide:"быть",                   englishSide:"be",         secondForm:"was/were",   thirdForm:"been"},
    {id: 19,  russianSide:"становиться",            englishSide:"become",     secondForm:"became",     thirdForm:"become"},
    {id: 20,  russianSide:"начинаться",             englishSide:"begin",      secondForm:"began",      thirdForm:"begun"},
    {id: 21,  russianSide:"ломать",                 englishSide:"break",      secondForm:"broke",      thirdForm:"broke"},
    {id: 22,  russianSide:"приносить",              englishSide:"bring",      secondForm:"brought",    thirdForm:"brought"},
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
    {id: 105, russianSide:"скрывать",               englishSide:"hide	",    secondForm:"hid",        thirdForm:"hidden"},
    {id: 105, russianSide:"держать пари",           englishSide:"bet	",    secondForm:"bet",        thirdForm:"bet"},
    {id: 105, russianSide:"держать",                englishSide:"hold	",    secondForm:"held",       thirdForm:"held"},
    {id: 105, russianSide:"причинить боль",         englishSide:"hurt	",    secondForm:"hurt",       thirdForm:"hurt"},
    {id: 105, russianSide:"скакать",                englishSide:"ride	",    secondForm:"rode",       thirdForm:"ridden"},
    {id: 105, russianSide:"подниматься",            englishSide:"rise	",    secondForm:"rose",       thirdForm:"risen"},
    {id: 105, russianSide:"встряхивать",            englishSide:"shake	",    secondForm:"shook",      thirdForm:"shaken"},
    {id: 105, russianSide:"воровать",               englishSide:"steal	",    secondForm:"stole",      thirdForm:"stolen"},
    {id: 105, russianSide:"сиять",                  englishSide:"shine	",    secondForm:"shone",      thirdForm:"shone"},
    {id: 105, russianSide:"сливать",                englishSide:"sink	",    secondForm:"sank",       thirdForm:"sunk"},
    {id: 105, russianSide:"скользить",              englishSide:"slide	",    secondForm:"slid",       thirdForm:"slid"},
    {id: 105, russianSide:"скакать",                englishSide:"spring	",    secondForm:"sprang",     thirdForm:"sprung"},
    {id: 105, russianSide:"придерживаться",         englishSide:"stick	",    secondForm:"stuck",      thirdForm:"stuck"},
    {id: 105, russianSide:"подметать",              englishSide:"sweep	",    secondForm:"swept",      thirdForm:"swept"},
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
    "My","His","Her","Our","Hungry","Pregnant    Pretty","Crazy","Cute","Art","Study","Public","Relations",
    "Library","Write","Book","Non-fiction","Novel","Play","Role","Character","Director","Freelancer",
    "Student","Jewel","Order","Designer","Hi","Good afternoon","After","Before","Good evening","Dear",
    "Thanks","Welcome","Nice","Meet","Pardon","Forgive me","Excuse me","Factory","Call center",
    "Grocery store","Office","Hospital","School","This","A","An","Apologize","Regret","Late",
    "Goodbye","Bye","Take care","See you","Fare well","Waiter","Seller","Senior manager","Supervisor",
    "Teacher","Be","Of","But","That","Have","Not","With","As","Or","Will","All","About","Which","Make",
    "Like","Time","People","Some","Other","Than","Now","Look","Only","Also","Use","First","Even","New",
    "Want","Give","","Day","Thing","She","Good morning","Fiction","Live","Good night","Movie","Work",
    "Please","Script","Come","Sorry","Jewelry","Barf","Restaurant","Then","Give","Bank","Think","Speak",
    "The","Way","Her","One","Because","What","For","life","Why","So long","If","From","Worker","Can",
    "Okey","Nurse","Their","Independent","And","Fat","Your","For","History","Museum","By","Year",
    "Monday","Tuesday","Webnesday","Thursday","Friday","Saturday","Sunday","January","February",
    "March","April","May","June","July","August","September","October","November","December",
    "Maybe","Serious","Stand","Understand","Bad","Read","Black","Blue","One","Two","Three",
    "Four","Five","Six","Seven","Eight","Nine","Ten","Watermelon","Apple","Banana","Avocado",
    "Kiwi","Lime","Lemon","Melon","Apricot","Orange","Club","small","Happy","sad"];

//создание задания
function checkConstrustor() {
    let pronoun = pronouns[Math.floor(Math.random()*pronouns.length)];
    //берем глагол из обычных либо необычных на рандоме
    let verb = Math.random()>0.5 ? irRegularVerbs[Math.floor(Math.random()*irRegularVerbs.length)] : regularVerbs[Math.floor(Math.random()*regularVerbs.length)];
    let time = times[Math.floor(Math.random()*times.length)];
    let senType = senTypes[Math.floor(Math.random()*senTypes.length)];
    let senConstractedArr = [];

    senConstractedArr = {
        pronounRus:pronoun["russianSide"],
        verbRus:verb["russianSide"],
        timeRus:time["russianSide"],
        senTypeRus:senType["russianSide"],
        correctEngSen: this.sentenceCreator(pronoun, verb, time, senType),
        verbEng: verb["englishSide"]
    };
    return senConstractedArr;
};

//создание правильного ответа
function sentenceCreator(pronoun, verb, time, senType) {
    if ((verb.englishSide[verb.englishSide.length-1] == "e") || (verb.englishSide[verb.englishSide.length-2] == "ee")) {
    }
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
                    if((verb.stressedLastVowel == true) && (lastLetter != "x") && (lastLetter !="w")) {
                        //если конец одна согласная и перед ней ударная гласная - последняя буква дублируется и добавляется ed (кроме x и w)
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