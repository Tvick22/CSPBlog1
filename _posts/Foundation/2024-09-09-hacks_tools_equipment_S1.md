---
layout: post
title: Hacks Tools and Equipment for Sprint 1
description: For Sprint 1
type: issues
comments: True
---

## Finding the mean in Python!

```python
import sys
import statistics
from typing import Union

Number = Union[int, float]  # Number can be either int or float type
Numbers = list[Number] # Numbers is a list of Number types
Scores = Union[Number, Numbers] # Scores can be single or multiple

def mean(scores: Scores, method: int = 1) -> float:
    for score in scores:
        if type(score) == int:
            continue
        elif type(score) == float:
            continue
        else:
            print(score)
            return "Bad Data"

    return statistics.mean(scores)


testScores = [90.5, 100, 85.4, 88]
print("The mean of the test scores is: " + str(mean(testScores)))

badData = [100, "NaN", 90]
print("The mean of the bad data is: " + str(mean(badData)))
```

Output:

The mean of the test scores is: 90.975

The mean of the bad data is: Bad Data

> This function finds the mean by importing statistics and using the statistics.mean() method.

> Before doing this though, I will iterate through the table and make sure all values are either integers or floating point numbers.
