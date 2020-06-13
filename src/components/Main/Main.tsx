import * as React from 'react';
import * as S from './style';
import { Preview } from '../';

interface Props { }

const Main: React.FC<Props> = () => {
  return (
    <S.Main>
      <S.MainHeader>
        <Preview />
      </S.MainHeader>
      {/* <section>
        <h3>목록</h3>
        <div>
        </div>
      </section> */}
    </S.Main>
  )
}

export default Main;
