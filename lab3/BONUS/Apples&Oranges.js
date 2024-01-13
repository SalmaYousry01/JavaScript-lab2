function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var countApples = 0;
    for (var i = 0; i < apples.length; i++) {
        apples[i] += a;
        if (s <= apples[i] && apples[i] <= t) {
            countApples++;
        }
    }
    console.log(countApples);
    var countOranges = 0;
    for (var i = 0; i < oranges.length; i++) {
        oranges[i] += b;
        if (s <= oranges[i] && oranges[i] <= t) {
            countOranges++;
        }
    }
    console.log(countOranges);
}
