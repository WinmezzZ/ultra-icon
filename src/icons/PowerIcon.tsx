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
const PowerIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14.5 8a19.05 19.05 0 0 0-4.75 3.84C6.794 15.146 5 19.49 5 24.245 5 34.603 13.507 43 24 43s19-8.397 19-18.755c0-4.756-1.794-9.099-4.75-12.405A19.02 19.02 0 0 0 33.5 8M24 4v20"
      />
    </svg>
  );
};

PowerIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PowerIcon = withWrapper(PowerIconComponent);
export default PowerIcon;
