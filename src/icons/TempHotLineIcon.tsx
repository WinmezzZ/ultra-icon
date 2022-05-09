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
const TempHotLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zm1.856.231V5h2v7.126A4.002 4.002 0 0 1 12 20a4 4 0 0 1-1-7.874zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

TempHotLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TempHotLineIcon = withWrapper(TempHotLineIconComponent);
export default TempHotLineIcon;
