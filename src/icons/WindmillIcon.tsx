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
const WindmillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 23.992-.03-9.996L23.943 4 12 14v10l12-.008Zm.008.008 9.996-.03L44 23.943 34 12H24l.008 12Zm-.008.008.03 9.996.028 9.996L36 34V24l-12 .008ZM23.992 24l-9.996.03L4 24.057 14 36h10l-.008-12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

WindmillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WindmillIcon = withWrapper(WindmillIconComponent);
export default WindmillIcon;
