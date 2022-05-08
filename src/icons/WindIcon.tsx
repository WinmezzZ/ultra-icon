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
const WindIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 17h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2m10 8h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m5-34h-3a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h3m-3 0h16M12 25h30m-20 8h12"
      />
    </svg>
  );
};

WindIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WindIcon = withWrapper(WindIconComponent);
export default WindIcon;
