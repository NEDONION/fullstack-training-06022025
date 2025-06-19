// Algorithms

// 1. 返回列表中的最大元素（手动实现）
function largestElement(list) {
    // 假设第一个元素是最大值
    let max = list[0];
    // 遍历列表，更新最大值
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

// 2. 原地反转列表（不创建新数组）
function reverseList(list) {
    let left = 0;
    let right = list.length - 1;
    // 使用双指针交换两端的元素
    while (left < right) {
        let temp = list[left];
        list[left] = list[right];
        list[right] = temp;
        left++;
        right--;
    }
    return list;
}

// 3. 检查元素是否至少出现两次
function checkTwice(list, element) {
    let count = 0;
    // 遍历列表，统计 element 出现次数
    for (let i = 0; i < list.length; i++) {
        if (list[i] === element) {
            count++;
            if (count >= 2) {
                return true;
            }
        }
    }
    return false;
}


console.log(largestElement([3, 1, 9, 2]));         // 输出：9
console.log(reverseList([1, 2, 3, 4]));            // 输出：[4, 3, 2, 1]
console.log(checkTwice([1, 2, 3, 2, 4], 2));       // 输出：true
console.log(checkTwice([1, 2, 3, 4], 5));          // 输出：false
