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
const RattleOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <circle cx={29.464} cy={16.989} r={11} fill="null" transform="rotate(40 29.464 16.989)" />
        <path d="M38.533 23.293s-5.635.493-10.998-4.006c-5.362-4.5-5.855-10.135-5.855-10.135m5.186 18.711c-3.46 1.013-5.067 2.928-6.674 4.843-1.607 1.915-1.682 5.116-3.61 7.414-1.929 2.298-4.747 2.544-7.045.616s-2.544-4.746-.616-7.044c1.928-2.298 5.067-2.928 6.674-4.843 1.607-1.915 3.214-3.83 3.61-7.414M38.833 10.49a3 3 0 0 0-4.597-3.856" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

RattleOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RattleOneIcon = withWrapper(RattleOneIconComponent);
export default RattleOneIcon;
