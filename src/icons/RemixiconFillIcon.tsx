/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RemixiconFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M16.53 17.53 20 21H3V4h10.667v.008A7.118 7.118 0 0 1 14.136 4c-.089.37-.136.76-.136 1.166C14 7.485 16.015 9.5 18.667 9.5a4.18 4.18 0 0 0 2.032-.538 7.003 7.003 0 0 1-4.17 8.567zM18.5 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
};

RemixiconFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RemixiconFillIcon = withWrapper(RemixiconFillIconComponent);
export default RemixiconFillIcon;
