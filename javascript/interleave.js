var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;
    let grid = new Array(s2.length + 1);
    for (let i = 0; i < s1.length + 1; i++){
        grid[i] = new Array(s1.length + 1).fill(false);
    }
    grid[s1.length][s2.length] = true;
    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] == s3[i + j] && grid[i + 1][j] == true) {
                grid[i][j] = true
            }
            if (j < s2.length && s2[j] == s3[i + j] && grid[i][j + 1] == true) {
                grid[i][j] = true
            }
        }
    }
    return grid[0][0];
};

let s1 = "ababab";
let s2 = "cdcdcd";
let s3 = "abcdababcdcd";

let isInterleaved = isInterleave(s1, s2, s3);
console.log(isInterleaved);