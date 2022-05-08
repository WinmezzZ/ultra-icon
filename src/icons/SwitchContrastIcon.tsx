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
const SwitchContrastIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 10h10c1.886 0 2.828 0 3.414.586C44 11.172 44 12.114 44 14v20c0 1.886 0 2.828-.586 3.414C42.828 38 41.886 38 40 38H30M18 10H8c-1.886 0-2.828 0-3.414.586C4 11.172 4 12.114 4 14v20c0 1.886 0 2.828.586 3.414C5.172 38 6.114 38 8 38h10m6-32v36"
      />
    </svg>
  );
};

SwitchContrastIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SwitchContrastIcon = withWrapper(SwitchContrastIconComponent);
export default SwitchContrastIcon;
