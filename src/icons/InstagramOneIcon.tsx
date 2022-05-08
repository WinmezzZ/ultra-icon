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
const InstagramOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={9} cy={8} r={4} fill="null" stroke="#000" strokeWidth={4} />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 18h8v25H5zm16 9.5V43h7V29c0-2.5 1.5-4.5 4-4.5s4 2.5 4 4.5v14h7V27.5c0-3-3.5-9.5-11-9.5s-11 6.5-11 9.5Z"
      />
    </svg>
  );
};

InstagramOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InstagramOneIcon = withWrapper(InstagramOneIconComponent);
export default InstagramOneIcon;
