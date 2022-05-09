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
const Projector2FillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.81a6.481 6.481 0 0 1 4.69-2 6.48 6.48 0 0 1 4.69 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm-5.5-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM4 13v2h2v-2H4zm4 0v2h2v-2H8z" />
    </svg>
  );
};

Projector2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Projector2FillIcon = withWrapper(Projector2FillIconComponent);
export default Projector2FillIcon;
