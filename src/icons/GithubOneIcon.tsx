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
const GithubOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M29.344 30.477c2.404-.5 4.585-1.366 6.28-2.638C38.52 25.668 40 22.314 40 19c0-2.325-.881-4.495-2.407-6.333-.85-1.024 1.636-8.667-.573-7.638-2.21 1.03-5.45 3.308-7.147 2.805A20.712 20.712 0 0 0 24 7c-1.8 0-3.532.223-5.147.635C16.505 8.232 14.259 6 12 5.029c-2.26-.97-1.026 6.934-1.697 7.766C8.84 14.605 8 16.729 8 19c0 3.314 1.79 6.668 4.686 8.84 1.93 1.446 4.348 2.368 7.054 2.822m0 0c-1.158 1.275-1.738 2.486-1.738 3.633v8.716m11.342-12.534c1.098 1.44 1.647 2.734 1.647 3.88v8.654M6 31.216c.899.11 1.566.523 2 1.24.652 1.074 3.074 5.062 5.825 5.062h4.177"
      />
    </svg>
  );
};

GithubOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GithubOneIcon = withWrapper(GithubOneIconComponent);
export default GithubOneIcon;
