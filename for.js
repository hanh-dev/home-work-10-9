let count = 1;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
        document.write("<div id='box' onclick='alert(\"Bạn đang click vào số: " + count + "\")'>" + count + "</div>");
        count++;
    }
    document.write('<br>');
}
