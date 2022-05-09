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
const Dashboard3FillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404a.595.595 0 0 0-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.502 1.502 0 0 0 0 2.122 1.502 1.502 0 0 0 2.122 0c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 0 0-.063-.76zM17.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2.318-3.596A1 1 0 1 0 7.404 8.82a1 1 0 0 0 1.414-1.416zM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

Dashboard3FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Dashboard3FillIcon = withWrapper(Dashboard3FillIconComponent);
export default Dashboard3FillIcon;
