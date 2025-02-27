import React from 'react'

function Deploy() {
  return (
    <dl>
      <dt>Deploy(github/vercel)</dt>
      <dd>1. https://git-scm.com(git 다운로드 및 설치)</dd>
      <dd>2. 계정등록<br/>
        ㄴ git config  --global user.name "홍길동"<br/>
        ㄴ git config  --global user.email "supt@web.com"
      </dd>
      <dd>3. github에 프로젝트 업로드 <br/>
        ㄴ git init <br/>
        ㄴ git add . <br/>
        ㄴ git commit -m '메세지..' <br/>
        ㄴ git branch -M main <br/>
        ㄴ git remote add origin '레파지토리 URL' <br/>
        ㄴ git push -u origin main
      </dd>
      <dd>4. vercel.com (프로젝트 배포)</dd>
    </dl>
  )
}

export default Deploy