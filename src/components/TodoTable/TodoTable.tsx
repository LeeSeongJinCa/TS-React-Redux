import React, { useMemo } from 'react';
import * as S from './style';
import { TodoTableRow } from '../../components';

interface Props {

}

const TodoTable: React.FC<Props> = ({ children }) => {
  const input = [
    {
      type: 'text',
      placeholder: 'Thing',
    }, {
      type: 'text',
      placeholder: 'Place',
    }, {
      type: 'text',
      placeholder: 'Time',
    }, {
      type: 'text',
      placeholder: 'Notification',
    },
  ];

  const tableRows: React.ReactElement[] = useMemo(() => {
    return input.map((row, i) =>
      <TodoTableRow
        key={i}
        type={row.type}
        placeholder={row.placeholder}
      />,
    );
  }, []);

  return (
    <S.TodoInputTable>
      {children}
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
