# 해결 과정

## 1. records 형식 변경한 newRecords 생성

기존 :["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]
변경 : [
{
time : ,
carNumber : ,
inAndOut : ,
},
.
.
]

## 2. 차량 별 시간 저장을 위한 timeRecords 객체 생성

{
carNumber :
carNumber In : Out하지 않고 23:59을 출차시간으로 계산하기 위함
}

## 3. newRecords 순회하며 시간 계산

### 3-1. carNumber 별로 inAndOut이 'In' 인 경우

timeRecords 객체의 ${carNumber}In 프로퍼티에 입차 시간 입력

### 3-2. carNumber 별로 inAndOut이 'Out' 인 경우

차량의 출차시간(time) - timeRecords의 해당 차량넘버In 시간 계산하여
timeRecords의 해당 차량넘버 프로퍼티에 누적 더해줌.

## 4. timeRecords 객체 순회하며 In이 남은 경우 23:59 출차로 계산하여 차량번호 시간에 누적

timeRecords는 차량번호와 각 차량별 총 주차시간만 남게된다.

## 5. 차량별 요금 계산

## 6. 차량번호 오름차순으로 차량 별 요금을 배열에 담아 최종 return
