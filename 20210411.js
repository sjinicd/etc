* 소프트웨어 테스트의 개념
개발된 응용 애플리케이션이나 시스템이 사용자가 요구하는 기능과 성능, 사용성, 안정성 등을 만족하는지 확인하고, 노출되지 않은 숨어있는 소프트웨어의 결함을 찾아내는 활동

* 소프트웨어 테스트의 필요성

오류 발견 관점/ 오류 예방 관점/ 품질 향상 관점
* 소프트웨어 테스트 프로세스

테스트 계획->테스트 분석 및 디자인 ->테스트 케이스 및 시나리오 작성 ->테스트 수행->
테스트 결과 평가 리포팅
* 소프트웨어 테스트 원리[결완초집 살정오]

테스팅은 결함의 존재함을 밝히는 것- 결함이 존재함을 밝히는 활동

결함이 없다는 것을 증명할 수는 없음

결함을 줄이는 활동

완벽한 테스팅은 불가능 - 완벽하게 테스팅하려는 시도는 불필요한 시간과 자원 낭비
무한경로, 무한 입력 값으로 인한 테스트 어려움

결함 집중 - 적은 수의 모듈에서 대다수의 결함이 발견됨 20%모듈에서 80%의 결함이 발견됨

살충제 패러독스 - 동일한 테스트 케이스에 의한 반복적 테스는 새로운 버그를 찾지못함
테스트케이스의 정기적 리뷰와 개선 및 다른 시각에서의 접근이 필요
오류- 부재의 궤변 - 요구사항을 충족시켜주지 못한다면 결함이 없다고 해도 품질이 높다고 볼 수 없음

테스트 계획서- 테스트의 수행을 계획한 문서

테스트 케이스 - 테스트를 위한 설계 산출물로 응용 sw가 사용자의 요구사항을 준수하는지 확인하기 위해 설계된 입력값, 실행 조건, 기대 결과로 구성된 테스트 항목의 명세서

테스트 결과서 - 테스트 결과를 정리한 문서. 결과 평가하고 리포팅

* 소프트웨어 테스트 - 프로그램 실행 여부에 따른 분류
- 정적 테스트 : 프로그램의 실행 없이 구조를 분석하여 논리성을 검증하는 테스트 ; 유형: 동료검토, 워크스루, 인스펙션
- 동적 테스트 : 프로그램 실행을 요구하는 테스트 ; 화이트박스 테스트, 블랙박스 테스트

* 화이트박스 테스트

프로그램 내부 로직을 보면서 수행하는 테스트
유형: 제오구조 테스트/ 루프테스트
* 블랙박스 테스트

프로그램 외부 사용자의 요구사항 명세를 보면서 수행하는 테스트

유형: [동경결상 유분페]

동등 분할 테스트 : 입력 데이터의 영역을 유사한 도메인 별로 유효 값/ 무효 값을 그룹핑하여 대푯값 테스트 케이스를 설계하여 테스트하는 기법

경계 값 분석 테스트 : 동기분할 후 경계 값 부분에서 오류 발생 확률이 높기에 경계값을 포함하여 테스트 케이스를 설계하여 테스트하는 기법

결정 테이블 테스트 : 요구사항의 논리와 발생조건을 테이블 형태로 나열하여 조건과 행위를 모두 조합하여 테스트하는 기법

상태전이 테스트 : 테스트 대상/ 시스템이나 객체의 상태를 구분하고, 이벤트에 의해 어느 한 상태에서 다른 상태로 전이되는 경우의 수를 수행하는 테스트 기법

유스케이스 테스트 : 시스템이 실제 사용되는 유스케이스로 모델링 되어 있을 때 프로세스 흐름을 기반으로 테스트 케이스를 명세화하여 수행하는 테스트 기법

분류트리 테스트: SW의 일부 또는 전체를 트리 구조로 분석 및 표현하여 테스트 케이스를 설계하여 테스트하는 기법

페어와이즈 테스트 : Test Data 값들 간에 최소한 한 번 씩을 조합하는 방식이며, 이는 커버해야 할 기능적 범위를 모든 조합에 비해 상대적으로 적은 양의 테스트 세트를 구성하기 위한 테스트 기법

* 테스트 목적에 따른 분류

회복 테스트, 안전 테스트, 강도 테스트, 성능 테스트, 구조 테스트, 회귀 테스트, 병행 테스트
* 테스트 종류에 따른 분류

명세 기반 테스트, 구조 기반 테스트, 경험 기반 테스트
* 애플리케이션 성능지표
처리량: 애플리케이션이 주어진 시간에 처리할 수 있는 트랜잭션의 수
응답 시간: 사용자 입력이 끝난 후, 애플리케이션의 응답 출력이 개시될 때 끝까지의 시간
경과 시간: 애플리케이션에 사용자가 요구를 입력한 시점부터 트랜잭션을 처리후 그 결과의 출력이 완료할 때까지 걸리는 시간
자원 사용율: 애플리케이션이 트랜잭션을 처리하는 동안 사용하는 CPU 사용량, 메모리 사용량, 네트워크 사용량

* LDAP(Lightweight Directory Acess Protocol)

TCP/IP 위에서 조직화되고 비슷한 특성을 가진 객체들의 모임인 디렉터리 서비스를 조회하고 수정하는 응용 프로토콜
* TPS(Transaction Per Second)

초당 처리 건수를 의미, 초당 몇 개의 트랜잭션을 처리할 수 있는지 나타내는 서비스 성능 지표
* Ramp-up load

한계점의 측정을 목적으로 낮은 수준의 부하부터 높은 수준의 부하까지 예상 트래픽을 꾸준히 증가시키며 진행하는 부하 테스트
* 클린코드

가독성이 높고 단순 , 의존성 낮은 중복을 최소화하여 깔끔하게 잘 만들어진 코드
유형: 의미 있는 이름/ 간결하고 명확한 주석, 보기 좋은 배치/ 작은 함수 / 읽기 쉬운 제어 흐름/ 오류 처리
* 테스트 시나리오

테스트 수행을 위한 여러 개의 테스트 케이스의 집합으로 테스트 케이스의 동작 순서를 기술한 문서이며 테스트 절차를 명세한 문서