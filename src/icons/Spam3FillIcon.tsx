/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Spam3FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M15.936 2.5 21.5 8.067v7.87L15.936 21.5h-7.87L2.5 15.936v-7.87L8.066 2.5h7.87zM8 11v2h8v-2H8z" />
    </svg>
  );
};

Spam3FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Spam3FillIcon = withWrapper(Spam3FillIconComponent);
export default Spam3FillIcon;
