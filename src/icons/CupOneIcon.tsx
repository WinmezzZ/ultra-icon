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
const CupOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M10 17h28c2 0 6 0 6 3s-4 3-6 3v18a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V23c-2 0-6 0-6-3s4-3 6-3Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M41 17c0-5.873-5.541-7.681-13-9V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2c-7.459 1.319-13 3.127-13 9"
      />
    </svg>
  );
};

CupOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CupOneIcon = withWrapper(CupOneIconComponent);
export default CupOneIcon;
