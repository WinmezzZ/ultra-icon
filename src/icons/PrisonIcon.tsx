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
const PrisonIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4M6 7h14m7 15H6v22h21m-11 0V13m-6 9v-9m3-9v3m14 6v3m8-3v3m8-3v3"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M43 44V16H27v28h16Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M35 34v10" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M31 44h8" />
    </svg>
  );
};

PrisonIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PrisonIcon = withWrapper(PrisonIconComponent);
export default PrisonIcon;
