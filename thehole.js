var kitab = document.getElementById("d");

var A = 1, B = 1;

//Fungsi untuk menjalankan program.
var theHole = () => {
    var dimensiPublic = [];
    var dimensiPrivate = [];
    A += 0.07;
    B += 0.03;
    var cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B);

    for (var iterasiKegelapan = 0; iterasiKegelapan < 1760; iterasiKegelapan++) {
        dimensiPublic[iterasiKegelapan] = iterasiKegelapan % 80 == 79 ? "\n" : " ";
        dimensiPrivate[iterasiKegelapan] = 0;
    }

    for(var iterasiPortal = 0; iterasiPortal <6.28; iterasiPortal++) {
        var ct = Math.cos(iterasiPortal);
        var st = Math.sin(iterasiPortal);
        for ( i = 0; i < 6.28; i+= 0.02) {
            var sp = Math.sin(i);
                cp = Math.cos(i);
                h = ct + 2;
                D = 1 / (sp *h * sA + st * cA + 5),
                t = sp * h * cA - st * sA;
            var x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
                y = 0 | (12 + 15 * D * (cp * h * cB - t * cB)),
            //y = 0 | (12 + 15 * D * (cp * h * cB - t * cB)),
                o = x + 80 * y,
                N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

            if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > dimensiPrivate[o]) {
                dimensiPrivate[o] = D;
                dimensiPublic[o] = ".B.L,A,C~K~H:O;L=E!*#$@"[N > 0 ? N : 0];
            }
        }
    }
    //Keterkaitan antara fungsi doc.getElementById("id") dengan inner.html
    kitab.innerHTML = dimensiPublic.join("");
};

// Untuk memanggil suatu fungsi didalam hitungan waktu.
setInterval(theHole, 50);