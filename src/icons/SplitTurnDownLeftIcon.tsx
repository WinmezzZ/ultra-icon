/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const SplitTurnDownLeftIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M37 22H21a8 8 0 0 0-8 8v14" />
      <circle cx={37} cy={8.944} r={5} fill="null" stroke="#000" strokeWidth={4} transform="rotate(-90 37 8.944)" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 14v29m5-4-5 5-5-5m-14 0-5 5-5-5"
      />
    </svg>
  );
};

SplitTurnDownLeftIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SplitTurnDownLeftIcon = withWrapper(SplitTurnDownLeftIconComponent);
export default SplitTurnDownLeftIcon;
