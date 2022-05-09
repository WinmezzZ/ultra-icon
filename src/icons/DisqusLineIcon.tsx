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
const DisqusLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11.95 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.962 9.962 0 0 1-6.249-2.192l-4.718.59 1.72-4.586A9.944 9.944 0 0 1 1.95 12c0-5.523 4.477-10 10-10zm0 2a8 8 0 0 0-8 8c0 1.178.254 2.318.738 3.362l.176.38-.847 2.26 2.315-.289.338.297A7.96 7.96 0 0 0 11.95 20a8 8 0 0 0 0-16zM8 7h3.79c3.42 0 5.44 1.956 5.54 4.729l.003.215v.027c0 2.814-1.962 4.922-5.337 5.025l-.263.004H8V7h3.79H8zm3.831 2.458h-1.108v5.085h1.108c1.566 0 2.625-.845 2.704-2.345l.005-.183v-.028c0-1.6-1.08-2.53-2.709-2.53z" />
    </svg>
  );
};

DisqusLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DisqusLineIcon = withWrapper(DisqusLineIconComponent);
export default DisqusLineIcon;
