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
const MoreFourIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m17 11 7.071-7.071L31.142 11l-7.071 7.071zm13 13 7.071-7.071L44.142 24l-7.07 7.071zM4 24l7.071-7.071L18.142 24l-7.07 7.071zm13 13 7.071-7.071L31.142 37l-7.07 7.071z"
      />
    </svg>
  );
};

MoreFourIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MoreFourIcon = withWrapper(MoreFourIconComponent);
export default MoreFourIcon;
