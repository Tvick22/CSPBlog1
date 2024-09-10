---
layout: post
title: Hacks Tools and Equipment for Sprint 1
description: For Sprint 1
type: issues
comments: True
---

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

> The mean of the test scores is: 90.975
> The meann of the bad data is: Bad Data
