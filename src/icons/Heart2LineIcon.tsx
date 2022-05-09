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
const Heart2LineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228zM5.172 6.172a4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-5.646-5.64l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069a4 4 0 0 0-5.328.295z" />
    </svg>
  );
};

Heart2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Heart2LineIcon = withWrapper(Heart2LineIconComponent);
export default Heart2LineIcon;
