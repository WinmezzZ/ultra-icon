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
const ChairOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29.454 23H18.545C15.819 23 14 21.333 14 18.833V12h4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6h4v6.833c0 2.5-1.818 4.167-4.546 4.167Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20 23-8 21m16-21 8 21m-6-32h8m-20 0h-8m7 19h14m-16 7h18"
      />
    </svg>
  );
};

ChairOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChairOneIcon = withWrapper(ChairOneIconComponent);
export default ChairOneIcon;
