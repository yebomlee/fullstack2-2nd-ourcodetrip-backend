![ourcodetrip](https://user-images.githubusercontent.com/61101022/139016869-025a4716-8c98-4dac-8be9-512d9d8fd651.png)

# OurCodeTrip ✈
### **진짜 나다운 여행! 지금 당장 떠나보세요!**<br>
**'아워 코드 트립'은 여행 예약을 위한 웹 어플리케이션입니다.**

## :white_check_mark: 프로젝트 개요

[마이리얼트립](https://www.myrealtrip.com/)의 UI와 기능을 학습 용도로 참조하여, **화면 구현 및 기능(API)과 데이터베이스를 직접 기획하고 구현**한 프로젝트입니다.

- **기간 : 2021. 10. 25 ~ 2021. 11. 05**
- [프론트엔드 Github Repository](https://github.com/wecode-bootcamp-korea/fullstack2-2nd-ourcodetrip-frontend)
- [백엔드 Github Repository](https://github.com/wecode-bootcamp-korea/fullstack2-2nd-ourcodetrip-backend)

## :white_check_mark: 사용 기술 및 개발 환경

|       분류        |                사용 언어 혹은 기술                |
| :---------------: | :-----------------------------------------------: |
|       언어        |                  **JavaScript**                   |
|    런타임 환경    |                    **Node.js**                    |
| 웹 앱 프레임워크  |                    **Express**                    |
|   데이터베이스    |                     **MySQL**                     |
|  ORM 프레임워크   |                    **Prisma**                     |
| 테스트 라이브러리 |                **Jest, Supertest**                |
|    버전관리 툴    |                  **Git, Github**                  |
|        IDE        |              **Visual Studio Code**               |
|   커뮤니케이션    |                 **Slack, Notion**                 |
|       그 외       | **ESLint, Prettier, Babel, passport, csv-parser** |

## :white_check_mark: 프로젝트 목표 & 주요 관심사

### :pencil2: 공통사항

- **레이어드 패턴**(현재 프로젝트는 네 개의 영역 - Router, Controller, Service, Model)에 맞게 잘 분리하여 해당 영역에 해당 관심사 코드만이 존재하도록 구성합니다.
- **Rest API** 전략을 따른 올바른 주소 형식과 HTTP Status Code에 맞춰 API를 구성합니다.
- **에러 및 예외 처리**를 공통 에러 핸들링 미들웨어로 처리하합니다. 에러 및 예외 케이스는 nest.js 프레임워크의 문서를 참고하여 작성하였습니다. (https://docs.nestjs.com/exception-filters)
- 가능한 많은 API들의 **유닛 테스트**를 진행하며, TDD 기반의 개발을 학습합니다. (Jest, Supertest 라이브러리 사용)
- 후에 프론트와 백 간 통신 작업이 원활히 될 수 있도록 전달될 JSON 데이터의 형태를 미리 맞추어 Notion을 통해 문서를 작성하고 커뮤니케이션합니다.
- Scrum 방식을 적용하여, 하루 시작 전 stand-up 미팅과 마무리 전 wrap-up 미팅을 이용하여 진행상황을 공유하였습니다.

### :pencil2: 브랜치 관리 및 PR merge

- Git flow 전략을 간소화하여 **main(master) / develop / feature별 구현 branch** 로 나누어 작업하였습니다.
- feature 구현 branch Naming Convention
  `feature/[feature-type]/[feature-name]`
  - type
    - 해당 기능에 대한 분류 (e.g. products, users, ...)
  - feature-name : 해당 기능의 간단한 이름
- 구현해야할 기능을 분리하여 이슈 단위로 분류하여 깃헙 리포지토리에 이슈로 작성하였고, 각 이슈는 해당하는 PR에 연결되며, 각 PR은 feature branch 하나와 연결됩니다.
- 각 PR은 마지막 push 전 squash를 통해 하나의 커밋만이 존재하도록 하고, devleop 브랜치에 머지할 때도 reabase and merge를 통해 커밋 로그와 히스토리를 정리하여 관리합니다.
- PR의 체크 리스트가 완료되고, Peer Review가 approve 됐을 때만 develop 브랜치에 merge 할 수 있습니다.

### ✏️ Database

- DB 모델링은 최대한 **정규화**하여 중복되는 데이터가 없도록 진행하였습니다.
- 구조에 따라 반정규화된 형태가 나은 경우엔 일부 반정규화된 형태로 모델링하였습니다.
- Prisma ORM 프레임워크를 사용하여 ORM을 이용한 데이터베이스 통신을 학습하였습니다.
- csv-parser 라이브러리를 이용하여 dataUploder 유틸을 만들어 많은 양의 데이터를 한번에 input 할 수 있도록 하였습니다.

## ✅ Features

### 카테고리 관련 API

- 아워코드트립에서 제공하는 카테고리 조회 기능 (각 분류별 조회 구현)
  - 서비스 카테고리 (항공권, 숙소, 투어 & 티켓 등)
  - 메인 카테고리
  - 서브 카테고리

### 상품 관련 API

- 투어 상품의 상세 정보를 조회, 전달하는 기능
- 티켓 상품의 상세 정보를 조회, 전달하는 기능

## ✅ DB ERD

<img src="https://user-images.githubusercontent.com/88504900/140657355-f49ad0a3-1e61-46a6-97c2-1ae2edff7895.png" width="100%" alt="OurCodeTrip-erd"></img>

## ✅ Reference
- 이 프로젝트는 [마이리얼트립](https://www.myrealtrip.com/)웹 어플리케이션을 참조하여 학습목적으로 만들었습니다. 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 동영상은 Unsplash에서 공유받은 Free 이미지 및 동영상이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
