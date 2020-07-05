import styled from 'styled-components';

export const PreviewMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PreviewNav = styled.nav`
  position: relative;
`;

export const PreviewNavMenu = styled.img`
  width: 35px;
`;

export const PreviewNavMenuList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  background-color: #000000d9;
  box-shadow: 0 0 3px #707070, inset -1px -1px 10px #8b8b8b;
  font-size: 20px;
  font-weight: bold;
`;

export const PreviewNavMenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;

export const PreviewNavMenuItemImg = styled.img`
  height: 24px;
  margin-right: 12px;
`;

export const PreviewNavMenuItemText = styled.span`
  color: white !important;
`;
