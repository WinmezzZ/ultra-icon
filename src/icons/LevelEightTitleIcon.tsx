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
const LevelEightTitleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 8v32M24 8v32M7 24h16" />
      <path stroke="#000" strokeWidth={4} d="M37 29a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </svg>
  );
};

LevelEightTitleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LevelEightTitleIcon = withWrapper(LevelEightTitleIconComponent);
export default LevelEightTitleIcon;
