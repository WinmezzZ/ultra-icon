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
const CrownThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M13 42h22l6-21-10 5-7-14-7 14-10-5 6 21Z"
      />
      <circle cx={7} cy={18} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={24} cy={9} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={41} cy={18} r={3} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

CrownThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CrownThreeIcon = withWrapper(CrownThreeIconComponent);
export default CrownThreeIcon;
