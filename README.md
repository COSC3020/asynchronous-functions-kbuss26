[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

### Response

The worst-case scenario is beyond the base case: n > 0. In this case, we
are splitting each count into a different process with an array of size $n$ .
I'm going to assume that the parallel "async" library implements parallel functionality
such that it guarantees a $\Theta(T_1(n)/P + T_\inf(n))$ runtime. This is derived
from the fact that we need to do at least $T(n)/P$ work for P processors and also
from the fact that we do not have an infinite amount of processors. Given that the array
size is $n$, we can say that the runtime is $\Theta(n/P + \log{n})$ alongside other
constant factors, given the span is $T{_\inf}(n) \in \Theta(\log{n})$ . This overall
causes the runtime complexity to exist as $T(n) \in \Theta(n/P + \log{n})$ .

### Sources
- https://uwyo.instructure.com/courses/583691/files/folder/slides?preview=79755874
- https://caolan.github.io/async/v3/docs.html
