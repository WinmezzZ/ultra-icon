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
const InternalDataIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 18V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v9m-10 6v7m-8-16v16m-8-12v12M6 30v9a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9"
      />
    </svg>
  );
};

InternalDataIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InternalDataIcon = withWrapper(InternalDataIconComponent);
export default InternalDataIcon;
