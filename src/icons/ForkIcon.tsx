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
const ForkIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" strokeWidth={4} transform="translate(7 4)">
          <circle cx={30} cy={4} r={4} fill="null" fillRule="nonzero" />
          <circle cx={4} cy={4} r={4} fill="null" fillRule="nonzero" />
          <circle cx={17} cy={36} r={4} fill="null" fillRule="nonzero" />
          <path strokeLinecap="round" d="M4 8v3c0 7 13 10 13 17v4-4c0-7 13-10 13-17V8" />
        </g>
      </g>
    </svg>
  );
};

ForkIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ForkIcon = withWrapper(ForkIconComponent);
export default ForkIcon;
