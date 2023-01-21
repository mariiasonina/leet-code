var removeDuplicates = function(nums) {
    let index = 1;
    let length = nums.length;
    
    for (let i = 0; i < length - 1; i++) {
        if (nums[index - 1] === nums[index]) {
            nums.splice(index, 1);
        } else {
            index++;
        }
    }

    return nums.length;
};
