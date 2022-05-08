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
const LungIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4.571}
        d="M18.244 22.263c-.292-4.955-1.467-7.521-3.523-7.698-3.32-.284-8.41 5.144-9.92 12.772-1.509 7.628-.764 13.092 1.211 13.46 1.975.37 4.844-1.78 6.205-1.78 1.361 0 6.079 1.041 6.079-.844V30.07m11.328-7.7c.281-5.025 1.458-7.627 3.53-7.805 3.32-.284 8.41 5.144 9.919 12.772 1.509 7.628.764 13.092-1.21 13.46-1.975.37-4.845-1.78-6.206-1.78-1.36 0-6.079 1.041-6.079-.844V30.07"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4.571}
        d="M20.556 5v14.91c-.044 2.292-1.956 3.438-5.737 3.438M27.292 5v14.91c.043 2.292 1.956 3.438 5.736 3.438"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.571}
        d="M15 30.07c3.955 0 6.955-.939 9-2.817 2.06 1.878 5.069 2.817 9.029 2.817"
      />
    </svg>
  );
};

LungIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LungIcon = withWrapper(LungIconComponent);
export default LungIcon;
