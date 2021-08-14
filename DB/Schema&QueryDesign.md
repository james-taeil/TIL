# Schema & Query Design
- 데이터 간의 관계
- 데이터 간 관계를 기술하는 SQL
- 효율적인 방법으로 DB 구성 방법이해
- DB에서 관련 찾기 위한 SQL 작성 방법


# Schema
## Schema란?
스키마(Schema) DB에서 데이터가 구성되는 방식과 **서로 다른 Entity 간의 관계에 대한 설명**이다.

`Entity` : 하나의 정보의 단위(굳이 비유하자면 JS에서 객체 하나 같은 것)
`Field` : 하나의 정보에서 속성들의 집합
`Record` : 하나의 정보의 행 (수강원 테이블 Entity에서 -> name : kimcoding, age : 19) 단위


## Entity 간의 관계
Teacher 과 Student가 있다면, 한명의 Teacher은 여러명의 Student를 가지므로 1:N(일대다) 관계에 있다고 말한다. 반대로 Class와 수강원이 있다면, Class안에 많은 학생이 들어가므로 N:N(다대다) 관계에 있다고 말한다.

- `Primary Key`(기본키) : **행을 고유하게 구분해주는 최소의 정보** 
    - 컬럼 혹은 컬럼들을 그룹화하여 primary key로 만들 수 있다.
    - 암묵적으로 하나의 테이블에는 반드시 primary key를 가지는 걸 권장한다.
- `Foreign Key`(외래키) : **다른 테이블과 연관이 되는 정보**
    - `REFERENCES`키워드 사용해야 한다.
    - 다중 컬럼을 외래키로 가져도 된다.

 instargram database sql
 instargram database nodql

### 1:1 관계
하나의 레코드가 다른 테이블의 레코드 한개와 연결 된 경우
> 사용자 ----- 핸드폰 번호

### 1:N 관계
하나의 레코드가 다른 테이블의 서로 다른 한 개이상의 테이블의 레코드와 연결 된 경우
> 선생님 ----- 학생

### N:N 관계
여러개의 레코드가 다른 테이블의 서로 다른 한 개이상의 테이블의 레코드와 연결 된 경우
> 수강과목 ---- 학생

