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
const ApplicationTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle cx={34.5} cy={13.5} r={6.5} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={34.5} cy={34.5} r={6.5} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={13.5} cy={13.5} r={6.5} fill="null" stroke="#000" strokeWidth={4} />
      <circle cx={13.5} cy={34.5} r={6.5} fill="null" stroke="#000" strokeWidth={4} />
    </svg>
  );
};

ApplicationTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ApplicationTwoIcon = withWrapper(ApplicationTwoIconComponent);
export default ApplicationTwoIcon;
