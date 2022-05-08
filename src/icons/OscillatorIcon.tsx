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
const OscillatorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7 9v15a6 6 0 0 0 6 6h22a6 6 0 0 0 6-6V9"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7 10a6 6 0 0 1 6-6h22a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H13a6 6 0 0 1-6-6v0Z"
      />
      <circle cx={15} cy={10} r={2} fill="#fff" />
      <circle cx={21} cy={10} r={2} fill="#fff" />
      <circle cx={27} cy={10} r={2} fill="#fff" />
      <circle cx={33} cy={10} r={2} fill="#fff" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 30v14m10-14v14" />
    </svg>
  );
};

OscillatorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OscillatorIcon = withWrapper(OscillatorIconComponent);
export default OscillatorIcon;
