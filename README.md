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

```
expect(screen.getByDisplayValue('test')).toHaveAttribute('id', 'the-id');
expect(screen.getByDisplayValue('test').id).toBe('the-id');

expect(screen.getByRole('input', { name: 'the-inputs-id' })).toHaveValue('test');
expect(screen.getByRole('input', { name: 'the-inputs-id' }).value).toBe('test');
```
- 다양한 방법으로 테스트 가능.
- aria-label 이라는 HTML속성을 사용해서 input에 label을 붙여서 test 할 때 식별자로 사용 가능.(공식 문서에서 나와있는 방법)


## 진행상황

- [12.10] : checkbox TDD 시도중. getByText 로 checkbox 를 찾을 수 없음. checkbox.group 때문인듯. 수정 필요.
- [12.11] : checkbox.group 문제가 아니였음. input은 당연히 text값이 없기 때문에 element자체를 찾을 수 없는 것 이였다. 공식문서에서 사용하는 방법인 aria-label을 이용해서 테스트를 진행해보았다.
- [12.12] : BasicInputWithName 컴포넌트를 제작. 기본 title과 input이 있는 기본적인 컴포넌트를 원했는데, antdesign의 grid 부분에서 생각처럼 되지 않아서 시간을 낭비함. &rarr 결국은 reactstrap 을 사용해서 해결. Row, Col을 사용. 커뮤니티도 reactstrap이 훨씬 크기 때문에 조율해가면서 사용하면 될 듯.
    - reactstrap도 동작하지 않아서 원인을 찾아보니 bootstrap을 설치하지 않아서 나는 오류였다.(index.js에 bootstrap.min.css도 import 해주어야함.) 다음부터 같은 실수는 하지 않기를!
## 참고 링크
- [React Testing Library로 TDD개발환경 구축하기](https://benjaminwoojang.medium.com/react-testing-library%EB%A1%9C-tdd%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-26e55fe33e01)
- [React Test Library - Input event](https://testing-library.com/docs/example-input-event/)
