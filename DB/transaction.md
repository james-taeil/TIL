# 트랜잭션
DBMS가 데이터 베이스를 다룰 때 사용하는 작업 단위

- ACID 성질
- 원자성(Atomicity) : 트랜잭션에 포함된 작업은 전부 수행되거나 아니면 전부 수행되지 않아야 한다.
    - 어중간한 일이 없어야 한다. all of nothing
    - TCL : COMMIT, ROLLBACK은 트랜잭션 제어 명령어
    - SAVE : SAVEPOINT를 이용해 트랜잭션이 길어질 경우 중간에 값을 저장하는 역할

- 일관성(Consistency) : 트랜잭션을 수행하기 전, 수행한 후 데이터베이스는 항상 일관된 상태를 유지해야 한다.
    - 예 판매자 계좌 10만원 구매자 계좌 10만원 인 경우 계좌이체 시 트랜잭션이 실행 중일 때, 판매자계좌 + 구매자계좌 = (20만원x 19만원o)으로 나오게 된다. (일관성 없는 상태)

- 독립성(Isolation) : 수행 중인 트랜잭션에 다른 트랜잭션이 끼어들어 변경 중인 데이터 값을 훼손하는 일이 없어야 한다.
    - 트랜잭션이 동시에 수행 될 때, 상호 간섭, 데이터 충돌이 일어나지 않는 현상을 독립성이라고 한다.
    - 독립성을 유지하기 위해 변경 중인 임시 데이터를 다른 트랜잭션이 읽거나 쓰려고 할 때 제어하는 작업이 필요 (동시성 제어)
    
- 지속성(Durability) : 수행을 성공적으로 완료한 후에도 트랜잭션은 영구히 저장되어야 한다. 저장된 DB는 저장 직후 어느 때나 발생할 수 있는 장애 오류에 영향을 받지 않아야 한다.
    - 부분완료 : 트랜잭션이 완료 되었지만, 변경 된 내용이 DB에 기록되었는지 확실하지 않는 상태이다. 이 상태에서 DBMMS가 최종적으로 변경 내용을 DB에 commit 해야 완료 상태가 된다. DBMS가 변경 내용을 DB에 기록하지 못하면 실패 tkdxork ehlsek.
    - 실패 : 트랜잭션을 중간에 중단하였거나 부분완료 상태에서 변경 내용을 데이터베이스에 저장하지 못한 상태를 말한다. 실패 상태에서 DBMS는 트랜잭션이 수행한 작업을 모두 원상복구 시킨다.

```sql
BEGIN
    UPDATE accounts
    SET balance = balance - 10000
    WHERE user = '구매자';

    UPDATE accounts
    SET balance = balance + 10000
    WHERE user = '판매자';
END
```

## 예상되는 오류
- 구매자의 계좌 돈 출근 된 뒤 DB 다운
- 구매자의 계좌에서 돈 출금하지 않았는데, 판매자에게 돈이 입금된다.
- 출금도 입금도 되지 않는다.

중간에 오류가 발생되는 것 때문에 모두 수행되거나 모두 수행되지 않아야 한다.

```sql
START TRANSACTION
/* 판매자 계좌 읽어오기 */ - 1
/* 구매자 계좌 읽어오기 */ - 2
/* 잔고 확인 */

/* 구매자 인출 */ - 3
UPDATE accounts
SET balance = balance - 10000
WHERE user = '구매자';

/* 판매자 입금 */ - 4
UPDATE accounts
SET balance = balance + 10000
WHERE user = '판매자';

COMMIT /* 부분완료 */
/* 구매자 계좌 기록 */ -5
/* 판매자 계좌 기록 */ -6
```

## 트랜잭션이 동시에 발생하게 되면?
lock 이라는 것을 이용하여 트랜잭션이 다루는 데이터를 다른 트랜잭션이 접근하지 못하도록 막아 대기 상태로 만든다.