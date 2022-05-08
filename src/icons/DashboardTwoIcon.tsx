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
const DashboardTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20a19.937 19.937 0 0 0-5.845-14.13A19.938 19.938 0 0 0 24 4 19.938 19.938 0 0 0 9.845 9.87 19.937 19.937 0 0 0 4 24c0 11.046 8.954 20 20 20ZM4 24h4M9.845 9.87l3.13 3.13M24 4v4m20 16h-4M38.155 9.87 35.025 13M24 20v12"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39.852 36.196C36.197 40.942 30.456 44 24 44s-12.195-3.058-15.852-7.804A31.853 31.853 0 0 1 24 32a31.854 31.854 0 0 1 15.852 4.196Z"
      />
    </svg>
  );
};

DashboardTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DashboardTwoIcon = withWrapper(DashboardTwoIconComponent);
export default DashboardTwoIcon;
