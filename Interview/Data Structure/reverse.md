## Q. 54321 배열을 12345 배열로 바꿀 때, 어떤 sort를 사용하겠는가?
기본적으로 내장되어 있는 tim sort 함수가 가장 적절하다고 생각한다. 하지만 예시처럼 모든 수가 역배열인 상황에서 정배열로 바꾼다면, heap sort을 사용 할 것 같다.
heap sort은 기본적으로 O(nlogn)의 시간복잡도를 가지고 있고, merge sort와 평균적으로 시간은 비슷하지만, reversed 상황에서라면 merge sort보다 heap sort가 속도면에서 빠르기 때문이다.

[정렬 별 속도 비교 참고자료](https://coding-factory.tistory.com/615)