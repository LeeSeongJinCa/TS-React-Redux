import * as React from 'react';
import * as S from './style';
import InboxInputList from '../InboxInputList/InboxInputList';
// import plusSvg from '../../assets/icon/plus.svg';

interface Props { }

const Inbox: React.FC<Props> = () => {
  return (
    <S.Inbox>
      <S.InboxTitle>목록</S.InboxTitle>
      <InboxInputList />
      <div id="bottom-wrap">
        <div id="completed-wrap">
          <span>COMPLETED</span><span id="completed-num">5</span>
        </div>
        {/* <img id="plus" src={plusSvg} alt="plus" title="plus" /> */}
      </div>
    </S.Inbox>
  );
};

export default Inbox;
