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
const HoldSeedsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20 33 6 2s15-3 17-3 2 2 0 4-9 8-15 8-10-3-14-3H4"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 29c2-2 6-5 10-5s13.5 4 15 6-3 5-3 5"
      />
      <circle cx={34} cy={22} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={22} cy={15} r={3} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={34} cy={7} r={3} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

HoldSeedsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HoldSeedsIcon = withWrapper(HoldSeedsIconComponent);
export default HoldSeedsIcon;
