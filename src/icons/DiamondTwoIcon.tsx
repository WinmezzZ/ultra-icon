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
const DiamondTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="m8.923 22.788 13.486-17.7a2 2 0 0 1 3.182 0l13.486 17.7a2 2 0 0 1 0 2.424l-13.486 17.7a2 2 0 0 1-3.182 0l-13.486-17.7a2 2 0 0 1 0-2.424Z"
      />
    </svg>
  );
};

DiamondTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DiamondTwoIcon = withWrapper(DiamondTwoIconComponent);
export default DiamondTwoIcon;
