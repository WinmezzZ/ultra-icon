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
const DiamondThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M5.414 22.586 22.586 5.414a2 2 0 0 1 2.828 0l17.172 17.172a2 2 0 0 1 0 2.828L25.414 42.586a2 2 0 0 1-2.828 0L5.414 25.414a2 2 0 0 1 0-2.828Z"
      />
    </svg>
  );
};

DiamondThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DiamondThreeIcon = withWrapper(DiamondThreeIconComponent);
export default DiamondThreeIcon;
