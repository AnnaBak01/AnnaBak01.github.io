function arkonsoft() {
    document.getElementById("arkonsoft").classList.add("active");
    document.getElementById("adastra").classList.remove("active");
    document.getElementById("netradus").classList.remove("active");
    document.getElementById("contingent").classList.remove("active");
    document.getElementById("competitions").classList.remove("active");
    document.getElementById("decription-work").innerHTML = "<b>•</b> Making personalised graphics<br><b>•</b> Studying basics of web designing<br>" +
        " <b>•</b> Learning the practices of the profession under the supervision - technologies they are using," +
        " programming libraries and graphics<br>"
    document.getElementById("position").innerHTML = "Intern";
    document.getElementById("year-company").innerHTML = "<b>2019:</b> Arkonsoft sp. z o.o.";
}

function netradus() {
    document.getElementById("netradus").classList.add("active");
    document.getElementById("arkonsoft").classList.remove("active");
    document.getElementById("adastra").classList.remove("active");
    document.getElementById("contingent").classList.remove("active");
    document.getElementById("competitions").classList.remove("active");
    document.getElementById("decription-work").innerHTML = " <b>•</b> Creating graphic designs for the website, advertisements, banners and offers<br>" +
        "<b>•</b> Editing Photos<br>" +
        "<b>•</b> Website administration <br>";
    document.getElementById("position").innerHTML = " ";
    document.getElementById("year-company").innerHTML = "<b>2018:</b> – now: Netradus Polska sp. z o.o.";

}

function adastra() {
    document.getElementById("adastra").classList.add("active");
    document.getElementById("arkonsoft").classList.remove("active");
    document.getElementById("netradus").classList.remove("active");
    document.getElementById("contingent").classList.remove("active");
    document.getElementById("competitions").classList.remove("active");
    document.getElementById("decription-work").innerHTML =
        " <b>•</b> Preparing personalized graphics<br>" +
        "<b>•</b> Posting, editing and creating content on a website<br>" +
        "<b>•</b> Website administration <br>";
    document.getElementById("position").innerHTML = " ";
    document.getElementById("year-company").innerHTML = "<b>2020:</b> – now: Ad Astra";
}

function contingent() {
    document.getElementById("contingent").classList.add("active");
    document.getElementById("arkonsoft").classList.remove("active");
    document.getElementById("netradus").classList.remove("active");
    document.getElementById("adastra").classList.remove("active");
    document.getElementById("competitions").classList.remove("active");
    document.getElementById("decription-work").innerHTML =
        "<b>•</b> Creating and designing a fashion catalog for BELLANA Vegan & Ethical<br>" +
        "<b>•</b> Creating personalized graphics for other companies<br>" +
        "<b>•</b> Making websites<br>" +
        "<b>•</b> Preparing photo for catalogues<br>" +
        "<b>•</b> Graphic design of advertisements, banners and offers<br>" +
        "<b>•</b> Posting, editing and creating content on a website<br>" +
        "<b>•</b> Website administration <br>";
}

function competitions() {
    document.getElementById("competitions").classList.add("active");
    document.getElementById("arkonsoft").classList.remove("active");
    document.getElementById("netradus").classList.remove("active");
    document.getElementById("contingent").classList.remove("active");
    document.getElementById("adastra").classList.remove("active");
    document.getElementById("decription-work").innerHTML =
        "<div><b class='h4'>• 2020:</b> <div class='h4'> Motorola Science Cup </div><p class='text-muted h6'>2nd place</p><div>" +
        "<div class='mt-4'><b class='h4'>• 2022:</b> <div class='h4'> Goldman Sachs Hackathon </div> <p class='text-muted h6'>4th place</p><div>"
    document.getElementById("position").innerHTML = " ";
    document.getElementById("year-company").innerHTML = "";
}

var shape1 = document.getElementById("shape1");
var shape2 = document.getElementById("shape2");
var shape3 = document.getElementById("shape3");
var shape4 = document.getElementById("shape4");

function move() {
    var IE = document.all;
    var tempX = 0;
    var tempY = 0;
    document.onmousemove = function getMouseXY(abc) {
        if (IE) {
            tempX = event.clientX;
            tempY = event.clientY;
        } else {
            tempX = abc.pageX;
            tempY = abc.pageY;
        }

        shape1.style.marginLeft = tempX / 70 + "px";
        shape1.style.marginTop = tempY / 70 + "px";

        shape2.style.marginRight = tempX / 90 + "px";
        shape2.style.marginBottom = tempY / 90 + "px";

        shape3.style.marginLeft = tempX / 70 + "px";
        shape3.style.marginTop = tempY / 70 + "px";

        shape4.style.marginRight = tempX / 70 + "px";
        shape4.style.marginTop = tempY / 70 + "px";

        setInterval(function () {
            if (window.scrollY > 400) {
                shape1.style.opacity = 0.4;
                shape2.style.opacity = 0.4;
                shape3.style.opacity = 0.4;
            } else {
                shape1.style.opacity = 1 - window.scrollY / 700;
                shape2.style.opacity = 1 - window.scrollY / 700;
                shape3.style.opacity = 1 - window.scrollY / 700;
            }
        }, 1000);
    }
}

function photoChange(link) {
    link.src = link.src.replace(".jpg", "-mouse.jpg");
}

function photoBack(link) {
    link.src = link.src.replace("-mouse.jpg", ".jpg");
}
