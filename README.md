# React에서의 TDD

## 목적
- React.js 와 TDD론을 병합해서 어떤식으로 React에 TDD를 적용시키는지 공부

## 내용
```
"@testing-library/jest-dom": "^4.2.4"
"@testing-library/react": "^9.3.2",
"@testing-library/uset-event": "^7.1.2"
```

- creat react app을 사용해서 앱을 구성하면 따로 해줘야할 패키징은 없다. test를 작성할때 필요한 위의 패키지를 그대로 설치한다.


## 진행상황

- [12.10] : checkbox TDD 시도중. getByText 로 checkbox 를 찾을 수 없음. checkbox.group 때문인듯. 수정 필요.

## 참고 링크
- [React Testing Library로 TDD개발환경 구축하기](https://benjaminwoojang.medium.com/react-testing-library%EB%A1%9C-tdd%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-26e55fe33e01)
