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
const HandbagFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm2 11h-4v2h4v-2zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z" />
    </svg>
  );
};

HandbagFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HandbagFillIcon = withWrapper(HandbagFillIconComponent);
export default HandbagFillIcon;
