/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const MoneyCnyBoxLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm9 8h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 7.879 9.88 6.464 12 8.586l2.121-2.122 1.415 1.415L13.414 10H16v2h-3v1z" />
    </svg>
  );
};

MoneyCnyBoxLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MoneyCnyBoxLineIcon = withWrapper(MoneyCnyBoxLineIconComponent);
export default MoneyCnyBoxLineIcon;
