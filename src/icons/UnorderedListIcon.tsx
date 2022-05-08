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
const UnorderedListIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 18v9m3 0H5m6-15H5m0-7s3-3 5 0-5 7-5 7m0 22.5s2-3 5-1 0 4.5 0 4.5 3 2.5 0 4.5-5-1-5-1m5-3.5H8m0-20-3 2m15 4h22M20 38h22M20 10h22"
      />
    </svg>
  );
};

UnorderedListIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UnorderedListIcon = withWrapper(UnorderedListIconComponent);
export default UnorderedListIcon;
