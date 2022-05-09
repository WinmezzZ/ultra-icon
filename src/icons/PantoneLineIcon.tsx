/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PantoneLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m5.764 8-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244-1.673 4.141L6 17.608v-4.852zm1.698-5.309 4.87 12.054 7.418-2.997-4.87-12.053-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855 1 1 0 0 1 .75 1.855z" />
    </svg>
  );
};

PantoneLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PantoneLineIcon = withWrapper(PantoneLineIconComponent);
export default PantoneLineIcon;
