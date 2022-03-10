
  /* @param {number[]} nums
  @param {number} k
  @return { number } */

const minimalKSum = (nums, k) => {
    const set = new Set();
        let sum = BigInt((1 + k) * k / 2);
        let more = 0;
        nums = Array.from(new Set(nums))
        for (const n of nums) {
        if (n > k) { set.add(n); continue; }
            ++more;
            sum -= BigInt(n);
        }
        while (more > 0) {
            ++k;
            if (set.has(k)) continue;
                sum += BigInt(k);
                --more;
        }
    console.log(sum, sum.toString());
    return sum;
};