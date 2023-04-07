<h1>설치 및 구동</h1>
<p><b>Gatsby CLI 설치 (global)</b></p>
`npm i -g gatsby-cli`

<p><b>Gatsby 프로젝트 첫 시작</b></p>

`gatsby new`

<p><b>Gatsby 개발자모드 구동</b></p>

`npm run develop`
`npm start //둘다 똑같이 구동됨.`

<p><b>Gatsby 빌드</b></p>

`npm run build`

<p><b>Gatsby 빌드된 파일을 기준으로 서버 구동</b></p>

`npm run serve`

<h1>니콜라스의 Gatsby 추천이유</h1>
<p>2017년 기준 정적 웹사이트를 만들어주는 하나의 오픈소스 프레임워크로 시작되었다.<p>
<p>정적인 웹사이트란 사용자 맞춤형 컨텐츠를 제공하는 넷플릭스라던가 SNS인 페이스북, 트위터와 같은 실시간성이 필요한 곳이 아닌 블로그나, 전자상거래 사이트같은 것들을 말한다.</p>
<p>즉, 리액트와 같이 거대한 사이트를 만드는게 아닌 가볍게 HTML, CSS, JS정도로만 돌아가는 제공할 데이터를 담고 로드시키는 정도의 페이지를 만드는데 최적화 되어있다.<p>
<p>개츠비로 만든 대부분의 웹사이트는 빌드, 렌더링될 떄 이미 데이터들이 안에 포함되어 있다.</p>
<p>CMS(컨텐츠 관리체계)는 비개발자인 사람들이 컨텐츠를 계속 올리는 웹사이트 혹은 앱들을 말하는데, Gatsby는 사이트를 빌드하는 시점에 그 컨텐츠를 불러와 웹사이트를 만들어준다.</p>
<p>Gatsby의 동작방식은 react와 비슷한데 html소스코드가 존재하는게 아니라 약간의 js와 기본적인 html구조만 있다. 즉 사용자가 js를 사용안하도록 설정하거나, 인터넷 환경이 좋지 못하다면 페이지가 뜨지 않을 수도 있다.</p>
<p>실제로 Gatsby의 페이지를 열어서 소스코드를 보기하면 정말 몇가지의 div와 id값만 존재하는 걸 볼 수 있다.(react도 마찬가지...)</p>
<p>정리하자면 사용자는 페이지를 접속하면 브라우저는 js를 다운로드하고 실행되면서 페이지를 만들기 시작하고 사용자에게 문서(UI)를 보여주게 된다.</p>

<p>위에서 언급한 react의 단점인 사용자의 안좋은 네트워크 상태, 자바스크립트를 사용하지 않는 환경에 대응하기 위해 Gatsby가 탄생하게 되었다.(Wow..?!)</p>

<p>개발자모드의 Gatsby가 아닌 빌드 후 서버로 구동한 Gatsby를 개발자 모드와 비교해보자!</p>
<p>개발자모드에서는 자바스크립트 사용안하기 모드에서 키게되면 빈 페이지를 보게된다. 보여줄것이 없으므로...</p>
<p>Gatsby를 통해 빌드 후 서버를 구동해보면?! 자바스크립트가 없더라도 페이지가 보여지는것을 볼 수 있다. 이것이 Gatsby의 강점이다!</p>
<p>이렇게 빌드된 사이트의 장점은 html로 react의 소스코드들이 동작되지만 배후에는 여전히 reactjs가 같이 로드된다는것이다.</p>
<p>즉, state를 통해 작성한 button이나 리액트 요소들도 동작을 한다.</p>

<h1>프레임워크 구조 및 사용방법 파악해보기</h1>
<p>pages에 react의 페이지를 작성하고 해당하는 파일명을 /파일명으로 찾아가면 router설정을 하지 않았지만, 페이지 이동이 되는 것을 볼 수 있다.</p>
<p>이 상태에서 pages디렉토리에서 해당 파일을 빼내게 되면 더이상 모르는 페이지라고 404페이지가 뜨는것을 볼 수 있다.</p>
<p>모르는 페이지가 나오면 자동으로 404.tsx파일이 구동되고 해당 페이지를 꾸며서 바꿀 수 있으며, 페이지 이동을 작성하고 싶다면 router가 아닌 pages에 새로운 tsx파일을 작성하여 react파일을 구성하는 방법도 가능하다. 이것이 약간의 Gatsby프레임워크의 약속이다.</p>

<h1>Gatsby에서 레이아웃 구조 만들기</h1>
<p>재사용되는 페이지들을 만들기 위해서 각 페이지별로 복사 붙여넣기를 할 수도 있겠지만, 효율적이지 못한 방법이다.</p>
<p>이럴땐, src에 components라는 디렉토리와 Layout.tsx파일을 만들어주고 layout구조를 작성 후, import하여 사용하면 된다.</p>
<p>또 다른 룰로 Head라는 컴포넌트를 내보내면 웹 사이트 제일 위에 띄운다.</p>
<p>그저 Head라는 컴포넌트를 내보내고 title태그를 작성하면 title이 생기는것을 볼 수 있다.(적용한 페이지에서만 되므로 title을 각각 다르게 하려면 각 컴포넌트마다 Head를 내보내고 title을 작성하면 된다.)</p>

