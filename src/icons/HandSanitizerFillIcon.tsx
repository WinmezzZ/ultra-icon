/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const HandSanitizerFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17 2v2l-4-.001V6h3v2c2.21 0 4 1.79 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8c0-2.21 1.79-4 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2H17zm-4 10h-2v2H9v2h1.999L11 18h2l-.001-2H15v-2h-2v-2z" />
    </svg>
  );
};

HandSanitizerFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandSanitizerFillIcon = withWrapper(HandSanitizerFillIconComponent);
export default HandSanitizerFillIcon;
