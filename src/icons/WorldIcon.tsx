/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const WorldIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M4 20.84c3.015-1.423 5.245-1.622 6.69-.595 2.167 1.54 2.438 7.819 7.368 4.819 4.929-3.001-2.111-4.224-.583-8.57 1.528-4.347 6.533-.97 7.03-5.731.332-3.174-3.464-4.389-11.39-3.644"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M36 8c-5.714 4.989-7.71 8.001-5.987 9.037 2.584 1.555 3.68-.634 6.834 0 3.153.634 2.47 4.909.812 4.909-1.659 0-10.249-1.094-9.816 3.919.432 5.013 5.6 5.755 5.6 8.556 0 1.867-1.144 4.725-3.43 8.573M6.105 32.926a89.421 89.421 0 0 1 2.055-.874c3.847-1.554 6.702-1.92 8.564-1.099 3.292 1.453 2.026 4.387 3.058 5.468 1.03 1.081 3.606.767 3.606 2.823 0 1.371-.46 2.92-1.381 4.646"
        />
      </svg>
    </span>
  );
};

WorldIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WorldIcon;
