# Article 3 - Some of My Codes for Testing

*27 December, 2025*

Below are my codes.

```python
def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
