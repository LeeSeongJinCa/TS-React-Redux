import * as React from 'react';
import * as S from './style';
import { PreviewMain } from '../../components';

interface Props { }

const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <header>
        <PreviewMain />
        <aside id="right">
          <div>
            <div id="right-summary">
              <div>
                <h2>24</h2>
                <span>개인</span>
              </div>
              <div>
                <h2>15</h2>
                <span>업무</span>
              </div>
            </div>
            <div id="right-done">
              <svg>
                <circle cx="25" cy="25" r="20" />
                <circle cx="25" cy="25" r="20" />
              </svg>
              <span>65% 완료</span>
            </div>
          </div>
        </aside>
      </header>
      {/* <section>
        <h3>목록</h3>
        <div>
          
        </div>
      </section> */}
    </S.Main>
  )
}

export default Main;
