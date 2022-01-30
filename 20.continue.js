// it will skip number 7 and 9 from the loop
for (var i = 1; i <= 10; i++) {
    if (i == 7 || i == 9) {
        continue
    } else {
        console.log(i)
    }
}