import React from 'react';
import * as S from './style';
import hamburgerIcon from '../../assets/icon/hamburgerIcon.svg';

interface Props {

}

const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <header>
        <div id="left">
          <div>
            <img src={hamburgerIcon} alt="hamburgerIcon" title="hamburgerIcon" />
          </div>
          <h1>Your Things</h1>
          <span>2020년 6월 12일</span>
        </div>
        <aside id="right">
          <div>
            <div>
              <h2>24</h2>
              <span>개인</span>
            </div>
            <div>
              <h2>15</h2>
              <span>업무</span>
            </div>
            <div>
              <svg>
                <circle>삼각형</circle>
              </svg>
              <span>65% 완료</span>
            </div>
          </div>
        </aside>
      </header>
      <section>
        <h3>목록</h3>
        <div>
          
        </div>
      </section>
    </S.Main>
  )
}

export default Main;