//местоимения
let pronouns = [
    {id:1, russianSide: "Я",   englishSide:"I"},
    {id:2, russianSide: "Ты",  englishSide:"you"},
    {id:3, russianSide: "Вы",  englishSide:"you"},
    {id:4, russianSide: "Мы",  englishSide:"we"},
    {id:5, russianSide: "Они", englishSide:"they"},
    {id:6, russianSide: "Она", englishSide:"she"},
    {id:7, russianSide: "Он",  englishSide:"he"},
    {id:8, russianSide: "Это", englishSide:"it"},
];

//обычные глаголы
let regularVerbs = [
    {id:1, russianSide:"начинать",       englishSide:"start",  stressedLastVowel: true},
    {id:2, russianSide:"любить",         englishSide:"love",   stressedLastVowel: false},
    {id:3, russianSide:"прыгать",        englishSide:"jump",   stressedLastVowel: true},
    {id:4, russianSide:"летать",         englishSide:"fly",    stressedLastVowel: true},
    {id:5, russianSide:"звонить(звать)", englishSide:"call",   stressedLastVowel: true},
    {id:6, russianSide:"помогать",       englishSide:"help",   stressedLastVowel: true},
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

//создание задания
function checkConstrustor() {
    let pronoun = pronouns[Math.floor(Math.random()*pronouns.length)];
    let verb = regularVerbs[Math.floor(Math.random()*regularVerbs.length)];
    let time = times[Math.floor(Math.random()*times.length)];
    let senType = senTypes[Math.floor(Math.random()*senTypes.length)];

    console.log( 
        pronoun["russianSide"] + " " +
        verb["russianSide"] + " " +
        time["russianSide"] + " " +
        senType["russianSide"]
    );

    this.sentenceCreator(pronoun, verb, time, senType);
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
            console.log(pronoun.englishSide + " did not " + verb.englishSide)
        } else if (senType["englishSide"] == "affirmative") {
            //pronoun
            console.log(pronoun.englishSide + " " + returnE(verb))
        } else {
            //pronoun
            console.log("did " + pronoun.englishSide + " " + verb.englishSide)
        }
    } 
    //time present
    else if (time["englishSide"] == "present") {
        //type
        if(senType["englishSide"] == "negative") {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                console.log(pronoun.englishSide + " doesn't (does not) " + verb.englishSide);
            } else {
                console.log(pronoun.englishSide + " don't (do not) " + verb.englishSide)
            }
        } else if (senType["englishSide"] == "affirmative") {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                console.log(pronoun.englishSide + " " + verb.englishSide + "'s");
            } else {
                console.log(pronoun.englishSide + " " + verb.englishSide)
            }
        } else {
            //pronoun
            if((pronoun["englishSide"] == "he") || (pronoun["englishSide"] == "she") || (pronoun["englishSide"] == "it")) {
                console.log("does " + pronoun.englishSide + " " + verb.englishSide);
            } else {
                console.log("do " + pronoun.englishSide + " " + verb.englishSide)
            }
        }
    } 
    //time future
    else {
           //type
           if(senType["englishSide"] == "negative") {
               //pronoun
               console.log(pronoun.englishSide + " will not " + verb.englishSide)
           } else if (senType["englishSide"] == "affirmative") {
               //pronoun
               console.log(pronoun.englishSide + " will " + verb.englishSide)
           } else {
               //pronoun
               console.log("will " + pronoun.englishSide + " " + verb.englishSide)
           }
    }
}

//на конце в прошедшем времени окончание в прошедшем времени d или ed
function returnE(verb) {
    let lastLetter = verb.englishSide[verb.englishSide.length-1];
    let preLastLetter = verb.englishSide[verb.englishSide.length-2];
    let glas = ["a", "e", "i", "u", "o"];
    let soglas = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let correctVerb = "";
    //если кончается на e или ee - просто добавляется d
    if ((verb.englishSide[verb.englishSide.length-1] == "e") || (verb.englishSide.substring(verb.englishSide.length-2, verb.englishSide.length) == "ee")) {
        this.correctVerb = verb.englishSide + "d";
        //если последняя y - меняется на ied
    } else if (lastLetter == "y") {
        for (let i = 0; i < glas.length; i++) {
            //если на конце y и перед ней гласная - добавляется ed
            if(preLastLetter == glas[i]) {
                this.correctVerb = verb.englishSide + "ed";
            }
        }
        this.correctVerb = verb.englishSide.substring(0, verb.englishSide.length-1) + "ied";
    } else if (preLastLetter+lastLetter == "ic") {
        //если оканчивается на ic - меняется на ick и добавляется ed
        this.correctVerb = verb.englishSide.substring(0, verb.englishSide.length-2) + "ick" + "ed";
    } else {
        for (let i = 0; i < soglas.length-1; i++) {
            if (lastLetter == soglas[i]) {
                if((verb.stressedLastVowel == true) && (lastLetter != "x") && (lastLetter !="w")) {
                    //если конец одна согласная и перед ней ударная гласная - последняя буква дублируется и добавляется ed (кроме x и w)
                    this.correctVerb = verb.englishSide + verb.englishSide[verb.englishSide.length-1] + "ed";
                } else {
                    //если просто кончается на согласную - добавляется ed
                    this.correctVerb = verb.englishSide + "ed";
                }
            }
        }
    }
    return this.correctVerb;
}