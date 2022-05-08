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
const TitleLevelIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 8v32M24 8v32M7 24h16" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M32 24v16m0-8.976C32 28.46 34 26 37 26s5 2.358 5 5.024v8.99"
      />
    </svg>
  );
};

TitleLevelIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TitleLevelIcon = withWrapper(TitleLevelIconComponent);
export default TitleLevelIcon;
