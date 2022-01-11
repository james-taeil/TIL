## Transaction Isolation Level
Concurrency control에서는 상황3을 다뤘다.
> 상황3 은 T1, T2가 모두 쓰기를 할 때

하지만 Transaction Isolation Level에서는 상황2를 다룬다.
> T1 읽기, T2 쓰기

상황2 에서 `Lock`을 사용하여 해결하는 것도 가능하나, 두 트랜잭션의 동시 진행 정도를 과도하게 막기 때문에 Performance issue가 발생한다.
이를 완하하기 위해 다른 방법을 찾을 필요가 있어 Isolation level이 있다.

## Read Error
- 트랜잭션1이 읽기, 트랜잭션2가 쓰기인 시나리오에서 트랜잭션1의 읽기 도중 문제가 발생한다.

**아래 모든 시나리오는 T1-read T2-write로 생각한다.**

### Dirty read
T1, T2가 동시에 실행한다. T1은 T2가 변경한 데이터를 읽어와야 하는데, T2가 작업 중 철회를 하게 되었다.

### 문제 발생
T2가 변경한 데이터를 T1이 읽은 후 어떤 이슈로 인해 T2가 스스로 철회를 하였다. 철회를 하면 T2가 한 작업은 rollback이 된다. T1은 T2가 정상적으로 종료하지 않은 상태에서 변경한 데이터를 보고 작업하게 된 것이다.

| T1 | T2 | 
| --- | --- | 
| 읽기 | 쓰기 |
| START TRANSACTION ISOLATION LEVEL READ <BR>UNCOMMITTED; <BR> USE DB_NAME <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1;  | - | 
| - | START TRANSACTION ISOLATION LEVEL READ <BR>COMMITTED;<BR> START TRANSACTION;  <BR> USE DB_NAME <BR><BR> UPDATE Book <BR> SET price = price + 100 <BR> WHERE bookid = 1; <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1; <BR><BR> COMMIT; |
| SELECT * <BR> FROM Book <BR> WHERE bookid = 1; | - |
| - | ROLLBACK; |
| SELECT * <BR> FROM Book <BR> WHERE bookid = 1; <BR><BR> COMMIT; | - |

### Non-Repeatable read
T1이 읽고, T2가 Update를 하고, T1이 다시 한 번 데이터를 읽을 때 생기는 문제이다. 즉, T1이 읽기 작업을 다시 한번 반복할 경우 이전의 결과가 반복되지 않는 현상을 Non-Repeatable read라고 한다.

### 문제 발생
T1이 데이터를 읽고 작업하던 중 T2가 데이터를 변경하였다. T1은 변경한 데이터를 보고 다시 한 번 작업을 하였다. Dirty read와 다르게 T2가 정상 종료하고 commit을 하였기 때문에 틀린 데이터는 아니다. 하지만 T1입장에서 같은 SQL문이 다른 결과를 도출한다.


| T1 | T2 | 
| --- | --- | 
| 읽기 | 쓰기 |
| START TRANSACTION ISOLATION LEVEL READ <BR>UNCOMMITTED; <BR> USE DB_NAME <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1; | - | 
| - | START TRANSACTION ISOLATION LEVEL READ <BR>COMMITTED;<BR> START TRANSACTION;  <BR> USE DB_NAME <BR><BR> UPDATE Book <BR> SET price = price + 100 <BR> WHERE bookid = 1; <BR><BR> COMMIT; <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1; |
| SELECT * <BR> FROM Book <BR> WHERE bookid = 1; <BR><BR> COMMIT; | - |

### Phantom read
T1이 데이터를 읽고, T2가 Update를 하고, T1이 다시 한번 데이터를 읽을 때 생기는 문제이다. T1이 읽기 작업을 다시 반복 했을 경우 이전에 없던 데이터가 나타나는 현상이다.

### 문제 발생
T1이 T2가 새로운 데이터를 삽입한 사실을 모르고 작업한다고 가정하자. T2가 commit을 하였기 때문에 틀린 데이터는 아니다. 그러나 T1입장에서 새로운 데이터가 반영되어 Non-Repeatable read와 비슷하지만 없던 데이터가 삽입되기 때문에 다르게 구분한다.

| T1 | T2 | 
| --- | --- | 
| 읽기 | 쓰기 |
| START TRANSACTION ISOLATION LEVEL READ <BR>UNCOMMITTED; <BR> USE DB_NAME <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1; | - | 
| - | START TRANSACTION ISOLATION LEVEL READ <BR>COMMITTED;<BR> START TRANSACTION;  <BR> USE DB_NAME <BR><BR> UPDATE Book <BR> SET price = price + 100 <BR> INSERT INTO Book VALUES (3, 'NAME', 'CORE JAVASCRIPT') <BR> WHERE bookid = 1; <BR><BR> COMMIT; <BR><BR> SELECT * <BR> FROM Book <BR> WHERE bookid = 1; |
| SELECT * <BR> FROM Book <BR> WHERE bookid = 1; <BR><BR> COMMIT; | - |

