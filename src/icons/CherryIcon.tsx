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
const CherryIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle
        cx={14}
        cy={34}
        r={8}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <circle
        cx={35}
        cy={37}
        r={7}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M37 10c-2.651.812-8.372 3.014-11.72 6.26C20.255 21.13 19 24.5 18 27m19-17c-1.117 1.318-3.285 4.596-3.956 8.39C32.037 24.078 33 27.5 34 30M30 4l14 12"
      />
    </svg>
  );
};

CherryIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CherryIcon = withWrapper(CherryIconComponent);
export default CherryIcon;
