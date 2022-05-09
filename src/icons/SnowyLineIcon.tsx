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
const SnowyLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m13 16.268 1.964-1.134 1 1.732L14 18l1.964 1.134-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134-1-1.732L10 18l-1.964-1.134 1-1.732L11 16.268V14h2v2.268zM17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001z" />
    </svg>
  );
};

SnowyLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SnowyLineIcon = withWrapper(SnowyLineIconComponent);
export default SnowyLineIcon;
