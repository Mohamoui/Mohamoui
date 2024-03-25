function twoSum(nums, target) {
    // Create a hash table to store indices of elements
    const hash = {};
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement
        const complement = target - nums[i];
        
        // If complement exists in hash table, return the indices
        if (hash[complement] !== undefined) {
            return [hash[complement], i];
        }
        
        // Add current element's index to hash table
        hash[nums[i]] = i;
    }
    
    // If no solution found
    return [];
}
