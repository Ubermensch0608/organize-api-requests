# 프론트엔드에서 API 요청을 관리하는 방법

![프로젝트 화면](public/home-screen.png)

## Contents

1. <a href='#preview'>Preview</a>

2. <a href="#1-axios-소개">Axios 소개</a>

   1. <a href="#11-간단한-기능">간단한 기능</a>
   2. <a href="#12-유용한-기능">유용한 기능</a>

      1. <a href="#121-커스텀-인스턴스-생성">커스텀 인스턴스 생성</a>
      2. <a href="#122-전역으로-기본값-정의">전역으로 기본값 정의</a>
      3. <a href="#123-인터셉터">인터셉터</a>

3. <a href="#2-프론트에서-api요청-관리하기">프론트에서 API요청 관리하기</a>

## Settings

```bash
## install dependencies
   yarn

## start dev server
   yarn dev ## vite let you know dev server URL on terminal

## build and preview
   yarn build
   yarn preview ## vite let you know dev server URL on terminal
```

## Preview

모던 프론트엔드에서는 Ajax 기술을 기반으로 한 동적 API 요청이 너무나 흔한 것이 되었다.
그런 이유로, 서비스가 고도화됨에 따라 사용해야하는 API는 빠르게 늘어난다.
만약 서비스의 많은 API를 체계적으로 관리하지 않는다면 어떤 실제 API를 사용하는지 파악하기 어려울 뿐더러,
API에 변경이 생길 때 수고로운 수정을 해야 할 것이다.
최악은 미쳐 변경을 하지 못한 구현에서 에러가 발생하는 경우다.

떄문에 API 요청은 체계를 잡고 관리할 필요가 있다. 이는 많은 이점을 가져온다.

- API 요청과 관련된 서비스 공통 사항을 적용하기 용이함
- 프론트엔드 개발자가 클라이언트에서 실제 사용하는 API를 파악하기 편함
- 항목별로 나누어 관리하기 용이함
- API 변경 사항 발생 시 빠르고 안전하게 대응할 수 있음

## 1. Axios 소개

### 1.1. 간단한 기능

### 1.2. 유용한 기능

#### 1.2.1 커스텀 인스턴스 생성

#### 1.2.2 전역으로 기본값 정의

#### 1.2.3 인터셉터

## 2. 프론트에서 API요청 관리하기

1. 다수의 domain API 관리하기

- 추상화
