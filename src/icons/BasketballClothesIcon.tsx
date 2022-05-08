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
const BasketballClothesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 4a6 6 0 0 1-12 0h-3c-1.105 0-2.002.894-2.032 1.998C12.9 8.57 12.683 12.951 12 15c-.761 2.283-3.839 5.146-5.266 6.383-.46.398-.734.97-.734 1.578V42a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V22.961c0-.607-.275-1.18-.734-1.578C39.84 20.146 36.761 17.283 36 15c-.683-2.049-.9-6.43-.968-9.002C35.002 4.894 34.105 4 33 4h-3Z"
      />
      <path stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M27 24h6v12h-6z" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 24h6v12h-6m6-6h-6" />
    </svg>
  );
};

BasketballClothesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BasketballClothesIcon = withWrapper(BasketballClothesIconComponent);
export default BasketballClothesIcon;
