// https://leetcode.com/problems/3sum/

// BB's solution

var threeSum = function(nums) {
    let answer = [];
    const sorted = nums.sort((a, b) => {
        return a - b;
    })
    for ( let i = 0; i < nums.length - 2; i++ ) {
        console.log(i);
        if ( nums[i] != nums[i - 1] ) {
            let beg = i + 1;
            let end = nums.length -1;
            if (sorted[i] == sorted[i -1]) {
                continue;
            }
            while (beg < end) {
                if (sorted[i] + sorted[beg] + sorted[end] == 0 && sorted[beg] != sorted[beg - 1] && sorted[end] != sorted[end + 1]) {
                    answer.push([sorted[i], sorted[beg], sorted[end]]);
                    while ( sorted[beg] == sorted[beg + 1] ) beg++;
                    while ( sorted[end] == sorted[end - 1] ) end--;
                    beg++;
                    end--;
                }
                if (sorted[i] + sorted[beg] + sorted[end] < 0) beg++;
                if (sorted[i] + sorted[beg] + sorted[end] > 0) end--;
            }
        }
    }
    return answer
};

var nums = function(count) {
    let nums = [];
    for ( let i = -count / 2; i <= count / 2; i++ ) {
        nums.push(i);
    }
    return nums
}

//let numsToSum = nums(15000)
numsToSum = [-1,0,1,2,-1,-4]
let sums = threeSum(numsToSum)
console.log(numsToSum)
console.log(sums)

/*
Run times
1000 - 0.07
5000 - 0.24
10000 - 0.98
15000 - 1.66
*/
