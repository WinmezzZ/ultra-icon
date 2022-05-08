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
const MoreThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21.5 14a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm0 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM24 36.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

MoreThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MoreThreeIcon = withWrapper(MoreThreeIconComponent);
export default MoreThreeIcon;
