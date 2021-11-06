## SQL
관계형 데이터베이스로 ROW COL이 존재하는 특징을 가진다.
기본적으로 CRUD 가능하다.
가장 큰 특징으로 데이터는 스키마에 따라 테이블에 저장된다. 또한 테이터는 관계를 통해 여러 테이블에 분산된다.
따라서 스키마를 준수해야하며, 스키마를 수정하지 않는 한 조건에만 맞는 레코드만 추가가 가능하다. 또한 데이터의 중복을 피하기 위해 관계를 사용한다.

## NoSQL
말 그대로 RDBMS의 반대다.
스키마도 없고, 관계도 없다
NoSQL은 스키마를 따르지 않아도 데이터 추가가 가능하다.
문서는 json과 비슷한 형태로 가지고 있다. 
테이블에 조인할 필요없이 필요한 것을 갖춘 문서를 작성하는게 NoSQL이다
조인이라는 개념이 존재하지 않는다.

그래도 조인을 하고 싶다면?
> 컬렉션을 통해 데이터를 복제하여 각 컬렉션 일부분에 속하는 데이터를 정확하게 산출하도록 한다.

## 확장
SQL은 일반적으로 수직적 확장만 지원한다. 반대로 NoSQL은 수평적 확장만 가능하다.

## 어떤걸 사용할 것이냐?
SQL
관계를 맺고 있는 데이터가 자주 변경되는 애플리케이션의 경우
변경될 여지가 없고, 명확한 스키마가 사용자와 데이터에게 중요한 경우

NoSQL
NoSQL에서는 여러 컬렉션을 모두 수정해야 하기 때문에 비효율적
정확한 데이터 구조를 알 수 없거나 변경/확장 될 수 있는 경우
읽기를 자주 하지만, 데이터 변경은 자주 없는 경우