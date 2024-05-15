# Cotra

해당 프로젝트는 코인게코 API를 활용하여 간단하게 만든 거래소 프로젝트입니다. 

## 시작하기

node 버전은 16이상으로 권장드립니다.

```bash
# node 버전 변경
sudo n 20
# 또는
nvm install 20
```

해당 프로젝트는 yarn을 사용하고 있습니다. 아래 명령어로 실행해야합니다.

```bash
yarn install
yarn start
```

### 주의 사항

**.env.local 파일은 지우시면 안됩니다.** 실제 운영할 때는 배포시에 환경변수 값을 주입하겠지만, 해당 프로젝트는 테스트용으로 만든 프로젝트로 .env.local 파일을 만들어두었습니다.
만약 파일을 지우신 경우 아래 내용을 추가해주세요.

```text
REACT_APP_COINGECKO_HOST_URL=https://api.coingecko.com
```

만약, API 호출 제한으로 데이터를 못가지고 오는 경우, 위 `REACT_APP_COINGECKO_HOST_URL` 환경변수를 지우시면 public 하위 디렉토리의 데이터 파일을 불러오게됩니다. 단, 쿼리 파라미터 값이 먹히지 않기 때문에 제대로 동작하지 않습니다.

## 빌드

```bash
yarn install --production
yarn build
```

## 사용한 라이브러리 설명

- prettier
  - 코드를 보기좋게 정렬해줘서 가독성이 높아집니다.
  - 협업시 코드 컨벤션을 지킬 수 있습니다.
- [tailwindcss](https://tailwindcss.com/)
  - 스타일을 적용하기 위해 적용했습니다.
  - 사용하는 className만 빌드되기도하고, 무엇보다 생산성이 좋아서 선택했습니다.
- [craro](https://craco.js.org/docs/getting-started/)
  - alias path를 사용하기 위해, webpack 설정이 필요하여 craco를 추가했습니다.
  - eject를 해서 webpack 설정을 해도 되지만, 추후 업그레이드할때 문제가 될 수 있기 때문에 eject는 절대 하지않고, craco로 설정 값을 override 하는 편입니다.
- [pretendard](https://github.com/orioncactus/pretendard)
  - 프로젝트를 진행할때 자주 사용하는 폰트입니다.
  - 특별히 사용한 이유는 없고, 개인적인 취향에 따라 선택한 폰트입니다. 
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
  - API 서버로 부터 받은 응답값을 캐싱하여 불필요한 또는 잦은 호출을 피하기 위해 사용하였습니다.
- @tanstack/eslint-plugin-query
  - React Query eslint로 사전에 오류를 잡고, 안정적인 서비스 개발을 위해 사용하였습니다.
- [axios](https://axios-http.com/kr/docs/intro)
  - 기본 built-in 함수인 fetch를 사용해도 되지만, 서버와의 통신을 편리하게 사용하기 위해 사용하였습니다.
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
  - 전역 상태로 북마크를 관리하기 위해 추가하였습니다. 
- [lodash](https://lodash.com/)
  - 다양한 util 함수를 사용하기위해 추가하였습니다.
- @types/lodash
  - lodash 타입이 정의된 라이브러리입니다.
- [react-hook-form](https://react-hook-form.com/get-started)
  - form control을 편하게 하기 위해 추가하였습니다.
- [zod](https://zod.dev/)
  - form 입력에 대해 유효성 검사를 편하게 하기 위해 사용하였습니다.
- @babel/plugin-proposal-private-property-in-object
  - 일부 의존성 라이브러리에서 babel-preset-react-app이 추가되었으나, babel-preset-react-app에서 명시적으로 @babel/plugin-proposal-private-property-in-object를 추가되어 있지 않아 발생하는 경고 문구를 없애기 위해 devDependencies에 추가했습니다. 경고성 문구라서 앱을 실행할때 문제는 발생하지 않지만, 향후 위험 할 수 있으므로 추가했습니다.
