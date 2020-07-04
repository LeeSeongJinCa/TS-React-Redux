import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import { PreviewAsideSvg } from '../../components';
import { GetIInput } from '../../static/todoForm';
import { StoreState } from '../../modules';

interface Props {
}

interface ICategories {
  capacity: number;
  category: string;
}

const PreviewAside: React.FC<Props> = () => {
  const { inputs } = useSelector((state: StoreState) => state.todo);
  const initCate = [
    { capacity: 0, category: 'sports' },
    { capacity: 0, category: 'music' },
    { capacity: 0, category: 'study' },
    { capacity: 0, category: 'business' },
  ];
  const [categories, setCategories] = useState<ICategories[]>([...initCate]);

  const setCategoriesCapacity = useCallback(
    (inputsCopy: GetIInput[]) => {
      inputsCopy.forEach(({ type }) => {
        const idx = categories.findIndex(
          (c: ICategories) => c.category === type,
        );
        const copy = [...initCate];
        copy[idx].capacity += 1;
        setCategories(copy);
      });
    },
    [categories],
  );

  const getList = useMemo(
    () =>
      categories.map(({ category, capacity }) => (
        <S.MainHeaderPreviewAsideCategory key={category}>
          <h2>{capacity}</h2>
          <span>{category}</span>
        </S.MainHeaderPreviewAsideCategory>
      )),
    [categories],
  );

  const getProgress = useMemo(
    () =>
      categories.map(({ category, capacity }) => (
        <S.MainHeaderPreviewAsideDoneSvgWrap key={category}>
          <PreviewAsideSvg progress={capacity} />
          <S.MainHeaderPreviewAsideDoneSvgPercent>
            {Math.floor((capacity / 123) * 100)}%
          </S.MainHeaderPreviewAsideDoneSvgPercent>
        </S.MainHeaderPreviewAsideDoneSvgWrap>
      )),
    [categories],
  );

  useEffect(() => {
    setCategoriesCapacity(inputs);
  }, [inputs]);

  return (
    <S.MainHeaderPreviewAside>
      <S.MainHeaderPreviewAsideBox>
        <S.MainHeaderPreviewAsideSummary>
          {getList}
        </S.MainHeaderPreviewAsideSummary>
        <S.MainHeaderPreviewAsideDoneWrap>
          {getProgress}
        </S.MainHeaderPreviewAsideDoneWrap>
      </S.MainHeaderPreviewAsideBox>
    </S.MainHeaderPreviewAside>
  );
};

export default PreviewAside;
