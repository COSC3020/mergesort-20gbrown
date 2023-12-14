[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12338947&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

# Answer
The function starts with base cases which are constant time, $O(1)$. After the base cases the function calculates the length of the input array which is $O(n)$, where $n$ is the length of the array. After the base cases and length calculation the function goes into a series of nested loops. The outer loop iterates through size, doubling the value each iteration until size equals the length of the array. The outer loop has $log(n)$ iterations. The inner loop directly inside the outer loop iterates through the elemens in the input array in chunks of size, 2 * size, so the number of iterations is roughly n/size. Within the inner loop elements from the original array are copied to the aux array with a time complexity of $O(size)$. Also in the inner loop, the two subarrays are merged which is, $O(size)$. Taking the inner loop and outer loop we get a time complexity of $O(n * log(n))$. So the worst case $\Theta$ bound is $\Theta(n * log(n))$. 
