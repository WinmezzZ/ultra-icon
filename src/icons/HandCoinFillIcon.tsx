/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HandCoinFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9.33 11.5h2.17A4.5 4.5 0 0 1 16 16H8.999L9 17h8v-1a5.578 5.578 0 0 0-.886-3H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625v-9.304A6.967 6.967 0 0 1 9.33 11.5zM5 19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9zM18 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-7-3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  );
};

HandCoinFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandCoinFillIcon = withWrapper(HandCoinFillIconComponent);
export default HandCoinFillIcon;
