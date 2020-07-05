import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import {
  hamburgerMenuSvg,
  movieSvg,
} from '../../assets';

interface Props { }

type MenuType = {
  img: string,
  item: string,
};

const PreviewMain: React.FC<Props> = () => {
  const menus = useMemo<MenuType[]>(() => [
    {
      img: movieSvg,
      item: 'Movie',
    }, {
      img: movieSvg,
      item: 'Goal',
    }, {
      img: movieSvg,
      item: 'Aim',
    },
  ], []);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpend = () => {
    setIsOpen(!isOpen);
  };

  const getMenus = useMemo(
    () => menus.map((m: MenuType) => (<Link to="/movie" key={m.item}>
      <S.PreviewNavMenuItem>
        <S.PreviewNavMenuItemImg src={m.img} alt={m.item} title={m.item} />
        <S.PreviewNavMenuItemText>{m.item}</S.PreviewNavMenuItemText>
      </S.PreviewNavMenuItem>
    </Link>)),
    [],
  );

  return (
    <S.PreviewMain>
      <S.PreviewNav>
        <S.PreviewNavMenu
          src={hamburgerMenuSvg}
          alt="hamburgerIcon"
          title="hamburgerIcon"
          onClick={toggleOpend}
        />
        {isOpen
          && <S.PreviewNavMenuList>{getMenus}</S.PreviewNavMenuList>
        }
      </S.PreviewNav>
      <h1>Your <br /> Things</h1>
      <span>2020년 6월 12일</span>
    </S.PreviewMain>
  );
};

export default PreviewMain;
