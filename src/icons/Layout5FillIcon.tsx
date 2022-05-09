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
const Layout5FillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M7 10v11H3a1 1 0 0 1-1-1V10h5zm15 0v10a1 1 0 0 1-1 1H9V10h13zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1h18z" />
    </svg>
  );
};

Layout5FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Layout5FillIcon = withWrapper(Layout5FillIconComponent);
export default Layout5FillIcon;
