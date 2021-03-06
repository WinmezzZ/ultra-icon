/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const LuggageDepositFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M15 3a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v12h2v2H1v-2h2V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1h6zm-5 5H8v11h2V8zm6 0h-2v11h2V8zm-2-3h-4v1h4V5z" />
    </svg>
  );
};

LuggageDepositFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LuggageDepositFillIcon = withWrapper(LuggageDepositFillIconComponent);
export default LuggageDepositFillIcon;
