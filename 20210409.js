* 개발환경 구축

개발환경 구성 시 구현될 시스템 요구사항에 대한 명확한 이해가 필요
도구와 서버의 선정이 이루어져야 하고, 도구들의 사용 편의성과 라이센스 확인
* 개발도구 분류

빌드 도구:
작성한 코드의 빌드 및 배포를 수행하는 도구
각각의 구성요소와 모듈에 대한 의존성 관리를 지원
구현 도구:
개발자의 코드 작성과 디버깅, 수정 등과 같은 작업을 지원하는 도구
프로그램 개발할 때 가장 많이 사용되는 도구
테스트 도구:
코드의 기능검증과 전체의 품질을 높이기 위해 사용되는 도구
코드 테스트/ 테스트 계획/ 수행 및 분석 등의 작업 가능
형상 관리 도구:
개발자들이 작성한 코드와 리소스 등 산출물에 대한 버전 관리를 위한 도구
프로젝트 진행 시 필수로 포함되는 도구

* 서버 하드웨어 개발환경

웹 서버
웹 애플리케이션 서버(WAS)
데이터베이스 서버
파일 서버
* 클라이언트 하드웨어 개발환경

클라이언트 프로그램: 설치- 사용자와 커뮤니티
웹 브라우저
모바일 앱
모바일 웹
* 소프트웨어 개발환경

운영체제 - Windows, Unix, Linux...
미들웨어 - Tomcat, Weblogic, Jeus...
DBMS - Oracle, MySQL...
* JVM(Java Virtural Machine)

시스템 메모리를 관리하면서 자바 기반 애플리케이션을 위해 이식 가능한 실행환경을 제공하는 소프트웨어
* 컨테이너

JSP와 서블릿을 실행시킬 수 있는 스프트웨어
* 형상 관리

스포트웨어 개발을 위한 전체 과정에서 발생하는 모든 항목의 변경 사항을 관리하기 위한 활동
절차 : 형상 식별->형상 통제->형상 감사->형상 기록
* JDK
자바 애플리케이션을 구축하기 위한 핵심 플랫폼
* 브랜치
여러 개발자들이 동시에 다양한 작업을 할 수 있게 만들어 주는 기능
각자 독립적인 작업 영역(저장소) 안에서 마음대로 소스 코드를 변경할 수 있는 기능
* 모듈
크게 독립된 하나의 소프트웨어 또는 하드웨어 단위를 지칭하는 용어
모듈의 독립성을 높이려면: 결합도는 낮게, 응집도는 강하게, 모듈의 크기는 작게
* 모듈화 기법

루틴
메인 루틴
서브 루틴
* 응집도

모듈의 독립성을 나타내는 개념으로 모듈 내부 구성요소 간 연관 정도
정보 은닉 확장 개념-> 하나의 모듈은 하나의 기능을 수행
* 응집도의 유형 (밑으로 갈수록 좋은 품질)

우연적 응집도
논리적 응집도
시간적 응집도
절차적 응집도
통신적 응집도
순차적 응집도
기능적 응집도
-> 응집도가 높을 수록 품질이 좋아진다
* 결합도(Coupling)

외부 모듈과의 연관도, 모듈 간의 상호 의존성
SW 구조에서 모듈 간의 관련성을 측정하는 척도
* 결합도의 유형

내용 결합도
공통 결합도
외부 결합도
제어 결합도
스탬프 결합도
자료 결합도
* MVC(Model, View, Controller) 패턴 역할

모델: APP이 무엇을 하는지 정의, 내부 비즈니스 로직 처리하기 위한 역할
뷰: 화면에 무엇인가를 보여주기 위한 역할
컨트롤러: 모델이 어떻게 처리할지를 알려주는 역할
* DAO(Data Access Object)

특정 타입의 데이터베이스에 추상 인터페이스를 제공하는 객체로 세부내용 노출 없이 데이터를 조작하는 객체
* VO(Value Object)

간단한 엔티티를 의미하는 작은 객체 가변 클래스인 DTO와 달리 고정 클래스를 가지는 객체
* DTO(Data Transfer Object)

프로세스 사이에서 데이터를 전송하는 객체로 데이터 저장, 회수 외에 다른 기능이 없는 객체
* 팬인(Fan-in) & 팬아웃(Fan-Out)

SW 구성요소인 모듈을 계층적으로 분석하기 위해 활용, 시스템 복잡도 측정 가능
팬인: 어떤 모듈을 제어하는 모듈의 수 - 재사용 측면 설계 잘됨/ 단일 장애점 발생 가능/ 관리 비용, 테스트 비용 비쌈.
팬아웃: 어떤 모듈에 의해 제어되는 모듈의 수 - 불필요한 모듈 호출 여부 검토 필요, 단순화 여부 검토 필요
* JUnit

자바 프로그래밍 언어용 단위 테스트 도구
테스트 코드를 쉽게 작성하고 자동화하기 위해 사용
* 루틴(Routine)

소프트웨어에서 특정 동작을 수행하는 일련의 코드로서 기능을 가진 명령어들의 모임
* 통합 개발환경 IDE(Integrated Development Enviroment)

코딩, 디버그, 컴파일, 배포 등 프로그램 개발에 관련된 모든 작업을 하나의 프로그램 안에서
처리하는 환경을 제공하는 소프트웨어
* 화이트박스 테스트

응용 프로그램의 내부 구조와 동작을 검사하는 소프트웨어 테스트 방식
* 어노테이션(Annotation)

자바코드에 주석을 달아 특별한 의미를 부여한 메타데이터의 일종 /보통 앞에@붙여서 사용
* 프론트 엔드와 백엔드
프론트 엔드 - 사용자의 화면에 나타나는 웹 화면 영역으로 웹 페이지를 그리는 기술

JSP, HTML, CSS ...
백 엔드 - 사용자와 만나지 않고 프론트엔드와 연동하여 핵심 로직을 처리하는 영역으로 DB나 인터페이스를 통해 시스템에 접근함
* MyBatis

객체지향 언어인 자바의 관계형 DB프로그래밍을 좀 더 쉽게 할 수 있게 도와주는 개발 프레임워크
* 배치 프로그램

사용자와의 상호작용 없이 일련의 작업들을 작업 단위로 묶어 정기적으로 반복 수행하거나 정해진 규칙에 따라 일괄 처리하는 방법
필수 요소 : 이벤트 배치/ 온디맨드 배치/ 정기 배치
* 배치 스케쥴러 종류

스프링 배치 : 스프링 프레임워크의 DI, AOP, 서비스 추상화 등 스프링 프레임워크의 3대 요소를 모두 사용할 수 있는 대용량 처리를 제공하는 스케쥴러
쿼츠 스케쥴러: 스프링 프레임워크에 플러그인되어 수행하는 작업과 실행 스케쥴을 정의하는 트리거를 분리하여 유연성을 제공하는 오픈 소스 기반 스케쥴러
Cron 표현식

