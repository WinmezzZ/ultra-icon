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
const BaggageDelayIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 26V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h17M16 12v28m12-28v17m0-17V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6"
      />
      <path fill="null" stroke="#000" strokeWidth={4} d="M35 44a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M34 32v4h4" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M13 40v4" />
    </svg>
  );
};

BaggageDelayIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BaggageDelayIcon = withWrapper(BaggageDelayIconComponent);
export default BaggageDelayIcon;
