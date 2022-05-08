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
const HandheldIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M42 18v26H6V18h0" />
        <path fill="null" fillRule="nonzero" stroke="#000" strokeWidth={4} d="M6 4h36v14H6z" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M16 27v8m-4-4h8" />
        <circle cx={32} cy={31} r={4} fill="null" fillRule="nonzero" stroke="#000" strokeWidth={4} />
      </g>
    </svg>
  );
};

HandheldIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandheldIcon = withWrapper(HandheldIconComponent);
export default HandheldIcon;
