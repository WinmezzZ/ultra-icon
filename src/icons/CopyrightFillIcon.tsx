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
const CopyrightFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 5c-2.76 0-5 2.24-5 5a5.002 5.002 0 0 0 9.288 2.572l-1.715-1.028A3 3 0 1 1 12 9c1.093 0 2.05.584 2.574 1.457l1.714-1.03A4.999 4.999 0 0 0 12 7z" />
    </svg>
  );
};

CopyrightFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CopyrightFillIcon = withWrapper(CopyrightFillIconComponent);
export default CopyrightFillIcon;
