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
const ChinesePavilionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15 12h18s3.363 3.011 6 4c1.864.7 5 1 5 1s-1.816.649-3 1c-1.544.458-4 1-4 1H11s-2.456-.542-4-1c-1.184-.351-3-1-3-1s3.136-.3 5-1c2.637-.989 6-4 6-4Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m18 12 6-8 6 8H18Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M11 19v19m26-19v19" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M6 38h36v6H6z" />
    </svg>
  );
};

ChinesePavilionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChinesePavilionIcon = withWrapper(ChinesePavilionIconComponent);
export default ChinesePavilionIcon;
