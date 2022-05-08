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
const UlikecamIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M22 44c9.941 0 18-8.059 18-18S31.941 8 22 8 4 16.059 4 26s8.059 18 18 18Zm19-34a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};

UlikecamIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const UlikecamIcon = withWrapper(UlikecamIconComponent);
export default UlikecamIcon;
