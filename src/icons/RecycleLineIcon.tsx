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
const RecycleLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m19.562 12.097 1.531 2.653a3.5 3.5 0 0 1-3.03 5.25H16v2.5L11 19l5-3.5V18h2.062a1.5 1.5 0 0 0 1.3-2.25l-1.532-2.653 1.732-1zM7.304 9.134l.53 6.08-2.164-1.25-1.031 1.786A1.5 1.5 0 0 0 5.938 18H9v2H5.938a3.5 3.5 0 0 1-3.031-5.25l1.03-1.787-2.164-1.249 5.53-2.58zm6.446-6.165c.532.307.974.749 1.281 1.281l1.03 1.785 2.166-1.25-.53 6.081-5.532-2.58 2.165-1.25-1.031-1.786a1.5 1.5 0 0 0-2.598 0L9.169 7.903l-1.732-1L8.97 4.25a3.5 3.5 0 0 1 4.781-1.281z" />
    </svg>
  );
};

RecycleLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RecycleLineIcon = withWrapper(RecycleLineIconComponent);
export default RecycleLineIcon;
