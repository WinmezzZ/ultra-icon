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
const AirpodsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 4a9 9 0 0 0-9 9v31h6V21.488A8.987 8.987 0 0 0 36 22a9 9 0 0 0 8-4.873V8.873A9 9 0 0 0 36 4ZM12 4a9 9 0 0 1 9 9v31h-6V21.488A8.987 8.987 0 0 1 12 22a9 9 0 0 1-8-4.873V8.873A9 9 0 0 1 12 4Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 13h-1m19 0h1" />
    </svg>
  );
};

AirpodsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AirpodsIcon = withWrapper(AirpodsIconComponent);
export default AirpodsIcon;
