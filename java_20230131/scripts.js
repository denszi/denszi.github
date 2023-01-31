let nevem="Denissza";
let azEnKorom = 22;
console.log("A javascript is betoltott");
console.log(azEnKorom);

if (azEnKorom>=21) {
    console.log("Már elég idős ahhoz, hogy igyon egy sört nem csak Európában, de Amerikában is")
} else if (azEnKorom>=18) {
    console.log("Ahhoz már elég idős, hogy igyon egy sört Europában")
} else {
    console.log("Még nem ihat, mert kiskorúnak számít")
}
console.log("Ez itt a vége")

//jquery használata
let szovegAzOldalon = $("h1").text()
console.log(szovegAzOldalon)
    //rövidebben, változó létrehozása nélkül:
console.log($("h1").text())
$("h1").text("Megváltoztattam JavaScript-ben")

if (azEnKorom>=21) {
    $("h1").text("Már elég idős ahhoz, hogy igyon egy sört nem csak Európában, de Amerikában is")
} else if (azEnKorom>=18) {
    $("h1").text("Ahhoz már elég idős, hogy igyon egy sört Europában")
} else {
    $("h1").text("Még nem ihat, mert kiskorúnak számít")
}

/*$("li").css("background","lime")
$(".firstloser").css("background","magenta")*/

$("p").html("az <i>ide szánt</i> szöveg már <b>nem érvényes</b>")

$("#append").click(function(adjHozzaUjabbHelyezest) {
    $("ul").append("<li>next place, what is totally forgotten</li>")
})

$("#remove").click(function(toroljEgyHelyezest) {
    $("li:last-of-type").remove()
})

$("li").toggleClass("firstloser")

for (let i=0; i<100; i+=1) {
    $("ul").append(`<li> ${i+1}. I must not tell lies</li>`)
}

let szinek=["orange","magenta","red","brown","green","blue","teal"]


function egySzindoboz (szin) {
    $(".container").append('<div class="box"></div>')
    $(".container div:last-of-type").css("background-color",szin)
}
egySzindoboz('lime')
egySzindoboz('pink')
egySzindoboz('olive')
egySzindoboz('lightgrey')

szinek.forEach(egySzindoboz)




console.log("Feladatok a parancssoron 1.")
    let age=2023-1997
    console.log("Én idén",age,"éves leszek.")

    let ww2=1945-1939
    console.log("A 2. vh",ww2,"évig tartott.")

    let tesla=76*172.14
    console.log("76 Tesla részvény 2023.01.31. napján",tesla,"dollárba kerülne.")

    let secondsOfDay=60*60*24
    console.log("Egy nap",secondsOfDay,"másodpercig tart.")

    let hungarians=(9.71/7888)*100
    console.log("A világ lakosságának",hungarians,"%-a magyar.")

    let bigger=9597000-78870
    console.log("Kína területe",bigger,"négyzetkilóméterrel nagyobb Csehországénál.")

    let participants=654%7
    console.log("A legkisebb csatornában",participants,"ember van.")

console.log("Feladatok a parancssoron 2.")
    let names=["Eszter","Mihály","Katalin","Csaba","Ákos"]
    if (names[2].length > 5) {
        console.log("A",names[2],"név 5-nél több karakterből áll.")
    }
    names.push("Miklós","András","Zoltán")
    console.log(names)
    
    names[0]="Denissza"
    console.log(names)

    if (names.length >4) {
        console.log("4-nél több név lett felsorolva")
    }

console.log("Feladatok a parancssoron 3.")
    let post={
        colors:["green","blue","yellow","red"],
        hasManyColors:[true, false]
    }
    if (post.colors.length>=3) {
        let hasManyColors=true;
        console.log("Tartalmaz legalább 3 színt.")
    } else {console.log("Nem tartalmaz 3 színt.")
        }