## Isolation Level Command
앞 3가지 문제를 해결하려면 당연히 `Lock`을 사용해야 한다. 
DBMS는 LOCK보다 완화된 방법으로 문제 해결를 위한 명령어를 제공한다.

| Isolation Level | - | Dirty read | Non-Repeatable read | Phantom read | 
| --- | --- | --- | --- | --- |
| READ UNCOMMITTED | - | 가능 | 가능 | 가능 |
| READ COMMITTED | - | 불가능 | 가능 | 가능 |
| REPEATABLE READ | - | 불가능 | 불가능 | 가능 |
| SERIALIZABLE | - | 불가능 | 불가능 | 불가능 |

### READ UNCOMMITTED (LEVEL = 0)
고립수준이 가장 낮은 명령어로, 자신의 데이터에 아무런 공유락을 걸지 않는다. 또한 다른 트랜잭션에 공유락과 배타락이 걸린 데이터를 대기하지 않고 읽는다. 심지어 commit하지 않은 데이터도 읽을 수 있다. 
특징으로 SELECT Query에 되는 테이블에 대해 락을 설정하지 않은 것과 같다.

| 모드 | READ UNCOMMITTED |
| --- | --- |
| LOCK | SELECT 문 - 공유락 걸지 않음 <BR> UPDATE 문 - 배타락 설정 <BR> 다른 트랜잭션의 공유락과 배타락이 걸린 데이터를 읽음 |
| SQL문 | SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED |
| 문제점 | Dirty read, Non-Repeatable read, Phantom read  |


### READ COMMITTED (LEVEL = 1)
dirty read를 피하기 위해 자신의 데이터를 읽는 동안 공유락을 걸지만 트랜잭션이 끝나기 전에 해지가능하다. 다른 트랜잭션 데이터는 락 호환성 규칙에 따라야 한다.

| 모드 | READ COMMITTED |
| --- | --- |
| LOCK | SELECT 문 - 공유락을 걸고 끝나면 바로 해지 <BR> UPDATE 문 - 배타락 설정 <BR> 다른 트랜잭션이 설정한 공유락은 읽지만 배타락은 읽지 못함 |
| SQL문 | SET TRANSACTION ISOLATION LEVEL READ COMMITTED |
| 문제점 | Non-Repeatable read, Phantom read  |


### REPEATABLE READ (LEVEL = 2)
자신의 데이터에 설정된 공유락과 배타락을 트랜잭션이 종료할 때까지 유지하여 다른 트랜잭션이 자신의 데이터를 갱신 할 수 없도록 한다. 다른 데이터는 락 호환성 규칙에 따라야 한다.
다른 Isolation level에 비해 데이터의 concurrency(동시성)이 낮아 특별한 상황이 아니라면 사용하지 않는 것이 좋다.

| 모드 | REPEATABLE READ |
| --- | --- |
| LOCK | SELECT 문 - 공유락을 걸고 트랜잭션 끝까지 유지 <BR> UPDATE 문 - 배타락 설정 <BR> 다른 트랜잭션이 설정한 공유락은 읽지만 배타락은 읽지 못함 |
| SQL문 | SET TRANSACTION ISOLATION LEVEL REPEATABLE READ |
| 문제점 | Phantom read  |

### SERIALIZABLE (LEVEL = 3)
고립 수준이 가장 높은 명령어로, 실행 중인 트랜잭션은 다른 트랜잭션으로부터 완벽하게 분리된다.
데이터 집합에 범위를 지어 잠금을 설정할 수 있기 때문에 다른 사용자가 데이터를 변경하려고 할 때 트랜잭션을 완벽하게 분리 할 수 있다. 
Isolation level 중 제한이 가장 심하고, 데이터의 동시성도 낮다. 
특징으로 SELECT Query에 대상이 되는 테이블에 미리 배타락을 설정한 것과 같은 효과를 낸다.

| 모드 | SERIALIZABLE |
| --- | --- |
| LOCK | SELECT 문 - 공유락을 걸고 트랜잭션 끝까지 유지 <BR> UPDATE 문 - 배타락 설정 <BR> 다른 트랜잭션이 설정한 공유락은 읽지만 배타락은 읽지 못함 <BR> 인덱스에 공유락을 설정하여 다른 트랜잭션의 INSERT문이 금지됨 |
| SQL문 | SET TRANSACTION ISOLATION LEVEL SERIALIZABLE |
| 문제점 | -  |