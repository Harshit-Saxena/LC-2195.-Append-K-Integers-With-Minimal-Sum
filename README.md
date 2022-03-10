# LC-2195.-Append-K-Integers-With-Minimal-Sum

> You are given an integer array nums and an integer k. Append k unique positive integers that do not appear in nums to nums such that the resulting total sum is minimum.

> Return the sum of the k integers appended to nums.

For the test case [1000000000] 1000000000, the output should be 500000000500000001. But in JS, we can't have such a big number during general calculation.

I know we could use BigInt, and I did it also. But, no matter I return the final BigInt 500000000500000001n or I convert it into string 500000000500000001, the judge will always show my answer is 500000000500000000 and tell me it's wrong. Seems like the judge always try to convert the result into a general number in JS.

After several times, I finally have to implement this in another language... T_T

To fix this, the solution is easy, for this problem in JS judge, it could try to accept the BigInt result.

The core strategy is simple, but maybe next time judge could try to think about such big number testcase in JS more.
I guess the purpose for this problem is not to ask us to implement our own bigint calculation in JS, haha

UPDATE:

The test cases have been updated - added a limitation. So right now, we could use JS to make this problem AC.

The core strategy is:

    assume all the numbers from 1 to k is unused, so we could get the init sum
    count the numbers smaller than k in nums and minus them from sum
    add new numbers from k + 1 to meets the count k (take care of the new number is in nums)


Example 1:

Input: nums = [1,4,25,10,25], k = 2
Output: 5
Explanation: The two unique positive integers that do not appear in nums which we append are 2 and 3.
The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
The sum of the two integers appended is 2 + 3 = 5, so we return 5.

Example 2:

Input: nums = [5,6], k = 6
Output: 25
Explanation: The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum. 
The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 109
    1 <= k <= 108
