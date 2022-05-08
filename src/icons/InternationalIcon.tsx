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
const InternationalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M6 30.986c2.632 1.055 4.527 1.055 5.684 0 1.736-1.584.238-6.388 2.67-7.713 2.43-1.325 6.135 4.548 9.597 2.616 3.462-1.933-.326-7.087 2.076-9.176 2.403-2.09 5.527.267 6.073-3.227.546-3.493-2.548-1.978-3.142-5.28-.395-2.2-.395-3.357 0-3.47m.063 38.614c-1.874-1.918-2.549-3.7-2.024-5.348.787-2.472 2.086-2.326 2.652-3.854.566-1.528-1.033-3.705 2.515-5.565 2.366-1.24 5.62.196 9.759 4.311"
      />
    </svg>
  );
};

InternationalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InternationalIcon = withWrapper(InternationalIconComponent);
export default InternationalIcon;
