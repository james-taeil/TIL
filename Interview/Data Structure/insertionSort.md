삽입정렬은 앞의 있는 원소들이 이미 정렬되어있다고 가정을 한다 라는 특성이 있다.

```py
def insetion_sort(arr):
    for i in range(len(arr) - 1):
        j = i
        while arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            j -= 1
    return print(arr)
```
하나의 원소를 선택하면 앞에 원소랑 비교를 하여 앞 원소가 선택한 원소보다 크다면 뒤로 이동
그렇지 않다면 해당 자리에 넣는다.