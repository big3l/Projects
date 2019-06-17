// print numbers between 1 and 100 + 9

for (let i = 1; i <= 100; i++) {

    console.log(i + " + 9 = " + i * 9);
}

// the Grade Assigner
// if the result > 89 then you get A
// if the result > 80 then you get B
// if the result > 70 then you get C
// if the result > 65 then you get D
// if the result < 65 then you get F

for (let i = 100; i >= 1; i--) {

    if (i > 89) {
        console.log(i + " you get A");
    }
    else if (i > 80) {
        console.log(i + " you get B");
    }
    else if (i > 70) {
        console.log(i + " you get C");
    }
    else if (i > 65) {
        console.log(i + " you get D");
    }
    else {
        console.log(i + " you get F")
    }
}

///////////////////////////////////////////////
// print 100 stars, 10 stars in each row

for (let i = 1; i <= 100; i++) {
    document.write(' * ');
    if (i % 10 == 0) {
        document.write('<br>');
    }
}

/////////////////////////////////////////////////
document.write('<br>');

for (i = 0; i < 10; i++) {

    for (let c = 0; c < 10; c++) {
        document.write(' + ');
    }
    document.write('<br>');
}

/////////////////////////////////////////////////
//Print triangle of start from 4 lines and 4 columns
document.write('<br>');

for (let i = 0; i < 10; i++) {

    for (let j = 0; j <= i; j++) {
        document.write(' § ');
    }
    document.write('<br>');
}

/////////////////////////////////////////////////
document.write('<br>');

for (j = 0; j < 10; j++) {

    for (let k = j; k < 10; k++) {
        document.write(' § ');
    }
    document.write('<br>');
}

/////////////////////////////////////////////////
document.write('<br>');

for (j = 0; j < 10; j++) {

    for (let k = 0; k <= j; k++) {
        document.write(' § ');
    }
    document.write('<br>');
}
////////////////////////////////////////////////
document.write('<br>');

for (let i = 1; i <= 8; i++) {

    for (k = 1; k <= (8 - i); k++) {
        document.write('&nbsp');
    }
    for (let j = 1; j < i; j++) {
        document.write('@ ');
    }
    document.write('<br>');
}

////////////////////////////////////////////////////////
for (let i = 0; i <= 10; i++) {

    for (let j = 0; j < 10 - i; j++) {
        alert('j=' + j)
        document.write('&nbsp;');
    }
    for (let c = 0; c < i; c++) {
        document.write('? ');
        alert('c=' + c)
    }
    alert('i=' + i)
    document.write('<br>');
}