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
const AirplayFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m12.4 13.533 5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H18z" />
    </svg>
  );
};

AirplayFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AirplayFillIcon = withWrapper(AirplayFillIconComponent);
export default AirplayFillIcon;