<h1>데이터를 html에 전달해주기</h1>
<p>Gatsby가 하는일은 react로 짠 페이지를 build하는 과정에서 html로 만들어서 JS없이도 페이지를 띄운다는걸 알게 되었따.</p>
<p>그렇다면 페이지에 데이터를 전달해야하는경우 어떻게 해야할까?</p>
<p>그동안 학습하였던 react의 useState를 활용하여 fetch, axios, react-query 등을 통해 api로 데이터를 가져와서 파싱하는 것을 많이 해봤는데, 이런식으로 하게되면 유저는 로딩화면을 볼 수 밖에 없다. html화를 시킬수 없기때문에 페이지에 접근하는 순간 react의 문법이 동작하면서 그때 데이터를 파싱하기 때문! 즉, 유저가 접근히기 전에 html로 다 만들어두고 싶다면 기존의 방식이 아닌 다른 방법을 적용해야 하는데, Gatsby만의 방식으로 GraphQL을 사용하는 방법이 있다.</p>

<h1>GraphQL</h1>
<p>GraphQL에 대하여 알아볼 건데, 해당 언어는 데이터베이스에서 조회할 때 사용하는 언어이다.</p>
<p>GraphQL 튜토리얼 사이트의 간단한 예시를 하나 보겠다.</p>

```GraphQL
query{
    allPlanets{
        totalCount
    }
}


/*
---> result
{
    "data": {
        "allPlanets": {
            "totalCount": 60
        }
    }
}

*/
```

<p>query로 시작하고 어떤 문서에서 어떤것을 가져올 건지 명확하게 요청하면 그것에 대하여 가져와준다.
기존의 api들과 다른점은 명확하게 요청을 해야 그것만 가져와준다는것인데, 이러한 점때문에 한번에 불필요한 데이터까지 api요청 하나로 잔득 가져오는 불상사가 줄어든다.</p>

<h1>Gatsby에서 GraphQL사용하기</h1>
<p>npm start등으로 구동을 하게되면 localhost:8000 외에 graphql로 끝나는 주소를 하나 더 주게 되는데, 접속해보면 gastby로 작성중인 사이트의 정보를 graphql로 조회해볼 수 있는 UI가 나온다.</p>
<p>site속성에는 여러가지 있는데 그 중 siteMetadata는 gatsby-config에 적어준 meta정보를 조회해오는데, 변경된 사항을 조회해보려면 서버를 재시작해야한다.</p>
<p>본격적으로 gatsby에서 graphql을 사용하기 위해 static query라는 것을 사용할 것이다.</p>
<p>graphql를 통해 작성한 소스는 npm build를 하게 되면 그 순간 쿼리들이 동작되고 html로 데이터를 채우게 된다.</p>

<h1>Page Query</h1>
<p>useStaticQuery를 통해 gatsby설정의 값을 쿼리로 가져오고 적용하는 방법을 알아보았는데, 이번엔 gatsby라이브러리를 추가하고 page Query를 사용하여 페이지에 데이터를 처리하는 방법을 알아본다.</p>
<p>참고 url : <a href="https://www.gatsbyjs.com/plugins">https://www.gatsbyjs.com/plugins</a></p>
<p>추가해볼 플러그인은 source-filesystem이다.</p>

`npm install gatsby-source-filesystem`

<p>위 명령어로 설치를 해주고, 끝나면 약간의 설정을 해야하는데, gatsby-config에서 plugin부분에 추가를 해준다. resolve부분에는 사용할 플러그인 이름을, option에는 어떤 부분을 볼건지 경로 설정을 한다.<br/>
src와 같은 위치에 blog-posts라는 디렉토리를 생성하고 해당 디렉토리를 바라보도록 설정한다.
</p>

```gastby-config.ts
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog-posts`,
      },
    },
  ],
```

<p>이후 src와 같은 위치에 만든 blog-posts에 2가지 파일을 만들고 아래와 같은 graphql 쿼리를 날려보면 파일명을 쿼리로 가져오는 것을 볼 수 있다.</p>

```
query MyQuery {
  allFile {
    nodes {
      name
    }
  }
}

{
  "data": {
    "allFile": {
      "nodes": [
        {
          "name": "Hello"
        },
        {
          "name": "ByeBye"
        }
      ]
    }
  },
  "extensions": {}
}
```

<p>설정이 끝나면 실제로 blog.tsx에서 해당 쿼리를 사용해본다. export const query = graphql``;로 쿼리를 작성하고 해당 컴포넌트에서 props로 데이터를 받아오면 마법처럼 데이터를 가져와서 파싱을 할 수 있다.<br/>
import가 자동으로 안되어서 수동으로 입력해주었다.
</p>
```blog.tsx
import React from "react";
import { PageProps, graphql } from "gatsby";
import Layout from "./components/Layout";
import Seo from "./components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogTitlesQuery>) {
console.log(data);
return (
<Layout title={"Blog"}>

<ul>
{data.allFile.nodes.map((file, index) => (
<li key={index}>{file.name}</li>
))}
</ul>
</Layout>
);
}

// gatsby를 사용중이기 때문에 아래와같은 문법이 가능하고 자동으로 감지되어서 동작이 된다.
export const query = graphql`  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }`;
export const Head = () => <Seo title={"Blog"} />;

```

```

<h1>MDX</h1>
<p></p>
