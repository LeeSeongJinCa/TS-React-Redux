import * as React from 'react';
import * as S from './style';
import { Preview } from '../';
import pencilSvg from '../../assets/icon/pencil.svg';
import plusSvg from '../../assets/icon/plus.svg';

interface Props { }

const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <S.MainHeader>
        <Preview />
      </S.MainHeader>
      <section id="inbox">
        <h3>목록</h3>
        <ul>

          <li>
            <div className="img-wrap">
              <img src={pencilSvg} alt="pencil" title="pencil" />
            </div>
            <div className="info">
              <h3>Final design</h3>
              <p>Inuse Exprience</p>
            </div>
            <div className="until"><span>9am</span></div>
          </li>

        </ul>
        <div id="bottom-wrap">
          <div id="completed-wrap">
            <span>COMPLETED</span><span id="completed-num">5</span>
          </div>
          <img id="plus" src={plusSvg} alt="plus" title="plus" />
        </div>
      </section>
    </S.Main>
  );
};

export default Main;
