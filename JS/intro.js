let header = document.getElementById('fadein');
let anim = [
  { t: "-------------", ms: 100 },
    { t: "l------------", ms: 100 },
    { t: "l-c----------", ms: 100 },
    { t: "l-c----------", ms: 100 },
    { t: "l-c---i------", ms: 100 },
    { t: "l-c-s--------", ms: 100 },
    { t: "l-c----------", ms: 50 },
    { t: "l-c----------", ms: 50 },
    { t: "l-ca--i-h-er", ms: 100 },
    { t: "l-ca--i---er", ms: 100 },
    { t: "l-cas-i---er", ms: 50 },
    { t: "l-c-s-i-h-er", ms: 100 },
    { t: "l-cas-i-h-er", ms: 50 },
    { t: "l-casli-h-er", ms: 100 },
    { t: "l-casli-hner", ms: 100 },
    { t: "lucasli-hner", ms: 100 },
    { t: "lucaslichner", ms: 200 },
    { t: "lucaslichner.", ms: 100 },
    { t: "lucaslichner", ms: 200 },
    { t: "lucaslichner.", ms: 500 }
/*

    { t: "Lucaslichner", ms: 50 },
    { t: "lUcaslichner", ms: 50 },
    { t: "luCaslichner", ms: 50 },
    { t: "lucAslichner", ms: 50 },
    { t: "lucaSlichner", ms: 50 },
    { t: "lucasLichner", ms: 50 },
    { t: "lucaslIchner", ms: 50 },
    { t: "lucasliChner", ms: 100 },
    { t: "lucaslicHner", ms: 100 },
    { t: "lucaslichNer", ms: 200 },
    { t: "lucaslichnEr", ms: 200 },
    { t: "lucaslichneR", ms: 200 },
    { t: "lucaslichner,", ms: 100 },
    { t: "lucaslichner.,", ms: 100 },
    { t: "lucaslichner..,", ms: 200 },
    { t: "lucaslichner.,", ms: 100 },
    { t: "lucaslichner.", ms: 100 },
    { t: "lucaslichner", ms: 200 },
    { t: "lucaslichner.", ms: 200 }
*/
];
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerHTML = step.t;
    setTimeout(update, step.ms);
    i++;
}
update();